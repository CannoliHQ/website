# Settings

## Opening Settings

Press `X` on the main menu to open settings.

---

## Appearance

Change art settings, pick a background image, set colors, and more.

See the [Customization](customization.md#appearance) page for details.

---

## Library

- **Content Mode:** Switch between Platforms, Collections, or Five Game Handheld modes. See [Content Mode](library.md#content-mode).
- **FGH Collection:** The collection used when Content Mode is set to Five Game Handheld. Only shown in that mode.
- **Recently Played:** Show or hide the Recently Played section on the main menu
- **Show Empty:** Show or hide platforms with no ROMs. Only shown in Platforms mode.
- **Manage Ports:** Select which Android apps appear in Ports.
- **Manage Tools:** Select which Android apps appear in Tools.
- **SD Root:** The root directory where Cannoli stores its files and the one you selected on first launch
- **ROM Directory:** An optional second directory if you want to store your ROMs in a different location.

> [!IMPORTANT]
> The `manage` options only appear if the corresponding setting is set to `show`.

---

## Input

- **Profiles:** Reusable button mappings stored as INI files in `Config/Profiles/`. Cannoli ships with two built-in profiles:
    - **Cannoli Navigation** - controls the launcher menus. Cannot be assigned to games.
    - **Default Controls** - the fallback profile used in-game when no more-specific profile is assigned.

    Create additional custom profiles from this screen. A game profile can be assigned globally, per platform, or per game. The most specific assignment wins.
- **Shortcuts:** Configure shortcut actions
- **Button Labels:** Choose which button label style is shown throughout the launcher. Options are **Plumber** (A/B/X/Y), **Redmond** (A/B/Y/X), and **Shapes** (✕/○/△/□). Default is Plumber.
- **Confirm Button:** Choose which physical button confirms selections. **East** uses the east button (A on Plumber) to confirm. **South** uses the south button (A on Redmond, X on Shapes) to confirm.
- **Platform Switching:** Jump between platforms from the game list
- **Swap Play and Resume:** Make `Resume` the primary action on games with save states
- **Main Menu Quit:** Enable the ability to quit on the main menu. For when Cannoli is not your main launcher.
- **Input Tester:** Open a screen that shows live controller input so you can verify button and axis mappings.

---

## Emulation

- **Core Mapping:** Choose which core or app handles each platform. Cannoli scans all installed RetroArch and RicottaArch packages to discover available cores and shows each option's source (Internal, RetroArch, RicottaArch, or Standalone). Press `Y` to filter the list by All, Missing, Internal, or External. Cores that are no longer installed show as "Missing."
- **Always Save On Quit:** When enabled, quitting a game from the In-Game Menu automatically saves state before exiting, and the Quit option is labeled "Save and Quit."

---

## Nonna's Kitchen

Opens the [Nonna's Kitchen](nonnas-kitchen.md) file manager.

---

## RetroAchievements

When you are not signed in you will see a place to enter your RetroAchievements credentials.

Once signed in, you will see your current username and can log out with the `X` button.

See the [RetroAchievements](retroachievements.md) page for more details.

---

## Advanced

- **Debug Logging:** Write a detailed session log to `Cannoli/Logs/` on the SD card each time a game is launched. Useful for diagnosing core or launcher issues.
- **RetroArch DIY Mode:** When enabled, Cannoli will not inject values into your configuration and will act like other launchers when they open RetroArch.
- **Kitchen Code Bypass:** Skip the PIN prompt when opening Nonna's Kitchen.
- **RetroArch Package:** Select which installed RetroArch or RicottaArch package Cannoli should launch
- **RetroArch Installed Cores:** Lists all cores found in the selected RetroArch/RicottaArch package.
- **Release Channel:** Tells the updater what type of build you want
    - Choose from `Stable`, `Beta`, and `Test`
- **Default Launcher:** Set Cannoli as your device's default launcher.

> [!WARNING]
> The `Installed Cores` feature requires RetroArch nightly with [my pull request](https://github.com/libretro/RetroArch/pull/18870) built on or after 2026-03-30.

---

## About

Shows Cannoli build information: version, date built, and commit hash.

Press `X` to view the credits for everything that made making Cannoli possible.


---

## Updating Cannoli

If a new update has been detected for your [release channel](#advanced) you will see an icon in the status bar.

To install the update, navigate to Settings → About and press Y to update.
