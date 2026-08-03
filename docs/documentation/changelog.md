## [v1.9.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.9.0) - The Localization Release

Cannoli speaks more than English now! If you want to get involved with the localization effort, please visit
the [Cannoli Project on Crowdfin](https://l10n.cannoli.dev).

Also included is a hodge podge of simple QoL features and cleanup.

| Feature / Fix                                                                                                                                    | Issue                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Feat: **Localization** - Cannoli's interface is translatable, with a Language picker in the new Settings > General category                      | [#208](https://github.com/CannoliHQ/cannoli/issues/208) |
| Feat: New [PC platform](platforms/pc.md) that launches your GameNative or GameHub Lite library from shortcut files in `Roms/PC`                  | [#100](https://github.com/CannoliHQ/cannoli/issues/100) |
| Feat: [Box art for Tools and Ports](customization.md#box-art), with Delete Box Art in the context menu and art that follows a rename             | N/A                                                     |
| Feat: GameCube and Wii emulators launch intent cleanup [Emulator Mapping](settings.md#emulation)                                                 | [#170](https://github.com/CannoliHQ/cannoli/issues/170) |
| Feat: Eden Nightly added, and the standalone emulator lists trimmed down to maintained apps                                                      | [#206](https://github.com/CannoliHQ/cannoli/issues/206) |
| Feat: [RomM Download Queue](romm.md#romm-quick-menu) entry in the quick menu while downloads are pending                                         | N/A                                                     |
| Feat: RomM cache sync status shown in the status bar                                                                                             | N/A                                                     |
| Feat: [Favorites](library.md#favorites) row can be hidden from Settings > Library, same as Recently Played                                       | N/A                                                     |
| Fix: Multi-file RomM downloads arriving as empty 0 KB files, now fetched file by file                                                            | [#215](https://github.com/CannoliHQ/cannoli/issues/215) |
| Fix: Multi-part RomM games (Switch and friends) failing to install                                                                               | [#213](https://github.com/CannoliHQ/cannoli/issues/213) |
| Fix: Azahar failing to launch 3DS games; the ROM is handed over as a content URI now                                                             | [#171](https://github.com/CannoliHQ/cannoli/issues/171) |
| Fix: Dolphin MMJR2 dropping to its own menu instead of booting the game                                                                          | [#204](https://github.com/CannoliHQ/cannoli/issues/204) |
| Fix: Games launching in the first installed emulator instead of the one you picked                                                               | N/A                                                     |
| Fix: Arcade CHD subfolders showing up as separate games                                                                                          | [#129](https://github.com/CannoliHQ/cannoli/issues/129) |
| Fix: Box art vanishing after a rename until something else forced a rebuild                                                                      | N/A                                                     |
| Fix: "Core not installed: unknown" on app-only platforms, which now names the missing app and offers Change Emulator                             | N/A                                                     |
| Fix: A failed launch from a per-game override rewriting the global mapping and failing again next time                                           | N/A                                                     |
| Fix: Tool and Port box art missing on the home screen in [Five Game Handheld](library.md#five-game-handheld) mode                                | N/A                                                     |

---

## [v1.8.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.8.0) - The [RomM](https://romm.app) Release

| Feature / Fix                                                                                                                                   | Issue                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Feat: [Browse and download games](romm.md#browsing-your-romm-library) from your RomM server, with streamed downloads and on-device tracking     | N/A                                                     |
| Feat: RomM [cover art](romm.md#box-art) with selectable art types, plus Download Missing Art for games already on device                        | N/A                                                     |
| Feat: Browse RomM [Collections](romm.md#browsing-your-romm-library) (user, virtual, and smart) with per-collection toggles                      | N/A                                                     |
| Feat: Download [firmware and BIOS files](romm.md#firmware) per system from RomM                                                                 | [#169](https://github.com/CannoliHQ/cannoli/issues/169) |
| Feat: Download game [manuals](romm.md#browsing-your-romm-library) from RomM straight into the guides folder                                     | N/A                                                     |
| Feat: [RomM Save Sync](romm.md#save-sync) (automatic SRAM sync, conflict resolution, and backup/restore)                                        | N/A                                                     |
| Feat: [Pair with a RomM server](romm.md#pairing) by scanning a QR code or entering a pair code                                                  | N/A                                                     |
| Feat: [Browse RomM offline](romm.md#offline-browsing) from a cached metadata mirror that syncs when connected                                   | N/A                                                     |
| Feat: [Game cheats](playing-games.md#cheats): drop in .cht files and toggle them from a new Cheats screen (RetroArch-compatible)                | N/A                                                     |
| Feat: [Guides viewer](playing-games.md#guide) to read PDF guides and manuals from the game context menu and in-game                             | N/A                                                     |
| Feat: [Offline RetroAchievements](retroachievements.md#offline-play): preload sets while online, then earn and view them offline                | N/A                                                     |
| Feat: [Nonna's Kitchen](nonnas-kitchen.md) rebuilt on a new file server with a game-centric web UI for ROMs, saves, states, guides, and box art | N/A                                                     |
| Feat: Install APKs and browse device storage volumes from [Nonna's Kitchen](nonnas-kitchen.md#tools)                                            | [#122](https://github.com/CannoliHQ/cannoli/issues/122) |
| Feat: [Nonna's Kitchen](nonnas-kitchen.md#what-you-can-do) now lets you manage cheats and shaders                                               | N/A                                                     |
| Feat: Core Mapping redesigned as a source-first [Emulator Mapping](settings.md#emulation) screen (Source, Emulator, BIOS, per-game overrides)   | N/A                                                     |
| Feat: [Screen Geometry](settings.md#advanced) display calibration to fit the whole app into a custom rectangle (e.g. CRT-via-converter setups)  | N/A                                                     |
| Feat: [On-screen keyboard help overlay](button-reference.md#on-screen-keyboard), opened by pressing MENU for a controls cheat sheet             | N/A                                                     |
| Feat: [4-Way D-Pad mode](playing-games.md#input) to suppress diagonals for 4-way games, behind Experimental Features                            | N/A                                                     |
| Feat: Left stick as D-Pad toggle, with Button Mappings and Shortcuts grouped under a new [Settings > Input](playing-games.md#input) screen      | N/A                                                     |
| Feat: [Hold the resume button](playing-games.md#resuming-a-game) to open the save-state picker                                                  | [#98](https://github.com/CannoliHQ/cannoli/issues/98)   |
| Feat: [Diacritic-insensitive global search](library.md#search) so accented titles match plain letters                                           | N/A                                                     |
| Fix: Guard newer-API calls that crashed on Android 9                                                                                            | N/A                                                     |
| Fix: Smoother frame pacing so the game no longer runs fast on high-refresh panels                                                               | N/A                                                     |

---

## [v1.7.9](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.9)

| Feature / Fix                                                                                                   | Issue |
|-----------------------------------------------------------------------------------------------------------------|-------|
| Feat: Onboarding Continue button, and reinstalls pre-select your existing storage with its Cannoli folder shown | N/A   |
| Fix: Setup screen appears immediately after granting storage permission instead of a brief black screen         | N/A   |

---

## [v1.7.8](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.8)

| Feature / Fix                                                                 | Issue                                                   |
|-------------------------------------------------------------------------------|---------------------------------------------------------|
| Fix: Core runner crash on NGP/PCE from incorrect libretro env command numbers | N/A                                                     |
| Feat: Storage logging option to record at boot                                | [#181](https://github.com/CannoliHQ/cannoli/issues/181) |

---

## [v1.7.7](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.7)

| Feature / Fix                                                              | Issue                                                   |
|----------------------------------------------------------------------------|---------------------------------------------------------|
| Fix: Renaming a game no longer copies the entire ROM file                  | [#180](https://github.com/CannoliHQ/cannoli/issues/180) |
| Fix: Suppress "Game list updated" OSD after launcher-driven renames/delete | N/A                                                     |

---

## [v1.7.6](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.6)

| Feature / Fix                                | Issue                                                   |
|----------------------------------------------|---------------------------------------------------------|
| Fix: RetroArch DIY Mode behavior             | N/A                                                     |
| Feat: Add support for Vita3K `.psvita` files | [#165](https://github.com/CannoliHQ/cannoli/issues/165) |

---

## [v1.7.5](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.5)

| Feature / Fix                                                                           | Issue                                                   |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Feat: Rename app shortcuts in Tools/Ports                                               | [#177](https://github.com/CannoliHQ/cannoli/issues/177) |
| Fix: Game saves / save states to be keyed on display name rather than archived filename | N/A                                                     |

---

## [v1.7.4](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.4)

| Feature / Fix                                              | Issue                                                   |
|------------------------------------------------------------|---------------------------------------------------------|
| Feat: Rename platforms to their short code in the launcher | [#179](https://github.com/CannoliHQ/cannoli/issues/179) |
| Fix: USB DAC crash by pinning Oboe output to 48kHz         | [#178](https://github.com/CannoliHQ/cannoli/issues/178) |
| Fix: Storage wizard appearing before SD mount completes    | [#174](https://github.com/CannoliHQ/cannoli/issues/174) |

---

## [v1.7.3](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.3)

| Feature / Fix                                                     | Issue |
|-------------------------------------------------------------------|-------|
| Fix: Battery indicator hidden on Android TV builds (e.g. GammaOS) | N/A   |

---

## [v1.7.2](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.2)

| Feature / Fix                                              | Issue |
|------------------------------------------------------------|-------|
| Fix: Slow PICO-8 cart list when scanning hundreds of carts | N/A   |

---

## [v1.7.1](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.1)

| Feature / Fix                                          | Issue                                                   |
|--------------------------------------------------------|---------------------------------------------------------|
| Feat: PICO-8 fallback to built-in art (`.p8.png` only) | [#173](https://github.com/CannoliHQ/cannoli/issues/173) |

---

## [v1.7.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.7.0)

Just a quickie to hold you over while I cook more stuff up.

| Feature / Fix                                                                                           | Issue                                                   |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Feat: PICO-8 support, [standalone](https://github.com/Macs75/pico8-android) and requires PICO-8 License | [#135](https://github.com/CannoliHQ/cannoli/issues/135) |
| Feat: Press and hold shortcut to save and exit                                                          | [#168](https://github.com/CannoliHQ/cannoli/issues/168) |
| Fix: Core runner crash on PCE when pressing the menu button                                             | [#172](https://github.com/CannoliHQ/cannoli/issues/172) |

---

## [v1.6.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.6.0)

The "Fix All The Tech Debt" release!

A good chunk of this release is internal rework, including a brand-new input system and a
SQLite-backed library.

| Feature / Fix                                                                                                | Issue                                                   |
|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Feat: Rebuilt input system                                                                                   | N/A                                                     |
| Feat: Edit Buttons screen for per-platform / per-game remaps                                                 | N/A                                                     |
| Feat: Per-controller settings (confirm button, exclude from gameplay) and rename from the Controllers screen | N/A                                                     |
| Feat: Smoother video and audio with display refresh-rate matching and tighter frame pacing                   | N/A                                                     |
| Feat: SQLite-backed library with natural sorting                                                             | N/A                                                     |
| Feat: Library scan progress shown on startup                                                                 | N/A                                                     |
| Feat: Per-subsystem logging toggles (ROM Scan, Input, Game Session)                                          | N/A                                                     |
| Feat: Reassign which controller is which player from the In-Game Menu                                        | [#155](https://github.com/CannoliHQ/cannoli/issues/155) |
| Feat: Background and Status Bar colors in Appearance > Colors                                                | [#153](https://github.com/CannoliHQ/cannoli/issues/153) |
| Feat: Icon-only battery option for the status bar                                                            | [#154](https://github.com/CannoliHQ/cannoli/issues/154) |
| Feat: Show filename and platform tags when duplicate game names exist                                        | [#77](https://github.com/CannoliHQ/cannoli/issues/77)   |
| Feat: Auto-organize loose multi-disc sets into per-game subfolders with generated `.m3u`                     | [#117](https://github.com/CannoliHQ/cannoli/issues/117) |
| Feat: Redesigned onboarding with a dedicated permissions step                                                | N/A                                                     |
| Feat: inotify-driven library auto-rescan when ROMs change on disk                                            | N/A                                                     |
| Feat: RA Locked filter on the achievement list and refreshed RA OSD timeouts                                 | N/A                                                     |
| Feat: Honor the configured external ROMs folder in Nonna's Kitchen                                           | [#115](https://github.com/CannoliHQ/cannoli/issues/115) |
| Fix: PS2 launch failed for NetherSX2 and ArmSX2                                                              | [#158](https://github.com/CannoliHQ/cannoli/issues/158) |
| Fix: Stadia controller L2/R2 triggers detected as constant -1                                                | [#151](https://github.com/CannoliHQ/cannoli/issues/151) |
| Fix: Disc swap for multi-disc PBP PlayStation games via the In-Game Menu                                     | [#78](https://github.com/CannoliHQ/cannoli/issues/78)   |
| Fix: Show the save-state prompt when exiting IGM settings                                                    | [#16](https://github.com/CannoliHQ/cannoli/issues/16)   |
| Fix: Mupen64Plus FZ splash screen handling                                                                   | [#149](https://github.com/CannoliHQ/cannoli/issues/149) |

---

## [v1.5.3](https://github.com/CannoliHQ/cannoli/releases/tag/v1.5.3)

Quick fix for shader regression when removing slang support.

---

## [v1.5.2](https://github.com/CannoliHQ/cannoli/releases/tag/v1.5.2)

| Feature / Fix                           | Issue                                                   |
|-----------------------------------------|---------------------------------------------------------|
| Fix: Shortcuts regression with triggers | [#150](https://github.com/CannoliHQ/cannoli/issues/150) |
| Fix: Missed a few old logos             | N/A                                                     |

---

## [v1.5.1](https://github.com/CannoliHQ/cannoli/releases/tag/v1.5.1)

Forgot to update the credits for bundled shaders and the new logo!

---

## [v1.5.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.5.0)

| Feature / Fix                                             | Issue                                                   |
|-----------------------------------------------------------|---------------------------------------------------------|
| Feat: Auto save state when quitting a game                | [#132](https://github.com/CannoliHQ/cannoli/issues/132) |
| Feat: Virtual Android TV Settings entry in Manage Tools   | [#147](https://github.com/CannoliHQ/cannoli/issues/147) |
| Fix: DraStic fails to open ROMs                           | [#146](https://github.com/CannoliHQ/cannoli/issues/146) |
| Fix: Select button cannot be mapped from Settings > Input | [#101](https://github.com/CannoliHQ/cannoli/issues/101) |
| Executive Decision: Remove slang shader support           | N/A                                                     |

---

## [v1.4.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.4.0)

| Feature / Fix                                         | Issue                                                                                                            |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Feat: Built-in directory browser for TV devices       | [#108](https://github.com/CannoliHQ/cannoli/issues/108), [#137](https://github.com/CannoliHQ/cannoli/issues/137) |
| Feat: Integer Overscale scaling                       | [#140](https://github.com/CannoliHQ/cannoli/issues/140)                                                          |
| Feat: Portrait Margin for clamp controllers           | [#134](https://github.com/CannoliHQ/cannoli/issues/134)                                                          |
| Feat: Auto TV Mode on supported TV boxes              | [#80](https://github.com/CannoliHQ/cannoli/issues/80)                                                            |
| Feat: Libretro v1 core options                        | [#141](https://github.com/CannoliHQ/cannoli/issues/141)                                                          |
| Feat: Kitchen code bypass toggle                      | [#95](https://github.com/CannoliHQ/cannoli/issues/95)                                                            |
| Feat: Cycle network interfaces in Nonna's Kitchen     | [#91](https://github.com/CannoliHQ/cannoli/issues/91)                                                            |
| Feat: Missing-BIOS warning before launch              | [#130](https://github.com/CannoliHQ/cannoli/issues/130)                                                          |
| Feat: Auto RetroAchievements token refresh            | [#113](https://github.com/CannoliHQ/cannoli/issues/113)                                                          |
| Feat: Debug logging toggle                            | [#112](https://github.com/CannoliHQ/cannoli/issues/112)                                                          |
| Feat: Input tester diagnostic screen                  | Was lazy!                                                                                                        |
| Fix: Custom fonts and confirm button glyph            | [#120](https://github.com/CannoliHQ/cannoli/issues/120), [#128](https://github.com/CannoliHQ/cannoli/issues/128) |
| Fix: Resume button missing in 5GH and Recently Played | [#99](https://github.com/CannoliHQ/cannoli/issues/99), [#119](https://github.com/CannoliHQ/cannoli/issues/119)   |
| Fix: Box art clipping under status bar in 5GH         | [#102](https://github.com/CannoliHQ/cannoli/issues/102)                                                          |
| Fix: Stale Recently Played after ROM rename           | [#136](https://github.com/CannoliHQ/cannoli/issues/136)                                                          |
| Fix: Guide paths with filename tags                   | [#116](https://github.com/CannoliHQ/cannoli/issues/116)                                                          |
| Fix: Shader params persisting across saves            | [#111](https://github.com/CannoliHQ/cannoli/issues/111)                                                          |
| Fix: CRT glitches when cycling shaders                | [#139](https://github.com/CannoliHQ/cannoli/issues/139)                                                          |
| Fix: Volume/media keys in IGM                         | [#126](https://github.com/CannoliHQ/cannoli/issues/126)                                                          |
| Fix: L2/R2 trigger detection                          | [#89](https://github.com/CannoliHQ/cannoli/issues/89)                                                            |
| Fix: Player 2 menu triggering Home                    | [#21](https://github.com/CannoliHQ/cannoli/issues/21)                                                            |
| Fix: External emulator package names                  | [#85](https://github.com/CannoliHQ/cannoli/issues/85), [#94](https://github.com/CannoliHQ/cannoli/issues/94)     |
| Fix: Arcade audio speed in FBNeo/MAME                 | [#125](https://github.com/CannoliHQ/cannoli/issues/125)                                                          |
| Fix: Nonna's Kitchen large upload freezes             | [#93](https://github.com/CannoliHQ/cannoli/issues/93)                                                            |
| Fix: "Press any button" prompt                        | [#90](https://github.com/CannoliHQ/cannoli/issues/90)                                                            |
| Fix: XBOX controller layout                           | [#92](https://github.com/CannoliHQ/cannoli/issues/92)                                                            |
| Fix: 5GH setup jank                                   | [#84](https://github.com/CannoliHQ/cannoli/issues/84)                                                            |

---

## [v1.3.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.3.0)

| Feature / Fix                                                                | Issue                                                 |
|------------------------------------------------------------------------------|-------------------------------------------------------|
| Feat: File permissions prompt when not granted                               | [#82](https://github.com/CannoliHQ/cannoli/issues/82) |
| Feat: Debug logging in the built-in core runner                              | [#88](https://github.com/CannoliHQ/cannoli/issues/88) |
| Fix: Audio latency in built-in core runner (replaced with native Oboe audio) | [#81](https://github.com/CannoliHQ/cannoli/issues/81) |
| Fix: Fast forward not working in built-in core runner                        | [#79](https://github.com/CannoliHQ/cannoli/issues/79) |
| Fix: `Unsupported Game Version` treated as an achievement                    | [#87](https://github.com/CannoliHQ/cannoli/issues/87) |
| Fix: SNES controller type defaults to `None`                                 | [#86](https://github.com/CannoliHQ/cannoli/issues/86) |
| Fix: Five Game Handheld box art not showing                                  | [#83](https://github.com/CannoliHQ/cannoli/issues/83) |
| Fix: Updated arcade map.txt                                                  | [#76](https://github.com/CannoliHQ/cannoli/issues/76) |

---

## [v1.2.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.2.0)

| Feature / Fix                                                                      | Issue                                                 |
|------------------------------------------------------------------------------------|-------------------------------------------------------|
| Feat: [Show / Hide Platforms](library.md#content-modes) for collection-only setups | [#69](https://github.com/CannoliHQ/cannoli/issues/69) |
| Feat: [Five Game Handheld Mode](library.md#content-modes)                          | [#75](https://github.com/CannoliHQ/cannoli/issues/75) |

---

## [v1.1.1](https://github.com/CannoliHQ/cannoli/releases/tag/v1.1.1)

| Feature / Fix                                  | Issue                                                 |
|------------------------------------------------|-------------------------------------------------------|
| Fix: Ignore `systeminfo.txt` from games list   | [#73](https://github.com/CannoliHQ/cannoli/issues/73) |
| Fix: PS2 app ID incorrect                      | [#71](https://github.com/CannoliHQ/cannoli/issues/71) |
| Fix: Random offline achievement synced message | [#68](https://github.com/CannoliHQ/cannoli/issues/68) |
| Fix: Tools show up in recently played          | [#67](https://github.com/CannoliHQ/cannoli/issues/67) |

---

## [v1.1.0](https://github.com/CannoliHQ/cannoli/releases/tag/v1.1.0)

| Feature / Fix                                                                                                                   | Issue                                                 |
|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Feat: [Recently Played](library.md#recently-played) list with show/hide toggle and clear option                                 | [#59](https://github.com/CannoliHQ/cannoli/issues/59) |
| Feat: [Title color](customization.md#colors) setting                                                                            | [#61](https://github.com/CannoliHQ/cannoli/issues/61) |
| Feat: Platform specific [button legends](settings.md#input) (Plumber, Redmond, Shapes)                                          | [#41](https://github.com/CannoliHQ/cannoli/issues/41) |
| Feat: [Filter file extensions](directory-structure.md#config-folder-reference) from games list via `ignore_extensions_roms.txt` | [#50](https://github.com/CannoliHQ/cannoli/issues/50) |
| Feat: Ship [`arcade_map.txt`](directory-structure.md#config-folder-reference) for human-readable arcade game titles             | [#20](https://github.com/CannoliHQ/cannoli/issues/20) |
| Feat: Organize Config folder                                                                                                    | [#66](https://github.com/CannoliHQ/cannoli/issues/66) |

---

## [v1.0.9](https://github.com/CannoliHQ/cannoli/releases/tag/v1.0.9)

| Feature / Fix                                                                                                       | Issue                                                 |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Feat: Add [Aspect Screen](customization.md#art-scale) Scaling Option                                                | [#18](https://github.com/CannoliHQ/cannoli/issues/18) |
| Feat: Add [RetroArch DIY Mode](settings.md#advanced) (no config injection, makes Cannoli work like other launchers) | [#51](https://github.com/CannoliHQ/cannoli/issues/51) |
| Fix: Address poor performance for large / highly nested collections                                                 | [#58](https://github.com/CannoliHQ/cannoli/issues/58) |

---

## [v1.0.8](https://github.com/CannoliHQ/cannoli/releases/tag/v1.0.8)

| Feature / Fix                                         | Issue                                                 |
|-------------------------------------------------------|-------------------------------------------------------|
| Fix: Missing Confirm Quit when Quit option is enabled | [#52](https://github.com/CannoliHQ/cannoli/issues/52) |
| Fix: Genesis Plus GX crashing                         | [#49](https://github.com/CannoliHQ/cannoli/issues/49) |
| Fix: DualShock mode not enabling on PSX               | [#48](https://github.com/CannoliHQ/cannoli/issues/48) |

---

## [v1.0.7](https://github.com/CannoliHQ/cannoli/releases/tag/v1.0.7)

| Feature / Fix                                                 | Issue                                                 |
|---------------------------------------------------------------|-------------------------------------------------------|
| Fix: IGM does not respect font size                           | [#47](https://github.com/CannoliHQ/cannoli/issues/47) |
| Fix: Make battery icon more consistent                        | [#46](https://github.com/CannoliHQ/cannoli/issues/46) |
| Fix: Larger font sizes cause last visible item in list to pop | [#45](https://github.com/CannoliHQ/cannoli/issues/45) |

---

## [v1.0.6](https://github.com/CannoliHQ/cannoli/releases/tag/v1.0.6)

| Feature / Fix                                                                                      | Issue                                                 |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Add Tools and Ports to [Favorites](library.md#favorites) and [Collections](library.md#collections) | [#43](https://github.com/CannoliHQ/cannoli/issues/43) |
| Option in advanced to [set Cannoli as default launcher](settings.md#advanced)                      | [#44](https://github.com/CannoliHQ/cannoli/issues/44) |
| [Reorder](library.md#reordering) Tools and Ports                                                   | [#25](https://github.com/CannoliHQ/cannoli/issues/25) |
| Option to [quit from main menu](settings.md#input)                                                 | [#36](https://github.com/CannoliHQ/cannoli/issues/36) |
| [Font size](customization.md#text-size) uses scalable points with a range of options               | [#39](https://github.com/CannoliHQ/cannoli/issues/39) |
| Button legends scale with font size                                                                | [#39](https://github.com/CannoliHQ/cannoli/issues/39) |
| Fix: remove shortcut when a Tool or Port is uninstalled                                            | [#42](https://github.com/CannoliHQ/cannoli/issues/42) |
| Fix: Flip Resume/Play no longer incorrectly impacts Tools/Ports                                    | [#38](https://github.com/CannoliHQ/cannoli/issues/38) |
| Fix: case-insensitive platform tag matching                                                        | [#40](https://github.com/CannoliHQ/cannoli/issues/40) |

---

## [v1.0.5](https://github.com/CannoliHQ/cannoli/releases/tag/v1.0.5)

| Feature / Fix                                                                      | Issue                                                                                                        |
|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Multi-tasking while in game                                                        | [#26](https://github.com/CannoliHQ/cannoli/issues/26)                                                        |
| Quitting app while in-game saves auto slot and auto-resumes on next launch         | [#26](https://github.com/CannoliHQ/cannoli/issues/26)                                                        |
| Framerate fix attempt for 120 Hz devices                                           | [#17](https://github.com/CannoliHQ/cannoli/issues/17)                                                        |
| Fix caching regression affecting art display and resume                            | [#22](https://github.com/CannoliHQ/cannoli/issues/22), [#24](https://github.com/CannoliHQ/cannoli/issues/24) |
| Dot-prefixed files/folders are now hidden                                          | [#23](https://github.com/CannoliHQ/cannoli/issues/23)                                                        |
| [Resume](playing-games.md#resuming-a-game) works with any save slot, not just auto | [#28](https://github.com/CannoliHQ/cannoli/issues/28)                                                        |
| Bundled OG MinUI font (not default)                                                | [#15](https://github.com/CannoliHQ/cannoli/issues/15)                                                        |
| Load [custom fonts](customization.md#font) from `Cannoli Root/Config/Fonts`        | [#15](https://github.com/CannoliHQ/cannoli/issues/15)                                                        |
| User-defined [main menu title](customization.md#title)                             | [#29](https://github.com/CannoliHQ/cannoli/issues/29)                                                        |
| [Roms folder](settings.md#library) can be split from Cannoli Root in Advanced      | [#12](https://github.com/CannoliHQ/cannoli/issues/12)                                                        |
| Hack for vertical FBN games to display top-up                                      | [#19](https://github.com/CannoliHQ/cannoli/issues/19), [#32](https://github.com/CannoliHQ/cannoli/issues/32) |
| Toggle to [flip Play and Resume](settings.md#input) buttons                        | [#35](https://github.com/CannoliHQ/cannoli/issues/35)                                                        |
| Unmap buttons for [shortcuts](settings.md#input)                                   | [#31](https://github.com/CannoliHQ/cannoli/issues/31)                                                        |