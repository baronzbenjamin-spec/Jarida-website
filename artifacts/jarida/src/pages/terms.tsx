import { LegalLayout, type LegalSection } from "./legal-layout";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Acceptance of these terms",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your access to and use of the Jarida Healthcare website and mobile applications (the \"Services\"). By creating an account or using the Services, you agree to these Terms. If you do not agree, please do not use the Services.",
    ],
  },
  {
    heading: "2. The Services",
    paragraphs: [
      "Jarida is a digital platform that connects patients with verified doctors so they can book appointments, chat with doctors, and manage medical records in one app. Jarida facilitates these connections but does not itself provide medical care.",
    ],
  },
  {
    heading: "3. Not for medical emergencies",
    paragraphs: [
      "The Services are not intended for emergencies. If you are experiencing a medical emergency, call your local emergency number or go to the nearest emergency facility immediately. Do not rely on the Services for urgent or life-threatening situations.",
    ],
  },
  {
    heading: "4. Medical disclaimer",
    paragraphs: [
      "Information provided through the Services, including consultations with doctors, is for your general healthcare and does not replace an in-person examination where one is needed. Always use your own judgment and consult a qualified professional about your specific circumstances. Decisions you make based on information from the Services are your responsibility.",
    ],
  },
  {
    heading: "5. Your account",
    paragraphs: ["You are responsible for the information and security of your account."],
    bullets: [
      "Provide accurate, complete, and up-to-date information when registering.",
      "Keep your login credentials confidential and do not share your account.",
      "Notify us promptly of any unauthorized use of your account.",
      "You must be of legal age to form a binding contract, or use the Services through an authorized parent or guardian.",
    ],
  },
  {
    heading: "6. Acceptable use",
    paragraphs: ["When using the Services, you agree not to:"],
    bullets: [
      "Misuse, disrupt, or attempt to gain unauthorized access to the platform.",
      "Provide false information or impersonate another person, patient, or provider.",
      "Use the Services for any unlawful, harmful, or fraudulent purpose.",
    ],
  },
  {
    heading: "7. Doctors and third parties",
    paragraphs: [
      "Doctors available through Jarida are independent professionals responsible for the care they provide. While we verify providers on the platform, your relationship for medical care is with the treating doctor. We are not liable for the acts or omissions of independent providers.",
    ],
  },
  {
    heading: "8. Fees",
    paragraphs: [
      "Some features or consultations may be subject to fees, which will be disclosed to you before you incur them. You are responsible for any charges associated with your use of paid features.",
    ],
  },
  {
    heading: "9. Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Jarida is not liable for indirect, incidental, or consequential damages arising from your use of the Services. The Services are provided on an \"as is\" and \"as available\" basis without warranties of any kind.",
    ],
  },
  {
    heading: "10. Changes and termination",
    paragraphs: [
      "We may update these Terms or modify, suspend, or discontinue parts of the Services at any time. We may suspend or terminate accounts that violate these Terms. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "11. Contact",
    paragraphs: [
      "If you have questions about these Terms, please contact us at support@jarida.org.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="June 23, 2026"
      intro="These terms set out the rules for using Jarida and the relationship between you, Jarida, and the doctors you connect with. Please read them carefully."
      sections={SECTIONS}
    />
  );
}
