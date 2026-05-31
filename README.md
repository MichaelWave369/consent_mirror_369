# ConsentMirror369

**ConsentMirror369 is a humane pressure-literacy and consent-awareness project.**

It helps people notice when a request, offer, argument, or conversation feels rushed, guilt-heavy, shaming, confusing, isolating, secretive, or emotionally loaded. The goal is not to judge anyone. The goal is to pause, reflect, ask better questions, and return to clear choice.

> Pressure reduces choice. Clarity restores choice.

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
- Printable card deck flow through the browser print dialog
- Shared visual theme tokens
- Mobile-friendly responsive layout
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
npm run validate:data
npm run build
```

## Guided response builder

The app includes response templates for gentle pause, clear pause, firm boundary, evidence request, care with boundary, and exit line. Templates live in `data/response_templates.json` and are documented in `docs/RESPONSE_BUILDER.md`.

## Scenario examples

The app includes practice scenarios that can be loaded into the analyzer and reflection log. Scenarios live in `data/scenarios.json` and are documented in `docs/SCENARIO_EXAMPLES.md`.

## Printable deck

The app includes a **Print / Save PDF deck** button. It opens the 17 Mirror Sentences as printable cards. Use the browser print dialog to print or choose **Save as PDF**.

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

## Repo map

```text
docs/       Framework notes and safety boundaries
data/       JSON seed data
scripts/    Data validation script
src/        React prototype app
.github/    GitHub Pages workflow
```

## Current status

v0.9 prototype.

Completed:

- Created working React app
- Added phrase analyzer
- Added 17 Mirror Sentences
- Moved cards and signal rules into JSON data files
- Added real-world scenario examples and scenario browser
- Added guided response builder
- Added local-only reflection log
- Added reflection export, import, and clear controls
- Added printable card deck flow
- Added shared theme tokens and responsive visual pass
- Added validation for JSON data
- Added roadmap and contribution guide

Next planned work:

- Add card deck backs / visual identity
- Add accessibility pass
- Add duplicate detection for imported reflections
- Prepare v1.0 release checklist

## Project vow

This project exists to increase agency, dignity, consent, compassion, and self-trust.
