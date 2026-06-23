// Content-QA guard for patient-answers.ts.
//
// patient-answers.ts is AUTO-GENERATED from a supplied .docx that contained
// punctuation artifacts (stray ";.", ",." and a truncated trailing clause).
// Those were cleaned during parsing, but nothing stops a future regeneration
// from silently reintroducing malformed or truncated text into medical
// guidance. This check scans every answer and fails the build on:
//   - malformed punctuation (";.", ",.", "..")
//   - sentences ending mid-clause (no terminal punctuation, or a dangling
//     trailing conjunction/preposition such as "...or fever, and.")
//   - lowercase sentence starts in seekCare
//   - empty/missing fields
//
// Run via: pnpm --filter @workspace/jarida run check:answers

type PatientAnswer = {
  num: number;
  slug: string;
  title: string;
  meaning: string;
  selfCare: string;
  seekCare: string;
  references: number[];
};

const mod = (await import("../src/data/patient-answers.ts")) as {
  PATIENT_ANSWERS: PatientAnswer[];
};

const { PATIENT_ANSWERS } = mod;

const errors: string[] = [];

// Fields that contain prose and must read as clean, complete sentences.
const PROSE_FIELDS = ["meaning", "selfCare", "seekCare"] as const;

// Malformed punctuation artifacts left by the source .docx. A semicolon or
// comma immediately followed by a full stop, or two or more consecutive full
// stops, should never appear in finished copy.
const MALFORMED_PUNCTUATION = /([;,]\s*\.)|(\.\s*\.)/;

// A field that ends with one of these connector words (right before the
// terminal full stop) is almost certainly truncated mid-clause.
const DANGLING_TAIL =
  /\b(and|or|but|because|with|without|including|such as|as well as|that|which|the|a|an|to|of|for|from|in|on|at|by)\s*[.,]?\s*\.?\s*$/i;

function describe(answer: PatientAnswer, field: string, problem: string) {
  errors.push(
    `  - #${answer.num} "${answer.title}" (${answer.slug}) → ${field}: ${problem}`,
  );
}

for (const answer of PATIENT_ANSWERS) {
  if (!answer.title || !answer.title.trim()) {
    errors.push(`  - #${answer.num} (${answer.slug}): empty title`);
  }
  if (!answer.slug || !answer.slug.trim()) {
    errors.push(`  - #${answer.num} "${answer.title}": empty slug`);
  }
  if (!Array.isArray(answer.references) || answer.references.length === 0) {
    describe(answer, "references", "no supporting references");
  }

  for (const field of PROSE_FIELDS) {
    const value = answer[field];

    if (!value || !value.trim()) {
      describe(answer, field, "empty field");
      continue;
    }

    if (MALFORMED_PUNCTUATION.test(value)) {
      describe(
        answer,
        field,
        `malformed punctuation (";.", ",." or "..") in "${value}"`,
      );
    }

    const trimmed = value.trim();

    // A complete sentence must end with terminal punctuation.
    if (!/[.!?]$/.test(trimmed)) {
      describe(
        answer,
        field,
        `does not end with terminal punctuation (truncated?): "${trimmed.slice(-60)}"`,
      );
    } else if (DANGLING_TAIL.test(trimmed)) {
      // Ends in punctuation but the final clause trails off on a connector.
      describe(
        answer,
        field,
        `ends mid-clause on a dangling connector: "${trimmed.slice(-60)}"`,
      );
    }
  }

  // seekCare guidance is rendered as a standalone sentence and must start
  // with a capital letter (the source left some of these lowercase).
  const seek = answer.seekCare?.trim();
  if (seek && /^[a-z]/.test(seek)) {
    describe(answer, "seekCare", `starts with a lowercase letter: "${seek.slice(0, 60)}…"`);
  }
}

if (errors.length > 0) {
  console.error("Answer content-QA check FAILED:\n");
  console.error(errors.join("\n"));
  console.error(
    "\nFix the affected answers in artifacts/jarida/src/data/patient-answers.ts " +
      "(or the generator at .local/state/docx/parse.mjs if regenerating) so every " +
      "field reads as a clean, complete sentence.",
  );
  process.exit(1);
}

console.log(
  `Answer content-QA check passed: ${PATIENT_ANSWERS.length} answers, ` +
    `${PATIENT_ANSWERS.length * PROSE_FIELDS.length} prose fields, no malformed ` +
    `punctuation, truncation, lowercase seekCare starts, or empty fields.`,
);
