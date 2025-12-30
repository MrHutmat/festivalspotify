---
name: modernize-project
description: Audit and modernize this Next.js + Spotify codebase in small, safe steps
argument-hint: (optional) e.g. "focus on deps + Spotify API cleanup first"
---

You are working in this repository.

## What I want
This is an old Next.js (JavaScript) project:
- Spotify login
- load my playlists
- compare against festival lineups to find overlapping songs/artists

## Problems / tasks
1) Dependency upgrades
- Identify outdated packages and propose a safe upgrade path (small steps).
- Note any Next.js major-version breaking changes.

2) Spotify API cleanup
- Find all Spotify Web API endpoints used in the codebase.
- Identify which features are broken / deprecated in practice (e.g., playback preview/sample).
- Remove or replace broken flows, and delete dead code.

3) App Router & server architecture
- Migrate old patterns toward Next.js App Router best practices.
- Move logic from scattered utils into appropriate server modules and route handlers.
- Keep client code thin; keep secrets on the server.

4) Project structure & code quality
- Propose a cleaned folder structure.
- Reduce duplication, improve naming, and simplify flows.
- Add minimal verification steps (lint/build/run + a small manual test checklist).

## How to proceed
- Step 0: Produce an AUDIT REPORT (bullet list) with:
  - current Next.js version, node engine (if present), major dependencies
  - where auth lives, where Spotify calls live, where “festival lineup” logic lives
  - a prioritized plan (Phase 1/2/3), each phase small and reviewable

- Then stop and wait for the next instruction OR offer “Phase 1: Dependency & build stabilization” as the first actionable step with a file-by-file plan.
