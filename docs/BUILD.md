# Looma Launcher — UI preview 0.2

## Quick preview (no installation)
Open Looma-preview.html in a recent Chrome or Edge browser. The JS, CSS and artwork are embedded; no CDN is needed. Skip intro bypasses the demonstration startup animation. Its progress is a timed animation, not a real update/download progress meter.

This is a UI prototype, not a production game launcher. Fictional games, news, friends and account screens are demonstrations. Downloads, authentication, payments, chat, automatic geographic timezone lookup, game launching and a tray service are not connected. Settings are stored locally in browser localStorage, not SQLite. Browser window buttons cannot control the desktop; native window controls require the Tauri build. No low-memory claims have been benchmarked.

## Development
Install Node.js LTS, then run in this folder:

    npm ci
    npm run dev

Production web build (also generates standalone preview):

    npm run build

## Windows desktop build (not tested in this environment)
On Windows 10/11 x64, install Node.js LTS, Rust stable using rustup, Microsoft C++ Build Tools with Desktop development with C++ and Windows SDK, and Microsoft Edge WebView2 Runtime. Then open PowerShell in this folder:

    npm ci
    npm run tauri dev

Build an NSIS installer:

    npm run tauri build

Expected output directory: src-tauri/target/release/bundle/nsis/
No Windows executable or installer is included, and native compilation/signing is not verified. Production releases require security review, native tests and code signing.

## Verified here
TypeScript and Vite production build pass. Chromium headless testing of the standalone HTML passed: initial logo phase; progress aligned under text rather than logo; intro completion; Home; Persian language; Tehran timezone; navigation reveal/hide; local settings persistence; no JavaScript page errors during those tests.

Main UI: src/main.tsx, src/style.css. Intro: src/Startup.tsx.
