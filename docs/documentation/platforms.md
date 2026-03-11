## Supported Platforms

cannoli_OS supports a wide range of retro platforms out of the box.

Platforms are run using either the built-in [LowFatRicotta](https://github.com/cannoliOS/scorza) core runner,
RetroArch or a standalone emulator.

The **Tag** column shows the accepted directory name for your ROMs.

Place your ROM files in `Cannoli/Roms/{Tag}`.

For example, Game Boy Advance will be in `Cannoli/Roms/GBA`.

Cores marked with :material-check-bold:{ .shipped } are shipped with Scorza and *should* work out of the box.

The last section contains higher end systems that require a standalone app.

### Nintendo

| Platform                            | Tag          | Core                                                 |
|-------------------------------------|--------------|------------------------------------------------------|
| Nintendo Entertainment System       | `NES`        | `nestopia` :material-check-bold:{ .shipped }         |
| Famicom Disk System                 | `FDS`        | `nestopia` :material-check-bold:{ .shipped }         |
| Game Boy                            | `GB`         | `gambatte` :material-check-bold:{ .shipped }         |
| Super Nintendo Entertainment System | `SNES`       | `snes9x` :material-check-bold:{ .shipped }           |
| Virtual Boy                         | `VIRTUALBOY` | `mednafen_vb` :material-check-bold:{ .shipped }      |
| Game Boy Color                      | `GBC`        | `gambatte` :material-check-bold:{ .shipped }         |
| Nintendo 64                         | `N64`        | `mupen64plus_next` :material-check-bold:{ .shipped } |
| Game Boy Advance                    | `GBA`        | `mgba` :material-check-bold:{ .shipped }             |
| Pokemon Mini                        | `POKEMINI`   | `pokemini` :material-check-bold:{ .shipped }         |
| Nintendo DS                         | `NDS`        | `melonds`                                            |

### Sega

| Platform      | Tag      | Core                                                |
|---------------|----------|-----------------------------------------------------|
| Sega SG-1000  | `SG1000` | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Master System | `SMS`    | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Sega Genesis  | `MD`     | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Sega CD       | `SEGACD` | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Game Gear     | `GG`     | `genesis_plus_gx` :material-check-bold:{ .shipped } |
| Sega 32X      | `32X`    | `picodrive` :material-check-bold:{ .shipped }       |
| Sega Saturn   | `SATURN` | `mednafen_saturn`                                   |
| Dreamcast     | `DC`     | `flycast`                                           |

### Sony

| Platform    | Tag   | Core                                            |
|-------------|-------|-------------------------------------------------|
| PlayStation | `PS`  | `swanstation` :material-check-bold:{ .shipped } |
| PSP         | `PSP` | `ppsspp`                                        |

### Atari

| Platform     | Tag         | Core                                              |
|--------------|-------------|---------------------------------------------------|
| Atari 2600   | `ATARI2600` | `stella` :material-check-bold:{ .shipped }        |
| Atari 5200   | `ATARI5200` | `atari800` :material-check-bold:{ .shipped }      |
| Atari 7800   | `ATARI7800` | `prosystem` :material-check-bold:{ .shipped }     |
| Atari Jaguar | `JAGUAR`    | `virtualjaguar` :material-check-bold:{ .shipped } |
| Atari Lynx   | `LYNX`      | `handy` :material-check-bold:{ .shipped }         |

### NEC

| Platform             | Tag          | Core                                                  |
|----------------------|--------------|-------------------------------------------------------|
| PC Engine            | `PCE`        | `mednafen_pce_fast` :material-check-bold:{ .shipped } |
| PC Engine SuperGrafx | `SUPERGRAFX` | `mednafen_pce_fast` :material-check-bold:{ .shipped } |
| PC-FX                | `PCFX`       | `mednafen_pcfx` :material-check-bold:{ .shipped }     |

### SNK

| Platform             | Tag      | Core                                             |
|----------------------|----------|--------------------------------------------------|
| Neo Geo Pocket       | `NGP`    | `mednafen_ngp` :material-check-bold:{ .shipped } |
| Neo Geo Pocket Color | `NGPC`   | `mednafen_ngp` :material-check-bold:{ .shipped } |
| Neo Geo              | `NEOGEO` | `fbneo`                                          |

### Bandai

| Platform         | Tag   | Core                                               |
|------------------|-------|----------------------------------------------------|
| WonderSwan       | `WS`  | `mednafen_wswan` :material-check-bold:{ .shipped } |
| WonderSwan Color | `WSC` | `mednafen_wswan` :material-check-bold:{ .shipped } |

### Arcade

| Platform       | Tag    | Core            |
|----------------|--------|-----------------|
| Arcade (MAME)  | `MAME` | `mame2003_plus` |
| Arcade (FBNeo) | `FBN`  | `fbneo`         |

### Other

| Platform      | Tag             | Core                                         |
|---------------|-----------------|----------------------------------------------|
| Intellivision | `INTELLIVISION` | `freeintv` :material-check-bold:{ .shipped } |
| ColecoVision  | `COLECOVISION`  | `bluemsx` :material-check-bold:{ .shipped }  |
| Vectrex       | `VECTREX`       | `vecx` :material-check-bold:{ .shipped }     |

### Computer

| Platform                    | Tag         | Core                                            |
|-----------------------------|-------------|-------------------------------------------------|
| Amiga, Amiga 500, Amiga1200 | `AMIGA`     | `puae`                                          |
| DOS                         | `DOS`       | `dosbox_pure` :material-check-bold:{ .shipped } |
| ScummVM                     | `SCUMMVM`   | `scummvm`                                       |

### Requires Standalone App

These platforms launch a standalone Android app instead of using a libretro core.

| Platform        | Tag      | App       |
|-----------------|----------|-----------|
| Nintendo DS     | `NDS`    | melonDS   |
| PlayStation 2   | `PS2`    | AetherSX2 |
| PlayStation 3   | `PS3`    | aPS3e     |
| PS Vita         | `PSVITA` | Vita3K    |
| GameCube        | `GC`     | Dolphin   |
| Nintendo 3DS    | `3DS`    | Citra     |
| Wii             | `WII`    | Dolphin   |
| Wii U           | `WIIU`   | Cemu      |
| Nintendo Switch | `NSW`    | Citron    |
