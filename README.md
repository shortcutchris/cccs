# Claude Code Cheatsheet

The ultimate interactive reference for Claude Code — keyboard shortcuts, slash commands, workflows, CLI flags, and more.

**Live:** [chhubmann.github.io/claude-code-cheatsheet](https://chhubmann.github.io/claude-code-cheatsheet)

## Usage

Open `index.html` in any browser — done. No build step, no dependencies.

## To add/update commands

Edit `data/cheatsheet.json`. The site reads it via fetch and renders everything automatically with Alpine.js.

## Contributing

1. Fork this repo
2. Edit `data/cheatsheet.json`
3. Open a PR

## Tech

- Plain HTML5 + Tailwind CSS (CDN)
- Alpine.js (CDN) for interactivity
- Zero build step — works offline, deploys to GitHub Pages
