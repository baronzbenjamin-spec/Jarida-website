import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Calendar, 
  Video, 
  FileText, 
  Pill, 
  Check,
  Star,
  ShieldCheck,
  ChevronRight,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";

import iconLogo from "@assets/jarida_logo_icon.png";
import fullLogo from "@assets/jarida_logo_lockup.png";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white font-sans text-foreground selection:bg-primary/20">
      {/* HEADER */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-lg border-b border-border/50 py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <img src={iconLogo} alt="Jarida Logo" className="h-8 w-auto group-hover:scale-105 transition-transform duration-500" />
            <span className="font-serif text-2xl font-semibold tracking-tight text-primary">Jarida</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#patients" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">For Patients</a>
            <a href="#doctors" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">For Doctors</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="rounded-full px-6 border-primary/20 text-primary hover:bg-secondary hover:text-primary transition-all">
              Log in
            </Button>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
              Get care now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <nav className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl p-8 flex flex-col transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <img src={iconLogo} alt="Jarida Logo" className="h-8 w-auto" />
              <span className="font-serif text-2xl font-semibold text-primary">Jarida</span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl font-serif text-primary">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-primary/70 transition-colors">Services</a>
            <a href="#patients" onClick={() => setMenuOpen(false)} className="hover:text-primary/70 transition-colors">For Patients</a>
            <a href="#doctors" onClick={() => setMenuOpen(false)} className="hover:text-primary/70 transition-colors">For Doctors</a>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <Button variant="outline" className="w-full rounded-full h-14 text-lg border-primary/20 text-primary">
              Log in
            </Button>
            <Button className="w-full rounded-full h-14 text-lg bg-primary hover:bg-primary/90 text-white">
              Get care now
            </Button>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/80 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-8 border border-primary/5">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Trusted by 10,000+ patients
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-primary leading-[1.1] mb-6">
                Your health,<br />
                safely in your hands.
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
                Connect with verified doctors 24/7. Book appointments, manage records, and receive care from anywhere, effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 text-base">
                  Get care now
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 border-border hover:bg-secondary text-primary transition-all text-base">
                  How it works
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
              {/* Organic shape image wrapper */}
              <div className="relative rounded-[40px] rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] md:aspect-square">
                <img 
                  src="/images/hero-doctor.png" 
                  alt="A reassuring, professional doctor" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -left-8 md:-left-12 top-1/4 bg-white p-4 pr-6 rounded-2xl shadow-xl shadow-primary/5 flex items-center gap-4 animate-in fade-in zoom-in duration-700 delay-700 fill-mode-both border border-border/50">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">500+ Doctors</p>
                  <p className="text-xs text-foreground/60">Verified professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERLAP */}
      <section className="relative z-20 -mt-16 md:-mt-24 mb-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="bg-primary text-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 fill-mode-both">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-4xl md:text-5xl font-serif font-medium text-white mb-2">50K+</span>
              <span className="text-white/70 text-sm font-medium tracking-wide">Consultations</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-4xl md:text-5xl font-serif font-medium text-white mb-2">500+</span>
              <span className="text-white/70 text-sm font-medium tracking-wide">Verified Doctors</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-4xl md:text-5xl font-serif font-medium text-white mb-2">10K+</span>
              <span className="text-white/70 text-sm font-medium tracking-wide">Happy Patients</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-1 mb-2 text-yellow-400">
                <span className="text-4xl md:text-5xl font-serif font-medium text-white mr-2">5.0</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-white/70 text-sm font-medium tracking-wide">App Store Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">Healthcare, simplified.</h2>
            <p className="text-lg text-foreground/70">
              Everything you need to manage your health, seamlessly integrated into one calm and easy-to-use experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Calendar className="w-7 h-7" />}
              title="Quick Booking"
              desc="Find the right doctor and book your appointment in seconds."
              delay="delay-0"
            />
            <ServiceCard 
              icon={<Video className="w-7 h-7" />}
              title="24/7 Consultations"
              desc="Connect via secure video or chat anytime, day or night."
              delay="delay-100"
            />
            <ServiceCard 
              icon={<FileText className="w-7 h-7" />}
              title="Medical Records"
              desc="Access your full medical history and test results securely."
              delay="delay-200"
            />
            <ServiceCard 
              icon={<Pill className="w-7 h-7" />}
              title="E-Prescriptions"
              desc="Receive and renew your prescriptions digitally, without hassle."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* FOR PATIENTS */}
      <section id="patients" className="py-24 md:py-32 scroll-mt-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-secondary rounded-[40px] transform -rotate-3 scale-105 z-0" />
              <img
                src="/images/parent-baby.jpg"
                alt="Parent holding baby peacefully"
                className="relative z-10 rounded-[40px] object-cover w-full h-[500px] md:h-[650px] shadow-xl shadow-primary/10"
              />
              <div className="absolute bottom-10 -right-6 md:-right-10 bg-white p-5 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-4 border border-border/50">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Appointment set</p>
                  <p className="text-xs text-foreground/60">Tomorrow, 10:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-semibold mb-6">
                For Patients
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6 leading-tight">
                Care that revolves around your life.
              </h2>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                We believe seeing a doctor should be as comfortable as being at home. Skip the waiting rooms and confusing paperwork.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Book appointments in seconds",
                  "Talk to verified doctors anytime you need",
                  "Keep records & test results in one place",
                  "Get timely reminders for visits and meds"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground/80 text-lg">{text}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 text-base">
                Join as a patient <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOR DOCTORS */}
      <section id="doctors" className="py-24 md:py-32 bg-secondary/40 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white text-primary text-sm font-semibold mb-6 shadow-sm">
                For Doctors
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6 leading-tight">
                Empowering modern medical practice.
              </h2>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Focus on what matters most—your patients. We provide the tools to manage your schedule, consult remotely, and grow your practice seamlessly.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Easy patient and records management",
                  "Run online consultations from anywhere",
                  "Grow your practice beyond location limits",
                  "Issue prescriptions digitally and securely"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground/80 text-lg">{text}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="rounded-full px-8 h-14 border-primary text-primary hover:bg-primary hover:text-white transition-all text-base bg-transparent">
                Register as a doctor <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 scale-105 z-0" />
              <img
                src="/images/doctors.png"
                alt="Doctor working on digital records"
                className="relative z-10 rounded-[40px] object-cover w-full h-[500px] md:h-[650px] shadow-xl shadow-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-primary rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                Healthcare that travels with you.
              </h2>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Download the Jarida app today. Available now on the App Store and Google Play for a seamless, 24/7 care experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <AppStoreButton type="ios" />
                <AppStoreButton type="android" />
              </div>
            </div>

            <div className="relative z-10 w-full max-w-sm flex justify-center mt-10 md:mt-0">
              <img 
                src="/images/app-mockup.png" 
                alt="Jarida App Mockup" 
                className="w-full h-auto drop-shadow-2xl max-h-[600px] object-contain transform hover:-translate-y-2 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0D17] text-white pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <img 
                  src={fullLogo} 
                  alt="Jarida" 
                  className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-white/60 max-w-sm leading-relaxed mb-8">
                The calm, reassuring presence of a trusted doctor, now available wherever you are. Connecting patients with verified professionals 24/7.
              </p>
              <div className="flex items-center gap-4">
                <AppStoreButton type="ios" theme="dark" />
                <AppStoreButton type="android" theme="dark" />
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white/90">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-white/50 hover:text-white transition-colors">How it works</a></li>
                <li><a href="#patients" className="text-white/50 hover:text-white transition-colors">For Patients</a></li>
                <li><a href="#doctors" className="text-white/50 hover:text-white transition-colors">For Doctors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white/90">Support</h4>
              <ul className="space-y-4">
                <li><a href="mailto:support@jarida.org" className="text-white/50 hover:text-white transition-colors flex items-center gap-2">Contact Us</a></li>
                <li><Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
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
    </div>
  );
}

// Subcomponents

function ServiceCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) {
  return (
    <div className={`bg-white rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border/50 group animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${delay}`}>
      <div className="h-16 w-16 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function AppStoreButton({ type, theme = "light" }: { type: "ios" | "android", theme?: "light" | "dark" }) {
  const isIos = type === "ios";
  const bg = theme === "light" 
    ? "bg-black text-white hover:bg-black/80" 
    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md";
  
  return (
    <button className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-colors ${bg} w-full sm:w-auto justify-center`}>
      {isIos ? (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M16.365 14.502c-.015-3.056 2.502-4.526 2.616-4.6-1.421-2.073-3.626-2.355-4.42-2.39-1.897-.19-3.702 1.118-4.665 1.118-.962 0-2.45-1.096-4.004-1.066-2.016.03-3.876 1.171-4.908 2.973-2.091 3.621-.534 8.975 1.503 11.916.994 1.439 2.164 3.045 3.731 2.986 1.498-.06 2.07-.968 3.864-.968 1.78 0 2.304.968 3.894.938 1.627-.03 2.62-1.468 3.6-2.905 1.134-1.657 1.6-3.262 1.624-3.344-.038-.016-3.007-1.15-3.023-4.228zm-2.45-7.395c.829-1 1.385-2.394 1.233-3.782-1.189.048-2.648.791-3.477 1.791-.741.888-1.411 2.309-1.229 3.676 1.328.102 2.643-.684 3.473-1.685z"/>
        </svg>
      ) : (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.523 15.341l-4.624-4.624 4.624-4.624c.321.144.624.314.907.509l4.57 3.199c.928.65.928 1.706 0 2.356l-4.57 3.199c-.283.195-.586.365-.907.509l-4.624-4.624zM2.875 3.393L11.8 12.318 2.875 21.243c-.495-.297-.875-.769-.875-1.341V4.734c0-.572.38-1.044.875-1.341z"/>
          <path d="M12.918 13.436L3.993 22.361c.404.242.878.361 1.383.361 1.055 0 2.012-.497 2.616-1.282l4.926-7.004zM12.918 11.202L3.993 2.277c.404-.242.878-.361 1.383-.361 1.055 0 2.012.497 2.616 1.282l4.926 7.004z"/>
        </svg>
      )}
      <div className="text-left">
        <div className="text-[11px] leading-none mb-1 opacity-80">{isIos ? "Download on the" : "GET IT ON"}</div>
        <div className="text-base font-semibold leading-none tracking-wide">{isIos ? "App Store" : "Google Play"}</div>
      </div>
    </button>
  );
}
