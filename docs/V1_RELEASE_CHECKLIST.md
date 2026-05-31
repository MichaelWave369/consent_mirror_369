# v1.0 Release Checklist

Use this before announcing ConsentMirror369 publicly.

## Build checks

- [ ] `npm install` completes.
- [ ] `npm run validate:data` passes.
- [ ] `npm run build` passes.
- [ ] GitHub Pages deploy workflow succeeds.

## App checks

- [ ] Phrase analyzer works.
- [ ] Scenario loading works.
- [ ] Guided response builder loads templates.
- [ ] Reflections save locally.
- [ ] Reflections export as JSON.
- [ ] Reflections import from JSON.
- [ ] Duplicate reflections are skipped during import.
- [ ] Clear log works.
- [ ] Printable deck opens and prints/saves as PDF.

## Safety checks

- [ ] README includes project boundaries.
- [ ] Safety notes are visible in docs.
- [ ] `SECURITY.md` is present.
- [ ] No content teaches control, coercion, revenge, or counter-manipulation.
- [ ] Emergency/danger language points users toward trusted support.

## Accessibility checks

- [ ] Keyboard-only navigation works.
- [ ] Labels are clear.
- [ ] Status messages are announced.
- [ ] Color contrast is readable.
- [ ] Mobile layout is usable.

## Public launch checks

- [ ] Repo description is set on GitHub.
- [ ] GitHub Pages link works.
- [ ] License is present.
- [ ] First public post explains: pattern is a cue, not proof.
