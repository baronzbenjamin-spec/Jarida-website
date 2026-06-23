import { useEffect, useMemo } from "react";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  Brain,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import NotFound from "@/pages/not-found";
import { useSeo } from "@/lib/seo";
import {
  PATIENT_ANSWERS,
  PATIENT_ANSWER_REFERENCES,
  EMERGENCY_WARNING,
  PATIENT_ANSWERS_DISCLAIMER,
  findPatientAnswerBySlug,
} from "@/data/patient-answers";

export default function PatientAnswerDetail() {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const result = slug ? findPatientAnswerBySlug(slug) : undefined;
  const answer = result?.answer;

  const jsonLd = useMemo(() => {
    if (!answer) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "QAPage",
      mainEntity: {
        "@type": "Question",
        name: answer.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: `What it may mean: ${answer.meaning} What you can do: ${answer.selfCare} When to seek care: ${answer.seekCare}`,
        },
      },
    };
  }, [answer]);

  useSeo({
    title: answer
      ? `${answer.title} — what it means, self-care and when to seek care | Jarida`
      : "Not found | Jarida",
    description: answer
      ? `${answer.meaning} ${answer.seekCare}`.slice(0, 300)
      : "The page you are looking for could not be found.",
    jsonLd,
  });

  if (!result || !answer) return <NotFound />;

  const cited = answer.references
    .map((refNum) => ({ refNum, text: PATIENT_ANSWER_REFERENCES[refNum - 1] }))
    .filter((r) => Boolean(r.text));

  const related = PATIENT_ANSWERS.filter((a) => a.slug !== answer.slug).slice(
    Math.max(0, result.index - 1),
    Math.max(0, result.index - 1) + 3,
  );

  return (
    <div className="min-h-screen bg-white font-serif text-foreground">
      <SiteHeader />

      <article className="relative pt-36 md:pt-44 pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
          <Link
            href="/common-questions"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to common questions
          </Link>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/60 mb-4">
            Common patient question
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary leading-[1.1] mb-6">
            {answer.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            {answer.meaning}
          </p>
        </div>
      </article>

      <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-20">
        <Section
          icon={<Brain className="w-5 h-5" />}
          title="What it may mean"
          body={answer.meaning}
        />
        <Section
          icon={<HeartPulse className="w-5 h-5" />}
          title="What you can do"
          body={answer.selfCare}
        />
        <Section
          icon={<Stethoscope className="w-5 h-5" />}
          title="When to seek care"
          body={answer.seekCare}
        />

        {/* EMERGENCY WARNING */}
        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50/70 p-6">
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

        {/* REFERENCES */}
        {cited.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-serif font-medium text-primary mb-5">
              References
            </h2>
            <ol className="space-y-4">
              {cited.map(({ refNum, text }) => (
                <li key={refNum} className="flex gap-4">
                  <span className="shrink-0 text-sm font-semibold text-primary/50 tabular-nums w-8">
                    {refNum}.
                  </span>
                  <span className="text-sm text-foreground/75 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* DISCLAIMER */}
        <p className="mt-8 text-sm text-foreground/60 leading-relaxed">
          {PATIENT_ANSWERS_DISCLAIMER}
        </p>

        <div className="mt-12 rounded-3xl bg-secondary/50 border border-primary/5 p-8">
          <h3 className="text-xl font-serif font-medium text-primary mb-3">
            Speak to a doctor on Jarida
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-6">
            If you would like reassurance or your symptoms are not improving, you
            can connect with a verified doctor from home, at a time that suits
            you.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          >
            Book an appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-serif font-medium text-primary mb-8">
              More common questions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/common-questions/${a.slug}`}
                  className="group bg-white rounded-3xl p-7 border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {a.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm mb-6 flex-1">
                    {a.meaning}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function Section({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
          {icon}
        </span>
        <h2 className="text-2xl font-serif font-medium text-primary">{title}</h2>
      </div>
      <p className="text-foreground/80 leading-relaxed text-lg">{body}</p>
    </div>
  );
}
