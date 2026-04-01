# CCCS — Claude Code Cheat Sheet

> The ultimate interactive reference for Claude Code. Always up-to-date.

**🌐 Live:** [shortcutchris.github.io/cccs](https://shortcutchris.github.io/cccs)

---

## ✨ Features

- 📋 **109+ commands** — Keyboard Shortcuts, Slash Commands, Workflows, Skills & Agents, MCP Servers, Memory & Files, Config & ENV, CLI Flags
- 🌙 **Dark / Light Mode** — toggle in header, saved in localStorage
- 🇩🇪 **DE / EN** — full German and English UI
- 🖥️ **Mac / Win** — OS-aware shortcuts (Cmd vs Ctrl)
- 🆕 **Changelog Badges** — NEW, CHANGED, DEPRECATED tags
- 📄 **PDF Export** — compact A4, white background, jsPDF
- 📱 **PWA** — installable, works offline
- 🔍 **Live Search** — filters across all sections instantly

---

## 🚀 Usage

Open `index.html` in any browser — **done**. No npm, no build step, no dependencies.

```bash
git clone https://github.com/shortcutchris/cccs
open index.html
```

---

## 📄 PDF Generation

Click the **⬇ PDF** button in the header. The PDF is generated client-side via [jsPDF](https://github.com/parallax/jsPDF):

- White background (print-friendly)
- 2-column A4 layout
- OS-aware keys (Cmd/Ctrl depending on your toggle)
- All 8 sections, compact format
- No server needed — runs entirely in your browser

---

## ✏️ Contributing / Updating Commands

To add or update commands, edit **one file**:

```
data/cheatsheet.json
```

Structure:
```json
{
  "version": "2.81",
  "lastUpdated": "2026-03-24",
  "sections": [
    {
      "id": "slash-commands",
      "title": "Slash Commands",
      "color": "#f59e0b",
      "icon": "Terminal",
      "items": [
        {
          "key": "/compact",
          "description": "Compact conversation (summarize)",
          "explanation": "Summarizes the current conversation...",
          "badge": "NEW"
        }
      ]
    }
  ]
}
```

**Badge values:** `"NEW"` (green) · `"CHANGED"` (yellow) · `"DEPRECATED"` (red)

1. Fork → Edit `data/cheatsheet.json` → PR → merged → live ✅

---

## 🛠 Tech Stack

| What | How |
|------|-----|
| HTML/CSS | Tailwind CSS via CDN |
| Interactivity | Alpine.js via CDN |
| PDF | jsPDF + html2canvas |
| Offline | Service Worker (PWA) |
| Hosting | GitHub Pages |
| Build step | ❌ None |

---

## 📬 Auto-Update Workflow

*(Coming soon)* — GitHub Action that weekly crawls [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code/) and opens a PR with new/changed commands.

---

*Built with ❤️ for the Claude Code community*
