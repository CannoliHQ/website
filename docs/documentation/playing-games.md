# Playing Games

## Built-In Core Runner

Cannoli ships with a built-in libretro core runner. Press `A` on a game to play it.

Whether a platform uses the built-in runner, RetroArch, or a standalone emulator depends on what's supported. See [Platforms](platforms.md) for the full breakdown.

During gameplay, open the in-game menu to save state, load state, or quit.

- **Android handhelds:** press the `Menu` button.
- **Android TV / Google TV:** press `Home` on your controller. You'll need to enable the Accessibility Service first so the button isn't intercepted by the OS. See the [FAQ](faq.md) for details.

## Save States vs. In-Game Saves

These are two separate things and they don't mix.

**In-game saves** are created by the game itself: save points, a save menu, or battery-backed RAM. They're stored as `.sav` files and work across any device or emulator that supports the game.

**Save states** are snapshots of the entire emulator at a moment in time, created from the in-game menu. They're fast and can be made anywhere, but they're emulator-specific and may break if you switch cores.

Use in-game saves for long-term portability. Use save states for convenience, not as a substitute for a proper in-game save.

## Resume

If a save state exists for a game, press `X` from the game list to jump straight back in.

## External Emulators

You can configure which emulator or core handles a platform under **Settings → Advanced → Core Mapping**.

The [directory structure](directory-structure.md) is the same regardless of whether you use the built-in runner or an external app.
