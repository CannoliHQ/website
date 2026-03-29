--8<-- "docs/documentation/snippets/early-preview.md"

## Directory Structure

Cannoli uses an opinionated directory structure heavily inspired by [MinUI](https://github.com/shauninman/MinUI).

All paths below are relative to the **Cannoli Root** you picked during initial setup.

```
Cannoli Root/
├── Art/
├── Backup/
├── BIOS/
├── Collections/
├── Config/
│   ├── Launch Scripts/
│   │   ├── Ports/
│   │   └── Tools/
│   ├── Overrides/
│   └── Profiles/
├── Media/
│   ├── Recordings/
│   └── Screenshots/
├── Guides/
├── Overlays/
├── Roms/
├── Save States/
├── Saves/
├── Shaders/
└── Wallpapers/
```

## Tags keep things organized!

The folder structure should be fairly obvious but let's clarify a few things.

Nearly everything is sorted using the [platform tags](platforms.md) as directory names.

The following folders expect subdirectories using the accepted platform tags.

- Art
- BIOS
- Guides
- Roms
- Saves
- Save States

## Wait, What?

Sorry that was a shitty explanation.

Say you have a cool rom hack `Pokémon - Recharged Yellow` for Game Boy Advance.

The rom file name that you'll be copying over is `Pokémon - Recharged Yellow.gba`.

Referring to the [platform tags](platforms.md) page, `GBA` is the tag for Game Boy Advance.

With those two pieces of info you know where everything has to go!

| Thing       | Where It Goes                                                                           |
|-------------|-----------------------------------------------------------------------------------------|
| BIOS Files  | `Cannoli/BIOS/GBA/gba_bios.bin`                                                         |
| Box Art     | `Cannoli/Art/GBA/Pokémon - Recharged Yellow.png`                                        |
| Guide File  | `Cannoli/Guides/GBA/Pokémon - Recharged Yellow/Kanto Map.png`                           |
| ROM Files   | `Cannoli/Roms/GBA/Pokémon - Recharged Yellow.gba`                                       |
| Save Files  | `Cannoli/Saves/GBA/Pokémon - Recharged Yellow.sav`                                      |
| Save States | `Cannoli/Save States/GBA/Pokémon - Recharged Yellow/Pokémon - Recharged Yellow.state.1` |
