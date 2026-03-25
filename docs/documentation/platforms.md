## Supported Platforms

Cannoli supports a wide range of retro platforms out of the box.

The **Folder** column shows the accepted directory name for your ROMs.

Place your ROM files in `Cannoli/Roms/{Folder}`.

For example, Game Boy Advance will be in `Cannoli/Roms/GBA`.

---

:material-check-bold:{ .shipped } Shipped with Cannoli and handled by the built-in core runner

:custom-retroarch: Requires [RetroArch](https://www.retroarch.com/) and the appropriate core downloaded

:material-android: Requires a standalone Android app

### Nintendo

| Platform                            | Folder       | Core / App                                                                      |
|-------------------------------------|--------------|---------------------------------------------------------------------------------|
| Nintendo Entertainment System       | `NES`        | `nestopia` :material-check-bold:{ .shipped }                                    |
| Famicom Disk System                 | `FDS`        | `nestopia` :material-check-bold:{ .shipped }                                    |
| Game Boy                            | `GB`         | `gambatte` :material-check-bold:{ .shipped }                                    |
| Super Nintendo Entertainment System | `SNES`       | `snes9x` :material-check-bold:{ .shipped }                                      |
| Virtual Boy                         | `VIRTUALBOY` | `mednafen_vb` :material-check-bold:{ .shipped }                                 |
| Game Boy Color                      | `GBC`        | `gambatte` :material-check-bold:{ .shipped }                                    |
| Nintendo 64                         | `N64`        | `mupen64plus_next` :material-check-bold:{ .shipped }                            |
| Game Boy Advance                    | `GBA`        | `mgba` :material-check-bold:{ .shipped }                                        |
| Pokemon Mini                        | `POKEMINI`   | `pokemini` :material-check-bold:{ .shipped }                                    |
| Nintendo DS                         | `NDS`        | `melonds` :custom-retroarch:                                                    |
| Nintendo DS                         | `NDS`        | [melonDS](https://github.com/rafaelvcaetano/melonDS-android) :material-android: |
| Nintendo 3DS                        | `3DS`        | [Azahar](https://github.com/azahar-emu/azahar) :material-android:               |
| GameCube                            | `GC`         | [Dolphin](https://dolphin-emu.org) :material-android:                           |
| Wii                                 | `WII`        | [Dolphin](https://dolphin-emu.org) :material-android:                           |
| Wii U                               | `WIIU`       | [Cemu](https://cemu.info) :material-android:                                    |
| Nintendo Switch                     | `NSW`        | [Citron](https://citron-emu.org) :material-android:                             |

### Sega

| Platform      | Folder   | Core / App                                          |
|---------------|----------|-----------------------------------------------------|
| Sega SG-1000  | `SG1000` | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Master System | `SMS`    | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Sega Genesis  | `MD`     | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Sega CD       | `SEGACD` | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Game Gear     | `GG`     | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Sega 32X      | `32X`    | `picodrive` :material-check-bold:{ .shipped }       |
| Sega Saturn   | `SATURN` | `mednafen_saturn` :custom-retroarch:                |
| Dreamcast     | `DC`     | `flycast` :custom-retroarch:                        |

### Sony

| Platform             | Folder   | Core / App                                                                   |
|----------------------|----------|------------------------------------------------------------------------------|
| PlayStation          | `PS`     | `swanstation` :material-check-bold:{ .shipped }                              |
| PlayStation Portable | `PSP`    | [PPSSPP](https://www.ppsspp.org) :material-android:                          |
| PlayStation 2        | `PS2`    | [NetherSX2](https://github.com/Trixarian/NetherSX2-patch) :material-android: |
| PlayStation 3        | `PS3`    | [aPS3e](https://github.com/aenu1/aps3e) :material-android:                   |
| PS Vita              | `PSVITA` | [Vita3K](https://vita3k.org) :material-android:                              |

### Atari

| Platform     | Folder      | Core / App                                        |
|--------------|-------------|---------------------------------------------------|
| Atari 2600   | `ATARI2600` | `stella` :material-check-bold:{ .shipped }        |
| Atari 5200   | `ATARI5200` | `atari800` :material-check-bold:{ .shipped }      |
| Atari 7800   | `ATARI7800` | `prosystem` :material-check-bold:{ .shipped }     |
| Atari Jaguar | `JAGUAR`    | `virtualjaguar` :material-check-bold:{ .shipped } |
| Atari Lynx   | `LYNX`      | `handy` :material-check-bold:{ .shipped }         |

### NEC

| Platform             | Folder       | Core / App                                            |
|----------------------|--------------|-------------------------------------------------------|
| PC Engine            | `PCE`        | `mednafen_pce_fast` :material-check-bold:{ .shipped } |
| PC Engine SuperGrafx | `SUPERGRAFX` | `mednafen_pce_fast` :material-check-bold:{ .shipped } |
| PC-FX                | `PCFX`       | `mednafen_pcfx` :material-check-bold:{ .shipped }     |

### SNK

| Platform             | Folder   | Core / App                                       |
|----------------------|----------|--------------------------------------------------|
| Neo Geo Pocket       | `NGP`    | `mednafen_ngp` :material-check-bold:{ .shipped } |
| Neo Geo Pocket Color | `NGPC`   | `mednafen_ngp` :material-check-bold:{ .shipped } |
| Neo Geo              | `NEOGEO` | `fbneo` :custom-retroarch:                       |

### Bandai

| Platform         | Folder | Core / App                                         |
|------------------|--------|----------------------------------------------------|
| WonderSwan       | `WS`   | `mednafen_wswan` :material-check-bold:{ .shipped } |
| WonderSwan Color | `WSC`  | `mednafen_wswan` :material-check-bold:{ .shipped } |

### Arcade

| Platform       | Folder | Core / App                         |
|----------------|--------|------------------------------------|
| Arcade (MAME)  | `MAME` | `mame2003_plus` :custom-retroarch: |
| Arcade (FBNeo) | `FBN`  | `fbneo` :custom-retroarch:         |

### Other

| Platform      | Folder          | Core / App                                   |
|---------------|-----------------|----------------------------------------------|
| Intellivision | `INTELLIVISION` | `freeintv` :material-check-bold:{ .shipped } |
| ColecoVision  | `COLECOVISION`  | `bluemsx` :material-check-bold:{ .shipped }  |
| Vectrex       | `VECTREX`       | `vecx` :material-check-bold:{ .shipped }     |

### Computer

| Platform                    | Folder    | Core / App                                      |
|-----------------------------|-----------|-------------------------------------------------|
| Amiga, Amiga 500, Amiga1200 | `AMIGA`   | `puae` :custom-retroarch:                       |
| DOS                         | `DOS`     | `dosbox_pure` :material-check-bold:{ .shipped } |
| ScummVM                     | `SCUMMVM` | `scummvm` :custom-retroarch:                    |
