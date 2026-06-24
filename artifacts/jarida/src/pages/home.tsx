import { ArrowRight, Check, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { detectPlatform, getStoreUrl } from "@/lib/app-store";

const AUDIENCE_CONTENT = {
  patients: {
    heading: "Care that revolves around your life.",
    desc: "We believe seeing a doctor should be as comfortable as being at home. Skip the waiting rooms and confusing paperwork.",
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
    bullets: [
      "Easy patient and records management",
      "Run online consultations from anywhere",
      "Grow your practice beyond location limits",
      "Issue prescriptions digitally and securely",
    ],
  },
} as const;

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
            className="relative overflow-hidden rounded-[28px] md:rounded-[40px] min-h-[480px] md:min-h-[600px] flex"
            {...heroImage}
          >
            <img
              src="/images/hero-parent-child.png"
              alt="A Ugandan mother tenderly embracing her child"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Legibility overlay — darkens the left for white text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <motion.div
              className="relative z-10 flex flex-col justify-center w-full max-w-xl p-8 sm:p-12 md:p-16"
              {...heroText}
            >
              <h1 className="font-sans font-extrabold text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight mb-5 md:mb-6">
                Your health,<br />
                safely in your hands.
              </h1>
              <p className="font-sans text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-7 md:mb-9">
                Connect with verified doctors 24/7. Book appointments, manage records, and receive care from anywhere, effortlessly.
              </p>

              <Button
                size="lg"
                onClick={handleDownload}
                className="font-sans font-bold w-full sm:w-auto self-stretch sm:self-start rounded-full bg-primary hover:bg-primary text-white h-14 md:h-16 px-10 md:px-12 text-base md:text-lg shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                Download
                <Download className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <p className="font-sans text-xs text-foreground/50 leading-relaxed max-w-xl mt-4">
            Available on Android and iOS. Standard data charges may apply.
          </p>
        </div>
      </section>

      {/* FOR PATIENTS & CLINICIANS */}
      <section id="patients" className="py-12 md:py-20 scroll-mt-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
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
            <motion.div layout={!reduce} transition={{ duration: 0.3, ease: "easeOut" }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div key={audience} {...swap}>
                  <div className="text-center max-w-2xl mx-auto mb-7">
                  <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4 leading-tight">
                    {content.heading}
                  </h2>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {content.desc}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 max-w-md mx-auto">
                  {content.bullets.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/80 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Button className={`rounded-full px-8 h-12 text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${audience === "patients" ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white shadow-none"}`}>
              Join as a patient <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button className={`rounded-full px-8 h-12 text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${audience === "clinicians" ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white shadow-none"}`}>
              Apply as a clinician <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
