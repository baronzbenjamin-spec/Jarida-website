import { Link } from "wouter";
import { Download, Mail } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { detectPlatform, getStoreUrl } from "@/lib/app-store";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const handleDownload = () => {
    const url = getStoreUrl(detectPlatform());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-primary text-white font-sans">
      <div className="container mx-auto px-6 md:px-8 pt-8 pb-8">
        <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white"
            >
              <LogoMark className="h-7 w-7" />
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Jarida
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Jarida is a digital healthcare service connecting you with verified
              doctors for appointments, online consultations, and medical
              records &mdash; safe, simple care from anywhere.
            </p>
            <Button
              onClick={handleDownload}
              className="mt-6 rounded-full px-5 h-10 text-sm bg-white text-primary hover:bg-white/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download the app
            </Button>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@jarida.org"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-white/50" />
                  support@jarida.org
                </a>
              </li>
              <li className="pt-2 text-white/70">
                A product of{" "}
                <a
                  href="https://baronz.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  Baronz AB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            &copy; {year} Jarida. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-xs text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
