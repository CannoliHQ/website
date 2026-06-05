## Supported Platforms

Cannoli supports a wide range of retro platforms out of the box. Pick a platform below for the full list of supported cores, RetroArch cores, and standalone Android apps.

The **Folder** column shows the accepted directory name for your ROMs. Place your ROM files in `Cannoli/Roms/{Folder}`.

For example, Game Boy Advance ROMs go in `Cannoli/Roms/GBA`.

---

:material-check-bold:{ .shipped } Bundled with Cannoli and handled by the built-in core runner

:custom-retroarch:{ .retroarch } Available as a RetroArch core

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

| Platform                                                 | Folder       |                                                                                                                                                                  |
|----------------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Nintendo Entertainment System](platforms/nes.md)        | `NES`        | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Famicom Disk System](platforms/fds.md)                  | `FDS`        | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [Game Boy](platforms/gb.md)                              | `GB`         | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Game Boy Color](platforms/gbc.md)                       | `GBC`        | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Super Nintendo Entertainment System](platforms/snes.md) | `SNES`       | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Virtual Boy](platforms/virtualboy.md)                   | `VIRTUALBOY` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Nintendo 64](platforms/n64.md)                          | `N64`        | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                                                     |
| [Game Boy Advance](platforms/gba.md)                     | `GBA`        | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [Pokemon Mini](platforms/pokemini.md)                    | `POKEMINI`   | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy }                                                                  |
| [Nintendo DS](platforms/nds.md)                          | `NDS`        | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                                                     |
| [Nintendo 3DS](platforms/3ds.md)                         | `3DS`        | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-key:{ .keys-required }                                                                 |
| [GameCube](platforms/gc.md)                              | `GC`         | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                                                     |
| [Wii](platforms/wii.md)                                  | `WII`        | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                                                     |
| [Wii U](platforms/wiiu.md)                               | `WIIU`       | :material-android:{ .android } :material-key:{ .keys-required }                                                                                                  |
| [Nintendo Switch](platforms/nsw.md)                      | `NSW`        | :material-android:{ .android } :material-key:{ .keys-required }                                                                                                  |

### Sega

| Platform                            | Folder   |                                                                                                                                                                  |
|-------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Sega SG-1000](platforms/sg1000.md) | `SG1000` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [Master System](platforms/sms.md)   | `SMS`    | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Sega Genesis](platforms/md.md)     | `MD`     | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Sega CD](platforms/segacd.md)      | `SEGACD` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [Game Gear](platforms/gg.md)        | `GG`     | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Sega 32X](platforms/32x.md)        | `32X`    | :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy }                                                                                                    |
| [Sega Saturn](platforms/saturn.md)  | `SATURN` | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                   |
| [Dreamcast](platforms/dc.md)        | `DC`     | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                   |

### Sony

| Platform                          | Folder   |                                                                                                                                                                  |
|-----------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [PlayStation](platforms/ps.md)    | `PS`     | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [PSP](platforms/psp.md)           | `PSP`    | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                   |
| [PlayStation 2](platforms/ps2.md) | `PS2`    | :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                                                    |
| [PlayStation 3](platforms/ps3.md) | `PS3`    | :material-android:{ .android } :material-chip:{ .bios-required }                                                                                                 |
| [PS Vita](platforms/psvita.md)    | `PSVITA` | :material-android:{ .android } :material-chip:{ .bios-required }                                                                                                 |

### Atari

| Platform                             | Folder      |                                                                                                                                                                  |
|--------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Atari 2600](platforms/atari2600.md) | `ATARI2600` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Atari 5200](platforms/atari5200.md) | `ATARI5200` | :custom-retroarch:{ .retroarch } :material-chip:{ .bios-required }                                                                                               |
| [Atari 7800](platforms/atari7800.md) | `ATARI7800` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                |
| [Atari Jaguar](platforms/jaguar.md)  | `JAGUAR`    | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                                                     |
| [Atari Lynx](platforms/lynx.md)      | `LYNX`      | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |

### NEC

| Platform                                        | Folder       |                                                                                                                                |
|-------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------|
| [PC Engine](platforms/pce.md)                   | `PCE`        | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy } |
| [PC Engine SuperGrafx](platforms/supergrafx.md) | `SUPERGRAFX` | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [PC-FX](platforms/pcfx.md)                      | `PCFX`       | :custom-retroarch:{ .retroarch } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                |

### SNK

| Platform                                  | Folder   |                                                                                                                                                                  |
|-------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Neo Geo Pocket](platforms/ngp.md)        | `NGP`    | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Neo Geo Pocket Color](platforms/ngpc.md) | `NGPC`   | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }                                   |
| [Neo Geo](platforms/neogeo.md)            | `NEOGEO` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |

### Bandai

| Platform                             | Folder |                                                                                                                                |
|--------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------|
| [WonderSwan](platforms/ws.md)        | `WS`   | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy } |
| [WonderSwan Color](platforms/wsc.md) | `WSC`  | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy } |

### Arcade

| Platform                           | Folder |                                                                                                                                |
|------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------|
| [Arcade (MAME)](platforms/mame.md) | `MAME` | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy } |
| [Arcade (FBN)](platforms/fbn.md)   | `FBN`  | :material-check-bold:{ .shipped } :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy }                                |

### Other

| Platform                                    | Folder          |                                                                                                                                |
|---------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------|
| [Intellivision](platforms/intellivision.md) | `INTELLIVISION` | :custom-retroarch:{ .retroarch } :material-chip:{ .bios-required } :material-trophy:{ .trophy }                                |
| [ColecoVision](platforms/colecovision.md)   | `COLECOVISION`  | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [Vectrex](platforms/vectrex.md)             | `VECTREX`       | :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy }                                                                  |
| [PICO-8](platforms/pico8.md)                | `PICO8`         | :material-android:{ .android } :material-chip:{ .bios-required }                                                               |

### Computer

| Platform                        | Folder    |                                                                                                 |
|---------------------------------|-----------|-------------------------------------------------------------------------------------------------|
| [Amiga](platforms/amiga.md)     | `AMIGA`   | :custom-retroarch:{ .retroarch } :material-chip:{ .bios-required } :material-trophy:{ .trophy } |
| [DOS](platforms/dos.md)         | `DOS`     | :custom-retroarch:{ .retroarch } :material-trophy:{ .trophy }                                   |
| [ScummVM](platforms/scummvm.md) | `SCUMMVM` | :custom-retroarch:{ .retroarch } :material-android:{ .android } :material-trophy:{ .trophy }    |

<script>
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.platform-filter');
  var tables = document.querySelectorAll('.md-typeset table');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      buttons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      tables.forEach(function(table) {
        var rows = table.querySelectorAll('tbody tr');
        var visibleCount = 0;
        rows.forEach(function(row) {
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
          if (match) visibleCount++;
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
        if (heading) heading.style.display = visibleCount === 0 ? 'none' : '';
      });
    });
  });
});
</script>
