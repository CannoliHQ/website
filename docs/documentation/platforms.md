## Supported Platforms

Cannoli supports a wide range of retro platforms out of the box.

The **Folder** column shows the accepted directory name for your ROMs.

Place your ROM files in `Cannoli/Roms/{Folder}`.

For example, Game Boy Advance will be in `Cannoli/Roms/GBA`.

---

:material-check-bold:{ .shipped } Shipped with Cannoli and handled by the built-in core runner

:custom-retroarch: Requires [RetroArch](https://www.retroarch.com/) and the appropriate core downloaded

:material-android: Requires a standalone Android app

:material-trophy: Supports [RetroAchievements](retroachievements.md)

### Nintendo

| Platform                            | Folder       | Core / App                                                                      | Achievements |
|-------------------------------------|--------------|---------------------------------------------------------------------------------|--------------|
| Nintendo Entertainment System       | `NES`        | `nestopia` :material-check-bold:{ .shipped }                                    | :material-trophy: |
| Famicom Disk System                 | `FDS`        | `nestopia` :material-check-bold:{ .shipped }                                    | :material-trophy: |
| Game Boy                            | `GB`         | `gambatte` :material-check-bold:{ .shipped }                                    | :material-trophy: |
| Super Nintendo Entertainment System | `SNES`       | `snes9x` :material-check-bold:{ .shipped }                                      | :material-trophy: |
| Virtual Boy                         | `VIRTUALBOY` | `mednafen_vb` :material-check-bold:{ .shipped }                                 | :material-trophy: |
| Game Boy Color                      | `GBC`        | `gambatte` :material-check-bold:{ .shipped }                                    | :material-trophy: |
| Nintendo 64                         | `N64`        | `mupen64plus_next` :material-check-bold:{ .shipped }                            | :material-trophy: |
| Game Boy Advance                    | `GBA`        | `mgba` :material-check-bold:{ .shipped }                                        | :material-trophy: |
| Pokemon Mini                        | `POKEMINI`   | `pokemini` :material-check-bold:{ .shipped }                                    | :material-trophy: |
| Nintendo DS                         | `NDS`        | `melonds` :custom-retroarch:                                                    | :material-trophy: |
| Nintendo DS                         | `NDS`        | [melonDS](https://github.com/rafaelvcaetano/melonDS-android) :material-android: | :material-trophy: |
| Nintendo 3DS                        | `3DS`        | [Azahar](https://github.com/azahar-emu/azahar) :material-android:               |              |
| GameCube                            | `GC`         | [Dolphin](https://dolphin-emu.org) :material-android:                           | :material-trophy: |
| Wii                                 | `WII`        | [Dolphin](https://dolphin-emu.org) :material-android:                           | :material-trophy: |
| Wii U                               | `WIIU`       | [Cemu](https://cemu.info) :material-android:                                    |              |
| Nintendo Switch                     | `NSW`        | [Citron](https://citron-emu.org) :material-android:                             |              |

### Sega

| Platform      | Folder   | Core / App                                          | Achievements |
|---------------|----------|-----------------------------------------------------|--------------|
| Sega SG-1000  | `SG1000` | `genesis_plus_gx` :material-check-bold:{ .shipped } | :material-trophy: |
| Master System | `SMS`    | `genesis_plus_gx` :material-check-bold:{ .shipped } | :material-trophy: |
| Sega Genesis  | `MD`     | `genesis_plus_gx` :material-check-bold:{ .shipped } | :material-trophy: |
| Sega CD       | `SEGACD` | `genesis_plus_gx` :material-check-bold:{ .shipped } | :material-trophy: |
| Game Gear     | `GG`     | `genesis_plus_gx` :material-check-bold:{ .shipped } | :material-trophy: |
| Sega 32X      | `32X`    | `picodrive` :material-check-bold:{ .shipped }       | :material-trophy: |
| Sega Saturn   | `SATURN` | `mednafen_saturn` :custom-retroarch:                | :material-trophy: |
| Dreamcast     | `DC`     | `flycast` :custom-retroarch:                        | :material-trophy: |

### Sony

| Platform             | Folder   | Core / App                                                                   | Achievements |
|----------------------|----------|------------------------------------------------------------------------------|--------------|
| PlayStation          | `PS`     | `swanstation` :material-check-bold:{ .shipped }                              | :material-trophy: |
| PlayStation Portable | `PSP`    | `ppsspp` :custom-retroarch:                                                  | :material-trophy: |
| PlayStation 2        | `PS2`    | [NetherSX2](https://github.com/Trixarian/NetherSX2-patch) :material-android: | :material-trophy: |
| PlayStation 3        | `PS3`    | [aPS3e](https://github.com/aenu1/aps3e) :material-android:                   |              |
| PS Vita              | `PSVITA` | [Vita3K](https://vita3k.org) :material-android:                              |              |

### Atari

| Platform     | Folder      | Core / App                                        | Achievements |
|--------------|-------------|---------------------------------------------------|--------------|
| Atari 2600   | `ATARI2600` | `stella` :material-check-bold:{ .shipped }        | :material-trophy: |
| Atari 5200   | `ATARI5200` | `atari800` :material-check-bold:{ .shipped }      |              |
| Atari 7800   | `ATARI7800` | `prosystem` :material-check-bold:{ .shipped }     | :material-trophy: |
| Atari Jaguar | `JAGUAR`    | `virtualjaguar` :material-check-bold:{ .shipped } | :material-trophy: |
| Atari Lynx   | `LYNX`      | `handy` :material-check-bold:{ .shipped }         | :material-trophy: |

### NEC

| Platform             | Folder       | Core / App                                            | Achievements |
|----------------------|--------------|-------------------------------------------------------|--------------|
| PC Engine            | `PCE`        | `mednafen_pce_fast` :material-check-bold:{ .shipped } | :material-trophy: |
| PC Engine SuperGrafx | `SUPERGRAFX` | `mednafen_pce_fast` :material-check-bold:{ .shipped } | :material-trophy: |
| PC-FX                | `PCFX`       | `mednafen_pcfx` :material-check-bold:{ .shipped }     | :material-trophy: |

### SNK

| Platform             | Folder   | Core / App                                       | Achievements |
|----------------------|----------|--------------------------------------------------|--------------|
| Neo Geo Pocket       | `NGP`    | `mednafen_ngp` :material-check-bold:{ .shipped } | :material-trophy: |
| Neo Geo Pocket Color | `NGPC`   | `mednafen_ngp` :material-check-bold:{ .shipped } | :material-trophy: |
| Neo Geo              | `NEOGEO` | `fbneo` :material-check-bold:{ .shipped }        | :material-trophy: |

### Bandai

| Platform         | Folder | Core / App                                         | Achievements |
|------------------|--------|----------------------------------------------------|--------------|
| WonderSwan       | `WS`   | `mednafen_wswan` :material-check-bold:{ .shipped } | :material-trophy: |
| WonderSwan Color | `WSC`  | `mednafen_wswan` :material-check-bold:{ .shipped } | :material-trophy: |

### Arcade

| Platform       | Folder | Core / App                         | Achievements |
|----------------|--------|------------------------------------|--------------|
| Arcade (MAME)  | `MAME` | `mame2003_plus` :material-check-bold:{ .shipped } | :material-trophy: |
| Arcade (FBNeo) | `FBN`  | `fbneo` :material-check-bold:{ .shipped }          | :material-trophy: |

### Other

| Platform      | Folder          | Core / App                                   | Achievements |
|---------------|-----------------|----------------------------------------------|--------------|
| Intellivision | `INTELLIVISION` | `freeintv` :material-check-bold:{ .shipped } | :material-trophy: |
| ColecoVision  | `COLECOVISION`  | `bluemsx` :material-check-bold:{ .shipped }  | :material-trophy: |
| Vectrex       | `VECTREX`       | `vecx` :material-check-bold:{ .shipped }     | :material-trophy: |

### Computer

| Platform                    | Folder    | Core / App                                      | Achievements |
|-----------------------------|-----------|-------------------------------------------------|--------------|
| Amiga, Amiga 500, Amiga1200 | `AMIGA`   | `puae` :custom-retroarch:                       | :material-trophy: |
| DOS                         | `DOS`     | `dosbox_pure` :material-check-bold:{ .shipped } | :material-trophy: |
| ScummVM                     | `SCUMMVM` | `scummvm` :custom-retroarch:                    | :material-trophy: |
