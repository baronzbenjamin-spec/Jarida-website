// Generates public/sitemap.xml so search engines can discover every indexable
// page in the site, including the 146 per-question pages at
// /common-questions/:slug created alongside the existing facts and articles.
//
// URLs are built from the same data the app routes from (PATIENT_ANSWERS,
// FACT_CATEGORIES/topics, ARTICLES), so the sitemap stays in lockstep with the
// routes in App.tsx without a separate hand-maintained list.
//
// The production origin is read from SITE_ORIGIN (falling back to the canonical
// production URL). Run via: pnpm --filter @workspace/jarida run generate:sitemap

import { mkdirSync, writeFileSync } from "node:fs";
import { register } from "node:module";
import path from "node:path";

register(new URL("./asset-stub-loader.mjs", import.meta.url));

type FactTopic = { slug: string; title: string };
type FactCategory = { id: string; name: string; topics: FactTopic[] };
type Article = { slug: string };
type PatientAnswer = { slug: string };

const content = (await import("../src/data/content.ts")) as {
  ARTICLES: Article[];
  getAllTopics: () => Array<{ topic: FactTopic; category: FactCategory }>;
  FACT_CATEGORIES: FactCategory[];
};

const answers = (await import("../src/data/patient-answers.ts")) as {
  PATIENT_ANSWERS: PatientAnswer[];
};

const { ARTICLES, getAllTopics, FACT_CATEGORIES } = content;
const { PATIENT_ANSWERS } = answers;

// Origin must be an absolute, scheme-qualified URL with no trailing slash so
// the sitemap references the production site rather than relative paths.
const rawOrigin = process.env.SITE_ORIGIN ?? "https://jarida.app";
const origin = rawOrigin.replace(/\/+$/, "");

if (!/^https?:\/\/.+/.test(origin)) {
  console.error(
    `Invalid SITE_ORIGIN "${rawOrigin}": must be an absolute http(s) URL.`,
  );
  process.exit(1);
}

// Build the path list in a stable, deduplicated order: static pages first,
// then fact categories, fact topics, patient-answer questions, and articles.
const paths = new Set<string>();

paths.add("/");
paths.add("/facts");
paths.add("/common-questions");
paths.add("/articles");
paths.add("/privacy");
paths.add("/terms");

for (const category of FACT_CATEGORIES) {
  paths.add(`/facts/category/${category.id}`);
}

for (const { topic } of getAllTopics()) {
  paths.add(`/facts/${topic.slug}`);
}

for (const answer of PATIENT_ANSWERS) {
  paths.add(`/common-questions/${answer.slug}`);
}

for (const article of ARTICLES) {
  paths.add(`/articles/${article.slug}`);
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const lastmod = new Date().toISOString().slice(0, 10);

const urls = [...paths]
  .map((p) => {
    const loc = escapeXml(`${origin}${p}`);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const publicDir = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "public",
);
mkdirSync(publicDir, { recursive: true });
const outPath = path.join(publicDir, "sitemap.xml");
writeFileSync(outPath, xml, "utf8");

console.log(
  `Sitemap written: ${paths.size} URLs at ${outPath} ` +
    `(origin ${origin}; ${PATIENT_ANSWERS.length} patient questions, ` +
    `${getAllTopics().length} facts, ${ARTICLES.length} articles).`,
);
