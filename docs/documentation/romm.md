<!-- Registers window.CANNOLI_TUTORIALS for the animated <cannoli-screen>
     walkthroughs in the Pairing and Browsing sections. Mirrors
     docs/resources/cannoli-ui/preview.html; keep the two in sync if the tutorial
     scripts change. -->
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
  "romm-browse": {
    library: {
      romm: {
        host: "romm.local",
        collectionsCount: 6,
        platforms: [
          { id: "gba", name: "Game Boy Advance", romCount: 214, games: [
            { name: "Advance Wars",   onDevice: true },
            { name: "Golden Sun",     onDevice: false },
            { name: "Mega Man Zero",  onDevice: false },
            { name: "Metroid Fusion", onDevice: true },
            { name: "Mother 3",       onDevice: false },
          ] },
          { id: "snes", name: "Super Nintendo",  romCount: 388, games: [] },
          { id: "psx",  name: "PlayStation",     romCount: 502, games: [] },
        ],
      },
    },
    start: { view: "romm-platforms", selection: 1 }, // row 0 is Collections
    loopDelay: 2600,
    steps: [
      { wait: 1200 },
      { press: "a",    wait: 1000 }, // open Game Boy Advance
      { press: "down", wait: 900 },  // highlight Golden Sun (not on device)
      { press: "a",    wait: 1500 }, // download -> on-device dot appears
      { wait: 1000 },
    ],
  },
  "romm-firmware": {
    library: {
      romm: {
        host: "romm.local",
        firmware: [
          { name: "gba_bios.bin", onDevice: false },
          { name: "gb_bios.bin",  onDevice: false },
          { name: "sgb_boot.bin", onDevice: true },
        ],
      },
    },
    start: { view: "romm-firmware", selection: 0 },
    loopDelay: 2400,
    steps: [
      { wait: 1200 },
      { press: "a", wait: 1500 }, // download gba_bios.bin -> On Device
      { wait: 1200 },
    ],
  },
  "romm-search": {
    library: {
      romm: {
        host: "romm.local",
        collectionsCount: 6,
        platforms: [
          { id: "nes",  name: "NES",             romCount: 715, games: [
            { name: "Super Mario Bros.", onDevice: true },
            { name: "Dr. Mario",         onDevice: false },
          ] },
          { id: "snes", name: "Super Nintendo",  romCount: 388, games: [
            { name: "Super Mario World", onDevice: false },
            { name: "Mario Paint",       onDevice: false },
          ] },
          { id: "n64",  name: "Nintendo 64",     romCount: 296, games: [
            { name: "Super Mario 64",    onDevice: true },
            { name: "Mario Kart 64",     onDevice: false },
          ] },
        ],
      },
    },
    start: { view: "romm-platforms", selection: 1 },
    loopDelay: 2800,
    steps: [
      { wait: 1200 },
      { press: "r1", wait: 900 },     // open RomM search
      { typeText: "mario" },
      { wait: 700 },
      { press: "start", wait: 1300 }, // results
      { wait: 1200 },
    ],
  },
};
</script>

## What is RomM?

> [!IMPORTANT]
> Using this feature requires you to self-host a RomM instance. RomM Version 5.0.0 or higher is required.

[RomM](https://romm.app) is a self-hosted ROM manager for your games, saves, and metadata. It makes all of this content accessible through a beautiful web interface.

---

## Pairing

Pair Cannoli to a RomM server from **Settings → Integrations → RomM**.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="romm-pair"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Set the server **Host**.
2. If your server uses a self-signed certificate, turn on **Allow Self-Signed Cert**.
3. Select **Pair with Another Device**.
4. Scan the QR code, authenticate with RomM and approve the device request.
</div>
</div>

---

## Browsing your RomM library

Once paired, a **RomM** option appears in the Quick Menu. 

Select this option, and you will be brought into the RomM integration. From here you can download content to your device.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="romm-browse"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Open a platform to see everything the server holds for it.
2. A dot marks titles already on your device.
3. Highlight one without a dot and press `A` to download it.
</div>
</div>

> [!NOTE]
> A purple border frames every RomM screen to indicate you are browsing your instance rather than your local device.

### Searching

Press `R1` on any RomM browse screen to search the whole server.

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="romm-search"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Press `R1` and type what you are looking for.
2. Results span every platform, each tagged with where it lives.
3. A dot still marks what is already on your device.
</div>
</div>

### Offline browsing

Your RomM library is mirrored to a local cache. This allows browsing to be instant and available offline. 

The cache will be built the first time you launch the RomM integration. All subsequent launches will do a delta update in the background.

### RomM Settings

Press `X` on any browse screen to open **RomM Settings**:

- **Cover Art** - art type from RomM 
    - Choose from Default, Off, Box 2D, Box 3D, Mix, Title, Screenshot, and Marquee.
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

Lists BIOS and firmware per platform (**On Device** / **Not on Device**).

<div class="task" markdown>
<div class="task__visual" markdown>
<cannoli-screen tutorial="romm-firmware"></cannoli-screen>
</div>
<div class="task__steps" markdown>
1. Files are grouped into **Not on Device** and **On Device**.
2. Highlight one under **Not on Device** and press `A`.
3. The BIOS will be placed into the corresponding platform's BIOS folder in the Cannoli Root.
</div>
</div>

---

## Box Art

Pull box art for your **local** games from RomM:

- **Per platform** - press `Start` on a platform, select **Download Missing Art**.
- **Bulk** - **RomM Settings → Advanced → Download Missing Art**.

---

## Save Sync

Save Sync mirrors your in-game saves with your RomM server.

Turn it on at **RomM Settings → Save Sync**. You can choose how many **Save Backups** you want kept per game: **Off**, **3**, **5**, **10** (default **5**).

Syncing is automatic. It happens every 30 minutes, when the device reports it is back online, on game launch and on game exit. A cloud icon in the [status bar](customization.md#status-bar) shows the state.

### Conflicts

If a save changed in both places, launching prompts **Keep This Device** or **Use Server**. Background sync conflicts collect under **Sync Conflicts** found in the quick menu. Here you can pick to **Keep Local**, **Use Server**, or **Skip**.

### Backups and Save Slots

To restore a backup, navigate to  **Save Sync → Restore from Backup**. You can also restore via a game's context menu with **RomM Saves → Restore from Backup**.

A Save Slot is a way to have mulitiple named playthroughs in a single game. You can manage these from a game's context menu in the launcher.
