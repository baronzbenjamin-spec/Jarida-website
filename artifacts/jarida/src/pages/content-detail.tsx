import { useEffect, useMemo } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ChevronRight, AlertCircle, HeartPulse, Stethoscope } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import NotFound from "@/pages/not-found";
import { useSeo } from "@/lib/seo";
import {
  findFactBySlug,
  findArticleBySlug,
  ARTICLES,
} from "@/data/content";

export function FactDetail() {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const result = slug ? findFactBySlug(slug) : undefined;
  const topic = result?.topic;
  const category = result?.category;

  const jsonLd = useMemo(() => {
    if (!topic || !category) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: topic.title,
      description: topic.excerpt,
      about: {
        "@type": "MedicalCondition",
        name: topic.title,
        signOrSymptom: topic.symptoms.map((s) => ({
          "@type": "MedicalSignOrSymptom",
          name: s,
        })),
      },
    };
  }, [topic, category]);

  useSeo({
    title: topic
      ? `${topic.title} — symptoms, self-care and when to see a doctor | Jarida`
      : "Not found | Jarida",
    description:
      topic?.excerpt ??
      "The page you are looking for could not be found.",
    jsonLd,
  });

  if (!result || !topic || !category) return <NotFound />;

  const related = category.topics.filter((t) => t.slug !== topic.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-serif text-foreground">
      <SiteHeader />

      <article className="relative pt-36 md:pt-44 pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
          <Reveal>
          <Link
            href="/facts"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Facts &amp; Advice
          </Link>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/60 mb-4">
            {category.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary leading-[1.1] mb-6">
            {topic.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            {topic.excerpt}
          </p>
          </Reveal>
        </div>
      </article>

      <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-20">
        <Reveal className="space-y-5 mb-12">
          {topic.body.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <DetailList
            icon={<Stethoscope className="w-5 h-5" />}
            title="Common symptoms"
            items={topic.symptoms}
          />
        </Reveal>
        <Reveal>
          <DetailList
            icon={<HeartPulse className="w-5 h-5" />}
            title="What you can do"
            items={topic.selfCare}
          />
        </Reveal>
        <Reveal>
          <DetailList
            icon={<AlertCircle className="w-5 h-5" />}
            title="When to speak to a doctor"
            items={topic.seekCare}
          />
        </Reveal>

        <Reveal className="mt-12 rounded-3xl bg-secondary/50 border border-primary/5 p-8">
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
        </Reveal>
      </div>

      {related.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <h2 className="text-2xl font-serif font-medium text-primary mb-8">
                More on {category.name.toLowerCase()}
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t, i) => (
                <Reveal key={t.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/facts/${t.slug}`}
                  className="group bg-white rounded-3xl p-7 border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-primary mb-3">{t.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm mb-6 flex-1">
                    {t.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

export function ArticleDetail() {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = slug ? findArticleBySlug(slug) : undefined;

  const jsonLd = useMemo(() => {
    if (!article) return undefined;
    const image =
      typeof window !== "undefined"
        ? new URL(article.image, window.location.origin).href
        : article.image;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      articleSection: article.category,
      image,
      author: { "@type": "Organization", name: "Jarida" },
      publisher: { "@type": "Organization", name: "Jarida" },
    };
  }, [article]);

  useSeo({
    title: article
      ? `${article.title} | Jarida`
      : "Not found | Jarida",
    description:
      article?.excerpt ??
      "The page you are looking for could not be found.",
    jsonLd,
  });

  if (!article) return <NotFound />;

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-serif text-foreground">
      <SiteHeader />

      <article className="pt-36 md:pt-44 pb-8">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Reveal>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/60 mb-4">
            {article.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary leading-[1.1] mb-5">
            {article.title}
          </h1>
          <p className="text-muted-foreground text-sm mb-8">{article.readTime}</p>
          </Reveal>
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Reveal className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Reveal>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-serif">
            {article.excerpt}
          </p>
          <div className="space-y-5">
            {article.body.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-24 pt-8">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <h2 className="text-2xl font-serif font-medium text-primary mb-8">
                Keep reading
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2">
                      {a.category}
                    </span>
                    <h3 className="text-lg font-serif font-medium text-primary leading-snug mb-3 flex-1">
                      {a.title}
                    </h3>
                    <span className="text-muted-foreground text-sm">{a.readTime}</span>
                  </div>
                </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function DetailList({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
          {icon}
        </span>
        <h2 className="text-2xl font-serif font-medium text-primary">{title}</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
