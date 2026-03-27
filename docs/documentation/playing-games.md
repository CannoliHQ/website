# Playing Games

!!! warning "This Documentation Sucks"
    Cannoli is in early preview. Expect the docs to get better as things progress and get finalized.

## Built-In Core Runner

Cannoli ships with a built-in libretro core runner. Press `A` on a game to play it. 

!!! tip
    Some platforms use RetroArch or a standalone emulator instead. See [Platforms](platforms.md) for details.

## Opening the In-Game Menu

- **Android handhelds:** press the `Menu` button.
- **Android TV / Google TV:** press `Home` on your controller. You'll need to enable the [Accessibility Service](quirks.md#android-tv-accessibility-service) first so the button isn't intercepted by the OS.

The menu gives you access to save states, settings, achievements, and more.

## In-Game Menu Options

### Resume

Closes the menu and returns to gameplay.

### Save State

Saves a snapshot of the game to the selected slot. There's an `AUTO` slot plus 10 numbered slots.

The `AUTO` slot is a special auto-incrementing slot. When you save to it, existing saves shift up by one slot to make room. The newest save always lands in the first position.

Use `Left` / `Right` on the `D-Pad` to cycle between slots. Each slot shows a preview of what's saved in it.

- `A` saves to the selected slot
- `Y` deletes a slot (not available on `AUTO`)
- `X` undoes the last save

### Load State

Loads a previously saved snapshot. Same slot picker as Save State.

- `A` loads the selected slot
- `Y` deletes a slot (not available on `AUTO`)
- `X` undoes the last load

### Switch Disc

Only appears for multi-disc games. Use `Left` / `Right` to pick the disc, then `A` to confirm.

### Achievements

Only appears if you're logged into [RetroAchievements](retroachievements.md) and the game has achievements. See the [RetroAchievements](retroachievements.md) page for details.

### Settings

Opens the in-game settings with six categories:

- **Video** - Screen scaling, sharpness, shaders, overlays
- **Emulator** - Core-specific options (varies per platform)
- **Controls** - Remap buttons at the global, platform, or game level
- **Shortcuts** - Assign button combos for quick save, quick load, fast forward, and more
- **Advanced** - Low latency mode, fast forward speed, debug HUD
- **Info** - Displays the current core, ROM path, and save path

When exiting settings with unsaved changes, you'll be prompted to save for the platform, save for the game, or discard.

### Quit

Exits the game and returns to the launcher.

## Shortcuts

You can assign button combos to perform actions without opening the menu. Configure them under **In-Game Menu → Settings → Shortcuts**.

Available actions:

- Save State
- Load State
- Reset Game
- Save and Quit
- Cycle Scaling
- Cycle Shader
- Toggle Fast Forward
- Hold Fast Forward

To assign a shortcut, select the action and hold your desired button combination for 1.5 seconds. Press `X` to clear a shortcut.

## Save States vs. In-Game Saves

These are two separate things, and they don't mix.

**In-game saves** are created by the game itself: save points, a save menu, or battery-backed RAM. They're stored as `.sav` files and work across any device or emulator that supports the game.

**Save states** are snapshots of the entire emulator at a moment in time, created from the in-game menu. They're fast and can be made anywhere, but they're emulator-specific and may break if you switch cores.

Use in-game saves for long-term portability. Use save states for convenience, not as a substitute for a proper in-game save.

## Resume

If a save state exists for a game, press `X` from the game list to jump straight back in.

## External Emulators

You can configure which emulator or core handles a platform under **Settings → Advanced → Core Mapping**.

The [directory structure](directory-structure.md) is the same regardless of whether you use the built-in runner or an external app.
