# Quirks

## Android / Google TV Accessibility Service

Android TV and Google TV devices intercept the `Home` and `Menu` buttons on controllers.

This means Cannoli by default does not "see" these buttons being pressed.

Cannoli includes an optional accessibility service that works around this. When enabled, it intercepts these buttons only while Cannoli is in the foreground. This means they work as expected.

- `Home` opens the in-game menu while playing.
- `Menu` acts as `Select` in the launcher UI.

Long-pressing `Home` on your TV Remote for one second still takes you back to the Android home screen.

You can enable it under **Settings → Accessibility → Cannoli**.

You may see this and balk at the permissions, and that is totally fair. You can audit the implementation for yourself.

I figured integrating an accessibility service into Cannoli was better than having you go out and buy a random button remapper.
