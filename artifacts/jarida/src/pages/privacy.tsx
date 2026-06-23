import { LegalLayout, type LegalSection } from "./legal-layout";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Who we are",
    paragraphs: [
      "Jarida Healthcare (\"Jarida\", \"we\", \"us\") operates a digital healthcare platform that connects patients with verified doctors for appointments, consultations, and medical record management. This Privacy Policy explains how we collect, use, and protect your personal and health information when you use our website and mobile applications (the \"Services\").",
    ],
  },
  {
    heading: "2. Information we collect",
    paragraphs: [
      "We collect information you provide directly, information generated through your use of the Services, and limited information from your device.",
    ],
    bullets: [
      "Account details such as your name, date of birth, email address, and phone number.",
      "Health information you choose to share, including symptoms, medical history, test results, prescriptions, and consultation messages.",
      "Appointment and booking details, including the doctors you connect with and visit reminders.",
      "Technical data such as device type, app version, and usage activity that helps us keep the Services secure and reliable.",
    ],
  },
  {
    heading: "3. How we use your information",
    paragraphs: ["We use your information only to deliver and improve healthcare services."],
    bullets: [
      "To connect you with verified doctors and facilitate appointments and online consultations.",
      "To store and present your medical records and test results securely in one place.",
      "To send reminders for visits, treatments, and medication.",
      "To maintain the safety, security, and integrity of the platform and to comply with legal obligations.",
    ],
  },
  {
    heading: "4. How we share information",
    paragraphs: [
      "Your health information is shared only with the verified doctors and care providers you choose to interact with, and with service providers who help us operate the platform under strict confidentiality obligations. We do not sell your personal or health information. We may disclose information when required by law or to protect the safety of our users.",
    ],
  },
  {
    heading: "5. Data security",
    paragraphs: [
      "We apply technical and organizational safeguards designed to protect sensitive medical data, including encryption in transit, access controls, and ongoing monitoring. While no system can guarantee absolute security, we work continuously to protect your information.",
    ],
  },
  {
    heading: "6. Your rights",
    paragraphs: ["Depending on where you live, you may have rights over your personal data."],
    bullets: [
      "Access, correct, or download a copy of your information.",
      "Request deletion of your account and associated data, subject to legal record-keeping requirements.",
      "Withdraw consent for optional processing at any time.",
    ],
  },
  {
    heading: "7. Data retention",
    paragraphs: [
      "We retain health and account information for as long as your account is active and as required to provide care continuity and meet applicable medical record-keeping and legal obligations. When information is no longer needed, we securely delete or anonymize it.",
    ],
  },
  {
    heading: "8. Children's privacy",
    paragraphs: [
      "The Services are intended for use by adults. Where a minor receives care, an authorized parent or legal guardian is responsible for managing the account and consenting to the processing of the minor's health information.",
    ],
  },
  {
    heading: "9. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will update the date above and, where appropriate, notify you within the Services.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 23, 2026"
      intro="Your health data is sensitive, and protecting it is central to how Jarida works. This policy explains what we collect, why, and the choices you have."
      sections={SECTIONS}
    />
  );
}
