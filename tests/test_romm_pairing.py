import pytest


@pytest.fixture
def screen(page, base_url):
    page.goto(f"{base_url}/tests/fixtures/host.html")
    page.wait_for_selector(".screen")
    # The .screen div mounts before the async library fetch resolves; wait for
    # readiness so tests that call _applyState/play directly do not race
    # this._library (which _applyState/play dereference without a _ready guard).
    page.wait_for_function("document.querySelector('cannoli-screen')?._ready === true")
    return page


def _to_romm_settings(page):
    page.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','romm-settings'); el.setAttribute('selection','0'); }",
    )


def test_romm_settings_title(screen):
    _to_romm_settings(screen)
    assert screen.locator(".title").inner_text() == "RomM"


def test_romm_settings_rows_when_host_empty(screen):
    _to_romm_settings(screen)
    labels = screen.locator(".list__label").all_inner_texts()
    assert labels == ["Host", "Allow Self-Signed Cert"]
    values = screen.locator(".list__value").all_inner_texts()
    assert values == ["Not set", "Off"]


def test_romm_settings_hints(screen):
    _to_romm_settings(screen)
    labels = screen.locator(".hint__label").all_inner_texts()
    assert labels == ["BACK", "SELECT"]


def test_a_on_host_opens_keyboard(screen):
    _to_romm_settings(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")  # Host row (selection 0)
    assert screen.get_attribute("cannoli-screen", "view") == "keyboard"


def test_host_entry_sets_value_and_reveals_pair_rows(screen):
    _to_romm_settings(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._kbdText = 'romm.local'; el._press('start'); }"
    )
    assert screen.get_attribute("cannoli-screen", "view") == "romm-settings"
    labels = screen.locator(".list__label").all_inner_texts()
    assert labels == ["Host", "Allow Self-Signed Cert", "Pair with Another Device", "Pair with Code"]
    assert screen.locator(".list__value").all_inner_texts()[0] == "romm.local"


def test_pair_connecting_frame(screen):
    screen.eval_on_selector(
        "cannoli-screen", "el => el._applyState({ view: 'romm-pair', phase: 'connecting' })"
    )
    assert screen.locator(".pair__caption").inner_text() == "Connecting to RomM"
    assert screen.locator(".pair__host").inner_text() == "romm.local"


def test_pair_waiting_shows_qr(screen):
    screen.eval_on_selector(
        "cannoli-screen", "el => el._applyState({ view: 'romm-pair', phase: 'waiting' })"
    )
    assert screen.locator(".pair__caption").inner_text() == "Scan to pair this device"
    assert screen.locator(".pair__qr").get_attribute("src").endswith("qr-romm.svg")


def test_pair_hints_back_only(screen):
    screen.eval_on_selector(
        "cannoli-screen", "el => el._applyState({ view: 'romm-pair', phase: 'connecting' })"
    )
    assert screen.locator(".hint__label").all_inner_texts() == ["BACK"]


def test_pair_with_another_device_enters_pairing(screen):
    _to_romm_settings(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._kbdText = 'romm.local'; el._press('start'); }"
    )
    screen.eval_on_selector(
        "cannoli-screen", "el => { el.setAttribute('selection','2'); el._press('a'); }"
    )
    assert screen.get_attribute("cannoli-screen", "view") == "romm-pair"
    assert screen.get_attribute("cannoli-screen", "phase") == "connecting"


def test_set_step_advances_view(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => el.play({ start: { view: 'romm-settings', selection: 0 }, "
        "steps: [ { set: { view: 'romm-pair', phase: 'waiting' }, wait: 20 } ], loop: false })",
    )
    screen.wait_for_timeout(300)
    assert screen.get_attribute("cannoli-screen", "view") == "romm-pair"
    assert screen.get_attribute("cannoli-screen", "phase") == "waiting"


def test_connected_shows_info(screen):
    screen.eval_on_selector("cannoli-screen", "el => el._applyState({ view: 'romm-connected' })")
    assert screen.locator(".conn__title").inner_text() == "RomM Connection Info"
    assert screen.locator(".conn__label").all_inner_texts() == ["HOST", "ACCOUNT", "SERVER"]
    assert screen.locator(".conn__value").all_inner_texts() == ["romm.local", "nonna", "5.0"]


def test_connected_hints(screen):
    screen.eval_on_selector("cannoli-screen", "el => el._applyState({ view: 'romm-connected' })")
    assert screen.locator(".hint__label").all_inner_texts() == ["BACK", "DISCONNECT"]


def test_symbols_layer_has_dot(screen):
    # The "." key lives only on the symbols layer, reached via the toggle key.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el._openRommHostKeyboard(); el._kbdSymbols = true; el._render(); }",
    )
    assert "." in screen.locator(".kbd__key").all_inner_texts()


def test_typing_host_types_the_dot(screen):
    # Typing "romm.local" must land the dot in the field; the expansion toggles
    # to the symbols layer for "." and back to alpha, like the launcher.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => el.play({ start: { view: 'romm-settings', selection: 0 }, loop: false, "
        "steps: [ { press: 'a', wait: 5 }, { typeText: 'romm.local', perChar: 5, perMove: 3 } ] })",
    )
    screen.wait_for_function(
        "() => document.querySelector('cannoli-screen')._kbdText === 'romm.local'",
        timeout=8000,
    )
    assert "romm.local" in screen.locator(".kbd__text").inner_text()


def test_caps_layer_shows_uppercase_and_active_shift(screen):
    # Toggling caps switches to the shifted layer (uppercase) and marks the SHIFT
    # key active (half-highlight), like KeyboardOverlay's isShiftActive.
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._openKeyboard(); el._kbdCaps = true; el._render(); }"
    )
    keys = screen.locator(".kbd__key").all_inner_texts()
    assert "Q" in keys and "A" in keys  # shifted layer is uppercase
    assert screen.locator(".kbd__key--active").count() == 1  # SHIFT held


def test_typing_capitals_uses_shift(screen):
    # "ROM Hacks" must type with correct casing; the expansion toggles caps on for
    # the capitals (SHIFT) and back off for the lowercase tail, like the launcher.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => el.play({ start: { view: 'collection-toggle', selection: 0 }, loop: false, "
        "steps: [ { press: 'y', wait: 5 }, { typeText: 'ROM Hacks', perChar: 4, perMove: 3 } ] })",
    )
    screen.wait_for_function(
        "() => document.querySelector('cannoli-screen')._kbdText === 'ROM Hacks'",
        timeout=9000,
    )
    assert "ROM Hacks" in screen.locator(".kbd__text").inner_text()
