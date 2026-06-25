import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import iconLogo from "@assets/jarida_logo_icon.png";
import { Reveal } from "@/components/reveal";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-serif text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-border py-3 shadow-sm">
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src={iconLogo} alt="Jarida Icon" className="h-8 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-serif text-2xl font-medium tracking-tight text-primary">Jarida</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="pt-24 pb-8">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <div className="absolute inset-x-0 top-0 h-[40vh] bg-[radial-gradient(ellipse_at_top,var(--color-secondary)_0%,transparent_60%)] -z-10" />

          <Reveal>
            <header className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">{intro}</p>
            </header>
          </Reveal>

          <div className="space-y-5">
            {sections.map((section, i) => (
              <Reveal key={i}>
                <section>
                  <h2 className="text-2xl font-bold mb-4 font-serif">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 mt-2">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground">
                Questions about this page? Reach us at{" "}
                <a href="mailto:support@jarida.org" className="text-primary font-medium hover:underline">
                  support@jarida.org
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
