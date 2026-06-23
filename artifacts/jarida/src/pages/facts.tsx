import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FACT_CATEGORIES } from "@/data/content";

export default function Facts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
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
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-20">
            {FACT_CATEGORIES.map((category) => (
              <div key={category.id} id={category.id}>
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

          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mt-16 pt-8 border-t border-border">
            This information is general guidance and does not replace advice from
            a qualified professional. If you are worried about your health, or
            your symptoms are severe or worsening, speak to a doctor. In an
            emergency, call your local emergency number.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
