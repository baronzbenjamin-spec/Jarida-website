---
name: Jarida global 50% scale
description: Why the whole Jarida web site renders at half size and what that breaks
---

The Jarida web artifact applies `html { font-size: 50%; }` in `artifacts/jarida/src/index.css` (@layer base).

**Rule:** This halves ALL rem-based Tailwind tokens site-wide — typography (text-*), spacing (p-*, gap-*, m-*), button/pill heights, container max-widths. It is intentional, not a bug.

**Why:** The user explicitly asked to "reduce the size of the words by half" across the entire website and confirmed "reduce the pills also by half everywhere." Root font-size scaling was the single coherent way to scale everything uniformly.

**How to apply:**
- When reasoning about on-screen sizes, remember 1rem = 8px here (not 16px). body text ≈ 7px, text-xs ≈ 6px.
- Arbitrary pixel utilities (e.g. `text-[11px]`, `min-h-[320px]`, `rounded-[40px]`, `blur-[120px]`) do NOT scale with the root and will look proportionally larger. Prefer rem-based utilities for consistency, or halve the px value manually.
- If the user later says text is too small, dial the root font-size up (e.g. 60–65%) rather than editing every component.
