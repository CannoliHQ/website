# Playing Games

## Built-In Core Runner

Cannoli ships with a built-in libretro core runner. Press `A` on a game to play it. 

> [!TIP]
> Some platforms are not available in the built-in core runner. See [Platforms](platforms.md) for details.

---

## RetroArch / Standalone Emulators

Cannoli can also launch your games using RetroArch or a standalone emulator.

You can configure which RetroArch core or standalone emulator handles a platform under **Settings → Advanced → Core Mapping**.

The [directory structure](directory-structure.md) for content (ROMs, saves, etc) is the same regardless of whether you use the built-in runner, RetroArch or a standalone emulator.

> [!CAUTION]
> RetroArch support is very much a work in progress. Please see [RetroArch Integration](retroarch.md) for more details.

---

## Resuming a Game

If a save state exists for a game, press `X` to jump back in. Use `A` to start the game without using the last save state.

---

## Opening the In-Game Menu

Press the `Menu` button to open the In-Game Menu (IGM). It gives you access to save states, settings, achievements, and more.

---

## Multiple Controllers

Cannoli supports up to 4 controllers. The built-in controller (on handhelds) is always Player 1. External controllers that connect after the game starts are assigned to Players 2-4 automatically.

When a controller disconnects or reconnects you'll see a notification on screen.

If 2 or more controllers are connected, the IGM Controls screen will show a controller picker so you can configure each one individually.

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
- **Controls** - Manage and assign button profiles
- **Shortcuts** - Assign button combos to the following actions:
    - Save State
    - Load State
    - Reset Game
    - Save and Quit
    - Cycle Scaling
    - Cycle Shader
    - Toggle Fast Forward
    - Hold Fast Forward
    - Open Guide
- **Advanced** - Controller type (core dependant), fast-forward speed, debug HUD
- **Info** - Displays the current core, ROM path, and save path

### Switch Disc

Only appears for multi-disc games. Use `Left` / `Right` to pick the disc, then `A` to confirm.

See [Multi-Disc Games](#multi-disc-games) below for how disc bundling works.

### Reset

Resets the game to its initial state. Return to the IGM and press `X` to undo the reset within the one-minute grace period.

### Quit

Exits the game and returns to the launcher.

---

## Multi-Disc Games

> [!WARNING]
> I am not happy with the current state of this feature and expect it to change.

Cannoli automatically detects and bundles multi-disc games. If your ROM files follow standard naming conventions, they'll appear as a single entry in the game list.

### Supported Naming

Cannoli recognizes the following patterns (case-insensitive):

- `Game Name (Disc 1).bin`, `Game Name (Disc 2).bin`
- `Game Name (Disk 1).iso`, `Game Name (Disk 2).iso`
- `Game Name (CD1).img`, `Game Name (CD2).img`

The disc markers are stripped from the display name, so you'll just see `Game Name` in the list.

### M3U Playlists

If an `.m3u` file exists with the same base name as the disc set, Cannoli will use it instead of auto-bundling. This is useful if you need to control disc order or if your files don't follow the standard naming.

```
Roms/PS/
├── Final Fantasy VII (Disc 1).bin
├── Final Fantasy VII (Disc 2).bin
├── Final Fantasy VII (Disc 3).bin
└── Final Fantasy VII.m3u        ← optional, takes priority
```

### Switching Discs

When a game prompts you to insert the next disc, open the [In-Game Menu](#opening-the-in-game-menu) and use **Switch Disc** to pick the right one.
