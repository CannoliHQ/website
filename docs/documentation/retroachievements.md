## RetroAchievements Integration

Cannoli's built-in core runner has [RetroAchievements](https://retroachievements.org) support!

> [!IMPORTANT]
> You need a free [RetroAchievements account](https://retroachievements.org) to use this feature.

---

## Logging In

Head to **Settings → Integrations → RetroAchievements** and enter your credentials. 

Once logged in you'll see your account status. 

From the account screen, press `Y` to log out or `X` to browse your [Offline Achievement Sets](#offline-play).

---

## How It Works

When you launch a game on a supported platform, Cannoli automatically identifies the ROM and loads its achievement set
from RetroAchievements.

When the game loads you'll see a brief notification telling you whether an achievement set was found.

If the game has achievements, you'll earn them as you play.

When an achievement unlocks you'll see a notification pop up on screen.

---

## Supported Platforms

Not every platform supports achievements. 

Look for :material-trophy:{ .trophy } on the [Platforms](platforms.md) page to find the supported platforms.

---

## Viewing Achievements In-Game

While playing a game that has achievements you will see a new option in the in-game menu.

From here you can:

- Browse the full achievement list
- Press `Y` to filter by **All**, **Unlocked**, or **Locked**
- Press `A` on any achievement to see its description, point value, and unlock status

The header shows your progress, something like `Achievements (5/15)` meaning 5 out of 15 unlocked.

---

## Game ID Overrides

Cannoli identifies games by hashing the ROM file. Most of the time this just works, but some ROM variants aren't
recognized automatically.

If a game isn't being detected, you can manually set its RetroAchievements game ID:

1. Highlight the game and press `Start` to open the context menu
2. Select **RA Game ID**
3. Enter the game's ID from the [RetroAchievements Game Database](https://retroachievements.org/gameList.php)

To clear an override, open the same menu and leave the field blank.

> [!IMPORTANT]
> RetroAchievements uses specific memory locations to trigger unlocks. Regional differences and ROM Hacks can break these locations.
>
> **This is not an approved feature and if you use it, know achievements might not work.**

> [!CAUTION]
> **<u>Under no circumstances</u>** should you bother the developer of the achievements when using an override.

---

## Offline Play

Cannoli can play a game's achievement set without an internet connection if you've cached it ahead of time. Unlocks earned offline are queued and synced when you're back online.

### Preloading a Game

To cache a game's achievement set:

1. Highlight the game and press `Start` to open the context menu
2. Select **Preload Achievements**

Cannoli downloads the set, the icon assets, and the metadata. You'll see a confirmation like `Cached 47 achievements (635 pts) for offline play`. The context menu shows **Preload Achievements (Cached)** once the game is ready for offline use.

**Preload Achievements** only appears when you're logged in and the platform supports native ROM hashing.

### Browsing Cached Sets

From the RA account screen (**Settings → Integrations → RetroAchievements** while signed in), press `X` to open **Offline Achievement Sets**. The screen groups your cached games by platform.

### Offline Status

When playing offline, the in-game RetroAchievements status reads `Offline` (or `Offline • N Pending Sync` if you have unlocks waiting to be uploaded). The next time Cannoli has internet, pending unlocks sync automatically.

---

## Things to Know

- **Softcore only.** Hardcore mode will never be implemented. Don't bother asking. If you need hardcore, use an approved emulator setup.
- **Loading a save state resets tracking.** When you load a save state, achievement progress resets to avoid false
  triggers. This is the same behavior used by RetroArch.
- **ROM must be in the database.** If your ROM doesn't match anything on RetroAchievements, you won't get achievements
  unless you set up a [Game ID override](#game-id-overrides).
