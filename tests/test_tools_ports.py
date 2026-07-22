import pytest


@pytest.fixture
def screen(page, base_url):
    page.goto(f"{base_url}/tests/fixtures/host.html")
    page.wait_for_selector(".screen")
    # Wait for readiness so direct _applyState/play calls don't race the library fetch.
    page.wait_for_function("document.querySelector('cannoli-screen')?._ready === true")
    return page


# Swap in a library with installed apps and a known platform set, then reset demo
# state so it takes effect. `tools` pre-assigns apps to the Tools bucket (so its
# main-menu row shows at a predictable index: RP, Fav, NES, SNES, GBA, Tools = 5).
_SETUP = """
el => {
  el._library = Object.assign({}, el._library, {
    platforms: [
      { id: 'nes', name: 'NES', games: [] },
      { id: 'snes', name: 'Super Nintendo', games: [] },
      { id: 'gba', name: 'Game Boy Advance', games: [] },
    ],
    collections: [],
    apps: { installed: ['RetroArch', 'Dolphin', 'Moonlight'], tools: %s },
  });
  el._resetDemoState();
}
"""


def _setup(page, tools="[]"):
    page.eval_on_selector("cannoli-screen", _SETUP % tools)


def _to_app_picker(page, category="tools"):
    _setup(page)
    page.eval_on_selector(
        "cannoli-screen",
        f"el => el._applyState({{ view: 'app-picker', list: '{category}', selection: 0 }})",
    )


def test_app_picker_title_tools(screen):
    _to_app_picker(screen, "tools")
    assert screen.locator(".title").inner_text() == "Manage Tools"


def test_app_picker_title_ports(screen):
    _to_app_picker(screen, "ports")
    assert screen.locator(".title").inner_text() == "Manage Ports"


def test_app_picker_lists_installed_apps_unchecked(screen):
    _to_app_picker(screen)
    assert screen.locator(".list__item").count() == 3
    assert screen.locator(".list__check").all_inner_texts() == ["☐", "☐", "☐"]


def test_app_picker_hints(screen):
    _to_app_picker(screen)
    assert screen.locator(".hint__label").all_inner_texts() == ["BACK", "TOGGLE"]


def test_toggling_app_checks_it(screen):
    _to_app_picker(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")  # selection 0
    assert screen.locator(".list__check").all_inner_texts()[0] == "☑"


def test_back_commits_and_adds_main_menu_row(screen):
    _to_app_picker(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")  # check RetroArch
    screen.eval_on_selector("cannoli-screen", "el => el._press('b')")  # commit
    assert screen.get_attribute("cannoli-screen", "view") == "system-list"
    assert "Tools" in screen.locator(".list__item").all_inner_texts()


def test_no_row_when_bucket_empty(screen):
    _setup(screen)  # no tools assigned
    screen.eval_on_selector(
        "cannoli-screen", "el => el._applyState({ view: 'system-list', selection: 0 })"
    )
    assert "Tools" not in screen.locator(".list__item").all_inner_texts()


def _to_tools_menu(page):
    _setup(page, tools="['RetroArch','Dolphin']")
    page.eval_on_selector(
        "cannoli-screen", "el => el._applyState({ view: 'system-list', selection: 5 })"
    )
    page.eval_on_selector("cannoli-screen", "el => el._press('start')")  # Tools row


def test_start_on_tools_row_opens_rename_menu(screen):
    _to_tools_menu(screen)
    assert screen.get_attribute("cannoli-screen", "view") == "tools-menu"
    assert screen.locator(".list__item").all_inner_texts() == ["Rename"]
    assert screen.locator(".title").inner_text() == "Tools"


def test_tools_menu_hints(screen):
    _to_tools_menu(screen)
    assert screen.locator(".hint__label").all_inner_texts() == ["BACK", "SELECT"]


def test_rename_opens_keyboard_prefilled(screen):
    _to_tools_menu(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")  # Rename
    assert screen.get_attribute("cannoli-screen", "view") == "keyboard"
    assert screen.eval_on_selector("cannoli-screen", "el => el._kbdText") == "Tools"
    assert screen.locator(".kbd__title").inner_text() == "Rename Folder"


def test_rename_sets_custom_name(screen):
    _to_tools_menu(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")  # Rename -> keyboard
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._kbdText = 'Emulators'; el._press('start'); }"
    )
    assert screen.get_attribute("cannoli-screen", "view") == "system-list"
    labels = screen.locator(".list__item").all_inner_texts()
    assert "Emulators" in labels and "Tools" not in labels


def test_blank_rename_keeps_current_name(screen):
    _to_tools_menu(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._kbdText = ''; el._press('start'); }"
    )
    assert "Tools" in screen.locator(".list__item").all_inner_texts()


def test_rename_tutorial_clears_and_types_new_name(screen):
    # Drives the real rename choreography: open the keyboard pre-filled with
    # "Tools", walk to the backspace key, clear all five chars, then type
    # "Emulators". Verifies the clear+type animation lands the exact name.
    _setup(screen, tools="['RetroArch','Dolphin']")
    screen.eval_on_selector(
        "cannoli-screen",
        """el => el.play({
            start: { view: 'system-list', selection: 5 },
            loop: false,
            steps: [
              { press: 'start', wait: 5 },
              { press: 'a', opensKeyboard: true, wait: 5 },
              { press: 'up', wait: 3 }, { press: 'up', wait: 3 }, { press: 'left', wait: 3 },
              { press: 'a', wait: 3 }, { press: 'a', wait: 3 }, { press: 'a', wait: 3 },
              { press: 'a', wait: 3 }, { press: 'a', wait: 3 },
              { typeText: 'Emulators', perChar: 4, perMove: 3 },
              { press: 'start', wait: 5 },
            ],
        })""",
    )
    screen.wait_for_function(
        "() => document.querySelector('cannoli-screen')._toolsName === 'Emulators'",
        timeout=12000,
    )
    assert "Emulators" in screen.locator(".list__item").all_inner_texts()


def test_manage_apps_tutorial_adds_row(screen):
    # The add-apps choreography: tick two apps in the picker, Back commits, and a
    # Tools row appears on the main menu.
    _setup(screen)
    screen.eval_on_selector(
        "cannoli-screen",
        """el => el.play({
            start: { view: 'app-picker', list: 'tools', selection: 0 },
            loop: false,
            steps: [
              { press: 'a', wait: 5 },
              { press: 'down', wait: 5 },
              { press: 'a', wait: 5 },
              { press: 'b', wait: 5 },
            ],
        })""",
    )
    screen.wait_for_function(
        "() => document.querySelector('cannoli-screen').getAttribute('view') === 'system-list'",
        timeout=8000,
    )
    assert "Tools" in screen.locator(".list__item").all_inner_texts()
