import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ARTICLES } from "@/data/content";

export default function Articles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [featured, ...rest] = ARTICLES;

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/60 mb-5">
              Your health
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary leading-[1.1] mb-6">
              Articles &amp; ideas for living well
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Practical, down-to-earth reading on health and wellbeing, written
              to help you feel a little more in control of everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            href={`/articles/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-secondary/40 rounded-[2.5rem] overflow-hidden border border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-white rounded-full px-3 py-1 mb-5">
                {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">{featured.readTime}</span>
                <span className="inline-flex items-center gap-1 font-medium text-primary">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-primary leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{article.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
