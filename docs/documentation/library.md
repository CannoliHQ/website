# Library

<!-- Registers window.CANNOLI_TUTORIALS for the animated <cannoli-screen> walkthroughs
     below. Mirrors docs/resources/cannoli-ui/preview.html; keep the two in sync if the
     tutorial scripts ever change. -->
<script>
window.CANNOLI_TUTORIALS = {
  "browse-and-scroll": {
    start: { view: "system-list", contentmode: "default", selection: 0 },
    loopDelay: 1600,
    steps: [
      { wait: 1100 },
      { press: "down", wait: 620 },   // Favorites
      { press: "down", wait: 560 },   // Collections
      { press: "down", wait: 560 },   // Game Boy
      { press: "down", wait: 560 },   // Game Boy Color
      { press: "down", wait: 560 },   // Game Boy Advance
      { press: "down", wait: 820 },   // Nintendo Entertainment System
      { press: "a",    wait: 1000 },  // open NES game list
      { press: "b", wait: 1200 },  // back to platform screen
    ],
  },
  "add-to-favorites": {
        start: { view: "game-list", list: "nes", selection: 3 },
        loopDelay: 1800,
        steps: [
          { wait: 1200 },
          { press: "start", wait: 1100 },  // context menu (title = game name)
          { press: "a",     wait: 1500 },  // Add To Favorites -> gains a star, floats to top
          { wait: 600 },
        ],
      },
  "remove-recently-played": {
        start: { view: "game-list", list: "recently_played", selection: 1 },
        loopDelay: 1800,
        steps: [
          { wait: 1200 },
          { press: "start", wait: 1100 },  // context menu
          { press: "a",     wait: 1500 },  // Remove From Recently Played -> game disappears
          { wait: 600 },
        ],
      },
  "create-collection": {
        library: {
          platforms: [{ id: "gba", name: "Game Boy Advance", games: ["recharged-yellow", "unbound", "gaia"] }],
          games: {
            "gaia":             { title: "Pokémon Gaia",             platform: "gba" },
            "recharged-yellow": { title: "Pokémon Recharged Yellow", platform: "gba" },
            "unbound":          { title: "Pokémon Unbound",          platform: "gba" },
          },
          collections: ["Sportsball"],   // "ROM Hacks" does not exist yet
        },
        start: { view: "game-list", list: "gba", selection: 0 },
        loopDelay: 2400,
        steps: [
          { wait: 1200 },
          { press: "start", wait: 900 },  // context menu
          { press: "down",  wait: 700 },  // highlight Manage Collections
          { press: "a",     wait: 900 },  // open Manage Collections
          { press: "y",     wait: 900 },  // New -> keyboard
          { typeText: "ROM Hacks" },      // name the collection
          { wait: 500 },
          { press: "start", wait: 1000 }, // save -> back to Manage Collections
          { wait: 800 },
        ],
      },
  "add-to-collection": {
        library: {
          platforms: [{ id: "gba", name: "Game Boy Advance", games: ["recharged-yellow", "unbound", "gaia"] }],
          games: {
            "gaia":        { title: "Pokémon Gaia",        platform: "gba"},
            "recharged-yellow": { title: "Pokémon Recharged Yellow", platform: "gba"},
            "unbound":     { title: "Pokémon Unbound",     platform: "gba"},
          },
          collections: ["ROM Hacks", "Platformers"],
        },
        start: { view: "game-list", list: "gba", selection: 0 },
        loopDelay: 2000,
        steps: [
          { wait: 1200 },
          { press: "select", wait: 900 }, 
          { press: "a",     wait: 700 },
          { press: "down",     wait: 700 },
          { press: "a",     wait: 700 },
          { press: "down",     wait: 700 },
          { press: "a",     wait: 700 },
          { press: "start", wait: 900 },  // context menu
          { press: "down",  wait: 700 },  // highlight Manage Collections
          { press: "a",     wait: 1000 }, // open Manage Collections
          { press: "a",     wait: 1200 }, // tick "ROM Hacks" -> checked box
        ],
      },
  "reorder": {
        library: {
          // Extra platforms (NES and up) fill out the screen so the reorder demo
          // does not look sparse; only the Game Boys are moved in the steps.
          platforms: [
            { id: "gb",   name: "Game Boy",                            games: [] },
            { id: "gba",  name: "Game Boy Advance",                    games: [] },
            { id: "gbc",  name: "Game Boy Color",                      games: [] },
            { id: "nes",  name: "Nintendo Entertainment System",       games: [] },
            { id: "snes", name: "Super Nintendo Entertainment System", games: [] },
            { id: "gc",   name: "GameCube",                            games: [] },
            { id: "ps",   name: "PlayStation",                         games: [] },
          ],
        },
        start: { view: "system-list", selection: 4 },
        loopDelay: 1800,
        steps: [
          { wait: 1200 },
          { press: "select", wait: 900 },  // enter reorder on Game Boy Color
          { press: "up",     wait: 800 },  // move it above Game Boy Advance
          { press: "select", wait: 700 },  // lock it in
          { wait: 600 }
        ]
      },
  "nested-collections": {
        library: {
          collections: ["RPG", "JRPGs", "CRPGs"],
          collectionGames: { "RPG": ["chrono", "ff6"] },
          games: {
            "chrono": { title: "Chrono Trigger",    platform: "snes", boxart: "boxart/placeholder.svg" },
            "ff6":    { title: "Final Fantasy VI",  platform: "snes", boxart: "boxart/placeholder.svg" },
          },
        },
        start: { view: "collections", selection: 0 },
        loopDelay: 2400,
        steps: [
          { wait: 1200 },
          { press: "start", wait: 900 },  // RPG context menu (Rename / Child Collections / Delete)
          { press: "down",  wait: 700 },  // highlight Child Collections
          { press: "a",     wait: 800 },  // open the Child Collections toggle
          { press: "a",     wait: 700 },  // tick JRPGs as a child of RPG
          { press: "down",  wait: 600 },
          { press: "a",     wait: 900 },  // tick CRPGs as a child of RPG
          { press: "b",     wait: 700 },  // back to the RPG menu
          { press: "b",     wait: 900 },  // back to Collections (JRPGs/CRPGs now hidden)
          { press: "a",     wait: 1200 }, // open RPG -> shows /JRPGs, /CRPGs at top
          { wait: 800 },
        ],
      },
  // Static previews (no play button) of the three content modes.
  "mode-default": {
        static: true,
        library: {
          platforms: [
            { id: "gb",   name: "Game Boy",                            games: [] },
            { id: "gba",  name: "Game Boy Advance",                    games: [] },
            { id: "nes",  name: "Nintendo Entertainment System",       games: [] },
            { id: "snes", name: "Super Nintendo Entertainment System", games: [] },
            { id: "ps",   name: "PlayStation",                         games: [] },
          ],
          collections: ["RPGs", "Puzzle Games", "Sports"],
        },
        start: { view: "system-list", contentmode: "default", selection: 0 },
      },
  "mode-collections-only": {
        static: true,
        library: { collections: ["RPGs", "Puzzle Games", "Sports", "Handhelds"] },
        start: { view: "system-list", contentmode: "collections-only", selection: 0 },
      },
  "mode-5gh": {
        static: true,
        library: {
          ports: true,
          tools: true,
          fiveGameHandheld: ["chrono", "smetroid", "celeste", "hollow", "links-awakening"],
          games: {
            "chrono":          { title: "Chrono Trigger",   platform: "snes" },
            "smetroid":        { title: "Super Metroid",    platform: "snes" },
            "celeste":         { title: "Celeste",          platform: "ports" },
            "hollow":          { title: "Hollow Knight",    platform: "ports" },
            "links-awakening": { title: "Link's Awakening", platform: "gb" },
          },
        },
        start: { view: "system-list", contentmode: "five-game-handheld", selection: 0 },
      },
};
</script>

## Browse your library

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="browse-and-scroll"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Use `↑` / `↓` on the main menu to highlight a system, `Recently Played`, `Favorites`, or `Collections`.
2. Press `A` to open it and see its games.
3. Use `↑` / `↓` to scroll through the game list.
4. Press `B` to go back to the main menu.
</div>
</div>

---

## Recently Played

Cannoli tracks your 15 most recently played games. A `Recently Played` option appears on the main menu automatically
after you play your first game.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="remove-recently-played" fullmenu></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Highlight a game in Recently Played and press `Start` to open the context menu.
2. Select `Remove From Recently Played`.
</div>
</div>

> [!TIP]
> To remove multiple games at once, press `Select` on the Recently Played list to enter multi-select mode. Select the games you want, then press `Start` to remove them all.

---

## Favorites

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="add-to-favorites" fullmenu></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Highlight a game, tool, or port and press `Start` to open the context menu.
2. Select `Add To Favorites`
3. The favorited game will now be pinned to the top and appear in the `Favorites` list.
</div>
</div>

> [!TIP]
> To favorite multiple games at once, press `Select` on the game list to enter multi-select mode. Select the games you want, then press `Start` to apply the action to all of them.

---

## Collections

Collections let you group anything that Cannoli can launch: games, tools, and ports. Think `RPGs` or `Puzzle Games` or
`Sports Games`.

### Create a collection

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="create-collection" fullmenu></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Highlight a game and press `Start` → **Manage Collections**.
2. Press `Y` (**New**), give the collection a name, and press `Start` to save.
</div>
</div>

### Add games to a collection

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="add-to-collection" fullmenu></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Highlight a game, press `Start` → **Manage Collections**.
2. Toggle the checkboxes to add or remove it from the collection.
</div>
</div>

> [!TIP]
> To add several games at once, press `Select` on the game list to enter multi-select mode, tick the games you want, then press `Start` → **Manage Collections** to manage them together.

When a game is highlighted while viewing a collection, `Start` also includes a **Remove From Collection** option to remove it without opening the membership screen.

To rename or delete a collection, highlight it on the Collections screen and press `Start`.

### Nested Collections

Collections can be nested inside other collections. This lets you organize things like `RPGs` → `JRPGs`, `CRPGs`.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="nested-collections"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Highlight a collection on the **Collections** screen and press `Start` → **Child Collections**.
2. Toggle the checkboxes to mark which collections should appear as children.
3. Press `A` on the parent collection to open it and see its children listed at the top with a `/` prefix.
</div>
</div>

> [!IMPORTANT]
> Child collections only appear inside their parent. They are removed from the top-level collections list.

---

## Reordering

You can reorder platforms, collections, tools, and ports to your liking.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="reorder"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Highlight the item.
2. Press `Select` to enter reorder mode.
3. Use the `D-Pad` to reposition it.
4. Press `Select` again to lock it in.
</div>
</div>

---

## Content Modes

Cannoli has three content modes that control how the main menu functions.

### Default

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="mode-default"></cannoli-screen>
</div>
<div class="task__steps" markdown>
Every main-menu feature is enabled: **Recently Played**, **Favorites**, **Collections**, and then your platforms.
</div>
</div>

### Collections Only

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="mode-collections-only"></cannoli-screen>
</div>
<div class="task__steps" markdown>
Hides all platforms and hoists your top-level collections up to the main menu (the **Collections** folder is gone).
</div>
</div>

### Five Game Handheld

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="mode-5gh"></cannoli-screen>
</div>
<div class="task__steps" markdown>
Implements Retro Game Corps' [Five Game Handheld](https://www.youtube.com/watch?v=t2rMB5z9dQw) concept. Pick any collection via the **5GH Collection** setting; the games in that collection are hoisted up to the main menu.
</div>
</div>

> [!IMPORTANT]
> Five Game Handheld mode does not restrict you to five games nor does it modify your library.

## Game Context Menu

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen view="context-menu" game="tecmo-2025" list="nes" fullmenu></cannoli-screen>
</div>
<div class="task__steps" markdown>
Press `Start` on any game to open its context menu.
</div>
</div>

- [**Remove From Recently Played**](#recently-played) (only on the Recently Played list)
- [**Add To Favorites** / **Remove From Favorites**](#favorites)
- [**Remove From Collection**](#collections) (only when viewing a collection)
- [**Manage Collections**](#collections)
- [**Emulator Override**](playing-games.md#emulator-override) - use a different core or app for this game
- [**RA Game ID**](retroachievements.md) - manually set the RetroAchievements game ID
- [**Preload Achievements**](retroachievements.md) - cache this game's RetroAchievements set for offline use
- **Rename**
- **Delete Art** (if present)
- **Delete Game**
