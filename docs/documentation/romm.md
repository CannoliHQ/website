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

[RomM](https://romm.app) is a self-hosted ROM manager for your games, saves, and metadata, all through a web interface.

---

## Pairing

Pair Cannoli to a RomM server from **Settings → Integrations → RomM**. RomM **5.0 or newer** is required.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="romm-pair"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Set the server **Host**.
2. If your server uses a self-signed certificate, turn on **Allow Self-Signed Cert**.
3. Select **Pair with Another Device**.
4. Scan the QR code with any device signed in to your RomM server and approve the request there.
</div>
</div>

No second device? Choose **Pair with Code** and enter a code from your RomM user profile. Codes expire, so start over if pairing times out. Once paired, press `X` in the RomM settings to disconnect.

---

## Browsing your RomM library

Once paired, **RomM** appears in the launcher's Quick Menu. Browse the whole server, nothing lives on your device until you download it. The screens are **Platforms**, **Collections**, **Firmware**, and **Search**. Highlight a game and press `A` to download it (and its manual, if any).

### Offline browsing

Your library is mirrored to a local cache, so browsing is instant and works offline (**Could not reach RomM. Showing cached library.**). Cannoli builds it on first open and refreshes in the background; rebuild it from **RomM Settings → Advanced → Rebuild Cache**. Downloading still needs a connection.

### RomM Settings

Press `X` on any browse screen to open **RomM Settings**:

- **Cover Art** - art type from RomM (Default, Off, Box 2D, Box 3D, Mix, Title, Screenshot, Marquee).
- **Concurrent Downloads**
- **Save Sync** - see [Save Sync](#save-sync).
- **Show / Hide Platforms**
- **Show / Hide Collections**
- **Advanced** - Rebuild Cache, Download Missing Art.
- **Server Info**

### RomM Quick Menu

Press `Menu` on any RomM screen for the **Download Queue**.

---

## Firmware

Lists BIOS and firmware per platform (**On Device** / **Not on Device**). Press `A` to download; toggle a file off to remove it.

---

## Box Art

Pull box art for your **local** games from RomM:

- **Per platform** - press `Start` on a platform, select **Download Missing Art** (shown when RomM is configured).
- **Bulk** - **RomM Settings → Advanced → Download Missing Art**.

Art follows your **Cover Art** setting; Cannoli shows a summary when done.

---

## Save Sync

Save Sync mirrors your in-game saves (SRAM) with your RomM server. Needs **RomM 5.0 or newer**; covers games RomM can match.

Turn it on at **RomM Settings → Save Sync** (name your device when asked):

- **Save Sync** - **On** / **Off**.
- **Save Backups** - backups kept per game: **Off**, **3**, **5**, **10** (default **5**).

Syncing is automatic: on launch, on exit, and on a background sweep (every 30 minutes or when back online). A cloud icon in the [status bar](customization.md#status-bar) shows the state.

### Conflicts

If a save changed in both places, launching prompts **Keep This Device** or **Use Server**. Sweep conflicts collect under **Sync Conflicts** (Quick Menu or Save Sync menu): pick **Keep Local**, **Use Server**, or **Skip** per game, then `Start`.

### Backups and slots

- **Restore a backup** - **Save Sync → Restore from Backup**, or a game's **RomM Saves → Restore from Backup**.
- **Save Slots** - named per-game saves for separate playthroughs (**RomM Saves → Save Slots**); every game keeps an `autosave` slot, plus **Switch**, **New Slot**, **Rename**, **Delete**.
- **History and errors** - **Save Sync History** and **Sync Errors**.
