# Workspace Copilot Instructions (Next.js + Spotify project)

## Project context
- This is an older Next.js project written in JavaScript (not TypeScript).
- Users log in with Spotify, load playlists, and compare them against festival lineups (artists) to find overlapping songs.

## Goals
- Modernize the codebase and project structure (keep JS unless explicitly asked to migrate).
- Prefer Next.js App Router patterns (route handlers, server components where appropriate).
- Move reusable “utils” logic into appropriate server-side modules and API/route handlers when it improves architecture.
- Remove Spotify functionality that no longer works due to deprecated endpoints (don’t keep dead code).
- Upgrade dependencies safely and incrementally.

## How to work
- Start by scanning the repo and producing a short “audit + plan” before making sweeping edits.
- Make changes in small, reviewable steps. For each step:
  - list files you will change
  - explain why
  - implement
  - note how to verify (run command / manual test checklist)
- Do not invent API endpoints or responses—point to the exact code locations that need updates and propose alternatives.
- Prefer clear, consistent naming and folder structure.
- Keep UI changes separate from backend/auth/data changes unless explicitly requested.

## Output style
- Provide concrete diffs/snippets and file paths.
- Call out risks and breaking changes.

## Upgrade rules (very important)
- Do dependency upgrades in phases:
  Phase 1: Toolchain/build (Next.js + eslint-config-next + node version)
  Phase 2: Auth (next-auth) only if needed
  Phase 3: Spotify API + data flows
  Phase 4: UI rewrite
- Never mix Phase 4 UI rewrite with backend/auth refactors in the same PR-sized change set.

## Next.js constraints
- This is App Router. Prefer route handlers in `app/api/**/route.js`.
- Prefer server-only modules in `lib/server/**` and keep secrets server-side.
- Do not introduce Pages Router patterns.

## next-auth
- Use Route Handler pattern under `app/api/auth/[...nextauth]/route.js`.
- Prefer staying on next-auth v4 during Next.js upgrade unless a blocker forces v5.

