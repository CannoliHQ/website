# Settings

## Opening Settings

Press `X` on the main menu to open settings.

---

## Appearance

Change art settings, pick a background image, set colors, and more.

See the [Customization](customization.md#appearance) page for details.

---

## Library

- **Content Mode:** Switch between Default, Collections Only, or Five Game Handheld modes. See [Content Mode](library.md#content-mode).
- **5GH Collection:** The collection used when Content Mode is set to Five Game Handheld. Only shown in that mode.
- **Recently Played:** Show or hide the Recently Played section on the main menu. Not shown in Five Game Handheld mode.
- **Manage Ports:** Select which Android apps appear in Ports.
- **Manage Tools:** Select which Android apps appear in Tools.
- **Cannoli Root:** The root directory where Cannoli stores its files and the one you selected on first launch.
- **ROM Directory:** An optional second directory if you want to store your ROMs in a different location.

> [!NOTE]
> Platforms with no ROMs are always hidden.

---

## Input

- **Controllers:** Manage your controllers. The screen lists controllers **Connected Now** (with their player port) and previously-seen **Saved Mappings** (stored by Bluetooth MAC address). Open a controller to:
    - **Edit Buttons** - launch the button-remap wizard. Mappings can be global, per platform, or per game; the most specific assignment wins.
    - **Confirm Button** - choose whether the East or South face button confirms selections (per controller).
    - **Glyph Style** - choose the button-label style for that controller: **Plumber** (A/B/X/Y), **Redmond** (A/B/Y/X), or **Shapes** (✕/○/△/□).
    - **Exclude From Gameplay** - keep the controller usable for menus but ignore it during games.
    - **Name** - rename the controller.
    - **Reset Defaults** - revert your changes (only shown once you've edited the controller).
- **Shortcuts:** Configure shortcut actions
- **L1 / R1 Switches Platform:** Jump between platforms from the game list with the shoulder buttons. **Off** by default.
- **Swap Play and Resume:** Make `Resume` the primary action on games with save states
- **Main Menu Quit:** Enable the ability to quit on the main menu. For when Cannoli is not your main launcher.
- **Input Tester:** Open a screen that shows live controller input so you can verify button and axis mappings.

---

## Emulation

- **Core Mapping:** Choose which core or app handles each platform. Cannoli scans all installed RetroArch and RicottaArch packages to discover available cores and shows each option's source (Internal, RetroArch, RicottaArch, or Standalone). Press `Y` to filter the list by All, Missing, Internal, or External. Cores that are no longer installed show as "Missing."
- **RetroArch Package:** Select which installed RetroArch or RicottaArch package Cannoli should launch.
- **Installed Cores:** Lists all cores found in the selected RetroArch/RicottaArch package.
- **RetroArch DIY Mode:** When enabled, Cannoli will not inject values into your configuration and will act like other launchers when they open RetroArch. **On** by default.
- **Always Save On Quit:** When enabled, quitting a game from the In-Game Menu automatically saves state before exiting, and the Quit option is labeled "Save and Quit."

> [!WARNING]
> The `Installed Cores` feature requires RetroArch nightly with [my pull request](https://github.com/libretro/RetroArch/pull/18870) built on or after 2026-03-30.

---

## RetroAchievements

When you are not signed in you will see a place to enter your RetroAchievements credentials.

Once signed in, you will see your current username and can log out with the `X` button.

See the [RetroAchievements](retroachievements.md) page for more details.

---

## Nonna's Kitchen

Opens the [Nonna's Kitchen](nonnas-kitchen.md) file manager.

---

## Advanced

- **Logging:** Toggle detailed logging per subsystem - **ROM Scan**, **Input**, and **Game Session**. Logs are written to `Cannoli/Logs/`. Useful for diagnosing core, controller, or library issues.
- **Kitchen Code Bypass:** Skip the PIN prompt when opening Nonna's Kitchen.
- **Release Channel:** Tells the updater what type of build you want
    - Choose from `Stable`, `Beta`, and `Test`
- **Default Launcher:** Set Cannoli as your device's default launcher.

---

## About

Shows Cannoli build information: version, date built, and commit hash.

Press `X` to view the credits for everything that made making Cannoli possible.


---

## Updating Cannoli

If a new update has been detected for your [release channel](#advanced) you will see an icon in the status bar.

To install the update, navigate to Settings → About and press Y to update.
