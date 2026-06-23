import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ChevronDown, Search, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  FACT_CATEGORIES,
  DOCTOR_HELP,
  PATIENT_QUESTIONS,
  findTopicsBySlugs,
  getAllTopics,
} from "@/data/content";

export default function Facts() {
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
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
    const questions = PATIENT_QUESTIONS.filter(
      (q) =>
        q.question.toLowerCase().includes(trimmed) ||
        q.answer.toLowerCase().includes(trimmed),
    ).slice(0, 4);
    return { topics, questions };
  }, [trimmed, allTopics]);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-8 border border-primary/5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              Reviewed, reassuring health information
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary leading-[1.1] mb-6">
              Facts &amp; Advice
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Clear, calm guidance on everyday health concerns. Browse common
              conditions and symptoms to understand what is happening, what you
              can do at home, and when it is worth speaking to a doctor.
            </p>
          </div>

          {/* SEARCH */}
          <div className="max-w-2xl mt-10 relative">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search among symptoms"
                aria-label="Search among symptoms"
                className="w-full rounded-2xl border border-border bg-white py-4 pl-14 pr-5 text-base text-foreground shadow-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-secondary transition-all"
              />
            </div>

            {searchResults && (
              <div className="absolute z-30 mt-2 w-full rounded-2xl border border-border/60 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
                {searchResults.topics.length === 0 &&
                searchResults.questions.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-foreground/60">
                    No results for &ldquo;{query.trim()}&rdquo;.
                  </p>
                ) : (
                  <div className="max-h-[60vh] overflow-y-auto py-2">
                    {searchResults.topics.length > 0 && (
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
                    )}
                    {searchResults.questions.length > 0 && (
                      <div className="py-1 border-t border-border/50">
                        <p className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary/50">
                          Patient questions
                        </p>
                        {searchResults.questions.map((q) => (
                          <a
                            key={q.question}
                            href="#patient-questions"
                            onClick={() => setQuery("")}
                            className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary/50 transition-colors"
                          >
                            {q.question}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* DOCTOR HELP PILLS */}
          <div className="mt-12">
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
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-20 pt-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-20">
            {FACT_CATEGORIES.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <div className="max-w-2xl mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-3">
                    {category.name}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.slug}
                      href={`/facts/${topic.slug}`}
                      className="group bg-white rounded-3xl p-7 border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                    >
                      <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6 flex-1">
                        {topic.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read more
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SYMPTOMS A-Z */}
      <section id="all-symptoms" className="py-20 bg-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
              All symptoms A&ndash;Z
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Every condition and symptom in our library, listed alphabetically
              so you can find what you are looking for quickly.
            </p>
          </div>
          <div className="space-y-10">
            {azGroups.map(([letter, entries]) => (
              <div key={letter} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="shrink-0 w-12 text-2xl font-serif font-medium text-primary/40">
                  {letter}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 flex-1">
                  {entries.map((entry) => (
                    <Link
                      key={entry.topic.slug}
                      href={`/facts/${entry.topic.slug}`}
                      className="group inline-flex items-center gap-1.5 py-1.5 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <span className="font-medium">{entry.topic.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PATIENT QUESTIONS */}
      <section id="patient-questions" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
              Common patient questions
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Short, reassuring answers to the questions people ask most often
              about everyday health.
            </p>
          </div>
          <div className="max-w-3xl divide-y divide-border/60 border-y border-border/60">
            {PATIENT_QUESTIONS.map((item, index) => {
              const isOpen = openQuestion === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-lg font-medium text-primary">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-foreground/70 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
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
