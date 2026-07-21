<!-- Registers window.CANNOLI_TUTORIALS for the animated <cannoli-screen> walkthrough
     in the Pairing section. Mirrors docs/resources/cannoli-ui/preview.html; keep the
     two in sync if the tutorial script changes. -->
<script>
window.CANNOLI_TUTORIALS = {
  "romm-pair": {
    start: { view: "romm-settings", selection: 0 },
    loopDelay: 2000,
    steps: [
      { wait: 1000 },
      { press: "a", wait: 700 },     // Host -> keyboard
      { typeText: "romm.local" },
      { press: "start", wait: 900 }, // save host -> back to romm-settings (4 rows)
      { press: "down", wait: 500 },  // -> Allow Self-Signed Cert
      { press: "down", wait: 500 },  // -> Pair with Another Device
      { press: "a", wait: 900 },     // enter pairing (connecting)
      { set: { view: "romm-pair", phase: "waiting" }, wait: 2200 }, // QR
      { set: { view: "romm-connected" }, wait: 2200 },              // simulated approval
      { wait: 800 },
    ],
  },
};
</script>

## What is RomM?

[RomM](https://romm.app) is a self-hosted ROM manager that lets you curate your game collection, manage saves, and
access everything through a web-based interface.

---

## Why should I care?

Here is a ~~personal opinion~~ **fact**: having too many games on your device is **dumb**.

Browsing that many games sucks.

Organizing them sucks.

Curating art and metadata for them sucks.

_And the worst part_, once you finally work up the motivation to play something, you hit analysis paralysis from too much choice.

RomM changes that. 

You host all of your games, saves, and metadata on your own server and only pull down what you need to your device.

---

## Pairing

Pair Cannoli to a RomM server from **Settings → Integrations → RomM**. RomM **5.0 or newer** is required.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="romm-pair"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Set the server **Host** (e.g. `https://romm.local`).
2. If your server uses a self-signed certificate, turn on **Allow Self-Signed Cert**.
3. Select **Pair with Another Device**.
4. Scan the QR code with any device signed in to your RomM server and approve the request there.
</div>
</div>

Once paired, opening RomM in Settings shows a Connected dialog with the Host, Account, and Server version. Press `X` to disconnect.

> [!TIP]
> No second device handy? Choose **Pair with Code** instead: generate a pairing code in RomM under your user profile and enter it here.

> [!NOTE]
> The QR code and pairing codes expire. If pairing fails or times out, start over for a fresh one.

---

## Browsing your RomM library

Once paired, **RomM** appears in the launcher's Quick Menu. Browse your whole server without anything living on your device.

The browse screens are:

- **Platforms** - your RomM platforms, ordered by your library.
- **Collections** - any collections you've built in RomM.
- **Firmware** - BIOS and firmware files for each platform.
- **Search** - global search across your entire RomM library.

Highlight a game and press `A` to open its detail screen, where you can download it (and, if available, download the manual).

### Offline browsing

Your RomM library is mirrored to a local cache on your device, so browsing is instant and keeps working with no connection. The first time you open RomM, Cannoli builds this cache and shows **Building cache...** with per-platform progress. After that, browse screens load straight from the cache and refresh in the background whenever you are connected.

If Cannoli cannot reach your server, it falls back to the cache and shows **Could not reach RomM. Showing cached library.**, so you can keep browsing everything you have already synced. Downloading a game still needs a live connection.

To force a fresh copy, open **RomM Settings** (press `X` on the browse screen) and choose **Advanced → Rebuild Cache**.

### RomM Settings

From any RomM browse screen, press `X` to open **RomM Settings**:

- **Cover Art** - cycle through the art type pulled from RomM: **Default**, **Off**, **Box 2D**, **Box 3D**, **Mix**, **Title**, **Screenshot**, **Marquee**.
- **Concurrent Downloads** - how many downloads run in parallel.
- **Save Sync** - open the [Save Sync](#save-sync) settings.
- **Show / Hide Platforms** - hide platforms you don't want to see in the RomM browse.
- **Show / Hide Collections** - hide or show individual collections.
- **Advanced** - **Rebuild Cache** and **Download Missing Art**.
- **Server Info** - host, account, and server version.

### RomM Quick Menu

While downloads are in progress, press the `Menu` button on any RomM screen to open the **RomM Quick Menu** and jump to the **Download Queue**.

---

## Firmware

The Firmware screen lists BIOS and firmware files per platform, split into **On Device** and **Not on Device**. Highlight a file and press `A` to download it; toggle an on-device file off to reclaim space.

---

## Box Art

Cannoli can pull box art for your **local** games directly from RomM. Two ways to trigger it:

- **Per platform** - from the launcher's platform list, press `Start` on a platform and select **Download Missing Art**. Only shown when RomM is configured.
- **Bulk** - inside RomM, open **RomM Settings** and choose **Advanced → Download Missing Art**.

The downloaded art type follows your **Cover Art** setting in the Quick Menu.

When the download finishes, Cannoli shows a results summary: covers added, games that already had art, games with no RomM match, and failures.

---

## Save Sync

Save Sync mirrors your in-game saves (SRAM) between your device and your RomM server, so you can put a game down on one device and pick it back up on another. It requires **RomM 5.0 or newer**.

### Turning it on

From the RomM browse screen, press `X` to open **RomM Settings** (the same button that opens Settings on the main platform list), then choose **Save Sync**:

- **Save Sync** - switch syncing **On** or **Off**.
- **Save Backups** - how many local backups to keep per game: **Off**, **3**, **5**, or **10** (default **5**).

The first time you turn it on, Cannoli asks you to **Name this device** so saves are labeled per device on the server.

> [!NOTE]
> Save Sync only covers games that RomM can match on your server. A local game with no match is left untouched.

### When it syncs

Syncing is automatic; there is no manual "sync now":

- **Launching a game** checks the server first and pulls down a newer save (or pushes yours up) before the emulator opens.
- **Exiting a game** uploads your latest save right away.
- **In the background** a sweep runs about every 30 minutes, and again whenever your connection comes back.

A cloud icon in the [status bar](customization.md#status-bar) reflects the current state: syncing, up to date, offline, or a conflict that needs you.

### Handling conflicts

When a save has changed both on your device and on the server, Cannoli will not guess.

Launching that game shows a **Save conflict** prompt:

- **Keep This Device** keeps your local save.
- **Use Server** downloads the server's save.

Conflicts found by a background sweep are set aside instead of interrupting you. Open **Sync Conflicts** from the Quick Menu (it shows a count) or from the Save Sync menu. Each row compares the **Yours** and **Server** timestamps, marking the older one; use `Left` / `Right` to pick **Keep Local**, **Use Server**, or **Skip**, then press `Start` to apply them all.

### Backups and restore

Before a download overwrites a local save, Cannoli zips your current save into `Cannoli/Backup/SaveSync/`. The **Save Backups** setting controls how many are kept.

To roll back:

- **Save Sync menu → Restore from Backup** - pick the game, then a backup by date.
- **Game context menu → RomM Saves → Restore from Backup** - restore that specific game.

Restoring backs up your current save first, then makes the restored save current on RomM.

### Save Slots

Save Slots are named, per-game save profiles kept on RomM, useful for separate playthroughs. Open a game's context menu and choose **RomM Saves → Save Slots**.

Every game has an `autosave` slot to start. From the Save Slots screen you can:

- **Switch** uploads the current slot, then loads and activates the selected one.
- **New Slot** saves your current progress under a new name.
- **Rename** and **Delete** manage your own slots; `autosave` cannot be renamed or deleted.

### History and errors

- **Save Sync History** (Quick Menu or the Save Sync menu) lists recent uploads, downloads, and conflicts with a relative time.
- **Sync Errors** appears with a count when a game fails to sync, and lists what went wrong.
