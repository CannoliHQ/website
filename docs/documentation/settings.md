# Settings

## Opening Settings

Press `X` on the main menu to open settings.

## Appearance

Change art settings, pick a background image, set colors, and more.

See the [Customization](customization.md#appearance) page for details.

## Library

- **Recently Played:** Show or hide the Recently Played section on the main menu
- **Show Empty:** Show or hide platforms with no ROMs
- **Manage Ports:** Select which Android apps appear in Ports.
- **Manage Tools:** Select which Android apps appear in Tools.
- **SD Root:** The root directory where Cannoli stores its files and the one you selected on first launch
- **ROM Directory:** An optional second directory if you want to store your ROMs in a different location.

!!! important
    The `manage` options only appear if the corresponding setting is set to `show`.

## Input

- **Profiles:** Reusable button mappings that can be assigned globally, per platform or per game. Cannoli ships with two built-in profiles: **Cannoli Navigation** (controls the launcher menus) and **Default Controls** (used in-game). You can create additional custom profiles from this screen.
- **Shortcuts:** Configure shortcut actions
- **Platform Switching:** Jump between platforms from the game list
- **Swap Play and Resume:** Make `Resume` the primary action on games with save states
- **Main Menu Quit:** Enable the ability to quit on the main menu. For when Cannoli is not your main launcher.

## Nonna's Kitchen

Opens the [Nonna's Kitchen](nonnas-kitchen.md) file manager.

## RetroAchievements

When you are not signed in you will see a place to enter your RetroAchievements credentials.

Once signed in, you will see your current username and can log out with the `X` button.

See the [RetroAchievements](retroachievements.md) page for more details.

## Advanced

- **Core Mapping:** Choose which core or app handles each platform. Cannoli scans all installed RetroArch and RicottaArch packages to discover available cores and shows each option's source (Internal, RetroArch, RicottaArch, or Standalone). Press `Y` to filter the list by All, Missing, Internal, or External. Cores that are no longer installed show as "Missing."
- **RetroArch DIY Mode:** When enabled, Cannoli will not inject values into your configuration and will act like other launchers when they open RetroArch.
- **RetroArch Package:** Select which installed RetroArch or RicottaArch package Cannoli should launch
- **RetroArch Installed Cores:** Lists all cores found in the selected RetroArch/RicottaArch package. This requires a nightly release as this is a new feature in RetroArch.
- **Release Channel:** Tells the updater what type of build you want
    - Choose from `Stable`, `Beta`, and `Test`
- **Default Launcher:** Set Cannoli as your device's default launcher.

!!! warning
    Installed Cores is in early preview as it requires a RetroArch nightly with [my pull request](https://github.com/libretro/RetroArch/pull/18870) for querying cores.

## About

Shows Cannoli build information: version, date built, and commit hash.

Press `X` to view the credits for the giants whose shoulders I am standing on.


## Updating Cannoli

If a new update has been detected for your [release channel](#advanced) you will see an icon in the status bar.

To install the update, navigate to Settings → About and press Y to update.
