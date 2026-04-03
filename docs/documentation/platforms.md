## Supported Platforms

Cannoli supports a wide range of retro platforms out of the box.

The **Folder** column shows the accepted directory name for your ROMs.

Place your ROM files in `Cannoli/Roms/{Folder}`.

For example, Game Boy Advance will be in `Cannoli/Roms/GBA`.

---

:material-check-bold:{ .shipped } Shipped with Cannoli and handled by the built-in core runner

:custom-retroarch:{ .retroarch } Requires [RetroArch](https://www.retroarch.com/) and the appropriate core downloaded

:material-android:{ .android } Requires a standalone Android app

:material-trophy:{ .trophy } Supports [RetroAchievements](retroachievements.md)

### Nintendo

| Platform                            | Folder       | Core / App                                                   |                                                                |
|-------------------------------------|--------------|--------------------------------------------------------------|---------------------------------------------------------------:|
| Nintendo Entertainment System       | `NES`        | `nestopia`                                                   | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Famicom Disk System                 | `FDS`        | `nestopia`                                                   | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | `gambatte`                                                   | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Super Nintendo Entertainment System | `SNES`       | `snes9x`                                                     | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Virtual Boy                         | `VIRTUALBOY` | `mednafen_vb`                                                | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | `gambatte`                                                   | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Nintendo 64                         | `N64`        | `mupen64plus_next`                                           |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | `mgba`                                                       | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Pokemon Mini                        | `POKEMINI`   | `pokemini`                                                   | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | `melonds`                                                    |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | [melonDS](https://github.com/rafaelvcaetano/melonDS-android) |    :material-android:{ .android } :material-trophy:{ .trophy } |
| Nintendo 3DS                        | `3DS`        | [Azahar](https://github.com/azahar-emu/azahar)               |                                 :material-android:{ .android } |
| GameCube                            | `GC`         | [Dolphin](https://dolphin-emu.org)                           |    :material-android:{ .android } :material-trophy:{ .trophy } |
| Wii                                 | `WII`        | [Dolphin](https://dolphin-emu.org)                           |    :material-android:{ .android } :material-trophy:{ .trophy } |
| Wii U                               | `WIIU`       | [Cemu](https://cemu.info)                                    |                                 :material-android:{ .android } |
| Nintendo Switch                     | `NSW`        | [Citron](https://citron-emu.org)                             |                                 :material-android:{ .android } |

### Sega

| Platform      | Folder   | Core / App        |                                                                |
|---------------|----------|-------------------|---------------------------------------------------------------:|
| Sega SG-1000  | `SG1000` | `genesis_plus_gx` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Master System | `SMS`    | `genesis_plus_gx` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Sega Genesis  | `MD`     | `genesis_plus_gx` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Sega CD       | `SEGACD` | `genesis_plus_gx` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Game Gear     | `GG`     | `genesis_plus_gx` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Sega 32X      | `32X`    | `picodrive`       |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | `mednafen_saturn` |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Dreamcast     | `DC`     | `flycast`         |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |

### Sony

| Platform             | Folder   | Core / App                                                |                                                                |
|----------------------|----------|-----------------------------------------------------------|---------------------------------------------------------------:|
| PlayStation          | `PS`     | `PCSX-ReARMed` (default) / `swanstation` (requires BIOS)  | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| PlayStation Portable | `PSP`    | `ppsspp`                                                  |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PlayStation 2        | `PS2`    | [NetherSX2](https://github.com/Trixarian/NetherSX2-patch) |    :material-android:{ .android } :material-trophy:{ .trophy } |
| PlayStation 3        | `PS3`    | [aPS3e](https://github.com/aenu1/aps3e)                   |                                 :material-android:{ .android } |
| PS Vita              | `PSVITA` | [Vita3K](https://vita3k.org)                              |                                 :material-android:{ .android } |

### Atari

| Platform     | Folder      | Core / App      |                                                                |
|--------------|-------------|-----------------|---------------------------------------------------------------:|
| Atari 2600   | `ATARI2600` | `stella`        | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Atari 5200   | `ATARI5200` | `atari800`      |                               :custom-retroarch:{ .retroarch } |
| Atari 7800   | `ATARI7800` | `prosystem`     | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Atari Jaguar | `JAGUAR`    | `virtualjaguar` |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari Lynx   | `LYNX`      | `handy`         | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |

### NEC

| Platform             | Folder       | Core / App          |                                                                |
|----------------------|--------------|---------------------|---------------------------------------------------------------:|
| PC Engine            | `PCE`        | `mednafen_pce_fast` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| PC Engine SuperGrafx | `SUPERGRAFX` | `mednafen_pce_fast` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| PC-FX                | `PCFX`       | `mednafen_pcfx`     |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |

### SNK

| Platform             | Folder   | Core / App     |                                                                |
|----------------------|----------|----------------|---------------------------------------------------------------:|
| Neo Geo Pocket       | `NGP`    | `mednafen_ngp` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Neo Geo Pocket Color | `NGPC`   | `mednafen_ngp` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Neo Geo              | `NEOGEO` | `fbneo`        | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |

### Bandai

| Platform         | Folder | Core / App       |                                                                |
|------------------|--------|------------------|---------------------------------------------------------------:|
| WonderSwan       | `WS`   | `mednafen_wswan` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| WonderSwan Color | `WSC`  | `mednafen_wswan` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |

### Arcade

| Platform       | Folder | Core / App      |                                                                |
|----------------|--------|-----------------|---------------------------------------------------------------:|
| Arcade (MAME)  | `MAME` | `mame2003_plus` | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |
| Arcade (FBNeo) | `FBN`  | `fbneo`         | :material-check-bold:{ .shipped } :material-trophy:{ .trophy } |

### Other

| Platform      | Folder          | Core / App |                                                                |
|---------------|-----------------|------------|---------------------------------------------------------------:|
| Intellivision | `INTELLIVISION` | `freeintv` |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ColecoVision  | `COLECOVISION`  | `bluemsx`  |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Vectrex       | `VECTREX`       | `vecx`     |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |

### Computer

| Platform                     | Folder    | Core / App    |                                                                |
|------------------------------|-----------|---------------|---------------------------------------------------------------:|
| Amiga, Amiga 500, Amiga 1200 | `AMIGA`   | `puae`        |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| DOS                          | `DOS`     | `dosbox_pure` |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ScummVM                      | `SCUMMVM` | `scummvm`     |  :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
