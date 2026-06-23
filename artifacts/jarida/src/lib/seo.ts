import { useEffect } from "react";

type MetaConfig = {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const JSON_LD_ATTR = "data-seo-jsonld";

function setMetaTag(
  attr: "name" | "property",
  key: string,
  content: string,
): void {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Imperatively manages the document title, meta description, social meta tags,
 * and JSON-LD structured data for a page. Cleans up injected JSON-LD on unmount.
 */
export function useSeo({ title, description, jsonLd }: MetaConfig): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const block of blocks) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute(JSON_LD_ATTR, "true");
        script.textContent = JSON.stringify(block);
        document.head.appendChild(script);
        scripts.push(script);
      }
    }

    return () => {
      document.title = previousTitle;
      for (const script of scripts) {
        script.remove();
      }
    };
  }, [title, description, jsonLd]);
}
