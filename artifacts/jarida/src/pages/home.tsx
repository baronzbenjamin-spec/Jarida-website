import { ArrowRight, BadgeCheck, Check, ChevronRight, Clock, Download, ShieldCheck, Stethoscope, Video } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { ARTICLES } from "@/data/content";
import { detectPlatform, getStoreUrl } from "@/lib/app-store";

const AUDIENCE_CONTENT = {
  patients: {
    heading: "Care that revolves around your life.",
    desc: "We believe seeing a doctor should be as comfortable as being at home. Skip the waiting rooms and confusing paperwork.",
    image: "/images/patients-care.png",
    imageAlt: "A Ugandan woman smiling during a telehealth video call at home",
    bullets: [
      "Book appointments in seconds",
      "Talk to verified doctors anytime you need",
      "Keep records & test results in one place",
      "Get timely reminders for visits and meds",
    ],
  },
  clinicians: {
    heading: "Empowering modern medical practice.",
    desc: "Focus on what matters most\u2014your patients. We provide the tools to manage your schedule, consult remotely, and grow your practice seamlessly.",
    image: "/images/clinicians-practice.png",
    imageAlt: "A Ugandan doctor in navy scrubs holding a tablet in a modern clinic",
    bullets: [
      "Easy patient and records management",
      "Run online consultations from anywhere",
      "Grow your practice beyond location limits",
      "Issue prescriptions digitally and securely",
    ],
  },
} as const;

const TRUST_POINTS = [
  {
    icon: BadgeCheck,
    title: "Verified doctors",
    desc: "Every clinician is licence-checked and credential-verified before they ever see a patient.",
  },
  {
    icon: ShieldCheck,
    title: "Private & secure",
    desc: "Your records and conversations are encrypted and never shared without your consent.",
  },
  {
    icon: Clock,
    title: "Care, around the clock",
    desc: "Reach a doctor 24/7\u2014no waiting rooms, no queues, wherever you are.",
  },
  {
    icon: Stethoscope,
    title: "Whole-family care",
    desc: "From check-ups to follow-ups, manage care for everyone you love in one place.",
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const [audience, setAudience] = useState<"patients" | "clinicians">("patients");
  const content = AUDIENCE_CONTENT[audience];
  const reduce = useReducedMotion();

  const handleDownload = () => {
    const url = getStoreUrl(detectPlatform());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const heroText = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: EASE },
      };

  const heroImage = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, delay: 0.15, ease: EASE },
      };

  const swap = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.3, ease: "easeOut" as const },
      };

  return (
    <div className="min-h-screen bg-white font-serif text-foreground selection:bg-primary/20">
      <SiteHeader />

      {/* HERO SECTION — WhatsApp-style image card */}
      <section className="pt-24 pb-10 md:pt-28 md:pb-14 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="relative overflow-hidden rounded-[28px] md:rounded-[40px] min-h-[480px] md:min-h-[520px] flex"
            {...heroImage}
          >
            <img
              src="/images/hero-parent-child.png"
              alt="A Ugandan mother tenderly embracing her child"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Legibility overlay — darkens the left for white text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <motion.div
              className="relative z-10 flex flex-col justify-center w-full lg:max-w-[52%] p-8 sm:p-12 md:p-14 lg:p-16"
              {...heroText}
            >
              <h1 className="font-sans font-extrabold text-white text-4xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.04] tracking-tight mb-5 md:mb-6">
                Your health,<br />
                safely in your hands.
              </h1>
              <p className="font-sans text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-7 md:mb-9">
                Connect with verified doctors 24/7. Book appointments, manage records, and receive care from anywhere, effortlessly.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Button
                  size="lg"
                  onClick={handleDownload}
                  className="font-sans font-bold w-full sm:w-auto self-stretch sm:self-start rounded-full bg-primary hover:bg-primary text-white h-14 md:h-16 px-10 md:px-12 text-base md:text-lg shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  Download
                  <Download className="ml-3 w-5 h-5" />
                </Button>

                <Link
                  href="/how-it-works"
                  className="group font-sans font-semibold inline-flex items-center justify-center sm:justify-start gap-1.5 text-white/90 hover:text-white text-sm md:text-base underline-offset-4 hover:underline transition-colors"
                >
                  How it works
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Desktop-only floating chat cards (decorative) */}
            <motion.div
              className="hidden lg:block absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 w-[40%] max-w-md z-10 font-sans pointer-events-none"
              {...heroImage}
            >
              <div className="flex items-center gap-3 bg-white rounded-2xl shadow-2xl shadow-black/20 px-4 py-3 mb-5 ml-auto max-w-sm">
                <div className="flex -space-x-2">
                  {["AN", "JM", "KO"].map((c) => (
                    <div
                      key={c}
                      className="h-9 w-9 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center ring-2 ring-white"
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-primary text-sm leading-none">Care Team</p>
                  <p className="text-muted-foreground text-xs mt-1.5 leading-none">&amp; 4 others</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 bg-primary text-white rounded-full px-4 py-2 text-xs font-bold">
                  <Video className="w-3.5 h-3.5" /> Join
                </span>
              </div>

              <div className="flex justify-end mb-5">
                <div className="bg-secondary text-primary rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg text-sm max-w-[78%]">
                  Are we still on for the visit?
                  <span className="text-[0.7em] text-primary/50 ml-2 align-baseline">11:53</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl rounded-tl-sm shadow-2xl shadow-black/20 px-4 py-3 max-w-[80%]">
                <p className="text-primary font-bold text-xs mb-1">Natalie</p>
                <p className="text-foreground text-sm leading-snug">
                  Ready when you are!
                  <span className="text-[0.7em] text-foreground/40 ml-2 align-baseline">11:59</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <p className="font-sans text-xs text-foreground/50 leading-relaxed max-w-xl mt-4 md:text-right md:max-w-none md:ml-auto">
            Available on Android and iOS. Standard data charges may apply.
          </p>
        </div>
      </section>

      {/* FOR PATIENTS & CLINICIANS */}
      <section id="patients" className="py-12 md:py-20 scroll-mt-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <Reveal className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-full bg-secondary/60 border border-border/50">
              <button
                type="button"
                aria-pressed={audience === "patients"}
                onClick={() => setAudience("patients")}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${audience === "patients" ? "bg-primary text-white shadow-sm" : "text-primary/70 hover:text-primary"}`}
              >
                For Patients
              </button>
              <button
                type="button"
                aria-pressed={audience === "clinicians"}
                onClick={() => setAudience("clinicians")}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${audience === "clinicians" ? "bg-primary text-white shadow-sm" : "text-primary/70 hover:text-primary"}`}
              >
                For Clinicians
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <motion.div
              layout={!reduce}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden rounded-[28px] md:rounded-[40px] border border-border/60 bg-secondary/40 shadow-xl shadow-primary/5"
            >
              <div>
                {/* Content panel */}
                <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 md:px-16">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div key={audience} {...swap}>
                      <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4 leading-tight">
                        {content.heading}
                      </h2>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-7">
                        {content.desc}
                      </p>

                      <ul className="space-y-3">
                        {content.bullets.map((text, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="text-foreground/80 text-sm">{text}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-9">
                    <Button className={`rounded-full px-8 h-12 text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${audience === "patients" ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white shadow-none"}`}>
                      Join as a patient <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button className={`rounded-full px-8 h-12 text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${audience === "clinicians" ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white shadow-none"}`}>
                      Apply as a clinician <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* WHY JARIDA — trust strip */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4 leading-tight">
              Care you can trust.
            </h2>
            <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
              Built around safety, privacy, and people&mdash;so you can focus on feeling better.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {TRUST_POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={i * 0.08}>
                  <div className="h-full rounded-[24px] md:rounded-[28px] border border-border/60 bg-secondary/40 p-6 md:p-7 shadow-xl shadow-primary/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-primary mb-2 leading-tight">
                      {point.title}
                    </h3>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES — horizontal belt */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="flex items-end justify-between gap-6 mb-8 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif text-primary mb-3 leading-tight">
                Latest articles
              </h2>
              <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">
                Practical, down-to-earth reading on health and wellbeing.
              </p>
            </div>
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center gap-1.5 flex-shrink-0 text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              See all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-12 px-6 md:px-12 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col flex-shrink-0 w-[280px] sm:w-[320px] snap-start rounded-3xl overflow-hidden bg-white border border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-primary leading-snug mb-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-auto pt-2">
                    <span className="text-muted-foreground">{article.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="container mx-auto px-6 md:px-12 sm:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
          >
            See all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
