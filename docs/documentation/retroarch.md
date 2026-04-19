> [!CAUTION]
> Here be dragons!
>
> I've spent most of my time working on the built-in core runner. 
>
> Don't fret this is still a planned feature but know currently things may not work as you expect.

> [!TIP]
> If you'd rather keep full control of your RetroArch setup, enable **RetroArch DIY Mode** under [Settings → Advanced](settings.md#advanced). When on, Cannoli launches games into RetroArch without injecting any of the config values described below.

---

## RetroArch Integration

When launching a game through RetroArch, Cannoli pulls the global `retroarch.cfg` from RetroArch's Scoped Storage and patches it with a set of overrides before passing it along.

This keeps your directory paths and key settings consistent without you having to configure RetroArch yourself.

### Global Config

These values are patched into the RetroArch config every time, regardless of any other settings.

| Key                                 | Value                                  |
|-------------------------------------|----------------------------------------|
| `savefile_directory`                | `{Cannoli Root}/Saves`                 |
| `savestate_directory`               | `{Cannoli Root}/Save States`           |
| `screenshot_directory`              | `{Cannoli Root}/Media/Screenshots`     |
| `recording_output_directory`        | `{Cannoli Root}/Media/Recordings`      |
| `assets_directory`                  | `{Cannoli Root}/Config/Assets`         |
| `sort_savefiles_by_content_enable`  | `true`                                 |
| `savestate_file_compression`        | `false`                                |
| `savestate_block_format`            | `false`                                |
| `savestate_thumbnail_enable`        | `true`                                 |
| `savestate_auto_save`               | `true`                                 |
| `config_save_on_exit`               | `false`                                |
| `video_font_enable`                 | `false`                                |

> [!TIP]
> `{Cannoli Root}` is the Cannoli root directory that you picked during initial setup.
>
> See [Directory Structure](directory-structure.md) for the full layout.

> [!NOTE]
> `config_save_on_exit` is forced to `false` so RetroArch doesn't overwrite these patched values when it exits.

> [!NOTE]
> `sort_savefiles_by_content_enable` tells RetroArch to organize saves into subdirectories by platform, matching Cannoli's layout.

### Per-Game Config

When launching a game, Cannoli applies additional overrides on top of the global config to route BIOS and save states to the correct location.

| Key                                 | Value                                               |
|-------------------------------------|-----------------------------------------------------|
| `system_directory`                  | `{Cannoli Root}/BIOS/{Platform}`                    |
| `savestate_directory`               | `{Cannoli Root}/Save States/{Platform}/{Game Name}` |
| `sort_savestates_by_content_enable` | `false`                                             |
| `state_slot`                        | `0`                                                 |


### RetroAchievements Credentials { data-toc-label="RetroAchievements" }

When you've logged into [RetroAchievements](retroachievements.md), Cannoli also injects your credentials into the config.

| Key                | Value                     |
|--------------------|---------------------------|
| `cheevos_enable`   | `true`                    |
| `cheevos_username` | Your stored username      |
| `cheevos_token`    | Your stored session token |

If no credentials are set, these keys are left untouched.
