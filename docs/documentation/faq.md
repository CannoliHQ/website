---
hide:
  - toc
---

## FAQ

??? question "Why isn't my platform showing up?"
    By default, Cannoli only shows platforms that have ROMs. If a platform isn't appearing,
    make sure you have at least one ROM in the correct directory for that platform.

    If you'd like to show empty folders, set `Empty Platforms` to `show` under Settings → Content.

    See [Directory Structure](directory-structure.md) for the expected folder layout
    and [Platforms](platforms.md) for everything that is supported.

??? question "How can I reorder platforms?"
    Highlight the platform you want to move and press `Select`.

    `↕` will appear next to the name. Use the `D-Pad` to move it into position. Press `Select` again to lock it in.

??? question "How do I add or remove Favorites?"
    Highlight a game, press `Start` to open the context menu, and toggle **Favorite**.

??? question "How do I make or edit a collection?"
    There are two ways to create a collection:

    - From the **Collections** screen, press `X`.
    - While managing a game's collection membership (highlight a game → `Start` → `Manage Collections`), press `X`.

    Either way, give the collection a name and press `Start` to save it.

    When managing membership, the checkboxes next to each collection show which ones the game currently belongs to. Toggle them to add or remove the game.

    To **rename or delete** an existing collection, highlight it on the Collections screen and press `Start`.

??? question "What's the difference between save states and in-game saves?"
    These are two separate things and they don't mix.

    **In-game saves** are created by the game itself — using a save point, save menu, or battery-backed RAM. They're stored as `.sav` files and work across any device or emulator that supports the game.

    **Save states** are snapshots of the entire emulator at a moment in time, created by pressing `Home` → `Save State`. They're fast and can be made anywhere, but they're emulator-specific and can break if you switch cores.

    If you care about long-term portability, use in-game saves. Use save states for convenience — a quick pause mid-level — not as a replacement for a proper in-game save.

??? question "What is the Accessibility Service for?"
    See [Android TV Accessibility Service](quirks.md#android-tv-accessibility-service) in the Quirks page.