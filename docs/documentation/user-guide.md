# Using Cannoli

!!! warning "This Documentation Sucks"
    Cannoli is in early preview. Expect the docs to get better as things progress and get finalized.

    I'd rather just get feedback than commit to making good docs against a moving target.

## Navigating the UI

Cannoli is designed to be used entirely with a controller.

Use the `D-Pad` to move around and `A` to select. `B` goes back. That's most of it.

For the full list of controls see the [Button Reference](button-reference.md).

## Favorites

Highlight any game and press `Y` to favorite it. Press `Y` again to remove it.

Favorites appear as their own entry on the main menu.

## Collections

Collections let you group games across platforms. Think "Beat 'Em Ups" or "Couch Co-op".

To create a collection:

- From the **Collections** screen, press `X`
- Or highlight a game, press `Start` → `Manage Collections` → `X`

Give it a name and press `Start` to save.

When managing a game's membership, the checkboxes show which collections it belongs to. Toggle them to add or remove.

To rename or delete a collection, highlight it on the Collections screen and press `Start`.

## Reordering

You can reorder platforms and collections to your liking.

Highlight the item you want to move, press `Select`, then use the `D-Pad` to reposition it. Press `Select` again to lock it in.

## Search

While inside a platform or collection, press `Start` and select **Search** to filter the list.

## Managing Games

Highlight a game and press `Start` to open the context menu. From here you can:

- Rename the game
- Delete the game
- Manage collection membership

## Playing Games

### Built-In Core Runner

Cannoli ships with a built-in libretro core runner. Press `A` on a game to play it.

Whether a platform uses the built-in runner, RetroArch, or a standalone emulator depends on what's supported. See [Platforms](platforms.md) for the full breakdown.

During gameplay, open the in-game menu to save state, load state, or quit.

- **Android handhelds:** press the `Menu` button.
- **Android TV / Google TV:** press `Home` on your controller — you'll need to enable the Accessibility Service first so the button isn't intercepted by the OS. See the [FAQ](faq.md) for details.

### Save States vs. In-Game Saves

These are two separate things and they don't mix.

**In-game saves** are created by the game itself — save points, a save menu, or battery-backed RAM. They're stored as `.sav` files and work across any device or emulator that supports the game.

**Save states** are snapshots of the entire emulator at a moment in time, created from the in-game menu. They're fast and can be made anywhere, but they're emulator-specific and may break if you switch cores.

Use in-game saves for long-term portability. Use save states for convenience — not as a substitute for a proper in-game save.

### Resume

If a save state exists for a game, press `X` from the game list to jump straight back in.

### External Emulators

You can configure which emulator or core handles a platform under **Settings → Advanced → Core Mapping**.

The [directory structure](directory-structure.md) is the same regardless of whether you use the built-in runner or an external app.

## Settings

Press `X` on the main menu to open settings.

### Appearance

- **Colors:** Customize highlight, text, highlight text, and accent colors
- **Box Art:** Toggle box art display
- **Text Size:** Adjust the UI text size
- **Background Image:** Set a wallpaper
- **Background Tint:** Control the tint overlay on the wallpaper
- **Marquee Speed:** Adjust how fast long names scroll

### Content

- **Empty Platforms:** Show or hide platforms with no ROMs

### Status Bar

- **Wi-Fi** / **Bluetooth** / **Clock** / **Battery:** Toggle status bar indicators
- **Time Format:** 12 or 24 hour

!!! important
Battery indicator is not available on Android TV devices.

### Input

- **Button Layout:** Choose your controller button layout
- **Button Mapping:** Remap individual buttons
- **Shortcuts:** Configure shortcut actions
- **Swap Start / Select:** Swap the two if your controller has them reversed
- **L1 / R1 Switches Platform:** Jump between platforms from the game list

### Advanced

- **Core Mapping:** Choose which core or app handles each platform
- **Emulation Root:** The root directory where Cannoli stores its files
- **RetroArch Package:** Select which installed RetroArch APK Cannoli should launch
