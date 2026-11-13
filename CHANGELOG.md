# Changelog

## 0.2.0 — UI preview

### Added
- React/TypeScript interface and a Tauri 2 native project scaffold.
- Startup animation with logo-first timing, pixel-text title, progress below text, Welcome and Skip.
- Home with sample weekly games, sample news, a local clock and last-played empty state.
- Centered icon navigation and initial Store, Library, Friends, Account and Settings views.
- English/Persian selection, timezone preferences, reduced motion and local settings persistence.
- Standalone HTML generator and downloadable preview.
- Bilingual README, roadmap, build notes and interface screenshots.

### Validation
- TypeScript/Vite production build passed in the development environment.
- Previous standalone Chromium checks passed for startup timing/layout, Home, Persian selection, Tehran timezone, navigation hide/reveal and local preference persistence.
- Windows compilation, installer behavior and performance measurements are not verified.

### Not implemented
Game download/install/launch/update services, real accounts, chat, payments, a tray service and SQLite persistence. Content is illustrative; the startup meter is timed, not real progress.
