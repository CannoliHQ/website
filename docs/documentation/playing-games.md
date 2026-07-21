# Playing Games

## Built-In Core Runner

Cannoli ships with a built-in libretro core runner. Press `A` on a game to play it. 

> [!TIP]
> Some platforms are not available in the built-in core runner. See [Platforms](platforms.md) for details.

---

## Resuming a Game

If a save state exists for a game, press the **Resume** button to jump back in, or the **Play** button to start the game without using the last save state. By default `A` plays and `X` resumes; if [Swap Play and Resume](settings.md#input) is enabled, `X` plays and `A` resumes.

**Hold** the Resume button to open the Save State Picker. Cycle through your slots with `Left` / `Right` and press the Resume button again to load the selected slot. Empty slots show as blank.

Resume is only available for games handled by Cannoli's built-in core runner.

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
- **Shortcuts** - Assign button combos to in-game actions like Save State, Fast Forward, and Open Guide. See [Shortcuts](shortcuts.md) for the full list.
- **Advanced** - Controller type (core dependent), fast-forward speed, debug HUD
- **Info** - Displays the current core, ROM path, extracted ROM path (when the game was unpacked from an archive), save path, renderer, and RetroAchievements status, game ID, and detection details (when logged in)

### Reassign Players

Only appears when 2 or more controllers are connected. Lets you change which controller is which player, including swapping two players' seats.

### Switch Disc

Only appears for multi-disc games. With this row highlighted in the IGM, press `Left` / `Right` to cycle to the disc you want.

See [Multi-Disc Games](#multi-disc-games) below for how disc bundling works.

### Reset

Resets the game to its initial state. Return to the IGM and press `X` to undo the reset within a 30-second grace period.

### Quit

Exits the game and returns to the launcher.

If **Save State On Quit** is enabled in Settings → Emulation, this option is labeled **Save and Quit** and automatically writes a save state before exiting.

---

## Multi-Disc Games

Drop the disc files into the platform's ROM folder. On the next scan, Cannoli moves them into a per-game subfolder, generates an `.m3u`, and shows a single entry in the game list.

The following disc markers are recognized: `(Disc 1)`, `(Disk 1)`, `(CD1)`. Any disc image format works.

When a game prompts you to insert the next disc, open the [In-Game Menu](#opening-the-in-game-menu) and use **Switch Disc**.

Deleting a multi-disc entry removes the entire bundle.

---

## RetroArch / Standalone Emulators

Cannoli can also launch your games using RetroArch or a standalone emulator.

You can configure which RetroArch core or standalone emulator handles a platform under **Settings → Emulation → Emulator Mapping**.

---

## Emulator Override

By default, each game uses the core or app assigned to its platform in [Emulator Mapping](settings.md#emulation). An emulator override lets you set a different choice for a single game, useful when one game runs better on a different core or needs a standalone app.

Open a game's context menu (`Start`) and select **Emulator Override** to pick from:

- Cannoli's built-in cores
- Any core installed in the selected RetroArch or RicottaArch package
- Any compatible standalone Android app

The picker shows the source of each option (Internal, RetroArch, RicottaArch, or Standalone). To clear an override and return to the platform default, open the picker again and choose **Platform Default**.