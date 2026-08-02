---
title: "PC"
---

[← Back to all platforms](../platforms.md)

<div class="platform-detail" markdown="1">

# PC `PC`

| Name                                                       | Type       |                                |
|------------------------------------------------------------|------------|--------------------------------|
| [GameNative](https://github.com/utkarshdalal/GameNative)   | Standalone | :material-android:{ .android } |
| [GameHub Lite](https://github.com/gamehublite/gamehub-oss) | Standalone | :material-android:{ .android } |

</div>

Cannoli's PC platform lists the Windows games you've installed in
[GameNative](https://github.com/utkarshdalal/GameNative) or
[GameHub Lite](https://github.com/gamehublite/gamehub-oss).

Unlike every other platform, `Roms/PC` doesn't hold games. It holds small text files that point at a game already installed inside one of those apps. Cannoli reads the file and asks the app to launch
that game.

> [!IMPORTANT]
> Install and sign in to GameNative or GameHub Lite first, and install at least one game there. Shortcut
> files only describe games that app has already downloaded.

---

## Picking a Launcher

Both apps handle the whole platform, so choose one in
[Settings → Emulation → Emulator Mapping](../settings.md#emulation). As with any platform, you can also
override a single game from its context menu, which is worth knowing if you keep some games in each app.

---

## Shortcut Files

Each file is named after the game, and its extension says what kind of ID is inside:

| Extension      | Holds                     | GameNative | GameHub Lite |
|----------------|---------------------------|:----------:|:------------:|
| `.steam`       | Steam app ID              |     ✅      |      ✅       |
| `.steamappid`  | Steam app ID              |     ✅      |      ✅       |
| `.epic`        | Epic Games ID             |     ✅      |      ❌       |
| `.gog`         | GOG ID                    |     ✅      |      ❌       |
| `.amazon`      | Amazon Games ID           |     ✅      |      ❌       |
| `.pcgame`      | GameNative custom game ID |     ✅      |      ❌       |
| `.localgameid` | GameHub local game ID     |     ❌      |      ✅       |
| `.txt`         | GameHub local game ID     |     ❌      |      ✅       |

The file's name becomes the game's name in Cannoli, so `Hollow Knight.steam` shows up as **Hollow Knight**.
Inside, the file is a single ID and nothing else:

```
367520
```

A leading tag is fine too.

```
[steamappid] 367520
```

Steam shortcuts work in either app, so a `.steam` file keeps working if you switch launchers later. The
store-specific and GameHub-specific extensions only work in the app that understands them.

---

## GameNative

GameNative can write these files two ways. **Frontend Sync** keeps the whole folder in step with your
GameNative library on its own. The manual option is the one to use if you only want a couple of games in Cannoli.

### Frontend Sync

This points GameNative at `Roms/PC` once, then keeps it current: installing a game in GameNative adds it
to Cannoli, and uninstalling removes it.

1. In GameNative, open **Settings → Interface → Frontend Sync**.
2. Pick a directory for **Steam**. Browse to your `Cannoli/Roms/PC` folder and select it.
3. Do the same for **Epic Games**, **GOG**, **Amazon Games**, and **Custom Games**. All five can point at `Roms/PC`. The extensions described above keeps them apart.
4. Press **Resync all** to write out everything you already have installed.
5. Back in Cannoli, rescan your library from **Settings → Library → Scan Mode**, or restart Cannoli.

You only need to set up the sources you actually use.

### Exporting One Game

Use this when you'd rather pick which games reach Cannoli than mirror your whole library.

1. In GameNative, open the game and choose **Export for frontend**.
2. A save dialog opens with the filename already filled in. Browse to `Cannoli/Roms/PC` and save it there.
3. Repeat for each game you want.
4. Back in Cannoli, rescan your library from **Settings → Library → Scan Mode**, or restart Cannoli.

Files you place by hand stay put, so this mixes fine with Frontend Sync as long as you don't point a
synced source at the same extension.

---

## GameHub Lite

GameHub Lite has no export feature, so you will need to write the shortcut files yourself. It's a text file with an
ID in it. Create it with a plain text editor and upload it to the `Roms/PC` folder.

**For a Steam game**, use the Steam app ID. It's the number in the game's Steam store URL, and you can
also find it on [SteamDB](https://steamdb.info). Save it as `<Game Name>.steam` in `Roms/PC`.

**For a game GameHub installed itself**, open the game's details screen in GameHub and take note of the ID shown
there. Write this ID in a plain text file and save it as `<Game Name>.localgameid`.

---

## Box Art

Box art works the same as any other platform: drop images in `Art/PC/` named to match the shortcut file.
See [Box Art](../customization.md#box-art).

Because the file name is also the game name, renaming a shortcut file renames the game in Cannoli. Do know if
you're using GameNative's Frontend Sync that any changes you make to the name of the shortcut will be undone at the next sync.
