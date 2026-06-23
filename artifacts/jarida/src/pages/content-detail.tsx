import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ChevronRight, AlertCircle, HeartPulse, Stethoscope } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import NotFound from "@/pages/not-found";
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
  if (!result) return <NotFound />;
  const { topic, category } = result;

  const related = category.topics.filter((t) => t.slug !== topic.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SiteHeader />

      <article className="relative pt-36 md:pt-44 pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
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
        </div>
      </article>

      <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-20">
        <div className="space-y-5 mb-12">
          {topic.body.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </div>

        <DetailList
          icon={<Stethoscope className="w-5 h-5" />}
          title="Common symptoms"
          items={topic.symptoms}
        />
        <DetailList
          icon={<HeartPulse className="w-5 h-5" />}
          title="What you can do"
          items={topic.selfCare}
        />
        <DetailList
          icon={<AlertCircle className="w-5 h-5" />}
          title="When to speak to a doctor"
          items={topic.seekCare}
        />

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

        <p className="text-sm text-muted-foreground leading-relaxed mt-10 pt-8 border-t border-border">
          This information is general guidance and does not replace advice from a
          qualified professional. In an emergency, call your local emergency
          number.
        </p>
      </div>

      {related.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-serif font-medium text-primary mb-8">
              More on {category.name.toLowerCase()}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t) => (
                <Link
                  key={t.slug}
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
  if (!article) return <NotFound />;

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SiteHeader />

      <article className="pt-36 md:pt-44 pb-8">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
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
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
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

          <p className="text-sm text-muted-foreground leading-relaxed mt-10 pt-8 border-t border-border">
            This article is general information and does not replace personal
            advice from a qualified professional.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-24 pt-8">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-serif font-medium text-primary mb-8">
              Keep reading
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a) => (
                <Link
                  key={a.slug}
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
