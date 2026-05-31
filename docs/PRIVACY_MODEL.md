# Privacy Model

ConsentMirror369 is designed as a local-first reflection tool.

## Current v1.0-prep behavior

The reflection log uses browser local storage.

That means:

- Reflections are saved on the user's device and browser.
- The app does not need an account.
- The app does not send reflection entries to a server.
- The user can export reflections as JSON.
- The user can import a prior JSON export.
- The user can clear the local log.
- Imported reflections are checked for duplicates before being added.

## User reminder

Local storage is private from the app server, but it is not the same as encrypted storage. Anyone with access to the same browser profile may be able to view saved data.

Imported JSON files are cleaned into the expected reflection shape before being added to the local log. Duplicate detection checks both existing reflection IDs and a simple phrase-pattern-choice fingerprint.

## Future goals

- Add optional passphrase-based encrypted export.
- Add clearer per-device privacy notices.
- Add import preview before merge.
- Keep the app useful without accounts or cloud storage.

## Principle

Private reflection should stay under user control.
