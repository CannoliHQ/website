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
    Highlight a game and press `Y` to add it. Press `Y` again to remove it.

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
    Google TV and some Android TV devices intercept the `Home` and `Menu` buttons on controllers before apps can see them.

    Cannoli includes an optional accessibility service that works around this. When enabled, it intercepts these buttons
    only while Cannoli is in the foreground and passes them through so they work as expected.

    - `Home` opens the in-game menu while playing.
    - `Menu` acts as `Select` in the launcher UI.

    Long-pressing `Home` on your TV Remote for one second still takes you back to the Android home screen.

    You can enable it under **Settings → Accessibility → Cannoli**.

    You may see this and balk at the permissions and that is totally fair. You can audit the implementation for yourself.

    I figured integrating an accessibility service into Cannoli was better than having you go out and buy a random button remapper.