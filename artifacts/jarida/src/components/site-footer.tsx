import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AppStoreButton } from "@/components/app-store-buttons";
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

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Preferences", href: "/privacy" },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className =
    "group inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors";
  const content = (
    <>
      <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
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
    <footer className="font-sans text-base">
      {/* Main area */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Intro */}
            <div className="max-w-md">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 mb-5 text-primary"
              >
                <LogoMark className="h-9 w-9" />
                <span className="font-serif text-2xl font-bold tracking-tight">
                  Jarida
                </span>
              </Link>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4 leading-snug">
                Jarida &ndash; trusted in your health and care.
              </h2>
              <p className="text-primary/70 leading-relaxed mb-8 text-sm">
                Connect with verified doctors 24/7, manage your records, and get
                the calm, reassuring presence of a trusted professional wherever
                you are. Jarida helps you feel better, day or night.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <AppStoreButton type="ios" />
                <AppStoreButton type="android" />
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 lg:justify-items-end">
              {LINK_COLUMNS.map((col) => (
                <div key={col.heading} className="w-full sm:w-auto">
                  <h3 className="font-serif text-lg font-bold text-primary mb-5">
                    {col.heading}
                  </h3>
                  <ul className="space-y-3 text-sm">
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
        <div className="container mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} Jarida &mdash; a digital healthcare
            service.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
