## RetroArch Integration

When launching a game through RetroArch, Cannoli pulls the global `retroarch.cfg` from RetroArch's Scoped Storage and patches it with a set of overrides before passing it along.

This keeps your directory paths and key settings consistent without you having to configure RetroArch yourself.

### Injected Config Values

These values are written into the config every time, regardless of any other settings.

| Key                                 | Value                                               |
|-------------------------------------|-----------------------------------------------------|
| `savefile_directory`                | `{Cannoli Root}/Saves`                              |
| `savestate_directory`               | `{Cannoli Root}/Save States/{Platform}/{Game Name}` |
| `system_directory`                  | `{Cannoli Root}/BIOS/{Platform}`                    |
| `screenshot_directory`              | `{Cannoli Root}/Media/Screenshots`                  |
| `recording_output_directory`        | `{Cannoli Root}/Media/Recordings`                   |
| `sort_savefiles_by_content_enable`  | `true`                                              |
| `sort_savestates_by_content_enable` | `false`                                             |
| `config_save_on_exit`               | `false`                                             |

!!! tip
    `{Cannoli Root}` is the Cannoli root directory that you picked during initial setup. 

    See [Directory Structure](directory-structure.md) for the full layout.

!!! note
    `config_save_on_exit` is forced to `false` so RetroArch doesn't overwrite these patched values when it exits.

!!! note
    `sort_savefiles_by_content_enable` tells RetroArch to organize saves into subdirectories by platform, matching Cannoli's layout. 
    `sort_savestates_by_content_enable` is needed because `savestate_directory` already points directly to the game's state folder.

    Without these, RetroArch wouldn't be able to properly access your saves and save states.


### RetroAchievements Credentials { data-toc-label="RetroAchievements" }

When you've logged into [RetroAchievements](retroachievements.md), Cannoli also injects your credentials into the config.

| Key                | Value                     |
|--------------------|---------------------------|
| `cheevos_enable`   | `true`                    |
| `cheevos_username` | Your stored username      |
| `cheevos_token`    | Your stored session token |

If no credentials are set, these keys are left untouched.
