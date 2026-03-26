# RetroAchievements

Cannoli's built-in core runner has [RetroAchievements](https://retroachievements.org) support!

## Logging In

Head to **Settings → RetroAchievements** and enter your credentials. 

Once logged in you'll see your account status. 

To log out, press `X` from the account screen.

!!! tip
    You only need to log in once. Cannoli stores your session token so you stay logged in across launches.

!!! important
    You need a [RetroAchievements account](https://retroachievements.org) to use this feature. It's free to sign up.

## How It Works

When you launch a game on a supported platform, Cannoli automatically identifies the ROM and loads its achievement set
from RetroAchievements.

If the game has achievements, you'll earn them as you play.

When an achievement unlocks you'll see a notification pop up on screen.

## Supported Platforms

Not every platform supports achievements. 

Look for :material-trophy: in the "Achievements" column on the [Platforms](platforms.md) page for the full list.

## Viewing Achievements In-Game

While playing a game that has achievements you will see a new option in the in-game menu.

From here you can:

- Browse the full achievement list
- Press `Y` to filter by **All**, **Locked**, or **Unlocked**
- Press `A` on any achievement to see its description, point value, and unlock status

The header shows your progress, something like `Achievements (5/15)` meaning 5 out of 15 unlocked.

## Game ID Overrides

Cannoli identifies games by hashing the ROM file. Most of the time this just works, but some ROM variants aren't
recognized automatically.

If a game isn't being detected, you can manually set its RetroAchievements game ID:

1. Highlight the game and press `Start` to open the context menu
2. Select **RA Game ID**
3. Enter the game's ID from the [RetroAchievements Game Database](https://retroachievements.org/gameList.php)

To clear an override, open the same menu and leave the field blank.

!!! warning
    RetroAchievements uses specific memory locations to trigger unlocks. Regional differences and ROM Hacks can break these locations.

    **This is not an approved feature and if you use it know achievements might not work.**

    **<u>Under no circumstance</u>** should you bother the developer of the achievements when using an override.

## Things to Know

- **Softcore only.** Achievements run in softcore mode. Hardcore mode will never be supported. Don't bother asking, just use an approved hardcore emulator setup.
- **Internet required.** Cannoli talks to the RetroAchievements server to load achievement data and report unlocks. No
  offline tracking.
- **Loading a save state resets tracking.** When you load a save state, achievement progress resets to avoid false
  triggers. This is the same behavior used by RetroArch.
- **ROM must be in the database.** If your ROM doesn't match anything on RetroAchievements, you won't get achievements
  unless you set up a [Game ID override](#game-id-overrides).
