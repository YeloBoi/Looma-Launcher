# Looma roadmap / رودمپ لوما

This is a milestone plan, not a release-date promise. Checked items describe the UI prototype only unless explicitly stated otherwise.

## 1. Interface foundation — in progress / پایهٔ رابط
- [x] React/TypeScript interface and Tauri 2 configuration.
- [x] Logo-first startup, pixel text and progress below the title.
- [x] Home, icon navigation and initial secondary pages.
- [x] English/Persian selection, timezone settings and local preference persistence.
- [ ] Approve visual design and animation timing with the project owner.
- [ ] Complete Store details/search/filtering and the Library's right-side icon rail.
- [ ] Review translation coverage, keyboard accessibility and reduced motion.
- [ ] Add consistent empty, loading, error and offline states.

**Exit:** approved core layouts and defined behavior for every main action.

## 2. Native Windows application / نسخهٔ ویندوز
- [ ] Compile and test on Windows 10/11 x64.
- [ ] Verify window controls and default close-to-exit behavior.
- [ ] Add optional tray behavior.
- [ ] Introduce appropriate application data paths, SQLite and diagnostic logs.
- [ ] Measure startup latency, RAM and CPU usage.
- [ ] Build and test installation/uninstallation.

**Exit:** install and run on a separate Windows machine without development tools.

## 3. One real free game / یک بازی واقعی
- [ ] Select a game with explicit distribution permission.
- [ ] Installation directory selection and free-space checks.
- [ ] Download progress, pause/resume and recovery after interruption.
- [ ] Package authenticity/integrity validation and safe extraction.
- [ ] Install, detect, launch, uninstall and repair the game.
- [ ] Version checks and reliable updates.
- [ ] Record last-played information.

**Exit:** a user can download, install, launch and update one real game through Looma.

## 4. Backend and accounts / سرور و حساب
- [ ] Review existing VPS/domain capacity and deployment needs.
- [ ] Define API and database, authentication and account recovery.
- [ ] Connect catalog, news and library data.
- [ ] Add administrator/developer roles, rate limiting, backups and security logs.
- [ ] Rebuild the public website around project information and launcher downloads.
- [ ] Define offline behavior and timezone lookup/fallback without unnecessary tracking.

**Exit:** live content and real accounts, with tested access control and recovery paths.

## 5. Publishing and moderation / انتشار بازی
- [ ] Minimal admin panel for games, news and users.
- [ ] Developer submissions and version uploads.
- [ ] Review/approval before publication, file review and rollback process.
- [ ] Required game metadata, screenshots and system requirements.

**Exit:** a submission can be reviewed and deliberately published. Payments remain disabled.

## 6. Limited alpha / تست محدود
- [ ] Test weak/offline networks, interrupted downloads, full disks and server failures.
- [ ] Test Persian paths, localization and multiple Windows configurations.
- [ ] Review authentication, installation and update security.
- [ ] Signed/verified launcher updates; evaluate Windows code signing.
- [ ] Small external test group and documented issue triage.

**Exit:** testers complete installation-to-game-launch without hands-on help.

## 7. Social features / امکانات اجتماعی
- [ ] Friend requests and presence with visibility controls.
- [ ] Text chat, blocking and reporting.
- [ ] Media sharing with storage limits, moderation and abuse controls.

Social features follow a stable launcher core; they are not prerequisites for the first useful version.

## Deferred / برای بعد
Payments, cloud saves, additional operating systems and advanced recommendations. License/entitlement checks may be designed later; hiding or renaming executable files is not reliable copy protection.

## خلاصهٔ اولویت
ابتدا ظاهر را تثبیت می‌کنیم، سپس نسخهٔ ویندوز و مسیر واقعی دانلود تا اجرای یک بازی را می‌سازیم. بعد سرور و مدیریت انتشار را متصل می‌کنیم و با گروه کوچک آزمایش می‌کنیم. دوستان و چت بعد از پایدارشدن هسته اضافه می‌شوند. نسخهٔ فعلی هنوز فقط پیش‌نمایش رابط است.
