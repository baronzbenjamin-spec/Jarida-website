import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, Star, CheckCircle2, Shield, Clock, HeartPulse, 
  ChevronRight, Globe, Menu, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

import iconLogo from "@assets/jarida_logo_icon.png";
import fullLogo from "@assets/jarida_logo_lockup.png";

type Audience = "patient" | "doctor";

const AUDIENCE_CONTENT: Record<Audience, {
  nav: string;
  login: string;
  heading: string;
  intro: string;
  features: { title: string; desc: string }[];
  image: string;
  imageAlt: string;
  cta: string;
}> = {
  patient: {
    nav: "For Patients",
    login: "Patient Login",
    heading: "For Patients",
    intro: "Experience healthcare that revolves around you. Everything you need, right in your pocket.",
    features: [
      { title: "Quick appointment booking", desc: "Find a doctor and book in seconds." },
      { title: "24/7 online consultations", desc: "Get medical help anytime: ask questions, share symptoms, and receive professional advice online." },
      { title: "Access to medical records", desc: "Keep your full medical history and test results in one place with quick and easy access." },
      { title: "Reminders for visits and treatment", desc: "Never miss appointments or meds." },
    ],
    image: "/images/patients.png",
    imageAlt: "Patient using app",
    cta: "Get started as a patient",
  },
  doctor: {
    nav: "For Doctors",
    login: "Doctor Login",
    heading: "For Doctors",
    intro: "Grow your practice and work with patients online. Manage your schedule, handle patient records, and issue prescriptions in one convenient platform.",
    features: [
      { title: "Easy patient management", desc: "Maintain patient records, track medical history, and access all essential information in one place." },
      { title: "Online consultations", desc: "Provide remote consultations, answer patient questions, and expand your practice without location limits." },
      { title: "E-prescriptions", desc: "Issue prescriptions digitally — quickly, efficiently, and without paperwork." },
    ],
    image: "/images/doctors.png",
    imageAlt: "Doctor working",
    cta: "Register as a doctor",
  },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audience, setAudience] = useState<Audience>("patient");
  const current = AUDIENCE_CONTENT[audience];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HEADER */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md border-b border-border py-3 shadow-sm" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src={iconLogo} alt="Jarida Icon" className="h-8 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-serif text-2xl font-medium tracking-tight text-primary">Jarida</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" onClick={() => setAudience("patient")} className="text-sm font-medium hover:text-primary transition-colors">For Patients</a>
            <a href="#solutions" onClick={() => setAudience("doctor")} className="text-sm font-medium hover:text-primary transition-colors">For Doctors</a>
            <a href="#download" className="text-sm font-medium hover:text-primary transition-colors">Download</a>
            <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground ml-4 border-l border-border pl-4">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5">
              <a href="#download">{current.login}</a>
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <nav className={`absolute right-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-2xl p-8 flex flex-col gap-2 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-8">
            <span className="font-serif text-2xl font-medium tracking-tight text-primary">Jarida</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <a href="#solutions" onClick={() => { setAudience("patient"); setMenuOpen(false); }} className="py-3 text-lg font-medium border-b border-border hover:text-primary transition-colors">For Patients</a>
          <a href="#solutions" onClick={() => { setAudience("doctor"); setMenuOpen(false); }} className="py-3 text-lg font-medium border-b border-border hover:text-primary transition-colors">For Doctors</a>
          <a href="#download" onClick={() => setMenuOpen(false)} className="py-3 text-lg font-medium border-b border-border hover:text-primary transition-colors">Download</a>
          <Button asChild className="mt-6 rounded-full px-6 bg-primary hover:bg-primary/90 text-white">
            <a href="#download" onClick={() => setMenuOpen(false)}>{current.login}</a>
          </Button>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-secondary)_0%,transparent_50%)] -z-10" />
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-semibold mb-6 border border-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 best medical app
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Take control of your <span className="text-primary font-serif italic pr-2">health</span> <br/>
              anytime, anywhere.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Book appointments, chat with doctors, and manage your care in one simple app.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                <a href="#download">Get Started <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4">Download the app and get 24/7 access to doctors</p>
              <div className="flex flex-wrap gap-3">
                <AppStoreButton type="ios" />
                <AppStoreButton type="android" />
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform rotate-3 scale-105 -z-10" />
            <img 
              src="/images/hero-doctor.png" 
              alt="Professional doctor" 
              className="rounded-[3rem] object-cover w-full h-[600px] shadow-2xl shadow-primary/10"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl shadow-black/5 flex items-center gap-4 border border-border/50 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold">Verified Doctors</p>
                <p className="text-xs text-muted-foreground">Top-tier professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard 
              number="01"
              title="Fast & Convenient"
              desc="Book appointments in a few clicks — no calls, no waiting."
              icon={<Clock className="w-6 h-6" />}
            />
            <ValueCard 
              number="02"
              title="Secure & Private"
              desc="Your medical data stays protected with modern encryption and strict privacy standards."
              icon={<Shield className="w-6 h-6" />}
            />
            <ValueCard 
              number="03"
              title="High-Quality Care"
              desc="Consultations from verified, qualified doctors — online or in person."
              icon={<HeartPulse className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* SOLUTIONS (audience-aware) */}
      <section id="solutions" className="py-24 bg-secondary/30 relative scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Audience toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-border shadow-sm">
              {(["patient", "doctor"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setAudience(key)}
                  aria-pressed={audience === key}
                  className={`px-6 md:px-8 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all ${
                    audience === key
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {AUDIENCE_CONTENT[key].nav}
                </button>
              ))}
            </div>
          </div>

          {/* Audience content */}
          <div
            key={audience}
            className="grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform -rotate-3 scale-105 -z-10" />
              <img
                src={current.image}
                alt={current.imageAlt}
                className="rounded-[2rem] object-cover w-full h-[500px] shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{current.heading}</h2>
              <p className="text-lg text-muted-foreground mb-8">{current.intro}</p>
              <ul className="space-y-6 mb-10">
                {current.features.map((f) => (
                  <FeatureItem key={f.title} title={f.title} desc={f.desc} />
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white">
                <a href="#download">{current.cta} <ChevronRight className="ml-2 w-4 h-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24 bg-secondary/50 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-primary/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-50" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Available now on App Store and Google Play</h2>
                <p className="text-lg text-muted-foreground mb-8">Get the Jarida app today and carry your healthcare with you.</p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <AppStoreButton type="ios" />
                  <AppStoreButton type="android" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-sm font-medium mt-1">5/5 rating from users</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full max-w-sm flex justify-center">
                <img 
                  src="/images/app-mockup.png" 
                  alt="Jarida App Mockup" 
                  className="w-full h-auto drop-shadow-2xl max-h-[600px] object-contain"
                />
              </div>
            </div>

            <div className="relative z-10 mt-12 md:mt-16 pt-10 border-t border-border grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-5xl font-black text-primary mb-1">50K+</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs md:text-sm">Consultations</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black text-primary mb-1">500+</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs md:text-sm">Doctors</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black text-primary mb-1">10K+</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs md:text-sm">Patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1322] text-white pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white/10 p-4 rounded-xl inline-block mb-6 backdrop-blur-sm">
                <img 
                  src={fullLogo} 
                  alt="Jarida" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
                A digital healthcare platform that connects patients and doctors so people can book appointments, chat with verified doctors, and manage records in one simple app.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#solutions" onClick={() => setAudience("patient")} className="text-white/60 hover:text-white transition-colors">For Patients</a></li>
                <li><a href="#solutions" onClick={() => setAudience("doctor")} className="text-white/60 hover:text-white transition-colors">For Doctors</a></li>
                <li><a href="#download" className="text-white/60 hover:text-white transition-colors">Download</a></li>
                <li><a href="mailto:support@jarida.org" className="text-white/60 hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 font-serif">Get the App</h4>
              <div className="flex flex-col gap-3">
                <AppStoreButton type="ios" theme="dark" />
                <AppStoreButton type="android" theme="dark" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Jarida Healthcare. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function ValueCard({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="bg-secondary/20 rounded-3xl p-7 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-primary/20 group">
      <div className="flex justify-between items-start mb-5">
        <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-4xl font-black text-primary/10 font-serif">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </li>
  );
}

function AppStoreButton({ type, theme = "light" }: { type: "ios" | "android", theme?: "light" | "dark" }) {
  const isIos = type === "ios";
  const bg = theme === "light" ? "bg-black text-white hover:bg-black/80" : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md";
  
  return (
    <button className={`flex items-center gap-3 px-5 py-2.5 rounded-xl transition-colors ${bg}`}>
      {isIos ? (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M16.365 14.502c-.015-3.056 2.502-4.526 2.616-4.6-1.421-2.073-3.626-2.355-4.42-2.39-1.897-.19-3.702 1.118-4.665 1.118-.962 0-2.45-1.096-4.004-1.066-2.016.03-3.876 1.171-4.908 2.973-2.091 3.621-.534 8.975 1.503 11.916.994 1.439 2.164 3.045 3.731 2.986 1.498-.06 2.07-.968 3.864-.968 1.78 0 2.304.968 3.894.938 1.627-.03 2.62-1.468 3.6-2.905 1.134-1.657 1.6-3.262 1.624-3.344-.038-.016-3.007-1.15-3.023-4.228zm-2.45-7.395c.829-1 1.385-2.394 1.233-3.782-1.189.048-2.648.791-3.477 1.791-.741.888-1.411 2.309-1.229 3.676 1.328.102 2.643-.684 3.473-1.685z"/>
        </svg>
      ) : (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.523 15.341l-4.624-4.624 4.624-4.624c.321.144.624.314.907.509l4.57 3.199c.928.65.928 1.706 0 2.356l-4.57 3.199c-.283.195-.586.365-.907.509l-4.624-4.624zM2.875 3.393L11.8 12.318 2.875 21.243c-.495-.297-.875-.769-.875-1.341V4.734c0-.572.38-1.044.875-1.341z"/>
          <path d="M12.918 13.436L3.993 22.361c.404.242.878.361 1.383.361 1.055 0 2.012-.497 2.616-1.282l4.926-7.004zM12.918 11.202L3.993 2.277c.404-.242.878-.361 1.383-.361 1.055 0 2.012.497 2.616 1.282l4.926 7.004z"/>
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] leading-none mb-0.5 opacity-80">{isIos ? "Download on the" : "GET IT ON"}</div>
        <div className="text-sm font-semibold leading-none">{isIos ? "App Store" : "Google Play"}</div>
      </div>
    </button>
  );
}
