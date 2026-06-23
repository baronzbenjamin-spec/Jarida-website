import { readFileSync } from "node:fs";
import { register } from "node:module";
import path from "node:path";

register(new URL("./asset-stub-loader.mjs", import.meta.url));

type FactTopic = { slug: string; title: string };
type FactCategory = { id: string; name: string; topics: FactTopic[] };
type Article = { slug: string; title: string; image: string };

const content = (await import("../src/data/content.ts")) as {
  MOST_VISITED: string[];
  DOCTOR_HELP: string[];
  ARTICLES: Article[];
  getAllTopics: () => Array<{ topic: FactTopic; category: FactCategory }>;
};

const { MOST_VISITED, DOCTOR_HELP, ARTICLES, getAllTopics } = content;

type PatientAnswer = { num: number; slug: string; references: number[] };

const patientAnswersModule = (await import(
  "../src/data/patient-answers.ts"
)) as {
  PATIENT_ANSWERS: PatientAnswer[];
  PATIENT_ANSWER_REFERENCES: string[];
};

const { PATIENT_ANSWERS, PATIENT_ANSWER_REFERENCES } = patientAnswersModule;

const errors: string[] = [];

const entries = getAllTopics();
const slugCounts = new Map<string, number>();
for (const { topic } of entries) {
  slugCounts.set(topic.slug, (slugCounts.get(topic.slug) ?? 0) + 1);
}

const duplicates = [...slugCounts.entries()]
  .filter(([, count]) => count > 1)
  .map(([slug, count]) => `  - "${slug}" appears ${count} times`);

if (duplicates.length > 0) {
  errors.push(
    `Duplicate topic slugs found (slugs must be unique):\n${duplicates.join("\n")}`,
  );
}

const knownSlugs = new Set(slugCounts.keys());

function checkList(name: string, slugs: string[]) {
  const missing = slugs.filter((slug) => !knownSlugs.has(slug));
  if (missing.length > 0) {
    errors.push(
      `${name} references slugs that do not resolve to a topic:\n${missing
        .map((slug) => `  - "${slug}"`)
        .join("\n")}`,
    );
  }
}

checkList("MOST_VISITED", MOST_VISITED);
checkList("DOCTOR_HELP", DOCTOR_HELP);

// --- Article checks -------------------------------------------------------
// Articles are hand-maintained in content.ts: each has a unique slug and an
// imported hero image. Duplicate slugs, slugs that collide with topic slugs,
// or a removed/renamed image would break article pages silently.

const articleSlugCounts = new Map<string, number>();
for (const article of ARTICLES) {
  articleSlugCounts.set(
    article.slug,
    (articleSlugCounts.get(article.slug) ?? 0) + 1,
  );
}

const articleDuplicates = [...articleSlugCounts.entries()]
  .filter(([, count]) => count > 1)
  .map(([slug, count]) => `  - "${slug}" appears ${count} times`);

if (articleDuplicates.length > 0) {
  errors.push(
    `Duplicate article slugs found (slugs must be unique):\n${articleDuplicates.join(
      "\n",
    )}`,
  );
}

const articleSlugCollisions = [...articleSlugCounts.keys()].filter((slug) =>
  knownSlugs.has(slug),
);

if (articleSlugCollisions.length > 0) {
  errors.push(
    `Article slugs collide with topic slugs (both render under their own routes, so slugs must not overlap):\n${articleSlugCollisions
      .map((slug) => `  - "${slug}"`)
      .join("\n")}`,
  );
}

// Hero images are imported via the "@assets/..." alias. The runtime stub
// loader replaces them with empty strings, so resolve the imports from the
// source file and confirm every referenced asset exists on disk.
const contentSourceUrl = new URL("../src/data/content.ts", import.meta.url);
const source = readFileSync(contentSourceUrl, "utf8");
const assetsRoot = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "..",
  "..",
  "attached_assets",
);

const importMap = new Map<string, string>();
const importRe = /import\s+(\w+)\s+from\s+["']@assets\/([^"']+)["']/g;
for (let m = importRe.exec(source); m !== null; m = importRe.exec(source)) {
  importMap.set(m[1], m[2]);
}

const { existsSync } = await import("node:fs");
const missingAssets: string[] = [];
const imageRefRe = /image:\s*(\w+)\s*,/g;
let imageRefCount = 0;
for (let m = imageRefRe.exec(source); m !== null; m = imageRefRe.exec(source)) {
  imageRefCount += 1;
  const varName = m[1];
  const relPath = importMap.get(varName);
  if (!relPath) {
    missingAssets.push(`  - "${varName}" is used as an article image but is not imported from @assets`);
    continue;
  }
  const absPath = path.join(assetsRoot, relPath);
  if (!existsSync(absPath)) {
    missingAssets.push(`  - "${varName}" -> @assets/${relPath} (file not found)`);
  }
}

if (imageRefCount < ARTICLES.length) {
  errors.push(
    `Some articles are missing a hero image: found ${imageRefCount} "image:" reference(s) for ${ARTICLES.length} article(s).`,
  );
}

if (missingAssets.length > 0) {
  errors.push(
    `Article hero images that do not resolve to a real asset file:\n${missingAssets.join(
      "\n",
    )}`,
  );
}

// --- Patient answer checks ------------------------------------------------
// Each patient answer renders its own page at /common-questions/:slug. A
// duplicate or empty slug would silently break a page, and a reference number
// that does not resolve to an entry in PATIENT_ANSWER_REFERENCES would render
// a citation pointing at nothing.

const patientSlugCounts = new Map<string, number>();
const emptyPatientSlugs: number[] = [];
for (const answer of PATIENT_ANSWERS) {
  const slug = (answer.slug ?? "").trim();
  if (slug.length === 0) {
    emptyPatientSlugs.push(answer.num);
    continue;
  }
  patientSlugCounts.set(slug, (patientSlugCounts.get(slug) ?? 0) + 1);
}

if (emptyPatientSlugs.length > 0) {
  errors.push(
    `Patient answers with an empty slug (each needs a unique, non-empty slug):\n${emptyPatientSlugs
      .map((num) => `  - answer num ${num}`)
      .join("\n")}`,
  );
}

const patientDuplicates = [...patientSlugCounts.entries()]
  .filter(([, count]) => count > 1)
  .map(([slug, count]) => `  - "${slug}" appears ${count} times`);

if (patientDuplicates.length > 0) {
  errors.push(
    `Duplicate patient answer slugs found (slugs must be unique):\n${patientDuplicates.join(
      "\n",
    )}`,
  );
}

const unresolvedReferences: string[] = [];
for (const answer of PATIENT_ANSWERS) {
  for (const ref of answer.references) {
    if (
      !Number.isInteger(ref) ||
      ref < 1 ||
      ref > PATIENT_ANSWER_REFERENCES.length
    ) {
      unresolvedReferences.push(
        `  - answer "${answer.slug}" (num ${answer.num}) cites reference ${ref}, but only 1-${PATIENT_ANSWER_REFERENCES.length} exist`,
      );
    }
  }
}

if (unresolvedReferences.length > 0) {
  errors.push(
    `Patient answer references that do not resolve to an entry in PATIENT_ANSWER_REFERENCES:\n${unresolvedReferences.join(
      "\n",
    )}`,
  );
}

// Reverse guard: every entry in PATIENT_ANSWER_REFERENCES should be cited by at
// least one answer. An orphaned entry is dead data that drifts out of sync as
// answers are regenerated, bloating the citation list with sources nothing
// points at. Decision: orphans HARD-FAIL the build (same severity as the other
// patient-answer checks above) so the reference list stays lean and every entry
// is traceable to a real citation. Remove the orphaned entry (and renumber the
// references it pushed) rather than leaving it. If the team ever needs to retain
// an uncited reference intentionally, downgrade this to a console.warn instead.
const citedReferenceNumbers = new Set<number>();
for (const answer of PATIENT_ANSWERS) {
  for (const ref of answer.references) {
    citedReferenceNumbers.add(ref);
  }
}

const orphanedReferences: string[] = [];
for (let i = 1; i <= PATIENT_ANSWER_REFERENCES.length; i += 1) {
  if (!citedReferenceNumbers.has(i)) {
    orphanedReferences.push(`  - reference ${i}: "${PATIENT_ANSWER_REFERENCES[i - 1]}"`);
  }
}

if (orphanedReferences.length > 0) {
  errors.push(
    `PATIENT_ANSWER_REFERENCES entries that no patient answer cites (orphaned/dead references — remove them or cite them):\n${orphanedReferences.join(
      "\n",
    )}`,
  );
}

if (errors.length > 0) {
  console.error("Navigation link check FAILED:\n");
  console.error(errors.join("\n\n"));
  console.error(
    "\nFix the slugs/images above in artifacts/jarida/src/data/ so every navigation link points to a real topic and every article resolves.",
  );
  process.exit(1);
}

console.log(
  `Navigation link check passed: ${knownSlugs.size} unique topic slugs; ` +
    `${MOST_VISITED.length} MOST_VISITED and ${DOCTOR_HELP.length} DOCTOR_HELP links all resolve; ` +
    `${articleSlugCounts.size} unique article slugs with hero images all resolving; ` +
    `${patientSlugCounts.size} unique patient answer slugs with all references resolving; ` +
    `all ${PATIENT_ANSWER_REFERENCES.length} reference entries are cited (no orphans).`,
);
