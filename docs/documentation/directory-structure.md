## Directory Structure

Cannoli uses an opinionated directory structure heavily inspired by [MinUI](https://github.com/shauninman/MinUI).

All paths below are relative to the **Cannoli Root** you picked during initial setup.

```
Cannoli Root/
├── Art/
├── Backup/
├── BIOS/
├── Config/
│   ├── arcade_map.txt
│   ├── cannoli.db
│   ├── ignore_extensions_roms.txt
│   ├── ignore_files_roms.txt
│   ├── platforms.ini
│   ├── settings.json
│   ├── Assets/
│   ├── Cache/
│   ├── Fonts/
│   ├── Input/
│   │   └── Mappings/
│   ├── Launch Scripts/
│   │   ├── Ports/
│   │   └── Tools/
│   ├── Ordering/
│   ├── Overrides/
│   │   ├── Cores/
│   │   ├── Games/
│   │   └── systems/
│   ├── Profiles/
│   ├── RetroAchievements/
│   ├── RetroArch/
│   └── State/
├── Guides/
├── Logs/
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

> [!TIP]
> Are your eyes glazed over from looking at the above structure?
>
> Go use [Nonna's Kitchen](nonnas-kitchen.md) and get into your games faster!


---

## Config Files

- **`ignore_extensions_roms.txt`** - File extensions to filter out of the games list. One extension per line. Cannoli creates this file automatically with `.sav` and `.srm` as defaults.
- **`ignore_files_roms.txt`** - Specific filenames to filter out of the games list. One filename per line. Cannoli seeds it with common non-game files like `map.txt`, `systeminfo.txt`, `gamelist.xml`, and `gameslist.xml`.
- **`arcade_map.txt`** - Maps arcade ROM filenames to human-readable game titles. Cannoli ships a default mapping, but you can edit this file to add or change entries.
- **`platforms.ini`** - Optional per-install tweaks to the platforms table (e.g. preferred core or app for a tag).
- **`cannoli.db`** - Cannoli's library database (platforms, ROMs, collections, favorites, recently played, and overrides).
- **`settings.json`** - Your launcher settings.
- **`Input/Mappings/`** - One INI file per controller (named by Bluetooth MAC) holding its button mappings, glyph style, and other per-controller options.
- **`Ordering/`** - Manual sort orders and `collection_parents.txt`, which defines collection nesting.
- **`Overrides/`** - Per-scope retroarch overrides. `Cores/` for core defaults, `systems/` for platform overrides (note the lowercase folder), and `Games/<tag>/<game>.ini` for single-game overrides.
- **`State/`** - Runtime state Cannoli regenerates as you use it: `recently_played.txt`, `quick_resume.txt`, `guide_positions.ini`.
- **`Cache/`** - Library scan caches (`.platform_cache.json`, `.game_cache`). Safe to delete; Cannoli rebuilds them.
- **`RetroAchievements/`** - Saved RetroAchievements data such as `ra_game_ids.txt`.
- **`RetroArch/`** - Files Cannoli writes for RetroArch, including `retroarch_launch.cfg`.
- **`Assets/`** and **`Fonts/`** - Bundled assets and custom font drop-in locations.

---

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

---

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
| Save States | `Cannoli/Save States/GBA/Pokémon - Recharged Yellow/Pokémon - Recharged Yellow.state` (and `.state.auto`, `.state1`-`.state9`) |

---

## Multi-Disc Games

Drop the disc files into the platform's ROM folder. On the next scan Cannoli moves them into a per-game subfolder with a generated `.m3u` and shows a single entry. See [Multi-Disc Games](playing-games.md#multi-disc-games) for details.
