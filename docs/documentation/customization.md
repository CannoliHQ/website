# Customization

## Appearance

All appearance settings are found under **Settings → Appearance**.

### Art Width

Controls how much screen space the box art panel takes up on the game list. Options range from 35% to 65% in 5% steps, or 0 to hide it entirely. The default is 40%.

### Art Scale

Controls how box art is scaled within the art panel.

- **Fit** (default) - scales the image to fit entirely within the panel
- **Original** - displays the image at its original size
- **Fit Width** - scales the image to fill the panel's width
- **Fit Height** - scales the image to fill the panel's height

### Background

Set a wallpaper by placing images in the `Wallpapers/` folder and selecting one from **Background Image**. PNG and JPG are supported.

**Background Tint** adds a dark overlay on top of your wallpaper to keep text readable. It ranges from 0% (no tint) to 90% in 10% steps. This option only appears when a wallpaper is set.

You can also upload wallpapers through [Nonna's Kitchen](nonnas-kitchen.md).

### Colors

Cannoli has four customizable colors:

- **Accent:** Used for UI accents like the status bar background
- **Highlight:** The background color of the currently selected item
- **Highlight Text:** The text color of the currently selected item
- **Text:** The color used for all text in the launcher
- **Title:** The color used for all list titles (including IGM)

Each color can be picked from a grid of 16 presets or entered as a hex value. 

See the [Color Picker](button-reference.md#color-picker) controls for details.

### Font

Two fonts are built in:

- **M Plus 1 Code** (default)
- **BP Replay**

You can add your own fonts by placing `.ttf` or `.otf` files in `Config/Fonts/`. They'll show up alongside the built-in options.

### Status Bar

Control what appears in the status bar:

- **Battery** - shown by default (not available on Android TV)
- **Bluetooth** - shown by default
- **Clock** - shown by default, can be set to 12 or 24 hour
- **Wi-Fi** - shown by default
- **VPN** - hidden by default
- **Update** - shown by default, indicates when an update is available

### Text Size

Eight sizes are available, from compact (16) to large (30). The default is 24.

### Title

Set a custom title that appears at the top of the launcher. Leave it empty for no title.

---

## Box Art

Box art is the artwork displayed alongside the game list.

### Folder Structure

Art is organized by platform using the same [tags](platforms.md) as your ROMs:

```
Art/
├── GBA/
│   ├── Pokémon - Recharged Yellow.png
│   └── Metroid - Zero Mission.jpg
├── SNES/
│   ├── Super Mario World.png
│   └── Zelda - A Link to the Past.webp
```

### Naming

The art file must have the **exact same name** as the ROM file, minus the extension. Case matters.

| ROM File                         | Art File                         |
|----------------------------------|----------------------------------|
| `Super Mario World.sfc`          | `Super Mario World.png`          |
| `Pokémon - Recharged Yellow.gba` | `Pokémon - Recharged Yellow.jpg` |

### Supported Formats

PNG, JPG and WebP.

### Dimensions

There are no enforced dimensions. Use whatever size you want. Images larger than 1024px on their longest side are downsampled automatically, and the aspect ratio is always preserved.

### Adding Art

Two ways:

- **Manually** - place image files in the correct `Art/[platform]/` folder
- **Nonna's Kitchen** - upload artwork through the [web file manager](nonnas-kitchen.md)

### Removing Art

Highlight a game, press `Start` to open the context menu, and select **Delete Art**. This option only appears if art exists for that game.

---

## Overlays

Overlays are images displayed on top of gameplay to simulate screen bezels or borders. The transparent areas of the image let the game show through.

### Folder Structure

Like box art, overlays are organized by platform:

```
Overlays/
├── GBA/
│   ├── gba_bezel.png
│   └── gba_border.png
├── SNES/
│   └── snes_crt.png 
```

### Display

Overlays are stretched to fill the entire screen. The game renders behind the overlay, visible through any transparent regions in the image. There are no positioning, scaling, or opacity controls -- what you see is what's in the image file.

### Applying Overlays

Open the [In-Game Menu](playing-games.md#in-game-menu-igm) and go to **Settings → Video**. Use `Left` / `Right` to cycle through the overlays available for the current platform. Changes apply immediately.

### Override Hierarchy

Overlay selection is saved at three levels:

1. **Game** - applies to a single game
2. **Platform** - applies to all games on a platform
3. **Global** - applies everywhere

A game-level override takes priority over platform, which takes priority over global.

Cannoli does not ship with any overlays. You'll need to provide your own.
