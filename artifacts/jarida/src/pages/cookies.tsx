import { LegalLayout, type LegalSection } from "./legal-layout";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. What are cookies",
    paragraphs: [
      "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work, to improve your experience, and to provide information to the site owners. Similar technologies such as local storage are covered by this policy too.",
    ],
  },
  {
    heading: "2. How we use cookies",
    paragraphs: [
      "Jarida uses cookies and similar technologies to keep the Services secure and reliable, to remember your preferences, and to understand how the Services are used so we can improve them.",
    ],
  },
  {
    heading: "3. Types of cookies we use",
    paragraphs: ["The cookies we use fall into a few broad categories."],
    bullets: [
      "Essential cookies that are necessary for the website to function, such as keeping you signed in and protecting against misuse.",
      "Preference cookies that remember choices you make, such as your settings, so the experience feels consistent.",
      "Analytics cookies that help us understand how visitors use the Services so we can make them better. These are aggregated and do not identify you personally.",
    ],
  },
  {
    heading: "4. Managing cookies",
    paragraphs: [
      "You can control and delete cookies through your browser settings. Most browsers let you refuse or remove cookies, and you can usually set them to notify you when a cookie is being placed. Please note that disabling some cookies may affect how the Services work.",
    ],
  },
  {
    heading: "5. Changes to this policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time. When we make material changes, we will update the date above and, where appropriate, notify you within the Services.",
    ],
  },
  {
    heading: "6. Contact",
    paragraphs: [
      "If you have questions about how we use cookies, please contact us at support@jarida.org.",
    ],
  },
];

export default function Cookies() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="June 25, 2026"
      intro="This policy explains how Jarida uses cookies and similar technologies, the choices you have, and how to manage them."
      sections={SECTIONS}
    />
  );
}
