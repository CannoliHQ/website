> [!CAUTION]
> Concepts of a plan ahead!
>
> RicottaArch is still being worked on and does not currently have a release.
>
> Just wanted to have this placeholder if you saw the repo on GitHub and were curious.

---

## What is RicottaArch?

[RicottaArch](https://github.com/CannoliHQ/RicottaArch) is a fork of RetroArch updated to be specifically used with Cannoli. 

> [!IMPORTANT]
> You might be thinking, will using this replace / delete my RetroArch install?
>
> Nope! This is packaged under a different package name and both can be installed at the same time.


It serves two main purposes. 

First, this is where the custom cannoli menu driver lives. 

This menu driver allows the main screen of RetroArch's IGM to look like Cannoli's IGM. All other screens fallback to use Ozone.

You might be wondering why I only themed the main screen. Because I really don't want to maintain an entire menu driver!

Second, this fork holds two pull requests that have not been accepted upstream.

- [Add 'Menu Toggle Without Hotkey Enable' option](https://github.com/libretro/RetroArch/pull/18785)
- [Query Installed Cores on Android](https://github.com/libretro/RetroArch/pull/18870)

Everything else about RicottaArch is just RetroArch!
