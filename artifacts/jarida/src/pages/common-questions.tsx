import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronRight,
  Search,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useSeo } from "@/lib/seo";
import {
  PATIENT_ANSWERS,
  PATIENT_ANSWER_REFERENCES,
  EMERGENCY_WARNING,
  PATIENT_ANSWERS_DISCLAIMER,
} from "@/data/patient-answers";

export default function CommonQuestions() {
  const [query, setQuery] = useState("");
  const [openNums, setOpenNums] = useState<Set<number>>(new Set());
  const [refsOpen, setRefsOpen] = useState(false);

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PATIENT_ANSWERS.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: `What it may mean: ${item.meaning} What you can do: ${item.selfCare} When to seek care: ${item.seekCare}`,
        },
      })),
    }),
    [],
  );

  useSeo({
    title: "Common patient questions | Jarida",
    description:
      "Clear, reference-backed answers to common patient questions: what a symptom may mean, what you can do at home, and when to seek care. Educational information, not a substitute for individual clinical assessment.",
    jsonLd: faqJsonLd,
  });

  const trimmed = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!trimmed) return PATIENT_ANSWERS;
    return PATIENT_ANSWERS.filter(
      (item) =>
        item.title.toLowerCase().includes(trimmed) ||
        item.meaning.toLowerCase().includes(trimmed) ||
        item.selfCare.toLowerCase().includes(trimmed) ||
        item.seekCare.toLowerCase().includes(trimmed),
    );
  }, [trimmed]);

  const toggle = (num: number) => {
    setOpenNums((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  const goToReference = (refNum: number) => {
    setRefsOpen(true);
    window.requestAnimationFrame(() => {
      document
        .getElementById(`ref-${refNum}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

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
              Reference-backed patient answers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary leading-[1.1] mb-6">
              Common patient questions
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Clear, consistent answers to the questions people ask most often.
              Each one explains what a symptom may mean, what you can do at home,
              and when it is worth seeking care, with the scientific references
              that support it.
            </p>
          </div>

          {/* EMERGENCY WARNING */}
          <div className="max-w-3xl mt-10 rounded-2xl border border-red-200 bg-red-50/70 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-700 mb-1.5">
                  Emergency warning
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {EMERGENCY_WARNING}
                </p>
              </div>
            </div>
          </div>

          {/* DISCLAIMER */}
          <p className="max-w-3xl mt-5 text-sm text-foreground/60 leading-relaxed">
            {PATIENT_ANSWERS_DISCLAIMER}
          </p>

          {/* SEARCH */}
          <div className="max-w-2xl mt-8 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search patient questions"
              aria-label="Search patient questions"
              className="w-full rounded-2xl border border-border bg-white py-4 pl-14 pr-5 text-base text-foreground shadow-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-secondary transition-all"
            />
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="pb-20 pt-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            {filtered.length === 0 ? (
              <p className="py-10 text-foreground/60">
                No questions match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              <div className="divide-y divide-border/60 border-y border-border/60">
                {filtered.map((item) => {
                  const isOpen = openNums.has(item.num);
                  return (
                    <div key={item.num}>
                      <button
                        type="button"
                        onClick={() => toggle(item.num)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 py-6 text-left"
                      >
                        <span className="text-lg font-medium text-primary">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-primary/60 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="pb-8 pr-2 md:pr-8 space-y-5">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/50 mb-1.5">
                              What it may mean
                            </p>
                            <p className="text-foreground/75 leading-relaxed">
                              {item.meaning}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/50 mb-1.5">
                              What you can do
                            </p>
                            <p className="text-foreground/75 leading-relaxed">
                              {item.selfCare}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/50 mb-1.5">
                              When to seek care
                            </p>
                            <p className="text-foreground/75 leading-relaxed">
                              {item.seekCare}
                            </p>
                          </div>
                          {item.references.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/50">
                                References
                              </span>
                              {item.references.map((refNum) => (
                                <button
                                  key={refNum}
                                  type="button"
                                  onClick={() => goToReference(refNum)}
                                  className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-primary/20 bg-secondary/60 px-2 text-xs font-semibold text-primary hover:bg-secondary transition-colors"
                                  aria-label={`View reference ${refNum}`}
                                >
                                  {refNum}
                                </button>
                              ))}
                            </div>
                          )}
                          <Link
                            href={`/common-questions/${item.slug}`}
                            className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                          >
                            Open full page
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section id="references" className="py-16 bg-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <button
              type="button"
              onClick={() => setRefsOpen((v) => !v)}
              aria-expanded={refsOpen}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">
                References
              </h2>
              <ChevronDown
                className={`w-6 h-6 shrink-0 text-primary/60 transition-transform duration-300 ${
                  refsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              The scientific citations supporting the answers above, numbered by
              first appearance. The numbers shown next to each answer match this
              list.
            </p>
            {refsOpen && (
              <ol className="mt-8 space-y-4">
                {PATIENT_ANSWER_REFERENCES.map((ref, index) => {
                  const num = index + 1;
                  return (
                    <li
                      key={num}
                      id={`ref-${num}`}
                      className="flex gap-4 scroll-mt-28"
                    >
                      <span className="shrink-0 text-sm font-semibold text-primary/50 tabular-nums w-8">
                        {num}.
                      </span>
                      <span className="text-sm text-foreground/75 leading-relaxed">
                        {ref}
                      </span>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
