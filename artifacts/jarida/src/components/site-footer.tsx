import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/logo";

type FooterLink = { label: string; href: string; external?: boolean };

const LINK_COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Facts & Advice", href: "/facts" },
      { label: "Articles", href: "/articles" },
      { label: "How to Use Jarida", href: "/how-it-works" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us", href: "mailto:support@jarida.org", external: true },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className =
    "group inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors";
  const content = (
    <>
      <ArrowRight className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      <span>{link.label}</span>
    </>
  );

  if (link.external) {
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="font-sans text-sm">
      {/* Main area */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-row flex-wrap justify-between gap-x-8 gap-y-6 md:gap-x-16">
            {/* Intro */}
            <div className="min-w-0 flex-1 basis-72 max-w-md">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary"
              >
                <LogoMark className="h-5 w-5" />
                <span className="font-serif text-base font-bold tracking-tight">
                  Jarida
                </span>
              </Link>
            </div>

            {/* Link columns */}
            <div className="flex flex-row gap-12 md:gap-16 shrink-0">
              {LINK_COLUMNS.map((col) => (
                <div key={col.heading}>
                  <h3 className="font-serif text-sm font-bold text-primary mb-2.5">
                    {col.heading}
                  </h3>
                  <ul className="space-y-1.5 text-xs">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <FooterLinkItem link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 py-3 flex flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-white/80">
            &copy; {new Date().getFullYear()} Jarida &mdash; a digital healthcare
            service. A product of Baronz AB.
          </p>
        </div>
      </div>
    </footer>
  );
}
