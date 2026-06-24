import { 
  ArrowRight, 
  Calendar, 
  Video, 
  FileText, 
  Pill, 
  Check,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AppStoreButton } from "@/components/app-store-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-serif text-foreground selection:bg-primary/20">
      <SiteHeader />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/80 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-stretch">
            <div className="max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-[1.1] mb-3 sm:mb-5">
                Your health,<br />
                safely in your hands.
              </h1>
              <p className="text-xs sm:text-sm text-foreground/70 mb-5 sm:mb-7 leading-relaxed max-w-md">
                Connect with verified doctors 24/7. Book appointments, manage records, and receive care from anywhere, effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8 h-11 sm:h-12 border-border hover:bg-secondary text-primary transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-sm">
                  <Link href="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
              {/* Organic shape image wrapper */}
              <div className="relative w-full h-full min-h-[260px] sm:min-h-[380px] rounded-[40px] rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl shadow-primary/10">
                <img 
                  src="/images/hero-parent-child.png" 
                  alt="A Ugandan mother tenderly embracing her child" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-12 md:py-16 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-serif text-primary mb-3">Healthcare, simplified.</h2>
            <p className="text-sm text-foreground/70">
              Everything you need to manage your health, seamlessly integrated into one calm and easy-to-use experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard 
              icon={<Calendar className="w-6 h-6" />}
              title="Quick Booking"
              desc="Find the right doctor and book your appointment in seconds."
              delay="delay-0"
            />
            <ServiceCard 
              icon={<Video className="w-6 h-6" />}
              title="24/7 Consultations"
              desc="Connect via secure video or chat anytime, day or night."
              delay="delay-100"
            />
            <ServiceCard 
              icon={<FileText className="w-6 h-6" />}
              title="Medical Records"
              desc="Access your full medical history and test results securely."
              delay="delay-200"
            />
            <ServiceCard 
              icon={<Pill className="w-6 h-6" />}
              title="E-Prescriptions"
              desc="Receive and renew your prescriptions digitally, without hassle."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* FOR PATIENTS */}
      <section id="patients" className="py-12 md:py-20 scroll-mt-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-secondary rounded-[40px] transform -rotate-3 scale-105 z-0" />
              <img
                src="/images/parent-baby.png"
                alt="A Ugandan parent holding their baby at home"
                className="relative z-10 rounded-[40px] object-cover w-full h-[420px] md:h-[520px] shadow-xl shadow-primary/10"
              />
              <div className="absolute bottom-8 -right-6 md:-right-10 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3 border border-border/50">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Appointment set</p>
                  <p className="text-xs text-foreground/60">Tomorrow, 10:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-bold mb-5">
                For Patients
              </div>
              <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4 leading-tight">
                Care that revolves around your life.
              </h2>
              <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                We believe seeing a doctor should be as comfortable as being at home. Skip the waiting rooms and confusing paperwork.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Book appointments in seconds",
                  "Talk to verified doctors anytime you need",
                  "Keep records & test results in one place",
                  "Get timely reminders for visits and meds"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground/80 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-sm">
                Join as a patient <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOR DOCTORS */}
      <section id="doctors" className="py-12 md:py-20 bg-secondary/40 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="lg:pr-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white text-primary text-sm font-bold mb-5 shadow-sm">
                For Doctors
              </div>
              <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4 leading-tight">
                Empowering modern medical practice.
              </h2>
              <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                Focus on what matters most&mdash;your patients. We provide the tools to manage your schedule, consult remotely, and grow your practice seamlessly.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Easy patient and records management",
                  "Run online consultations from anywhere",
                  "Grow your practice beyond location limits",
                  "Issue prescriptions digitally and securely"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground/80 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-sm bg-transparent">
                Register as a doctor <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 scale-105 z-0" />
              <img
                src="/images/doctors.png"
                alt="A Ugandan doctor reviewing patient records"
                className="relative z-10 rounded-[40px] object-cover w-full h-[420px] md:h-[520px] shadow-xl shadow-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">
                Healthcare that travels with you.
              </h2>
              <p className="text-sm text-white/80 mb-7 leading-relaxed">
                Download the Jarida app today. Available now on the App Store and Google Play for a seamless, 24/7 care experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <AppStoreButton type="ios" />
                <AppStoreButton type="android" />
              </div>
            </div>

            <div className="relative z-10 w-full max-w-sm mt-6 md:mt-0">
              <img 
                src="/images/app-usage.png" 
                alt="A person in Uganda using the Jarida app for a video consultation" 
                className="rounded-[32px] object-cover w-full h-[360px] md:h-[440px] shadow-2xl transform hover:-translate-y-1 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// Subcomponents

function ServiceCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) {
  return (
    <div className={`bg-white rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border/50 group animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${delay}`}>
      <div className="h-12 w-12 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
