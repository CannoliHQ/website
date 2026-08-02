# Settings

## Opening Settings

Press `X` on the main menu to open settings.

---

## General

- **Language:** The language Cannoli's interface is displayed in. Cycle through the options with `Left` / `Right`. See [Available Languages](#available-languages).
- **Title:** Set a custom title that appears at the top of the launcher's platform screen. See [Title](customization.md#title).
- **Swap Play and Resume:** Make `Resume` the primary action on games with save states.
- **Main Menu Quit:** Enable the ability to quit on the main menu. This is handy for Android TV devices or For when Cannoli is not your main launcher.
- **Set as Default Launcher:** Set Cannoli as your device's default launcher. Only shown when Cannoli isn't already the default.

### Available Languages

The Language picker lists each language under its own name:

| Language               | As shown in Cannoli     |
|------------------------|-------------------------|
| English (default)      | English                 |
| Chinese, Simplified    | 简体中文                    |
| French                 | Français                |
| German                 | Deutsch                 |
| Greek                  | Ελληνικά                |
| Italian                | Italiano                |
| Japanese               | 日本語                     |
| Portuguese             | Português (Portugal)    |
| Portuguese, Brazilian  | Português (Brasil)      |
| Spanish                | Español (España)        |
| Spanish, Latin America | Español (Latinoamérica) |
| Ukrainian              | Українська              |

> [!TIP]
> If a language uses characters your selected [font](customization.md#font) can't draw, Cannoli falls back to its default font for that language so nothing renders as blank boxes.

> [!NOTE]
> Cannoli is translated by the community. If you'd like to help, or want to see your language added, visit the [Cannoli project on Crowdin](https://l10n.cannoli.dev).

---

## Appearance

Change art settings, pick a background image, set colors, and more.

See the [Customization](customization.md#appearance) page for details.

---

## Library

- **Content Mode:** Switch between Default, Collections Only, or Five Game Handheld modes. See [Content Modes](library.md#content-modes).
- **5GH Collection:** The collection used when Content Mode is set to Five Game Handheld. Only shown in that mode.
- **Recently Played:** Show or hide the Recently Played section on the main menu. Not shown in Five Game Handheld mode.
- **Favorites:** Show or hide the Favorites section on the main menu. Hiding it only removes the main menu entry. Favorited games keep their star and still sort to the top of their own lists. Not shown in Five Game Handheld mode.
- **Manage Ports:** Select which Android apps appear in Ports.
- **Manage Tools:** Select which Android apps appear in Tools.
- **Scan Mode:** Choose whether the library rescans automatically on boot (**Automatic**) or only when triggered (**Manual**). Manual is useful on slow storage or when using very large collections.
- **Cannoli Root:** The root directory where Cannoli stores its files and the one you selected on first launch.
- **ROM Directory:** An optional second directory if you want to store your ROMs in a different location.

---

## Input

- **Controllers:** Manage your controllers. The screen lists controllers **Connected Now** (with their player port) and previously-seen **Saved Mappings**.
    - **Edit Buttons** - launch the button-remap wizard. Mappings can be global, per platform, or per game; the most specific assignment wins.
    - **Confirm Button** - choose whether the East or South face button confirms selections (per controller).
    - **Glyph Style** - choose the button-label style for that controller: **Plumber** (B/A/X/Y), **Redmond** (A/B/Y/X), or **Shapes** (✕/○/△/□).
    - **Exclude From Gameplay** - keep the controller usable for menus but ignore it during games.
    - **Name** - rename the controller.
    - **Reset Defaults** - revert your changes (only shown once you've edited the controller).
- **Shortcuts:** Configure shortcut actions.
- **Input Tester:** Open a screen that shows live controller input so you can verify button and axis mappings.

---

## Emulation

- **Emulator Mapping:** Open a per-platform screen to choose which core or app handles each platform. The picker lists every emulator option grouped by source (Internal, RetroArch, RicottaArch, Standalone) and defaults to showing only what's installed.
- **RetroArch Package:** Select which installed RetroArch or RicottaArch package Cannoli should launch.
- **Installed Cores:** Lists all cores for the selected RetroArch/RicottaArch package.
- **Save State On Quit:** When enabled, quitting a game from the In-Game Menu automatically saves state before exiting.

> [!WARNING]
> The `Installed Cores` feature requires RetroArch nightly with [my pull request](https://github.com/libretro/RetroArch/pull/18870) built on or after 2026-03-30.

---

## Integrations

Opens a sub-list of third-party services Cannoli can talk to.

### RetroAchievements

When you are not signed in you will see a place to enter your RetroAchievements credentials.

Once signed in, you will see your current username and can log out with the `X` button.

See the [RetroAchievements](retroachievements.md) page for more details.

### RomM

Connect Cannoli to a [RomM](https://romm.app) server to browse and download games, firmware, and box art.

When not paired:

- **Host:** The URL of your RomM server (e.g. `https://romm.local`).
- **Allow Self-Signed Cert:** Accept self-signed TLS certificates when connecting. **Off** by default.
- **Pairing Code:** A one-time code generated in RomM under your user profile. Only shown once a host is set.
- **Pair:** Submit the host and pairing code to authenticate. Only shown once both fields are filled.

Once paired, the screen shows a Connected dialog with your host, account, and server version. Press `X` to disconnect.

See the [RomM](romm.md) page for more details.

---

## Advanced

- **Logging:** Toggle detailed logging per subsystem - **ROM Scan**, **Input**, and **Game Session**. Logs are written to `Cannoli/Logs/`. Useful for diagnosing core, controller, or library issues.
- **Screen Geometry:** Shrink and reposition Cannoli's entire interface so it fits displays that crop the edges, such as a CRT through an HDMI converter or a TV with overscan. Opens a calibration screen:
    - **Width** and **Height** scale the interface from **100%** down to **50%**.
    - **Horizontal Position** and **Vertical Position** nudge the picture once you have shrunk it (they stay disabled at full size).
    - Adjust the selected row with `Left` / `Right`, and press `X` to reset everything to default.
- **Regenerate System Folders:** Recreate any missing platform folders under your ROM directory based on the current platform list. Reports how many folders were created (or that all were already present).
- **Kitchen Code Bypass:** Skip the PIN prompt when opening Nonna's Kitchen.
- **Experimental Features:** Unlocks experimental options elsewhere in Cannoli, such as **D-Pad Mode** in the in-game Input settings.
- **Release Channel:** Tells the updater what type of build you want.
    - Choose from `Stable`, `Beta`, and `Test`.

---

## About

Shows Cannoli build information: version, date built, and commit hash.

Press `X` to view the credits for everything that made Cannoli possible.


---

## Updating Cannoli

If a new update has been detected for your [release channel](#advanced) you will see an icon in the status bar.

To install the update, navigate to Settings → About and press Y to update.
