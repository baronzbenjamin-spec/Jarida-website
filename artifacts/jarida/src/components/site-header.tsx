import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { FACT_CATEGORIES, findTopicsBySlugs, MOST_VISITED } from "@/data/content";

const MOST_VISITED_KEY = "most-visited";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>(MOST_VISITED_KEY);
  const [mobileFactsOpen, setMobileFactsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) {
      setMobileFactsOpen(false);
      setMobileSection(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        triggerRef.current?.focus();
      }
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [megaOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const handleMegaBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setMegaOpen(false);
    }
  };

  const goToHash = (e: React.MouseEvent, hash: string) => {
    setMegaOpen(false);
    setMenuOpen(false);
    if (location === "/facts") {
      e.preventDefault();
      if (window.location.hash === `#${hash}`) {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = hash;
      }
    }
  };

  const mostVisitedTopics = findTopicsBySlugs(MOST_VISITED);
  const activeCategory = FACT_CATEGORIES.find((c) => c.id === activeKey);
  const panelTopics =
    activeKey === MOST_VISITED_KEY
      ? mostVisitedTopics
      : activeCategory?.topics ?? [];
  const panelTitle =
    activeKey === MOST_VISITED_KEY ? "Most visited" : activeCategory?.name;

  const mobileGroups = [
    { key: MOST_VISITED_KEY, name: "Most visited", topics: mostVisitedTopics },
    ...FACT_CATEGORIES.map((category) => ({
      key: category.id,
      name: category.name,
      topics: category.topics,
    })),
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-border/50 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Logo className="z-50" />

          <nav className="hidden md:flex items-center gap-10">
            <div
              ref={megaRef}
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
              onBlur={handleMegaBlur}
            >
              <button
                ref={triggerRef}
                type="button"
                aria-haspopup="menu"
                aria-expanded={megaOpen}
                aria-controls="facts-mega-menu"
                aria-label="Facts & Advice menu"
                onClick={() => setMegaOpen((v) => !v)}
                onFocus={openMega}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Facts &amp; Advice
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MEGA MENU (desktop) */}
              <div
                id="facts-mega-menu"
                className={`absolute inset-x-0 top-full transition-all duration-300 ${
                  megaOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                aria-hidden={!megaOpen}
              >
                {megaOpen && (
                  <div className="container mx-auto px-6 md:px-12 pt-4">
                    <div className="bg-white rounded-3xl border border-border/60 shadow-2xl shadow-primary/10 overflow-hidden grid grid-cols-[18rem_1fr]">
                      {/* Left column */}
                      <div className="bg-secondary/40 p-4 border-r border-border/60">
                        <ul className="flex flex-col">
                          <li>
                            <button
                              type="button"
                              onMouseEnter={() => setActiveKey(MOST_VISITED_KEY)}
                              onFocus={() => setActiveKey(MOST_VISITED_KEY)}
                              className={`w-full flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                                activeKey === MOST_VISITED_KEY
                                  ? "bg-white text-primary shadow-sm"
                                  : "text-foreground/80 hover:text-primary hover:bg-white/60"
                              }`}
                            >
                              Most visited
                              <ChevronRight className="w-4 h-4 opacity-60" />
                            </button>
                          </li>
                          {FACT_CATEGORIES.map((category) => (
                            <li key={category.id}>
                              <button
                                type="button"
                                onMouseEnter={() => setActiveKey(category.id)}
                                onFocus={() => setActiveKey(category.id)}
                                className={`w-full flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                                  activeKey === category.id
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-foreground/80 hover:text-primary hover:bg-white/60"
                                }`}
                              >
                                {category.name}
                                <ChevronRight className="w-4 h-4 opacity-60" />
                              </button>
                            </li>
                          ))}
                          <li className="mt-2 pt-2 border-t border-border/60 flex flex-col">
                            <Link
                              href="/facts"
                              onClick={() => setMegaOpen(false)}
                              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-white/60 transition-colors"
                            >
                              Facts &amp; Advice overview
                            </Link>
                            <Link
                              href="/facts#all-symptoms"
                              onClick={(e) => goToHash(e, "all-symptoms")}
                              className="block rounded-xl px-4 py-3 text-sm font-semibold text-primary hover:bg-white/60 transition-colors"
                            >
                              All symptoms A&ndash;Z
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Right column */}
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/50 mb-5">
                          {panelTitle}
                        </p>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                          {panelTopics.map((topic) => (
                            <li key={topic.slug}>
                              <Link
                                href={`/facts/${topic.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                              >
                                {topic.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Link
              href="/articles"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Articles
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full px-6 border-primary/20 text-primary hover:bg-secondary hover:text-primary transition-all"
            >
              Log in
            </Button>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
              Book an Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl p-8 flex flex-col transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-2 text-primary overflow-y-auto -mx-2 px-2">
            <div>
              <button
                type="button"
                onClick={() => setMobileFactsOpen((v) => !v)}
                aria-expanded={mobileFactsOpen}
                className="w-full flex items-center justify-between gap-2 py-2 text-xl font-serif hover:text-primary/70 transition-colors"
              >
                Facts &amp; Advice
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileFactsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileFactsOpen ? "max-h-[70vh] overflow-y-auto" : "max-h-0"
                }`}
              >
                <div className="flex flex-col py-2 pl-1 text-base font-sans">
                  {mobileGroups.map((group) => {
                    const sectionOpen = mobileSection === group.key;
                    return (
                      <div
                        key={group.key}
                        className="border-b border-border/40 last:border-b-0"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSection(sectionOpen ? null : group.key)
                          }
                          aria-expanded={sectionOpen}
                          className="w-full flex items-center justify-between gap-2 py-3 text-left text-base font-medium text-foreground/90 hover:text-primary transition-colors"
                        >
                          {group.name}
                          <ChevronDown
                            className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                              sectionOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            sectionOpen ? "max-h-[80vh]" : "max-h-0"
                          }`}
                        >
                          <div className="flex flex-col pb-2 pl-3">
                            {group.topics.map((topic) => (
                              <Link
                                key={topic.slug}
                                href={`/facts/${topic.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                              >
                                {topic.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    href="/facts#all-symptoms"
                    onClick={(e) => goToHash(e, "all-symptoms")}
                    className="py-3 font-semibold text-primary hover:text-primary/70 transition-colors"
                  >
                    All symptoms A&ndash;Z
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/articles"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-xl font-serif hover:text-primary/70 transition-colors"
            >
              Articles
            </Link>
          </div>
          <div className="mt-auto flex flex-col gap-4 pt-6">
            <Button
              variant="outline"
              className="w-full rounded-full h-14 text-lg border-primary/20 text-primary"
            >
              Log in
            </Button>
            <Button className="w-full rounded-full h-14 text-lg bg-primary hover:bg-primary/90 text-white">
              Book an Appointment
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
