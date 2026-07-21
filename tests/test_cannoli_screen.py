import pytest


@pytest.fixture
def screen(page, base_url):
    page.goto(f"{base_url}/tests/fixtures/host.html")
    page.wait_for_selector(".screen")
    return page


def test_component_mounts_with_black_canvas(screen):
    canvas = screen.locator(".screen")
    assert canvas.count() == 1
    bg = canvas.evaluate("el => getComputedStyle(el).backgroundColor")
    assert bg == "rgb(0, 0, 0)"


def test_fitter_scales_canvas_to_host_width(screen):
    # Host page has no width constraint; force one and re-measure.
    screen.eval_on_selector(
        "cannoli-screen", "el => { el.style.display='block'; el.style.width='620px'; }"
    )
    screen.wait_for_timeout(100)
    scale = screen.locator(".screen").evaluate(
        "el => new DOMMatrix(getComputedStyle(el).transform).a"
    )
    assert abs(scale - 0.5) < 0.02  # 620 / 1240


def test_status_bar_shows_battery_and_time(screen):
    import re
    assert screen.locator(".statusbar__battery").inner_text() == "97%"
    # The clock is live (defaults to the current HH:MM), so assert the format.
    assert re.match(r"^\d\d:\d\d$", screen.locator(".statusbar__time").inner_text())


def test_status_bar_respects_attribute_overrides(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('battery','42'); el.setAttribute('time','09:05'); }",
    )
    assert screen.locator(".statusbar__battery").inner_text() == "42%"
    assert screen.locator(".statusbar__time").inner_text() == "09:05"


def test_system_list_button_hints(screen):
    labels = screen.locator(".hint__label").all_inner_texts()
    assert labels == ["SETTINGS", "SELECT"]


def test_system_list_items_prepend_specials(screen):
    items = screen.locator(".list__item").all_inner_texts()
    assert items == [
        "Recently Played",
        "Favorites",
        "Game Boy",
        "Game Boy Color",
        "Nintendo Entertainment System",
    ]


def test_content_mode_default_adds_collections_folder(screen):
    # Default (PLATFORMS) mode surfaces a "Collections" folder above the platforms.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','system-list'); el.setAttribute('contentmode','default'); }",
    )
    items = screen.locator(".list__item").all_inner_texts()
    assert items == [
        "Recently Played",
        "Favorites",
        "Collections",
        "Game Boy",
        "Game Boy Color",
        "Nintendo Entertainment System",
    ]


def test_content_mode_collections_only_hoists_collections(screen):
    # Collections Only hoists the collections themselves and drops the platforms.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','system-list'); el.setAttribute('contentmode','collections-only'); }",
    )
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["Recently Played", "Favorites", "RPGs", "Puzzle Games", "Sports"]


def test_content_mode_five_game_handheld_shows_collection_games(screen):
    # Five Game Handheld shows the chosen collection's games (no Tools/Ports here).
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el._library = Object.assign({}, el._library, {"
        " fiveGameHandheld: ['x','y','z'],"
        " games: Object.assign({}, el._library.games, {x:{title:'Game X'}, y:{title:'Game Y'}, z:{title:'Game Z'}}) });"
        " el.setAttribute('view','system-list'); el.setAttribute('contentmode','five-game-handheld'); el._render(); }",
    )
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["Game X", "Game Y", "Game Z"]


def test_content_mode_five_game_handheld_keeps_tools_and_ports(screen):
    # Tools and Ports stay on the main menu even in Five Game Handheld mode.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el._library = Object.assign({}, el._library, {"
        " fiveGameHandheld: ['x'], ports: true, tools: true,"
        " games: Object.assign({}, el._library.games, {x:{title:'Game X'}}) });"
        " el.setAttribute('view','system-list'); el.setAttribute('contentmode','five-game-handheld'); el._render(); }",
    )
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["Game X", "Ports", "Tools"]


def test_selected_item_is_the_pill(screen):
    screen.eval_on_selector("cannoli-screen", "el => el.setAttribute('selection','2')")
    selected = screen.locator(".list__item.is-selected")
    assert selected.count() == 1
    assert selected.inner_text() == "Game Boy"


def _to_favorites(page):
    page.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','game-list'); el.setAttribute('list','favorites'); el.setAttribute('selection','1'); }",
    )


def test_game_list_shows_title_and_titles(screen):
    _to_favorites(screen)
    assert screen.locator(".title").inner_text() == "Favorites"
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["Tetris Rosy Retrospection", "Tecmo Super Bowl 2025", "Balatro"]


def test_game_list_shows_boxart_for_selected(screen):
    _to_favorites(screen)
    src = screen.locator(".boxart img").get_attribute("src")
    assert src.endswith("boxart/tecmo-2025.png")


def test_game_list_boxart_follows_selection(screen):
    _to_favorites(screen)
    screen.eval_on_selector("cannoli-screen", "el => el.setAttribute('selection','2')")
    src = screen.locator(".boxart img").get_attribute("src")
    assert src.endswith("boxart/balatro.png")


def _to_igm(page):
    page.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','igm'); el.setAttribute('game','tecmo-2025'); "
        "el.setAttribute('backdrop','igm-bg/tecmo.jpg'); el.setAttribute('selection','0'); }",
    )


def test_igm_title_is_game_name(screen):
    _to_igm(screen)
    assert screen.locator(".title").inner_text() == "Tecmo Super Bowl 2025"


def test_igm_menu_items(screen):
    _to_igm(screen)
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["Resume", "Save State", "Load State", "Guide", "Settings", "Reset", "Quit"]


def test_igm_has_backdrop(screen):
    _to_igm(screen)
    bg = screen.locator(".backdrop").evaluate("el => el.style.backgroundImage")
    assert "igm-bg/tecmo.jpg" in bg


def test_accent_default_is_white(screen):
    val = screen.locator(".screen").evaluate(
        "el => getComputedStyle(el).getPropertyValue('--cannoli-accent').trim()"
    )
    assert val in ("#fff", "#ffffff", "rgb(255, 255, 255)")


def _to_context(page):
    page.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','context-menu'); el.setAttribute('game','tecmo-2025'); el.setAttribute('selection','0'); }",
    )


def test_context_menu_title_is_game(screen):
    _to_context(screen)
    assert screen.locator(".title").inner_text() == "Tecmo Super Bowl 2025"


def test_context_menu_lists_actions(screen):
    _to_context(screen)
    items = screen.locator(".list__item").all_inner_texts()
    # tecmo-2025 is favorited, so the menu offers to remove it (dynamic action),
    # alongside the standard entries.
    assert "Remove From Favorites" in items
    assert "Manage Collections" in items


def test_context_menu_back_hint_only(screen):
    _to_context(screen)
    labels = screen.locator(".hint__label").all_inner_texts()
    assert labels == ["BACK"]


def test_context_menu_fullmenu_lists_every_action(screen):
    # The `fullmenu` attribute (used by the docs reference screenshot) forces the
    # complete set of context actions, in the launcher's order. "Remove From
    # Recently Played" stays contextual (Recently Played list only), so it is not
    # forced on here.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('fullmenu',''); el.setAttribute('view','context-menu'); "
        "el.setAttribute('game','tecmo-2025'); el.setAttribute('selection','0'); }",
    )
    items = screen.locator(".list__item").all_inner_texts()
    assert items == [
        "Add To Favorites",
        "Manage Collections",
        "Emulator Override",
        "RA Game ID",
        "Preload Achievements",
        "Rename",
        "Delete Art",
        "Delete Game",
    ]


def test_multiselect_shows_checkboxes(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','game-list'); el.setAttribute('list','favorites'); "
        "el.setAttribute('multimode',''); el.setAttribute('multiselect','1'); }",
    )
    checks = screen.locator(".list__check").all_inner_texts()
    assert len(checks) == 3           # one per row
    assert checks[1] == "☑"      # row 1 checked
    assert checks[0] == "☐"      # row 0 unchecked


def test_context_menu_has_no_checkboxes_from_multiselect(screen):
    # A multi-selection keeps the `multimode` attribute set as its context menu
    # opens (Start). The checkbox column belongs to the game list only; it must
    # not bleed onto the context-menu rows.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','game-list'); el.setAttribute('list','favorites'); "
        "el.setAttribute('selection','1'); el.setAttribute('multimode',''); el.setAttribute('multiselect','1'); }",
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('start')")
    assert screen.get_attribute("cannoli-screen", "view") == "context-menu"
    # multimode is still set (we opened the menu over a multi-selection)...
    assert screen.eval_on_selector("cannoli-screen", "el => el.hasAttribute('multimode')") is True
    # ...but no checkbox glyphs are rendered on the context-menu rows.
    assert screen.locator(".list__check").count() == 0


def test_start_opens_context_menu(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','game-list'); el.setAttribute('list','favorites'); el.setAttribute('selection','1'); }",
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('start')")
    assert screen.get_attribute("cannoli-screen", "view") == "context-menu"
    assert screen.locator(".title").inner_text() == "Tecmo Super Bowl 2025"


def test_select_enters_multiselect(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','game-list'); el.setAttribute('list','favorites'); }",
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('select')")
    assert screen.eval_on_selector("cannoli-screen", "el => el.hasAttribute('multimode')") is True


def test_a_toggles_checkbox_in_multiselect(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','game-list'); el.setAttribute('list','favorites'); "
        "el.setAttribute('selection','0'); el.setAttribute('multimode',''); }",
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    checks = screen.locator(".list__check").all_inner_texts()
    assert checks[0] == "\u2611"  # row 0 now ticked


def _to_collections(page):
    page.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','collections'); el.setAttribute('selection','0'); }",
    )


def test_collections_lists_names(screen):
    _to_collections(screen)
    assert screen.locator(".title").inner_text() == "Collections"
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["RPGs", "Puzzle Games", "Sports"]
    labels = screen.locator(".hint__label").all_inner_texts()
    assert labels == ["BACK", "SELECT"]  # create moved to the Manage Collections screen


def test_nested_children_hidden_from_top_level(screen):
    # Mark "Puzzle Games" as a child of "RPGs"; it should vanish from the
    # top-level Collections list and appear only inside its parent.
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el._childOf.set('Puzzle Games', 'RPGs'); "
        "el.setAttribute('view','collections'); el.setAttribute('selection','0'); }",
    )
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["RPGs", "Sports"]


def test_collection_toggle_checkboxes(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','collection-toggle'); el.setAttribute('selection','0'); }",
    )
    checks = screen.locator(".list__check").all_inner_texts()
    assert len(checks) == 3
    assert all(c == "☐" for c in checks)  # all unchecked

    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    checks = screen.locator(".list__check").all_inner_texts()
    assert checks[0] == "☑"  # selected row now ticked
    assert checks[1] == "☐"
    assert checks[2] == "☐"


def test_manage_collections_opens_toggle_and_back_returns(screen):
    _to_favorites(screen)
    screen.eval_on_selector(
        "cannoli-screen",
        "el => el.setAttribute('selection','1')",  # Tecmo Super Bowl 2025
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('start')")
    items = screen.locator(".list__item").all_inner_texts()
    idx = items.index("Manage Collections")
    screen.eval_on_selector(
        "cannoli-screen", f"el => el.setAttribute('selection','{idx}')"
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    assert screen.get_attribute("cannoli-screen", "view") == "collection-toggle"
    assert screen.locator(".title").inner_text() == "Manage Collections"

    # Back walks collection-toggle -> the game's context menu -> the game list.
    screen.eval_on_selector("cannoli-screen", "el => el._press('b')")
    assert screen.get_attribute("cannoli-screen", "view") == "context-menu"
    assert screen.locator(".title").inner_text() == "Tecmo Super Bowl 2025"
    screen.eval_on_selector("cannoli-screen", "el => el._press('b')")
    assert screen.get_attribute("cannoli-screen", "view") == "game-list"
    assert screen.locator(".title").inner_text() == "Favorites"


def test_start_from_collections_opens_menu_then_child_toggle(screen):
    _to_collections(screen)
    # Start opens the collection context menu (titled with the collection name).
    screen.eval_on_selector("cannoli-screen", "el => el._press('start')")
    assert screen.get_attribute("cannoli-screen", "view") == "collection-menu"
    assert screen.locator(".title").inner_text() == "RPGs"
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["Rename", "Child Collections", "Delete"]

    # "Child Collections" (index 1) opens the toggle.
    screen.eval_on_selector(
        "cannoli-screen", "el => { el.setAttribute('selection','1'); el._press('a'); }"
    )
    assert screen.get_attribute("cannoli-screen", "view") == "child-toggle"
    assert screen.locator(".title").inner_text() == "Child Collections"
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["☐Puzzle Games", "☐Sports"]  # excludes the parent, RPGs

    # Back walks child-toggle -> collection-menu -> collections.
    screen.eval_on_selector("cannoli-screen", "el => el._press('b')")
    assert screen.get_attribute("cannoli-screen", "view") == "collection-menu"
    screen.eval_on_selector("cannoli-screen", "el => el._press('b')")
    assert screen.get_attribute("cannoli-screen", "view") == "collections"
    assert screen.locator(".title").inner_text() == "Collections"


def test_child_toggle_checkboxes(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el._contextCollection = 'RPGs'; el.setAttribute('view','child-toggle'); "
        "el.setAttribute('selection','0'); }",
    )
    assert screen.locator(".title").inner_text() == "Child Collections"
    items = screen.locator(".list__item").all_inner_texts()
    assert items == ["☐Puzzle Games", "☐Sports"]  # excludes the parent, RPGs
    checks = screen.locator(".list__check").all_inner_texts()
    assert len(checks) == 2
    assert all(c == "☐" for c in checks)  # all unchecked

    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    checks = screen.locator(".list__check").all_inner_texts()
    assert checks[0] == "☑"  # selected row now ticked
    assert checks[1] == "☐"


def _to_keyboard(page):
    # The keyboard is reached with "Y" (New) on the Manage Collections screen.
    page.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','collection-toggle'); el.setAttribute('selection','0'); el._press('y'); }",
    )


def test_keyboard_renders_grid(screen):
    _to_keyboard(screen)
    assert screen.get_attribute("cannoli-screen", "view") == "keyboard"
    assert screen.locator(".kbd__field").count() == 1
    keys = screen.locator(".kbd__key").all_inner_texts()
    # number row (top row), including the backspace glyph
    for ch in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "←"]:
        assert ch in keys
    # 11 (digits+back) + 10 (qwerty) + 10 (asdf...+enter) + 9 (shift+zxcv...+symbols) + 1 (space)
    assert len(keys) == 41
    labels = screen.locator(".hint__label").all_inner_texts()
    assert labels == ["CANCEL", "CONFIRM"]


def test_keyboard_types(screen):
    _to_keyboard(screen)
    # default focus is row2/col0 ("a"); move right twice to land on "d"
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._press('right'); el._press('right'); }"
    )
    selected = screen.locator(".kbd__key.is-selected")
    assert selected.inner_text() == "d"
    screen.eval_on_selector("cannoli-screen", "el => el._press('a')")
    field_text = screen.locator(".kbd__field").inner_text()
    assert "d" in field_text


def test_y_creates_collection_from_manage_and_returns(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','collection-toggle'); el.setAttribute('selection','0'); }",
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('y')")
    assert screen.get_attribute("cannoli-screen", "view") == "keyboard"
    screen.eval_on_selector(
        "cannoli-screen", "el => { el._kbdText = 'RPGS'; el._press('start'); }"
    )
    # Confirming returns to Manage Collections with the new collection selected.
    assert screen.get_attribute("cannoli-screen", "view") == "collection-toggle"
    items = screen.locator(".list__item").all_inner_texts()
    assert items[-1].endswith("RPGS")  # rows carry a checkbox prefix
    selected = screen.locator(".list__item.is-selected")
    assert selected.inner_text().endswith("RPGS")


def test_typechar_types_on_keyboard(screen):
    _to_keyboard(screen)
    screen.eval_on_selector("cannoli-screen", "el => el._typeChar('R')")
    text = screen.locator(".kbd__text").inner_text()
    assert "R" in text


def test_typetext_expands_to_stepwise_navigation(screen):
    # typeText must expand into single D-pad moves plus a typeChar per character,
    # never teleporting the focus. 'a' is the default focus (row2,col0), so it
    # types with no leading moves; 'b' (row3,col5) needs several single steps.
    steps = screen.eval_on_selector("cannoli-screen", "el => el._expandSteps([{ typeText: 'ab' }])")
    # every navigation step is a single directional move (no jumps)
    presses = [s["press"] for s in steps if "press" in s]
    assert presses and all(p in ("up", "down", "left", "right") for p in presses)
    # one typeChar per character, in order
    typed = [s["typeChar"] for s in steps if "typeChar" in s]
    assert typed == ["a", "b"]
    # 'a' is the starting key: its typeChar comes first, with no moves before it
    assert "typeChar" in steps[0] and steps[0]["typeChar"] == "a"
    # 'b' is reached only after at least one move
    assert "press" in steps[1]


def test_collection_contents_shows_children(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el._childOf.set('JRPGs', 'RPG'); el._childOf.set('CRPGs', 'RPG'); "
        "el.setAttribute('view','collection-contents'); el.setAttribute('list','RPG'); "
        "el.setAttribute('selection','0'); }",
    )
    assert screen.locator(".title").inner_text() == "RPG"
    items = screen.locator(".list__item").all_inner_texts()
    assert items[0].startswith("/JRPGs")
    assert items[1].startswith("/CRPGs")


def test_reorder_shows_arrow_and_moves(screen):
    screen.eval_on_selector(
        "cannoli-screen",
        "el => { el.setAttribute('view','system-list'); el.setAttribute('selection','2'); }",
    )
    screen.eval_on_selector("cannoli-screen", "el => el._press('select')")
    selected = screen.locator(".list__item.is-selected")
    assert selected.inner_text() == "\u2195Game Boy"

    screen.eval_on_selector("cannoli-screen", "el => el._press('down')")
    items = screen.locator(".list__item").all_inner_texts()
    assert items[2] == "Game Boy Color"
    assert items[3] == "\u2195Game Boy"
