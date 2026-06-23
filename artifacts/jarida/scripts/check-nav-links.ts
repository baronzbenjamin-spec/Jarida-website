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
    `${articleSlugCounts.size} unique article slugs with hero images all resolving.`,
);
