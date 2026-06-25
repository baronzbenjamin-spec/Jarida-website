import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";

import iconLogo from "@assets/jarida_logo_icon.png";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useSeo } from "@/lib/seo";

const SUPPORT_EMAIL = "support@jarida.org";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }
  return errors;
}

export default function Contact() {
  const { toast } = useToast();
  const [values, setValues] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});

  useSeo({
    title: "Contact Us | Jarida",
    description:
      "Get in touch with the Jarida team. Send us a message and we will get back to you as soon as we can.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const update = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const name = values.name.trim();
    const email = values.email.trim();
    const subject = values.subject.trim();
    const message = values.message.trim();

    const body = `${message}\n\n—\nFrom: ${name} (${email})`;
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    toast({
      title: "Opening your email app",
      description:
        "We've prepared your message in your email app. Send it from there and we'll reply soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background font-serif text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-border py-3 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={iconLogo}
              alt="Jarida Icon"
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="font-serif text-2xl font-medium tracking-tight text-primary">
              Jarida
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="pt-24 pb-10">
        <div className="absolute inset-x-0 top-0 h-[40vh] bg-[radial-gradient(ellipse_at_top,var(--color-secondary)_0%,transparent_60%)] -z-10" />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <Reveal>
            <header className="max-w-2xl mb-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/60 mb-5">
                We're here to help
              </p>
              <h1 className="text-2xl md:text-3xl font-serif font-medium text-primary leading-[1.1] mb-6">
                Contact us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a question, some feedback, or need a hand getting started?
                Send us a message and our team will get back to you as soon as we
                can.
              </p>
            </header>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-6 items-start">
            {/* FORM */}
            <Reveal>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[28px] md:rounded-[32px] border border-border/60 bg-white p-7 sm:p-9 shadow-xl shadow-primary/5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-primary font-sans">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your full name"
                      className="h-12 rounded-xl bg-secondary/30 border-border/70 font-sans"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive font-sans">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-primary font-sans">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className="h-12 rounded-xl bg-secondary/30 border-border/70 font-sans"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive font-sans">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <Label htmlFor="subject" className="text-primary font-sans">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    placeholder="What is this about?"
                    className="h-12 rounded-xl bg-secondary/30 border-border/70 font-sans"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive font-sans">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <Label htmlFor="message" className="text-primary font-sans">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us how we can help…"
                    rows={6}
                    className="rounded-xl bg-secondary/30 border-border/70 font-sans resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive font-sans">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="mt-7 w-full sm:w-auto rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
                >
                  Send message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="mt-4 font-sans text-xs text-muted-foreground">
                  This opens your email app with your message ready to send.
                </p>
              </form>
            </Reveal>

            {/* SIDEBAR */}
            <Reveal delay={0.08}>
              <div className="space-y-5">
                <div className="rounded-[24px] border border-border/60 bg-secondary/40 p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-lg text-primary mb-2">
                    Email us
                  </h2>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-3">
                    Prefer to email directly? Reach our support team any time.
                  </p>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
                  >
                    {SUPPORT_EMAIL}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="rounded-[24px] border border-border/60 bg-secondary/40 p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-lg text-primary mb-2">
                    In the app
                  </h2>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    Already using Jarida? You can message your care team and
                    reach support straight from the app.
                  </p>
                </div>

                <div className="rounded-[24px] border border-border/60 bg-secondary/40 p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-lg text-primary mb-2">
                    Where we are
                  </h2>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    Jarida is built for Uganda, supporting patients and clinicians
                    across the country.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}
