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

Saves a snapshot of the game to the selected slot. There's an `AUTO` slot plus 10 slots.

The `AUTO` slot is a dedicated save file, separate from the slots. When you save to it, the previous auto save rotates into the slots, shifting each one up by one. This means your slots double as auto save history.

The slots use the same file format as RetroArch, so save states are compatible between Cannoli and RetroArch.

Use `Left` / `Right` on the `D-Pad` to cycle between slots. Each slot shows a screenshot of what's saved in it.

- `A` saves to the selected slot
- `Y` deletes a slot
- `X` undoes the last save

!!! warning
    When all 10 slots are full, saving to `AUTO` will overwrite the oldest slot.

### Load State

Loads a previously saved snapshot. Same slot picker as Save State.

- `A` loads the selected slot
- `Y` deletes a slot
- `X` undoes the last load

### Switch Disc

Only appears for multi-disc games. Use `Left` / `Right` to pick the disc, then `A` to confirm.

### Reset

Resets the game to its initial state. Press `X` to undo the reset.

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

## Shaders

Cannoli ships with several built-in shaders. 

| Shader          | Description               |
|-----------------|---------------------------|
| crt-cannoli     | Multi-pass CRT composite  |
| crt-easymode    | Lightweight CRT           |
| lcd3x           | LCD grid effect           |
| scanline-fract  | Fractional scanlines      |
| sharp-bilinear  | Sharp bilinear scaling    |
| zfast-crt       | Fast CRT composite        |
| zfast-lcd       | Fast LCD effect           |

Cycle through them in **In-Game Menu → Settings → Video → Shader** using `Left` / `Right`.

To add custom shaders, place `.glslp` or `.slangp` preset files in `Cannoli/Shaders/`.

## Overlays

You can add screen overlays (bezels, borders, etc.) by placing PNG or JPG images in `Cannoli/Overlays/{PlatformTag}/`. 

Cycle through them in **In-Game Menu → Settings → Video → Overlay**.

## Resume

If a save state exists for a game, press `X` from the game list to jump straight back in.

## External Emulators

You can configure which emulator or core handles a platform under **Settings → Advanced → Core Mapping**.

The [directory structure](directory-structure.md) is the same regardless of whether you use the built-in runner or an external app.
