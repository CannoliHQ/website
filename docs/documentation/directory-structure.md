!!! warning "This Documentation Sucks"
    Cannoli is in early preview. Expect the docs to get better as things progress and get finalized.

    I'd rather just get feedback than commit to making good docs against a moving target.

## Directory Structure

Cannoli uses an opinionated directory structure heavily inspired by [MinUI](https://github.com/shauninman/MinUI).

All paths below are relative to the **Cannoli Root** folder.

```
Cannoli/
├── Art/
├── Backup/
├── BIOS/
├── Collections/
├── Config/
│   ├── Launch Scripts/
│   │   ├── Ports/
│   │   └── Tools/
│   └── Overrides/
├── Media/
│   ├── Recordings/
│   └── Screenshots/
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
- Roms
- Save States
- Saves

## Wait, What?

Sorry that was a shitty explanation.

Say you have a cool rom hack `Pokémon - Recharged Yellow` for Game Boy Advance.

The rom file name that you'll be copying over is `Pokémon - Recharged Yellow.gba`.

Referring to the [platform tags](platforms.md) page, `GBA` is the tag for Game Boy Advance.

With those two pieces of info you know where everything has to go!

| Thing      | Where It Goes                                                                           |
|------------|-----------------------------------------------------------------------------------------|
| Rom File   | `Cannoli/Roms/GBA/Pokémon - Recharged Yellow.gba`                                       |
| Save File  | `Cannoli/Saves/GBA/Pokémon - Recharged Yellow.sav`                                      |
| Save State | `Cannoli/Save States/GBA/Pokémon - Recharged Yellow/Pokémon - Recharged Yellow.state.1` |
| Box Art    | `Cannoli/Art/GBA/Pokémon - Recharged Yellow.png`                                        |

## BIOS Files

I have to throw a small wrinkle into all of this.

You might expect to take your legally dumped `gba_bios.bin` and shove it into `Cannoli/BIOS/GBA/gba_bios.bin`.

Sadly this isn't the case.

Cannoli supports launching games with both its internal core runner and with RetroArch. RetroArch expects a single BIOS folder with everything thrown in together. 

Instead of having you upload BIOS files twice in both formats, Cannoli just uses RetroArch's scheme.

It isn't clean, completely breaks expectations and diverges from how MinUI handles it but what are you gonna do? Life ain't perfect.