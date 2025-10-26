# Publishing Steps & Checklists — World Cup 2026 Countdown

This document lists every step (with checkboxes) you need to take to prepare, test, package, and publish the `World Cup 2026 Countdown` Chrome extension to the Chrome Web Store.

Follow each section in order. Commands are for PowerShell (Windows).

---

## 1) Quick sanity checklist (do first)

- [ ] Confirm extension folder exists: `C:\2026WorldCupCountdown`
- [ ] Confirm `manifest.json` is present and valid
- [ ] Confirm `popup.html`, `popup.css`, `popup.js` are present
- [ ] Confirm PNG icons exist in `icons/` (16, 32, 48, 128)
- [ ] Confirm `PRIVACY.md` is present
- [ ] Confirm `store-ready.zip` exists (or create it in Step 6)

---

## 2) Local testing (load unpacked)

Purpose: verify UX and functionality before packaging.

Steps:

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select `C:\2026WorldCupCountdown`.
4. Click the extension icon in the toolbar and verify:
   - Countdown updates every second
   - Messages change as the date approaches
   - "Learn More" button opens the FIFA page

Checklist:

- [ ] Extension loads without errors in the console (right-click popup → Inspect)
- [ ] Countdown shows non-negative numbers and updates every second
- [ ] No missing assets (icons, CSS) in the popup
- [ ] No permission or CSP errors in the console

Troubleshooting:

- If popup shows blank, open DevTools for the popup (`chrome://extensions/` → background page or right-click popup → Inspect) and check console messages.
- If icons missing, confirm `manifest.json` references `icons/icon128.png` etc. and that PNG files exist in `icons/`.

---

## 3) Finalize assets for the store (must-have)

Required store assets:

- 128×128 PNG icon (used as store icon) — `icons/icon128.png`
- At least 1 screenshot (recommended 1280×800 PNG) showing the popup in action
- Short description and detailed description (see `store-assets/STORE_LISTING.md`)
- Privacy policy (`PRIVACY.md`) — we included it already

Create a screenshot (recommended):

1. Load unpacked extension and open the popup.
2. Use Windows screenshot tool (Win+Shift+S) and capture popup.
3. Paste/save into an image editor and export as `screenshot-1280x800.png` (or at least maintain aspect ratio; the store accepts smaller images but 1280×800 is recommended).

Or convert provided SVG template to PNG. Example (requires Inkscape or another converter):

```powershell
# Example using Inkscape (if installed) to export PNG from SVG
inkscape store-assets\screenshot-1280x800.svg --export-filename=store-assets\screenshot-1280x800.png --export-width=1280 --export-height=800
```

Checklist:

- [ ] `icons/icon128.png` exists
- [ ] `screenshot-1280x800.png` (or equivalent) created
- [ ] (Optional) `promo-440x280.png` created from `store-assets/promo-440x280.svg`

---

## 4) Confirm manifest and versioning

Open `manifest.json` and confirm:

- Manifest version is 3 (`"manifest_version": 3`).
- `action.default_popup` points to `popup.html`.
- `icons` entries point to PNG files, e.g.:

```json
"icons": {
  "16": "icons/icon16.png",
  "32": "icons/icon32.png",
  "48": "icons/icon48.png",
  "128": "icons/icon128.png"
}
```

- The `version` field is correct. Bump this for every store update (e.g. `1.0.0` → `1.0.1`).

Checklist:

- [ ] `manifest.json` references PNG icons
- [ ] `manifest.json` `version` is set to the release version
- [ ] `manifest.json` `name` and `description` are accurate and final

---

## 5) Privacy & Data Safety

This extension does not collect user data. Confirm that `PRIVACY.md` describes this clearly. When completing the Web Store Data Safety questionnaire, choose **No** for all data collection questions.

Checklist:

- [ ] `PRIVACY.md` is present and accurate
- [ ] Data safety questionnaire answers prepared (all NO)

---

## 6) Create upload ZIP (store-ready)

Create a clean ZIP with only the files the store expects (manifest at root). Example PowerShell command used earlier:

```powershell
cd C:\2026WorldCupCountdown
# Remove any previous package if present
Remove-Item store-ready.zip -ErrorAction SilentlyContinue
# Create the ZIP with required files
Compress-Archive -Path manifest.json,popup.html,popup.css,popup.js,PRIVACY.md,icons\icon16.png,icons\icon32.png,icons\icon48.png,icons\icon128.png -DestinationPath store-ready.zip -Force
```

Checklist:

- [ ] `store-ready.zip` created at `C:\2026WorldCupCountdown\store-ready.zip`
- [ ] Open the ZIP and confirm `manifest.json` is at the root level (no nested folders)

Notes:

- The Chrome Web Store requires `manifest.json` at the ZIP root. Do not zip the entire parent folder as a nested folder.

---

## 7) Developer account & payment

If you have not done this already:

1. Visit: https://chrome.google.com/webstore/devconsole
2. Sign in with the Google account you want to use as developer
3. Complete the one-time registration and pay the $5 USD developer fee

Checklist:

- [ ] Developer account created/ready
- [ ] Payment completed (one-time $5)

---

## 8) Upload & Publish (step-by-step)

1. Go to the Developer Dashboard: https://chrome.google.com/webstore/devconsole
2. Click **New Item** → Upload `store-ready.zip`.
3. Fill out the listing:
   - Title: `World Cup 2026 Countdown`
   - Short description: concise (see `store-assets/STORE_LISTING.md`)
   - Detailed description: paste from `store-assets/STORE_LISTING.md`
   - Upload icon: `icons/icon128.png` (128×128)
   - Upload screenshot(s): `store-assets/screenshot-1280x800.png` or your real screenshot
   - Category: Productivity (or Sports)
   - Language: English
4. Privacy & Data Safety: Answer NO for all items (no data collected). Link to `PRIVACY.md` or paste policy text.
5. Visibility & Distribution: choose Public (or Unlisted). Regions: All.
6. Click **Submit for Review**.

Checklist:

- [ ] ZIP uploaded successfully
- [ ] Icon accepted (no errors)
- [ ] Screenshot(s) uploaded
- [ ] Listing text entered
- [ ] Data safety completed and marked NO for all
- [ ] Submit for review completed

---

## 9) After submission — what to expect

- Automated checks run instantly. Human review may take hours to a few days.
- You will receive an email when the extension is approved or rejected.

If rejected:

- Read the reviewer message carefully. Typical problems are missing icons, screenshots, misleading descriptions, or omitted data safety answers.
- Fix the problem locally, bump `manifest.json` version, create a new ZIP, and upload the updated package.

Checklist (post-submission):

- [ ] Email notification received (approved or rejected)
- [ ] If rejected, corrective actions taken and resubmitted

---

## 10) Updating the extension (after publishing)

If you change code or assets, follow this process:

1. Update `manifest.json` `version` (increment semantic version: patch/minor/major).
2. Recreate `store-ready.zip` with the new files.
3. In Developer Dashboard, upload the new package to the same item and submit update for review.

Checklist:

- [ ] `manifest.json` version bumped
- [ ] New ZIP created and verified
- [ ] Update submitted to the developer dashboard

---

## 11) Helpful commands & utilities (PowerShell)

- Convert SVG icons to PNG (we already used `tools\convert-icons.js`):

```powershell
cd C:\2026WorldCupCountdown\tools
node convert-icons.js
```

- Create ZIP package (example):

```powershell
cd C:\2026WorldCupCountdown
Compress-Archive -Path manifest.json,popup.html,popup.css,popup.js,PRIVACY.md,icons\icon16.png,icons\icon32.png,icons\icon48.png,icons\icon128.png -DestinationPath store-ready.zip -Force
```

- Load unpacked extension in Chrome (manual steps recommended):
  - `chrome://extensions/` → Developer mode → Load unpacked → choose `C:\2026WorldCupCountdown`

---

## 12) Final pre-publish checklist (full)

- [ ] All functionality verified locally (popup works, buttons open correct links)
- [ ] All assets present and PNGs created (16/32/48/128)
- [ ] `manifest.json` updated and validated
- [ ] `PRIVACY.md` present and accurate
- [ ] At least 1 screenshot created and ready to upload
- [ ] `store-ready.zip` created and verified (manifest.json at root)
- [ ] Developer account ready / payment completed
- [ ] Listing content copied to `store-assets/STORE_LISTING.md` and ready to paste

---

## 13) Notes & best practices

- Keep your listing honest and concise. Avoid hyperbole or misleading claims.
- If you plan to add analytics or remote content in the future, update `PRIVACY.md` and revisit permissions.
- Use semantic versioning and keep a changelog for user-facing changes.

---

If you want, I can:

- [ ] Convert the `store-assets/*.svg` templates to PNG for you (promo + screenshot)
- [ ] Take a screenshot automatically (requires running Chrome with the extension loaded and a headless capture workflow)
- [ ] Upload and fill the Store listing fields if you provide the developer account credentials (not recommended for security reasons)

Tell me which of the optional items you'd like me to do next.
