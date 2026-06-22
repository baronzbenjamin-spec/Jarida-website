---
name: react-vite font @import ordering
description: Where to place Google Fonts @import in the Tailwind v4 react-vite scaffold's index.css
---

In the react-vite artifact scaffold (Tailwind v4 + Vite), `src/index.css` starts with `@import "tailwindcss";` then `@plugin`/`@custom-variant`. A Google Fonts `@import url(...)` must be placed as the VERY FIRST line, before `@import "tailwindcss"`.

**Why:** CSS requires all `@import` statements to precede every other statement. PostCSS/Vite emits `[vite:css][postcss] @import must precede all other statements` and the font silently fails to load if the font import sits after `@plugin`/`@custom-variant` (a common mistake when a subagent appends the font import lower in the file).

**How to apply:** When adding web fonts via `@import url(...)`, move it to line 1 of index.css. Prefer `<link>` in index.html as an alternative to avoid the ordering trap entirely.
