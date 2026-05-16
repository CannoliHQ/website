# Playing Games

## Built-In Core Runner

Cannoli ships with a built-in libretro core runner. Press `A` on a game to play it. 

> [!TIP]
> Some platforms are not available in the built-in core runner. See [Platforms](platforms.md) for details.

---

## RetroArch / Standalone Emulators

Cannoli can also launch your games using RetroArch or a standalone emulator.

You can configure which RetroArch core or standalone emulator handles a platform under **Settings → Emulation → Core Mapping**.

The [directory structure](directory-structure.md) for content (ROMs, saves, etc) is the same regardless of whether you use the built-in runner, RetroArch or a standalone emulator.

> [!CAUTION]
> RetroArch support is very much a work in progress. Please see [RetroArch Integration](retroarch.md) for more details.

---

## Resuming a Game

If a save state exists for a game, press `X` to jump back in. Use `A` to start the game without using the last save state.

Resume is only available for games handled by Cannoli's built-in core runner or by RetroArch when [RetroArch DIY Mode](settings.md#advanced) is off. When DIY Mode is enabled, RetroArch games always start fresh.

---

## Opening the In-Game Menu

Press the `Menu` button to open the In-Game Menu (IGM). It gives you access to save states, settings, achievements, and more.

---

## Multiple Controllers

Cannoli supports up to 4 controllers. The built-in controller (on handhelds) is always Player 1. External controllers that connect after the game starts are assigned to Players 2-4 automatically.

When a controller disconnects or reconnects you'll see a notification on screen.

If 2 or more controllers are connected, the IGM **Reassign Players** screen lets you change which controller is which player, including swapping two players.

---

## In-Game Menu (IGM)

### Resume

Closes the menu and returns to gameplay.

### Save State

Saves a snapshot of the game to the selected slot. There's an `AUTO` slot plus 10 slots.

The `AUTO` slot is a dedicated save file, separate from the slots. When you save to it, the previous auto save is placed into the first slot. All existing save states are then pushed back by one slot. This means your slots also double as auto save history.

The slots use the same file format as RetroArch, so save states are compatible between Cannoli and RetroArch.

Use `Left` / `Right` on the `D-Pad` to cycle between slots. Each slot shows a screenshot of what's saved in it.

- `A` saves to the selected slot
- `Y` deletes a slot
- `X` undoes the last save, within a one-minute grace period

> [!WARNING]
> When all 10 slots are full, saving to `AUTO` will cause the oldest slot to be deleted.

### Load State

Loads a previously saved snapshot. Same slot picker as Save State.

- `A` loads the selected slot
- `Y` deletes a slot
- `X` undoes the last load, again within a one-minute grace period

### Achievements

Only appears if you're logged into [RetroAchievements](retroachievements.md) and the game has achievements.

See the [RetroAchievements](retroachievements.md) page for details.

### Guide

The IGM will allow you to view `.pdf`, `.txt`, `.png` and `.jpg / .jpeg` files. This is perfect for guides, manuals, maps and the like.

This menu option will only appear if the game you are playing has at least one guide file.

If you have one file this option will open it directly. If you have multiple files you will see a list. In both cases the IGM will remember the last page and position for each file.

### Settings

Opens the in-game settings with six categories:

- **Video** - Screen scaling, sharpness, shaders, overlays
- **Emulator** - Core-specific options (varies per platform)
- **Buttons** - Remap the current game's controls. Mappings can be saved per platform or per game.
- **Shortcuts** - Assign button combos to the following actions:
    - Open In-Game Menu
    - Save State
    - Load State
    - Reset Game
    - Save and Quit
    - Cycle Scaling
    - Cycle Shader
    - Toggle Fast Forward
    - Hold Fast Forward
    - Open Guide
    - Open In-Game Menu
- **Advanced** - Controller type (core dependent), fast-forward speed, debug HUD
- **Info** - Displays the current core, ROM path, and save path

### Reassign Players

Only appears when 2 or more controllers are connected. Lets you change which controller is which player, including swapping two players' seats.

### Switch Disc

Only appears for multi-disc games. Use `Left` / `Right` to pick the disc, then `A` to confirm.

See [Multi-Disc Games](#multi-disc-games) below for how disc bundling works.

### Reset

Resets the game to its initial state. Return to the IGM and press `X` to undo the reset within the one-minute grace period.

### Quit

Exits the game and returns to the launcher.

If **Always Save On Quit** is enabled in Settings → Emulation, this option is labeled **Save and Quit** and automatically writes a save state before exiting.

---

## Multi-Disc Games

Drop the disc files into the platform's ROM folder. On the next scan, Cannoli moves them into a per-game subfolder, generates an `.m3u`, and shows a single entry in the game list.

The following disc markers are recognized: `(Disc 1)`, `(Disk 1)`, `(CD1)`. Any disc image format works.

When a game prompts you to insert the next disc, open the [In-Game Menu](#opening-the-in-game-menu) and use **Switch Disc**.

Deleting a multi-disc entry removes the entire bundle.
