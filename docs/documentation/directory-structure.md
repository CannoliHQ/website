## Directory Structure

Cannoli uses an opinionated directory structure heavily inspired by [MinUI](https://github.com/shauninman/MinUI).

All paths below are relative to the **Cannoli Root** you picked during initial setup.

```
Cannoli Root/
├── Art/
├── BIOS/
├── Backup/
├── Config/
├── Guides/
├── Logs/
├── Media/
├── Overlays/
├── Roms/
├── Save States/
├── Saves/
├── Shaders/
└── Wallpapers/
```

> [!TIP]
> Eyes glazing over? Skip the manual filing and use [Nonna's Kitchen](nonnas-kitchen.md) to get into your games faster.

---

## Where does everything go?

Nearly everything is sorted using [platform tags](platforms.md) as folder names. These folders expect one subfolder per tag:

- Art
- BIOS
- Guides
- Roms
- Saves
- Save States

Sounds abstract, but it's not. Say you've got a cool rom hack, `Pokémon - Recharged Yellow`, for Game Boy Advance.

The rom file you'll copy over is `Pokémon - Recharged Yellow.gba`, and from the [platform tags](platforms.md) page you know `GBA` is the tag for Game Boy Advance.

With those two pieces of info you know where everything goes:

| Thing       | Where It Goes                                                                                                                  |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| BIOS Files  | `Cannoli/BIOS/GBA/gba_bios.bin`                                                                                                |
| Box Art     | `Cannoli/Art/GBA/Pokémon - Recharged Yellow.png`                                                                               |
| Guide File  | `Cannoli/Guides/GBA/Pokémon - Recharged Yellow/Kanto Map.png`                                                                  |
| ROM Files   | `Cannoli/Roms/GBA/Pokémon - Recharged Yellow.gba`                                                                              |
| Save Files  | `Cannoli/Saves/GBA/Pokémon - Recharged Yellow.sav`                                                                             |
| Save States | `Cannoli/Save States/GBA/Pokémon - Recharged Yellow/Pokémon - Recharged Yellow.state` (and `.state.auto`, `.state1`-`.state9`) |

---

## Multi-Disc Games

Drop the disc files into the platform's ROM folder. On the next scan Cannoli moves them into a per-game subfolder with a generated `.m3u` and shows a single entry. 

See [Multi-Disc Games](playing-games.md#multi-disc-games) for details.

---

## Config folder reference

Most people never need to open `Config/`. If you're curious or troubleshooting, here's the full layout and what each piece does.

```
Config/
├── arcade_map.txt
├── cannoli.db
├── ignore_extensions_roms.txt
├── ignore_files_roms.txt
├── platforms.ini
├── settings.json
├── Assets/
├── Cache/
├── Fonts/
├── Input/
│   └── Mappings/
├── Launch Scripts/
│   ├── Ports/
│   └── Tools/
├── Ordering/
├── Overrides/
│   ├── global.ini
│   ├── Cores/
│   ├── Games/
│   └── systems/
├── Profiles/
├── RetroAchievements/
├── RetroArch/
└── State/
```

<div class="config-tables" markdown>

**Files**

| File                         | What it does                                                                                                                                              |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `arcade_map.txt`             | Maps arcade ROM filenames to human-readable game titles. Cannoli ships a default mapping, but you can edit this file to add or change entries.            |
| `cannoli.db`                 | Cannoli's library database (platforms, ROMs, collections, favorites, recently played, and overrides).                                                     |
| `ignore_extensions_roms.txt` | File extensions to filter out of the games list, one per line. Cannoli creates this file automatically with `.sav` and `.srm` as defaults.                |
| `ignore_files_roms.txt`      | Specific filenames to filter out of the games list, one per line. Seeded with common non-game files like `map.txt`, `systeminfo.txt`, and `gamelist.xml`. |
| `platforms.ini`              | Optional per-install tweaks to the platforms table (e.g. preferred core or app for a tag).                                                                |
| `settings.json`              | Your launcher settings.                                                                                                                                   |

**Folders**

| Folder               | What it holds                                                                                                                                                                                           |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Assets/`            | Bundled assets.                                                                                                                                                                                         |
| `Cache/`             | Library scan caches (`.platform_cache.json`, `.game_cache`). Safe to delete; Cannoli rebuilds them.                                                                                                     |
| `Fonts/`             | Drop-in location for custom fonts.                                                                                                                                                                      |
| `Input/Mappings/`    | One INI file per controller holding its button mappings, glyph style, and other per-controller options.                                                                                                 |
| `Overrides/`         | Per-scope RetroArch overrides. `global.ini` for the global baseline, `Cores/` for core defaults, `systems/` for platform overrides (lowercase), and `Games/<tag>/<game>.ini` for single-game overrides. |
| `RetroAchievements/` | Saved RetroAchievements data such as `ra_game_ids.txt`.                                                                                                                                                 |
| `RetroArch/`         | Files Cannoli writes for RetroArch, including `retroarch_launch.cfg`.                                                                                                                                   |
| `State/`             | Runtime state Cannoli regenerates as you use it: `recently_played.txt`, `quick_resume.txt`, `guide_positions.ini`.                                                                                      |

</div>
