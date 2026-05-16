# Judy Lee — Portfolio

## Folder Structure

```
judylee-portfolio/
├── index.html                        ← Landing page
├── case-studies/
│   ├── carrier-rates.html            ← Case study 01
│   ├── related-cases.html            ← Case study 02 (duplicate template)
│   └── multiple-queues.html          ← Case study 03 (duplicate template)
├── images/
│   ├── carrier-rates/
│   │   ├── cover.png                 ← Hero image (shown on landing + case study top)
│   │   ├── current-flow.png          ← Discovery section screenshot
│   │   ├── exploration-01.png        ← Exploration 01 screenshot
│   │   ├── exploration-03.png        ← Exploration 03 screenshot
│   │   └── final-design.png          ← Final design screenshot
│   ├── related-cases/
│   │   └── cover.png
│   └── multiple-queues/
│       └── cover.png
└── README.md
```

---

## How to add images

1. Export your screens from Figma:
   - Select the frame → Export → PNG → 2x scale
2. Name the file to match what's in the HTML (e.g. `cover.png`)
3. Drop it into the correct folder (e.g. `images/carrier-rates/`)
4. The site will automatically show your image instead of the placeholder

---

## How to deploy to GitHub Pages

### First time setup (takes ~5 minutes)

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it exactly: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
   - Example: `judylee.github.io`
4. Set it to **Public**
5. Click **Create repository**

### Upload your files

1. In your new repo, click **Add file → Upload files**
2. Drag in ALL files from this folder (index.html, case-studies/, images/)
3. Click **Commit changes**

### Enable GitHub Pages

1. Go to your repo **Settings**
2. Click **Pages** in the left sidebar
3. Under Source, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://yourusername.github.io`
(takes 1–2 minutes to deploy after saving)

---

## How to update content

1. Go to your repo on github.com
2. Click the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Click **Commit changes**

The site updates automatically within ~30 seconds.

---

## How to add a new image to GitHub

**Option A — Drag and drop (easiest)**
1. Navigate to the correct images folder in your repo
2. Click **Add file → Upload files**
3. Drag your PNG in
4. Commit

**Option B — Replace a file**
1. Navigate to the file in your repo
2. Click the file name
3. Click the upload icon (top right)
4. Upload your new file with the same name
5. Commit

---

## Brand colors (for reference)

| Name | Hex | Use |
|------|-----|-----|
| Linen | #FEFCF9 | Page background |
| Warm Linen | #F3EEE6 | Secondary sections |
| Sand | #D9C9B0 | Borders, dividers |
| Slate | #4A72A0 | Accent, links, highlights |
| Deep Slate | #1E3448 | Dark section backgrounds |
| Obsidian | #1A1612 | Nav, footer |

## Fonts

Both loaded from Google Fonts (no installation needed):
- **Cormorant Garamond** — all display text, headings, pull quotes
- **DM Sans** — body text, labels, navigation
