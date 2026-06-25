import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ChevronDown, Search, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useSeo } from "@/lib/seo";
import { DOCTOR_HELP, findTopicsBySlugs, getAllTopics } from "@/data/content";

export default function Facts() {
  const [query, setQuery] = useState("");
  const [openLetters, setOpenLetters] = useState<Set<string>>(new Set());

  useSeo({
    title: "Facts & Advice — Symptoms and conditions A–Z | Jarida",
    description:
      "Clear, reassuring guidance on everyday health concerns. Browse common conditions and symptoms to understand what is happening, what you can do at home, and when to see a doctor.",
  });

  useEffect(() => {
    const scrollToHash = (smooth: boolean) => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({
            behavior: smooth ? "smooth" : "auto",
            block: "start",
          });
          return true;
        }
      }
      return false;
    };

    if (!scrollToHash(false)) {
      window.scrollTo(0, 0);
    }

    const handleHashChange = () => scrollToHash(true);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const allTopics = useMemo(() => getAllTopics(), []);
  const doctorHelpTopics = useMemo(() => findTopicsBySlugs(DOCTOR_HELP), []);

  const azGroups = useMemo(() => {
    const sorted = [...allTopics].sort((a, b) =>
      a.topic.title.localeCompare(b.topic.title),
    );
    const groups = new Map<string, typeof sorted>();
    for (const entry of sorted) {
      const letter = entry.topic.title.charAt(0).toUpperCase();
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(entry);
    }
    return Array.from(groups.entries());
  }, [allTopics]);

  const trimmed = query.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!trimmed) return null;
    const topics = allTopics
      .filter(
        (entry) =>
          entry.topic.title.toLowerCase().includes(trimmed) ||
          entry.topic.excerpt.toLowerCase().includes(trimmed) ||
          entry.category.name.toLowerCase().includes(trimmed) ||
          entry.topic.symptoms.some((s) => s.toLowerCase().includes(trimmed)),
      )
      .slice(0, 8);
    return { topics };
  }, [trimmed, allTopics]);

  const toggleLetter = (letter: string) => {
    setOpenLetters((prev) => {
      const next = new Set(prev);
      if (next.has(letter)) next.delete(letter);
      else next.add(letter);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white font-serif text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-24 pb-8 md:pt-24 md:pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-5 border border-primary/5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              Reviewed, reassuring health information
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary leading-[1.1] mb-6">
              Facts &amp; Advice
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Clear, calm guidance on everyday health concerns. Browse common
              conditions and symptoms to understand what is happening, what you
              can do at home, and when it is worth speaking to a doctor.
            </p>
          </Reveal>

          {/* SEARCH */}
          <Reveal delay={0.05} className="max-w-2xl mt-6 relative">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search among symptoms"
                aria-label="Search among symptoms"
                className="w-full rounded-2xl border border-border bg-white py-4 pl-8 pr-5 text-base text-foreground shadow-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-secondary transition-all"
              />
            </div>

            {searchResults && (
              <div className="absolute z-30 mt-2 w-full rounded-2xl border border-border/60 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
                {searchResults.topics.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-foreground/60">
                    No results for &ldquo;{query.trim()}&rdquo;.
                  </p>
                ) : (
                  <div className="max-h-[60vh] overflow-y-auto py-2">
                    <div className="py-1">
                      <p className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary/50">
                        Conditions
                      </p>
                      {searchResults.topics.map((entry) => (
                        <Link
                          key={entry.topic.slug}
                          href={`/facts/${entry.topic.slug}`}
                          className="flex items-center justify-between gap-3 px-5 py-2.5 hover:bg-secondary/50 transition-colors"
                        >
                          <span className="text-sm font-medium text-primary">
                            {entry.topic.title}
                          </span>
                          <span className="text-xs text-foreground/50">
                            {entry.category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Reveal>

          {/* DOCTOR HELP PILLS */}
          <Reveal delay={0.1} className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary/60 mb-5">
              Our doctors can often help you with
            </h2>
            <div className="flex flex-wrap gap-3">
              {doctorHelpTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/facts/${topic.slug}`}
                  className="rounded-full border border-primary/20 bg-white px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary hover:border-primary/30 transition-all"
                >
                  {topic.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALL SYMPTOMS A-Z */}
      <section id="all-symptoms" className="py-8 bg-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal className="max-w-2xl mb-6">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-primary mb-4">
              All symptoms A&ndash;Z
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Every condition and symptom in our library, grouped by letter.
              Open a letter to reveal the conditions listed under it.
            </p>
          </Reveal>
          <div className="max-w-4xl divide-y divide-border/60 border-y border-border/60">
            {azGroups.map(([letter, entries]) => {
              const isOpen = openLetters.has(letter);
              return (
                <div key={letter}>
                  <button
                    type="button"
                    onClick={() => toggleLetter(letter)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-2xl font-serif font-medium text-primary">
                        {letter}
                      </span>
                      <span className="text-sm text-foreground/50">
                        {entries.length}{" "}
                        {entries.length === 1 ? "condition" : "conditions"}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 pb-6">
                      {entries.map((entry) => (
                        <Link
                          key={entry.topic.slug}
                          href={`/facts/${entry.topic.slug}`}
                          className="group inline-flex items-center gap-1.5 py-1.5 text-foreground/80 hover:text-primary transition-colors"
                        >
                          <span className="font-medium">
                            {entry.topic.title}
                          </span>
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
