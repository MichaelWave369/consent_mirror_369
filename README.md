# ConsentMirror369

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20479334.svg)](https://doi.org/10.5281/zenodo.20479334)

**ConsentMirror369 is a humane pressure-literacy and consent-awareness project.**

It helps people notice when a request, offer, argument, or conversation feels rushed, guilt-heavy, shaming, confusing, isolating, secretive, or emotionally loaded. The goal is not to judge anyone. The goal is to pause, reflect, ask better questions, and return to clear choice.

> Pressure reduces choice. Clarity restores choice.

## Official release

**Latest release:** [ConsentMirror369 v1.0.1 — Zenodo Metadata Release](https://github.com/MichaelWave369/consent_mirror_369/releases/tag/v1.0.1)

**DOI:** [10.5281/zenodo.20479334](https://doi.org/10.5281/zenodo.20479334)

**Status:** v1.0.1 archived on Zenodo.

## Citation

If you use or reference this project, please cite:

```text
Hughes, Michael W. (2026). ConsentMirror369 (v1.0.1). Zenodo. https://doi.org/10.5281/zenodo.20479334
```

Citation metadata is also available in `CITATION.cff`.

## What is included

- A React and Vite prototype app
- A data-driven phrase analyzer for common pressure signals
- The 17 Mirror Sentences loaded from JSON
- Real-world scenario examples for family, faith, workplace, online, sales, and relationships
- Guided response builder with calm boundary templates
- Consent check prompts
- Boundary response examples
- Local-only reflection log using browser storage
- Reflection export and import as JSON
- Duplicate-aware reflection imports
- Printable card deck flow through the browser print dialog
- Printable card backs with CM369 deck identity
- Shared visual theme tokens
- Mobile-friendly responsive layout
- Citation metadata through `CITATION.cff`
- Zenodo metadata through `.zenodo.json`
- Accessibility notes and v1.0 release checklist
- Release verification workflow
- MIT license
- Security and safety policy
- Framework docs
- JSON data seeds for future app growth
- GitHub Pages deployment workflow

## Core method

1. **Notice** — What changed in my body, mood, or sense of safety?
2. **Name** — What kind of pressure might be present?
3. **Pause** — How can I slow this down safely?
4. **Choose** — What do I actually consent to?

## Local development

```bash
npm install
npm run dev
```

## Validate and build

```bash
npm run release:check
```

This runs:

```bash
npm run validate:data
npm run build
```

## Guided response builder

The app includes response templates for gentle pause, clear pause, firm boundary, evidence request, care with boundary, and exit line. Templates live in `data/response_templates.json` and are documented in `docs/RESPONSE_BUILDER.md`.

## Scenario examples

The app includes practice scenarios that can be loaded into the analyzer and reflection log. Scenarios live in `data/scenarios.json` and are documented in `docs/SCENARIO_EXAMPLES.md`.

## Printable deck

The app includes a **Print / Save PDF deck** button. It opens the 17 Mirror Sentences as printable cards with matching card backs. Use the browser print dialog to print or choose **Save as PDF**.

Card deck visual direction is documented in `docs/CARD_DECK_VISUAL_IDENTITY.md`.

## Release docs

Before public launch or follow-up releases, use:

- `docs/RELEASE_PROCESS.md`
- `docs/V1_RELEASE_CHECKLIST.md`
- `docs/V1_RELEASE_NOTES.md`
- `docs/V1_0_1_RELEASE_NOTES.md`
- `docs/PUBLIC_LAUNCH_POST.md`
- `docs/ACCESSIBILITY_NOTES.md`

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To enable Pages:

1. Open repo settings.
2. Go to Pages.
3. Set Source to GitHub Actions.
4. Run the deploy workflow or push to `main`.

## Privacy model

The reflection log is local-first. Entries are saved only in the user's browser through local storage. The app includes export, import, and clear controls so the user can keep, restore, or remove their own reflections.

Local storage is not encrypted. Anyone with access to the same browser profile may be able to view saved entries.

## Project boundaries

ConsentMirror369 is an education and reflection project. It does not diagnose people, prove intent, replace therapy, replace legal advice, or guarantee safety.

A pattern is not proof. It is a cue to slow down.

If there is immediate danger, threats, stalking, coercive control, self-harm risk, or fear for physical safety, prioritize trusted support, local emergency services, or qualified professional help.

## Security and safety policy

See `SECURITY.md` for security reporting, safety concerns, and privacy reminders.

## License

MIT License. See `LICENSE` for details.

## Repo map

```text
docs/       Framework notes and safety boundaries
data/       JSON seed data
scripts/    Data validation script
src/        React prototype app
.github/    GitHub Pages and verification workflows
```

## Current status

v1.0.1 archived on Zenodo.

Completed:

- Created working React app
- Added phrase analyzer
- Added 17 Mirror Sentences
- Moved cards and signal rules into JSON data files
- Added real-world scenario examples and scenario browser
- Added guided response builder
- Added local-only reflection log
- Added reflection export, import, clear, and duplicate-skip controls
- Added printable card deck flow with matching card backs
- Added card deck visual identity notes
- Added shared theme tokens and responsive visual pass
- Added accessibility notes
- Added v1.0 release checklist
- Added v1.0 release notes
- Added v1.0.1 release notes
- Added citation metadata
- Added Zenodo metadata
- Added Zenodo DOI badge and citation link
- Added public launch post draft
- Added changelog
- Added release process docs
- Added MIT license
- Added security and safety policy
- Added `release:check` script
- Added verification workflow
- Added validation for JSON data
- Added roadmap and contribution guide
- Published GitHub release v1.0.0
- Published GitHub release v1.0.1
- Archived release on Zenodo

Next planned work:

- Continue post-v1.0 polish and documentation
- Add future feature releases as needed

## Project vow

This project exists to increase agency, dignity, consent, compassion, and self-trust.
