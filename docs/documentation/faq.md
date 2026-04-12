## Why isn't my platform showing up?

By default, Cannoli only shows platforms that have ROMs. If a platform isn't appearing,
make sure you have at least one ROM in the correct directory for that platform.

If you'd like to show empty folders, set `Empty Platforms` to `show` under Settings → Library.

See [Directory Structure](directory-structure.md) for the expected folder layout
and [Platforms](platforms.md) for everything that is supported.

## How can I reorder platforms?

Highlight the platform you want to move and press `Select`.

`↕` will appear next to the name. Use the `D-Pad` to move it into position. Press `Select` again to lock it in.

## How do I add or remove Favorites?

Highlight a game, press `Start` to open the context menu, and toggle **Favorite**.

## How do I make or edit a collection?

There are two ways to create a collection:

- From the **Collections** screen, press `X`.
- While managing a game's collection membership (highlight a game → `Start` → `Manage Collections`), press `X`.

Either way, give the collection a name and press `Start` to save it.

When managing membership, the checkboxes next to each collection show which ones the game currently belongs to. Toggle them to add or remove the game.

To **rename or delete** an existing collection, highlight it on the Collections screen and press `Start`.

## What's the difference between save states and in-game saves?

**In-game saves** are created by the game itself by using the game's built-in save feature. These act functionally identical to how you would save on real hardware. They're commonly stored as `.srm` files and work across any device or emulator that supports the game.

**Save states** are snapshots of the entire emulator at a moment in time, created by opening the IGM and selecting `Save State`. They're fast and can be made anywhere, but they're emulator-specific and can break if you switch cores.

If you care about long-term portability, use in-game saves. Use save states for convenience, not as a replacement for a proper in-game save.
