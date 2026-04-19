## Supported Platforms

Cannoli supports a wide range of retro platforms out of the box.

The **Folder** column shows the accepted directory name for your ROMs.

Place your ROM files in `Cannoli/Roms/{Folder}`.

For example, Game Boy Advance will be in `Cannoli/Roms/GBA`.

---

:material-check-bold:{ .shipped } Bundled with Cannoli and handled by the built-in core runner

:custom-retroarch:{ .retroarch } Requires RetroArch and the appropriate core downloaded

:material-android:{ .android } Requires a standalone Android app

:material-trophy:{ .trophy } Supports [RetroAchievements](retroachievements.md)

:material-chip:{ .bios-required } Requires BIOS files

:material-key:{ .keys-required } Requires encryption keys

<div class="platform-filters">
  <span class="platform-filters-label">Filter</span>
  <button class="platform-filter active" data-filter="all">All</button>
  <button class="platform-filter" data-filter="bundled">Bundled</button>
  <button class="platform-filter" data-filter="retroarch">RetroArch</button>
  <button class="platform-filter" data-filter="standalone">Standalone</button>
</div>

### Nintendo

| Platform                            | Folder       | Core / App          |                                                                                                                                   |
| ----------------------------------- | ------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------: |
| Nintendo Entertainment System       | `NES`        | `nestopia`          |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo Entertainment System       | `NES`        | `fceumm`            |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo Entertainment System       | `NES`        | `mesen`             |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo Entertainment System       | `NES`        | `quicknes`          |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo Entertainment System       | `NES`        | NES.emu             |                                                                                                    :material-android:{ .android } |
| Nintendo Entertainment System       | `NES`        | iNES                |                                                                                                    :material-android:{ .android } |
| Nintendo Entertainment System       | `NES`        | Nesoid              |                                                                                                    :material-android:{ .android } |
| Famicom Disk System                 | `FDS`        | `nestopia`          | :material-check-bold:{ .shipped } :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Famicom Disk System                 | `FDS`        | `fceumm`            |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Famicom Disk System                 | `FDS`        | `mesen`             |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Famicom Disk System                 | `FDS`        | NES.emu             |                                                                                                    :material-android:{ .android } |
| Famicom Disk System                 | `FDS`        | iNES                |                                                                                                    :material-android:{ .android } |
| Famicom Disk System                 | `FDS`        | Nesoid              |                                                                                                    :material-android:{ .android } |
| Game Boy                            | `GB`         | `gambatte`          |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | `sameboy`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | `gearboy`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | `mgba`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | `tgbdual`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | `vbam`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | GBC.emu             |                                                                                                    :material-android:{ .android } |
| Game Boy                            | `GB`         | My OldBoy!          |                                                                                                    :material-android:{ .android } |
| Game Boy                            | `GB`         | Pizza Boy GBC       |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Game Boy                            | `GB`         | Linkboy             |                                                                                                    :material-android:{ .android } |
| Game Boy Color                      | `GBC`        | `gambatte`          |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | `sameboy`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | `gearboy`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | `mgba`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | `tgbdual`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | `vbam`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | GBC.emu             |                                                                                                    :material-android:{ .android } |
| Game Boy Color                      | `GBC`        | My OldBoy!          |                                                                                                    :material-android:{ .android } |
| Game Boy Color                      | `GBC`        | Pizza Boy GBC       |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Game Boy Color                      | `GBC`        | Linkboy             |                                                                                                    :material-android:{ .android } |
| Super Nintendo Entertainment System | `SNES`       | `snes9x`            |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Super Nintendo Entertainment System | `SNES`       | `bsnes`             |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Super Nintendo Entertainment System | `SNES`       | `mesen-s`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Super Nintendo Entertainment System | `SNES`       | `snes9x2010`        |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Super Nintendo Entertainment System | `SNES`       | `mednafen_snes`     |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Super Nintendo Entertainment System | `SNES`       | Snes9x EX+          |                                                                                                    :material-android:{ .android } |
| Virtual Boy                         | `VIRTUALBOY` | `mednafen_vb`       |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Virtual Boy                         | `VIRTUALBOY` | Virtual Virtual Boy |                                                                                                    :material-android:{ .android } |
| Nintendo 64                         | `N64`        | `mupen64plus_next`  |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo 64                         | `N64`        | `parallel_n64`      |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo 64                         | `N64`        | M64Plus FZ Pro      |                                                                                                    :material-android:{ .android } |
| Nintendo 64                         | `N64`        | M64Plus FZ          |                                                                                                    :material-android:{ .android } |
| Nintendo 64                         | `N64`        | Mupen64Plus AE      |                                                                                                    :material-android:{ .android } |
| Game Boy Advance                    | `GBA`        | `mgba`              |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | `gpsp`              |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | `vba_next`          |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | `vbam`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | `mednafen_gba`      |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | GBA.emu             |                                                                                                    :material-android:{ .android } |
| Game Boy Advance                    | `GBA`        | My Boy!             |                                                                                                    :material-android:{ .android } |
| Game Boy Advance                    | `GBA`        | Pizza Boy GBA       |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Game Boy Advance                    | `GBA`        | SkyEmu              |                                                                                                    :material-android:{ .android } |
| Game Boy Advance                    | `GBA`        | NooDS               |                                                                                                    :material-android:{ .android } |
| Game Boy Advance                    | `GBA`        | Linkboy             |                                                                                                    :material-android:{ .android } |
| Pokemon Mini                        | `POKEMINI`   | `pokemini`          |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | `melonds`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | `melondsds`         |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | `desmume`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | `desmume2015`       |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | melonDS             |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | melonDS Nightly     |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Nintendo DS                         | `NDS`        | DraStic             |                                                                                                    :material-android:{ .android } |
| Nintendo DS                         | `NDS`        | melonDS DS          |                                                                                                    :material-android:{ .android } |
| Nintendo DS                         | `NDS`        | SkyEmu              |                                                                                                    :material-android:{ .android } |
| Nintendo DS                         | `NDS`        | NooDS               |                                                                                                    :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | `citra`             |                                                                 :material-key:{ .keys-required } :custom-retroarch:{ .retroarch } |
| Nintendo 3DS                        | `3DS`        | Azahar              |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | AzaharPlus          |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | Citra               |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | Citra Canary        |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | Lime3DS             |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | Mandarine           |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo 3DS                        | `3DS`        | Panda3DS            |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| GameCube                            | `GC`         | `dolphin`           |                                                                                                  :custom-retroarch:{ .retroarch } |
| GameCube                            | `GC`         | Dolphin             |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| GameCube                            | `GC`         | Dolphin MMJR        |                                                                                                    :material-android:{ .android } |
| GameCube                            | `GC`         | Dolphin MMJR2       |                                                                                                    :material-android:{ .android } |
| Wii                                 | `WII`        | `dolphin`           |                                                                                                  :custom-retroarch:{ .retroarch } |
| Wii                                 | `WII`        | Dolphin             |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Wii                                 | `WII`        | Dolphin MMJR        |                                                                                                    :material-android:{ .android } |
| Wii                                 | `WII`        | Dolphin MMJR2       |                                                                                                    :material-android:{ .android } |
| Wii U                               | `WIIU`       | Cemu                |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo Switch                     | `NSW`        | Citron              |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo Switch                     | `NSW`        | Kenji-NX            |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |
| Nintendo Switch                     | `NSW`        | Skyline             |                                                                   :material-key:{ .keys-required } :material-android:{ .android } |

### Sega

| Platform      | Folder   | Core / App             |                                                                                                                                   |
| ------------- | -------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------: |
| Sega SG-1000  | `SG1000` | `genesis_plus_gx`      |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega SG-1000  | `SG1000` | `gearsystem`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega SG-1000  | `SG1000` | `bluemsx`              |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega SG-1000  | `SG1000` | `genesis_plus_gx_wide` |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega SG-1000  | `SG1000` | MasterGear             |                                                                                                    :material-android:{ .android } |
| Master System | `SMS`    | `genesis_plus_gx`      |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Master System | `SMS`    | `picodrive`            |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Master System | `SMS`    | `gearsystem`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Master System | `SMS`    | `smsplus`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Master System | `SMS`    | `genesis_plus_gx_wide` |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Master System | `SMS`    | MD.emu                 |                                                                                                    :material-android:{ .android } |
| Master System | `SMS`    | MasterGear             |                                                                                                    :material-android:{ .android } |
| Master System | `SMS`    | Pizza Boy SC           |                                                                                                    :material-android:{ .android } |
| Sega Genesis  | `MD`     | `genesis_plus_gx`      |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Genesis  | `MD`     | `picodrive`            |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Genesis  | `MD`     | `blastem`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Genesis  | `MD`     | `genesis_plus_gx_wide` |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Genesis  | `MD`     | MD.emu                 |                                                                                                    :material-android:{ .android } |
| Sega Genesis  | `MD`     | Pizza Boy SC           |                                                                                                    :material-android:{ .android } |
| Sega CD       | `SEGACD` | `genesis_plus_gx`      | :material-check-bold:{ .shipped } :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega CD       | `SEGACD` | `picodrive`            |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega CD       | `SEGACD` | `genesis_plus_gx_wide` |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega CD       | `SEGACD` | MD.emu                 |                                                                                                    :material-android:{ .android } |
| Sega CD       | `SEGACD` | Pizza Boy SC           |                                                                                                    :material-android:{ .android } |
| Game Gear     | `GG`     | `genesis_plus_gx`      |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Gear     | `GG`     | `picodrive`            |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Gear     | `GG`     | `gearsystem`           |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Gear     | `GG`     | `smsplus`              |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Gear     | `GG`     | `genesis_plus_gx_wide` |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Game Gear     | `GG`     | MasterGear             |                                                                                                    :material-android:{ .android } |
| Game Gear     | `GG`     | Pizza Boy SC           |                                                                                                    :material-android:{ .android } |
| Sega 32X      | `32X`    | `picodrive`            |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | `mednafen_saturn`      |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | `kronos`               |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | `yabasanshiro`         |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | YabaSanshiro2 Pro      |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | YabaSanshiro2          |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| Sega Saturn   | `SATURN` | Saturn.emu             |                                                                                                    :material-android:{ .android } |
| Dreamcast     | `DC`     | `flycast`              |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Dreamcast     | `DC`     | `flycast_gles2`        |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Dreamcast     | `DC`     | Flycast                |                                                                                                    :material-android:{ .android } |
| Dreamcast     | `DC`     | Redream                |                                                                                                    :material-android:{ .android } |

### Sony

| Platform      | Folder   | Core / App            |                                                                                                                                   |
| ------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------: |
| PlayStation   | `PS`     | `pcsx_rearmed`        |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PlayStation   | `PS`     | `swanstation`         | :material-check-bold:{ .shipped } :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PlayStation   | `PS`     | `mednafen_psx`        |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PlayStation   | `PS`     | `mednafen_psx_hw`     |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PlayStation   | `PS`     | `duckstation`         |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PlayStation   | `PS`     | DuckStation           |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| PlayStation   | `PS`     | ePSXe                 |                                                                                                    :material-android:{ .android } |
| PlayStation   | `PS`     | FPse                  |                                                                                                    :material-android:{ .android } |
| PlayStation   | `PS`     | FPse64                |                                                                                                    :material-android:{ .android } |
| PSP           | `PSP`    | `ppsspp`              |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PSP           | `PSP`    | PPSSPP                |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| PSP           | `PSP`    | PPSSPP Gold           |                                                                       :material-android:{ .android } :material-trophy:{ .trophy } |
| PlayStation 2 | `PS2`    | AetherSX2 / NetherSX2 |                                     :material-chip:{ .bios-required } :material-android:{ .android } :material-trophy:{ .trophy } |
| PlayStation 2 | `PS2`    | ARMSX2                |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |
| PlayStation 2 | `PS2`    | EmuCoreX              |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |
| PlayStation 2 | `PS2`    | Play!                 |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |
| PlayStation 3 | `PS3`    | aPS3e Premium         |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |
| PlayStation 3 | `PS3`    | aPS3e                 |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |
| PS Vita       | `PSVITA` | Vita3K                |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |
| PS Vita       | `PSVITA` | Vita3K ikhoeyZX fork  |                                                                  :material-chip:{ .bios-required } :material-android:{ .android } |

### Atari

| Platform     | Folder      | Core / App      |                                                                                                                                   |
| ------------ | ----------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------: |
| Atari 2600   | `ATARI2600` | `stella`        |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari 2600   | `ATARI2600` | `stella2014`    |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari 2600   | `ATARI2600` | 2600.emu        |                                                                                                    :material-android:{ .android } |
| Atari 5200   | `ATARI5200` | `atari800`      |                                                                :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } |
| Atari 5200   | `ATARI5200` | `a5200`         |                                                                :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } |
| Atari 7800   | `ATARI7800` | `prosystem`     | :material-check-bold:{ .shipped } :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari Jaguar | `JAGUAR`    | `virtualjaguar` |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari Jaguar | `JAGUAR`    | IrataJaguar     |                                                                                                    :material-android:{ .android } |
| Atari Lynx   | `LYNX`      | `handy`         | :material-check-bold:{ .shipped } :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari Lynx   | `LYNX`      | `mednafen_lynx` |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Atari Lynx   | `LYNX`      | Lynx.emu        |                                                                                                    :material-android:{ .android } |

### NEC

| Platform             | Folder       | Core / App            |                                                                                                 |
| -------------------- | ------------ | --------------------- | ----------------------------------------------------------------------------------------------: |
| PC Engine            | `PCE`        | `mednafen_pce_fast`   | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PC Engine            | `PCE`        | `mednafen_pce`        |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PC Engine            | `PCE`        | PCE.emu               |                                                                  :material-android:{ .android } |
| PC Engine SuperGrafx | `SUPERGRAFX` | `mednafen_supergrafx` |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PC Engine SuperGrafx | `SUPERGRAFX` | `mednafen_pce`        |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PC Engine SuperGrafx | `SUPERGRAFX` | `geargrafx`           |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| PC Engine SuperGrafx | `SUPERGRAFX` | PCE.emu               |                                                                  :material-android:{ .android } |
| PC-FX                | `PCFX`       | `mednafen_pcfx`       | :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |

### SNK

| Platform             | Folder   | Core / App     |                                                                                                                                   |
| -------------------- | -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------: |
| Neo Geo Pocket       | `NGP`    | `mednafen_ngp` |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Neo Geo Pocket       | `NGP`    | `race`         |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Neo Geo Pocket       | `NGP`    | NGP.emu        |                                                                                                    :material-android:{ .android } |
| Neo Geo Pocket Color | `NGPC`   | `mednafen_ngp` |                                   :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Neo Geo Pocket Color | `NGPC`   | `race`         |                                                                     :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Neo Geo Pocket Color | `NGPC`   | NGP.emu        |                                                                                                    :material-android:{ .android } |
| Neo Geo              | `NEOGEO` | `fbneo`        | :material-check-bold:{ .shipped } :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Neo Geo              | `NEOGEO` | `geolith`      |                                   :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Neo Geo              | `NEOGEO` | NEO.emu        |                                                                                                    :material-android:{ .android } |
| Neo Geo              | `NEOGEO` | MAME4droid     |                                                                                                    :material-android:{ .android } |

### Bandai

| Platform         | Folder | Core / App       |                                                                                                 |
| ---------------- | ------ | ---------------- | ----------------------------------------------------------------------------------------------: |
| WonderSwan       | `WS`   | `mednafen_wswan` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| WonderSwan       | `WS`   | Swan.emu         |                                                                  :material-android:{ .android } |
| WonderSwan Color | `WSC`  | `mednafen_wswan` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| WonderSwan Color | `WSC`  | Swan.emu         |                                                                  :material-android:{ .android } |

### Arcade

| Platform | Folder | Core / App      |                                                                                                 |
| -------- | ------ | --------------- | ----------------------------------------------------------------------------------------------: |
| Arcade   | `MAME` | `mame2003_plus` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Arcade   | `MAME` | `mame`          |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Arcade   | `MAME` | `mame2000`      |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Arcade   | `MAME` | `mame2003`      |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Arcade   | `MAME` | `mame2010`      |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Arcade   | `FBN`  | `fbneo`         | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Arcade   | `MAME` | MAME4droid      |                                                                  :material-android:{ .android } |
| Arcade   | `MAME` | NEO.emu         |                                                                  :material-android:{ .android } |
| Arcade   | `MAME` | Flycast         |                                                                  :material-android:{ .android } |

### Other

| Platform      | Folder          | Core / App   |                                                                                                 |
| ------------- | --------------- | ------------ | ----------------------------------------------------------------------------------------------: |
| Intellivision | `INTELLIVISION` | `freeintv`   | :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ColecoVision  | `COLECOVISION`  | `bluemsx`    | :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ColecoVision  | `COLECOVISION`  | `gearcoleco` | :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ColecoVision  | `COLECOVISION`  | ColEm Deluxe |                                                                  :material-android:{ .android } |
| ColecoVision  | `COLECOVISION`  | ColEm        |                                                                  :material-android:{ .android } |
| ColecoVision  | `COLECOVISION`  | MSX.emu      |                                                                  :material-android:{ .android } |
| Vectrex       | `VECTREX`       | `vecx`       |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |

### Computer

| Platform                     | Folder    | Core / App    |                                                                                                 |
| ---------------------------- | --------- | ------------- | ----------------------------------------------------------------------------------------------: |
| Amiga, Amiga 500, Amiga 1200 | `AMIGA`   | `puae`        | :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| Amiga, Amiga 500, Amiga 1200 | `AMIGA`   | `puae2021`    | :material-chip:{ .bios-required } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| DOS                          | `DOS`     | `dosbox_pure` |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| DOS                          | `DOS`     | `dosbox_core` |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| DOS                          | `DOS`     | `dosbox_svn`  |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ScummVM                      | `SCUMMVM` | `scummvm`     |                                   :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy } |
| ScummVM                      | `SCUMMVM` | ScummVM       |                                                                  :material-android:{ .android } |

<script>
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.platform-filter');
  var tables = document.querySelectorAll('.md-typeset table');

  buttons.forEach(function {
    btn.addEventListener('click', function() {
      buttons.forEach(function { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      tables.forEach(function {
        var rows = table.querySelectorAll('tbody tr');
        var visibleCount = 0;
        rows.forEach(function {
          var isBundled = row.querySelector('.shipped') !== null;
          var isRetroarch = row.querySelector('.retroarch') !== null;
          var isStandalone = row.querySelector('.android') !== null;
          var match;
          if (filter === 'all') {
            match = true;
          } else if (filter === 'bundled') {
            match = isBundled;
          } else if (filter === 'retroarch') {
            match = isRetroarch;
          } else if (filter === 'standalone') {
            match = isStandalone;
          }
          row.style.display = match ? '' : 'none';
          if visibleCount++;
        });

        var el = table;
        while (el.parentElement && el.parentElement.classList.contains('md-typeset') === false) {
          el = el.parentElement;
        }
        var heading = el.previousElementSibling;
        while (heading && heading.tagName !== 'H3') {
          heading = heading.previousElementSibling;
        }
        el.style.display = visibleCount === 0 ? 'none' : '';
        if heading.style.display = visibleCount === 0 ? 'none' : '';
      });
    });
  });
});
</script>
