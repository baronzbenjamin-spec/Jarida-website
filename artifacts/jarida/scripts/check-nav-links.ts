import { register } from "node:module";

register(new URL("./asset-stub-loader.mjs", import.meta.url));

type FactTopic = { slug: string; title: string };
type FactCategory = { id: string; name: string; topics: FactTopic[] };

const content = (await import("../src/data/content.ts")) as {
  MOST_VISITED: string[];
  DOCTOR_HELP: string[];
  getAllTopics: () => Array<{ topic: FactTopic; category: FactCategory }>;
};

const { MOST_VISITED, DOCTOR_HELP, getAllTopics } = content;

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

if (errors.length > 0) {
  console.error("Navigation link check FAILED:\n");
  console.error(errors.join("\n\n"));
  console.error(
    "\nFix the slugs above in artifacts/jarida/src/data/ so every navigation link points to a real topic.",
  );
  process.exit(1);
}

console.log(
  `Navigation link check passed: ${knownSlugs.size} unique topic slugs; ` +
    `${MOST_VISITED.length} MOST_VISITED and ${DOCTOR_HELP.length} DOCTOR_HELP links all resolve.`,
);
