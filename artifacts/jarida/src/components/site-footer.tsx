import { Link } from "wouter";
import { AppStoreButton } from "@/components/app-store-buttons";
import { LogoMark } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-[#0A0D17] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 text-white">
              <LogoMark className="h-9 w-9" />
              <span className="font-serif text-2xl font-semibold tracking-tight">Jarida</span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              The calm, reassuring presence of a trusted doctor, now available
              wherever you are. Connecting patients with verified professionals
              24/7.
            </p>
            <div className="flex items-center gap-4">
              <AppStoreButton type="ios" theme="dark" />
              <AppStoreButton type="android" theme="dark" />
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white/90">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/facts" className="text-white/50 hover:text-white transition-colors">
                  Facts &amp; Advice
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-white/50 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/50 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white/90">Support</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@jarida.org"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-2"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Jarida Healthcare. All rights reserved.</p>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-1"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
