## What is RicottaArch?

[RicottaArch](https://github.com/CannoliHQ/RicottaArch) is a fork of RetroArch updated to be specifically used with Cannoli. 

> [!IMPORTANT]
> You might be thinking: will using this replace my RetroArch install?
>
> Nope! This is packaged under a different package name and both can be installed at the same time.

The fork replaces RetroArch's quick menu with the Cannoli IGM and lets Cannoli inject save states and a curated set of RetroArch settings at launch. The goal is parity between RicottaArch and Cannoli's built-in core runner.

---

## Selecting RicottaArch

Install RicottaArch from its [GitHub repo](https://github.com/CannoliHQ/RicottaArch). It installs alongside your existing RetroArch.

Once installed, select it under **Settings → Emulation → RetroArch Package**. Any platform mapped to a RetroArch core then launches through RicottaArch and inherits its features: Cannoli IGM, save state injection, and settings injection.

If a non-Ricotta RetroArch package is selected instead, Cannoli stays hands-off: it won't inject save state or settings, and the in-game menu falls back to RetroArch's own quick menu.

---

## In-Game Menu

Pressing the menu button while a game is running inside RicottaArch opens the Cannoli IGM, the same one used by the built-in core runner. See [In-Game Menu](playing-games.md#in-game-menu-igm) for the shared menu items.

### Settings

Selecting **Settings** from the IGM opens a RicottaArch-specific screen with four categories:

- **Video** - aspect ratio, integer scale, smoothing, rotation, VSync, black frame insertion
- **Audio** - enable, mute, volume, latency, rate control delta
- **Latency** - run-ahead, frame delay, hard sync, audio sync
- **On-Screen Display** - notification toggles, FPS / statistics / memory HUD, Reset OSD

At the bottom of the list is a **RetroArch Menu** entry that drops you into RetroArch's own native UI for anything Cannoli doesn't expose.

Changes apply immediately. Settings that need a relaunch show an "Applies on relaunch" hint.

### Save Prompt

When you change RicottaArch settings and back out of the Settings screen, Cannoli asks where to persist them:

- **Save for Platform** - applies to every game on this platform
- **Save for this game** - applies only to the current game
- **Discard** - throw the changes away

Game-level overrides take priority over platform-level overrides.

---

## Resume

Resume works for RicottaArch the same way it works for Cannoli's built-in core runner. See [Resuming a Game](playing-games.md#resuming-a-game) for the launcher controls.
