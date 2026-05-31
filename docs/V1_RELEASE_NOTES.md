# ConsentMirror369 v1.0 Release Notes

**Status:** v1.0.0 ready  
**Project type:** Humane pressure-literacy and consent-awareness tool

## Release summary

ConsentMirror369 v1.0 is a local-first reflection tool for recognizing pressure patterns, pausing before rushed decisions, and returning to clearer consent.

It is designed as a lantern, not a weapon. It does not teach people how to pressure others. It helps users notice when a conversation, request, offer, or situation may be affecting their sense of choice.

## Core features

- Phrase analyzer for common pressure signals
- The 17 Mirror Sentences
- Real-world practice scenarios
- Guided response builder
- Local-only reflection log
- Reflection export and import
- Duplicate-aware import handling
- Printable 17-card teaching deck
- Safety and claim boundaries
- Privacy model documentation
- Accessibility notes
- v1.0 release checklist
- Verification workflow
- GitHub Pages deploy workflow

## Current data files

- `data/mirror_sentences.json`
- `data/pressure_patterns.json`
- `data/signal_rules.json`
- `data/scenarios.json`
- `data/response_templates.json`

## User flow

1. Enter or load a phrase.
2. Review possible pressure cues.
3. Check consent and body-level clarity.
4. Learn from a real-world scenario.
5. Build or edit a calm response.
6. Save the reflection locally.
7. Export, import, or clear reflections.
8. Print or save the card deck as PDF.

## Safety boundaries

ConsentMirror369 does not diagnose people, prove intent, replace therapy, replace legal advice, or guarantee safety. A detected pattern is a cue to slow down, not proof that someone is malicious.

If there is immediate danger, threats, stalking, coercive control, self-harm risk, or fear for physical safety, users should prioritize trusted support, local emergency services, or qualified professional help.

## Privacy boundaries

The reflection log uses browser local storage. Reflections are not sent to a server by the app. Local storage is not encrypted, so anyone with access to the same browser profile may be able to view saved entries.

## Release verification

Before public sharing, run:

```bash
npm run release:check
```

And complete the checklist in `docs/V1_RELEASE_CHECKLIST.md`.
