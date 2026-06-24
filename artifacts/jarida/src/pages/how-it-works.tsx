import { useState } from "react";
import { Link } from "wouter";
import { Sparkles, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useSeo } from "@/lib/seo";

type Step = {
  title: string;
  description: string;
};

const GETTING_STARTED: Step[] = [
  {
    title: "Create Your Account",
    description:
      "Register using your phone number, email address, or approved identification details. Your account gives you secure access to your health profile and medical information.",
  },
  {
    title: "Complete Your Profile",
    description:
      "Add your personal details, contact information, emergency contact, blood group, allergies, and relevant medical history. This helps healthcare providers identify you correctly and provide safer care.",
  },
  {
    title: "Access Your Dashboard",
    description:
      "Your dashboard gives you a clear overview of your appointments, medical records, prescriptions, lab results, documents, messages, and payments.",
  },
];

const PATIENT_STEPS: Step[] = [
  {
    title: "Book an Appointment",
    description:
      "Search for a doctor, clinic, hospital, or service. Choose the appointment type, select an available time, and confirm your booking directly in the app.",
  },
  {
    title: "Talk to a Doctor",
    description:
      "Start a consultation by video, phone, or message depending on the service offered by the healthcare provider. Appointment details are available in your dashboard.",
  },
  {
    title: "View Medical Records",
    description:
      "Access your visit history, diagnoses, treatment plans, prescriptions, lab results, uploaded documents, and clinical notes in one place.",
  },
  {
    title: "Upload Health Documents",
    description:
      "Upload referral letters, previous test results, discharge summaries, prescriptions, or other medical files so your doctor can review them before or during a consultation.",
  },
  {
    title: "View Prescriptions",
    description:
      "See your current and previous medications, including dose, instructions, duration, and prescribing doctor.",
  },
  {
    title: "Check Lab Results",
    description:
      "View laboratory results when they are available. Results are organised by date, test name, and clinical details.",
  },
  {
    title: "Track Your Vitals",
    description:
      "Record or review health measurements such as blood pressure, pulse, weight, temperature, oxygen level, and blood sugar.",
  },
  {
    title: "Manage Consent",
    description:
      "Control which healthcare providers can access your medical information. You can allow, limit, or remove access depending on your care needs.",
  },
  {
    title: "Make Payments",
    description:
      "View service fees, consultation charges, pending bills, and receipts. Payments are linked to your appointment or service.",
  },
];

const DOCTOR_STEPS: Step[] = [
  {
    title: "Create a Clinician Profile",
    description:
      "Register with your professional details, specialty, workplace, licence number, and contact information.",
  },
  {
    title: "Verify Your Licence",
    description:
      "Upload your professional licence and registration details. Jarida verifies clinicians through the relevant professional council before full clinical access is activated.",
  },
  {
    title: "Manage Your Schedule",
    description:
      "View upcoming appointments, consultation type, patient details, appointment status, and visit history from your clinician dashboard.",
  },
  {
    title: "Open Patient Records",
    description:
      "Access approved patient information, including medical history, allergies, medications, documents, lab results, prescriptions, and previous visits.",
  },
  {
    title: "Document a Consultation",
    description:
      "Write visit notes including symptoms, examination findings, assessment, diagnosis, treatment plan, and follow-up instructions.",
  },
  {
    title: "Add Diagnosis and ICD-10 Codes",
    description:
      "Record clinical diagnoses and, where available, select ICD-10 codes to support structured medical documentation.",
  },
  {
    title: "Prescribe Medication",
    description:
      "Create prescriptions with medicine name, dose, frequency, duration, and patient instructions. Prescriptions are saved in the patient record.",
  },
  {
    title: "Order Lab Tests",
    description:
      "Request laboratory investigations directly from the patient visit. Lab orders are stored in the patient\u2019s medical record.",
  },
  {
    title: "Review Lab Results",
    description:
      "View completed lab results, add comments, update the treatment plan, and communicate findings to the patient.",
  },
  {
    title: "Sign Clinical Notes",
    description:
      "When documentation is complete, sign the visit note. Signed records are protected to maintain clinical integrity and accountability.",
  },
];

type Audience = "patients" | "doctors";

export default function HowItWorks() {
  const [audience, setAudience] = useState<Audience>("patients");

  useSeo({
    title: "How to Use Jarida | Jarida",
    description:
      "A clear walkthrough of how patients, doctors, and healthcare facilities use Jarida to manage medical records, appointments, consultations, prescriptions, lab results, and health documents.",
  });

  const switchAudience = (next: Audience) => {
    setAudience(next);
    window.requestAnimationFrame(() => {
      document
        .getElementById(next)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="min-h-screen bg-white font-serif text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-8 border border-primary/5">
              <Sparkles className="w-4 h-4 text-primary" />
              A simple orientation guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
              How to Use Jarida
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Jarida helps patients, doctors, and healthcare facilities manage
              medical records, appointments, consultations, prescriptions, lab
              results, and health documents in one secure digital platform.
            </p>
            <p className="mt-4 text-lg md:text-xl text-foreground/70 leading-relaxed">
              Use Jarida to access care, organise health information, and improve
              communication between patients and healthcare providers.
            </p>
          </div>

          {/* AUDIENCE SWITCHER */}
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => switchAudience("patients")}
              aria-pressed={audience === "patients"}
              className={`rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                audience === "patients"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "border border-primary/30 text-primary hover:bg-secondary"
              }`}
            >
              For Patients
            </button>
            <button
              type="button"
              onClick={() => switchAudience("doctors")}
              aria-pressed={audience === "doctors"}
              className={`rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                audience === "doctors"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "border border-primary/30 text-primary hover:bg-secondary"
              }`}
            >
              For Doctors
            </button>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/50 mb-3">
              Section 1: Getting Started
            </p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">
              Get Started with Jarida
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Jarida is designed to be simple, secure, and easy to use. Create an
              account, complete your profile, and start managing your healthcare
              information from your phone or computer.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {GETTING_STARTED.map((step, index) => (
              <li
                key={step.title}
                className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-base font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOR PATIENTS */}
      <section id="patients" className="py-12 md:py-16 bg-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/50 mb-3">
              Section 2: For Patients
            </p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">
              How Patients Use Jarida
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Jarida gives patients secure access to their health information and
              makes it easier to connect with healthcare providers.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PATIENT_STEPS.map((step, index) => (
              <StepCard key={step.title} number={index + 1} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* FOR DOCTORS */}
      <section id="doctors" className="py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/50 mb-3">
              Section 3: For Doctors and Clinicians
            </p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">
              How Doctors Use Jarida
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Jarida supports healthcare professionals with digital tools for
              patient care, documentation, follow-up, and clinical
              decision-making.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DOCTOR_STEPS.map((step, index) => (
              <StepCard key={step.title} number={index + 1} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="rounded-[2.5rem] bg-primary p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-sm text-white/80 leading-relaxed mb-7">
                Create your account, complete your profile, and start managing
                your healthcare information from your phone or computer.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Back to home
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function StepCard({ number, step }: { number: number; step: Step }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm h-full">
      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
        {number}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
