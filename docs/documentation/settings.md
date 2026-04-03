# Settings

## Opening Settings

Press `X` on the main menu to open settings.

## Updating Cannoli

If a new update has been detected for your [release channel](#advanced) you will see an option to update.

## Appearance

Colors, wallpapers, fonts, text size, status bar and more. 

See the [Customization](customization.md#appearance) page for details.

## Content

- **Empty Platforms:** Show or hide platforms with no ROMs
- **Ports:** Show or hide a renamable `platform` meant to hold Android Games.
- **Manage Ports:** Select which Android Apps appear in Ports.
- **Tools:** Show or hide a renamable `platform` meant to hold Android Apps (non-games).
- **Manage Tools:** Select which Android Apps appear in Tools.

!!! important
    The `manage` options only appear if the corresponding setting is set to `show`.

## Input

- **Profiles:** Reusable button mappings that can be assigned globally, per platform or per game. Cannoli ships with two built-in profiles: **Cannoli Navigation** (controls the launcher menus) and **Default Controls** (used in-game). You can create additional custom profiles from this screen.
- **Shortcuts:** Configure shortcut actions
- **L1 / R1 Switches Platform:** Jump between platforms from the game list
- **Swap Play and Resume:** Make `Resume` the primary action on games with save states

## Nonna's Kitchen

Opens the [Nonna's Kitchen](nonnas-kitchen.md) file manager.

## RetroAchievements

When you are not signed in you will see a place to enter your RetroAchievement credentials.

Once signed in, you will see your current username and can log out with the `X` button.

See the [RetroAchievements](retroachievements.md) page for more details.

## Advanced

- **Cannoli Root:** The root directory where Cannoli stores its files and the one you selected on first launch
- **Core Mapping:** Choose which core or app handles each platform. Cannoli scans all installed RetroArch and RicottaArch packages to discover available cores and shows each option's source (Internal, RetroArch, RicottaArch, or Standalone). Press `Y` to filter the list by All, Missing, Internal, or External. Cores that are no longer installed show as "Missing."
- **Default Launcher:** Set Cannoli as your device's default launcher
- **Main Menu Quit:** Enable the ability to quit on the main menu. For when Cannoli is not your main launcher 😢
- **RetroArch Package:** Select which installed RetroArch or RicottaArch package Cannoli should launch
- **Installed Cores:** Lists all cores found in the selected RetroArch/RicottaArch package
- **Release Channel:** Tells the updater what type of build you want
    - Choose from `Stable`, `Beta` and `Test`

!!! warning
    Installed Cores is in early preview as it requires a RetroArch nightly with [my pull request](https://github.com/libretro/RetroArch/pull/18870) for querying cores.

## About

Shows Cannoli build information: version, date built and commit hash.

Press `X` to view the credits for the giants whose shoulders I am standing on.