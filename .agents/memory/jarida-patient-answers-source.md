---
name: Jarida patient-answers source fidelity
description: Why patient-answers.ts has repeated/imperfect medical text and how to treat regenerations
---

# Jarida common-questions data is generated faithfully from a supplied .docx

`artifacts/jarida/src/data/patient-answers.ts` is generated (not hand-written) from a
user-supplied Word document, via scripts in `.local/state/docx/` (`parse.mjs` then
`gen.mjs`, source XML in `.local/state/docx/word/document.xml`).

**Key fact:** the source .docx is template-based. Across 146 entries there are only
~20 unique "What you can do" (selfCare) blocks — e.g. 54 entries share one "Use
relative rest…" block, 18 share a "Use gentle skin care…" block. So some entries have
self-care advice that is clinically loose for the topic (the canonical example: "Bruise
easily" carries gentle-skin-care advice). This is **verbatim from the source document**,
confirmed by reading the raw `What you can do:` paragraph in document.xml — it is NOT a
parser field-mapping bug.

**Why this matters / how to apply:**
- A code review may flag this as "wrong content copied from unrelated topics." Before
  acting, verify against `word/document.xml`. If the text matches the source, it is
  faithful reproduction, not a defect.
- The task requirement is to build the page *entirely from the .docx*. Do NOT fabricate
  or substitute medical guidance to make entries look more topic-specific — inventing
  medical text is unsafe and out of scope. Surface the limitation to the user instead.
- `parse.mjs` `cleanField()` only does *formatting* normalization that does not change
  meaning: collapse stray `;.`/`,.` to `.`, drop dangling trailing "… and." / a
  truncated "Because … can look similar." clause, capitalize lowercase sentence starts.
  Keep changes to this safe class only.
- To regenerate after editing the scripts: `node .local/state/docx/parse.mjs && node
  .local/state/docx/gen.mjs`, then re-run jarida `typecheck` and `check:links`.
