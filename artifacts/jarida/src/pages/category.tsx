import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import NotFound from "@/pages/not-found";
import { findCategoryById, FACT_CATEGORIES } from "@/data/content";

export default function Category() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const category = id ? findCategoryById(id) : undefined;
  if (!category) return <NotFound />;

  const otherCategories = FACT_CATEGORIES.filter((c) => c.id !== category.id);

  return (
    <div className="min-h-screen bg-white font-serif text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-24 md:pt-24 pb-8 md:pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
        <Reveal className="container mx-auto px-6 md:px-8 relative z-10 max-w-3xl">
          <Link
            href="/facts"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Facts &amp; Advice
          </Link>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/60 mb-4">
            Facts &amp; Advice
          </p>
          <h1 className="text-2xl md:text-3xl font-serif font-medium text-primary leading-[1.1] mb-6">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            {category.description}
          </p>
        </Reveal>
      </section>

      {/* TOPICS */}
      <section className="pb-8">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.topics.map((topic, i) => (
              <Reveal key={topic.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/facts/${topic.slug}`}
                  className="group h-full bg-white rounded-3xl p-7 border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CATEGORIES */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal className="max-w-2xl mb-6">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-primary mb-4">
              Browse other categories
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Explore the rest of our library, organised by the part of the body
              or type of complaint.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((other, i) => (
              <Reveal key={other.id} delay={(i % 3) * 0.08}>
                <Link
                  href={`/facts/category/${other.id}`}
                  className="group h-full bg-white rounded-3xl p-7 border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {other.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 flex-1">
                    {other.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Browse {other.name.toLowerCase()}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
