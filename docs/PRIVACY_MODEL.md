# Privacy Model

ConsentMirror369 is designed as a local-first reflection tool.

## Current v0.4 behavior

The reflection log uses browser local storage.

That means:

- Reflections are saved on the user's device and browser.
- The app does not need an account.
- The app does not send reflection entries to a server.
- The user can export reflections as JSON.
- The user can clear the local log.

## User reminder

Local storage is private from the app server, but it is not the same as encrypted storage. Anyone with access to the same browser profile may be able to view saved data.

## Future goals

- Add optional passphrase-based encrypted export.
- Add import from prior JSON export.
- Add clearer per-device privacy notices.
- Keep the app useful without accounts or cloud storage.

## Principle

Private reflection should stay under user control.
