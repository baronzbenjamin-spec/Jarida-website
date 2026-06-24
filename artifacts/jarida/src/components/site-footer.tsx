import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";

type FooterLink = { label: string; href: string; external?: boolean };

const FOOTER_LINKS: FooterLink[] = [
  { label: "Facts & Advice", href: "/facts" },
  { label: "Articles", href: "/articles" },
  { label: "How to Use Jarida", href: "/how-it-works" },
  { label: "Contact Us", href: "mailto:support@jarida.org", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
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
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-row flex-wrap items-center justify-between gap-x-8 gap-y-4 text-xs">
            {/* Logo + download */}
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary"
              >
                <LogoMark className="h-5 w-5" />
                <span className="font-serif text-base font-bold tracking-tight">
                  Jarida
                </span>
              </Link>

              {/* Download placeholder */}
              <Button
                size="sm"
                className="rounded-full px-4 h-8 text-xs bg-primary text-white hover:bg-primary/90"
              >
                <Download className="w-3 h-3 mr-1.5" />
                Download
              </Button>
            </div>

            {/* Links: 2 rows x 4 columns */}
            <div className="grid grid-cols-4 gap-x-8 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 py-3 flex flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-white/80 flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>
              &copy; {new Date().getFullYear()} Jarida &mdash; a digital
              healthcare service.
            </span>
            <span>
              A product of{" "}
              <a
                href="https://baronz.se"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                Baronz AB.
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
