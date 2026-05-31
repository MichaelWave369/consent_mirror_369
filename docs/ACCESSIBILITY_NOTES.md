# Accessibility Notes

ConsentMirror369 should be usable, calm, and readable for people under stress.

## Current v1.0 prep improvements

- Text inputs and controls use explicit labels.
- Status messages use `aria-live` so screen readers can announce save/import/export updates.
- Main sections use semantic headings and labelled regions.
- Buttons use descriptive text or `aria-label` values.
- Content avoids flashing, aggressive motion, or fear-amplifying language.

## Design goals

- Keep language plain and readable.
- Preserve strong color contrast.
- Make every action keyboard reachable.
- Avoid relying on color alone to communicate state.
- Keep sections scannable with clear headings.

## Future checks

- Run Lighthouse accessibility audit.
- Test with keyboard-only navigation.
- Test with a screen reader.
- Add visible focus states in CSS.
- Review mobile tap target sizes.
