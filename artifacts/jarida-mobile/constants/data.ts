export type SpecialtyKey =
  | "cardiology"
  | "dermatology"
  | "pediatrics"
  | "general"
  | "neurology"
  | "psychiatry"
  | "dental"
  | "orthopedics";

export interface Specialty {
  key: SpecialtyKey | "all";
  label: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  specialtyKey: SpecialtyKey;
  rating: number;
  reviews: number;
  price: number;
  experience: number;
  patients: string;
  hospital: string;
  about: string;
  nextAvailable: string;
  online: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: "me" | "doctor";
  time: string;
}

export interface Conversation {
  doctorId: string;
  messages: ChatMessage[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  date: string; // ISO YYYY-MM-DD
  time: string;
  reason?: string;
  status: "upcoming" | "completed" | "cancelled";
  createdAt: number;
}

export const SPECIALTIES: Specialty[] = [
  { key: "all", label: "All" },
  { key: "cardiology", label: "Cardiology" },
  { key: "dermatology", label: "Dermatology" },
  { key: "pediatrics", label: "Pediatrics" },
  { key: "general", label: "General" },
  { key: "neurology", label: "Neurology" },
  { key: "psychiatry", label: "Psychiatry" },
  { key: "dental", label: "Dental" },
  { key: "orthopedics", label: "Orthopedics" },
];

export const DOCTORS: Doctor[] = [
  {
    id: "amina-hassan",
    name: "Dr. Amina Hassan",
    specialty: "Cardiologist",
    specialtyKey: "cardiology",
    rating: 4.9,
    reviews: 482,
    price: 45,
    experience: 12,
    patients: "8k+",
    hospital: "Crescent Heart Institute",
    about:
      "Dr. Hassan is a board-certified cardiologist specializing in preventive heart care, arrhythmia management, and remote cardiac monitoring. She believes in care that revolves around the patient.",
    nextAvailable: "Today, 4:30 PM",
    online: true,
  },
  {
    id: "james-okoro",
    name: "Dr. James Okoro",
    specialty: "Dermatologist",
    specialtyKey: "dermatology",
    rating: 4.8,
    reviews: 311,
    price: 38,
    experience: 9,
    patients: "5k+",
    hospital: "ClearSkin Clinic",
    about:
      "Dr. Okoro treats acne, eczema, and skin cancer screenings. He is known for clear explanations and practical, evidence-based treatment plans you can follow at home.",
    nextAvailable: "Tomorrow, 10:00 AM",
    online: true,
  },
  {
    id: "sarah-lin",
    name: "Dr. Sarah Lin",
    specialty: "Pediatrician",
    specialtyKey: "pediatrics",
    rating: 4.9,
    reviews: 627,
    price: 40,
    experience: 15,
    patients: "11k+",
    hospital: "Little Steps Children's Hospital",
    about:
      "Dr. Lin cares for newborns through teens, covering routine checkups, vaccinations, and developmental guidance. Parents love her calm, reassuring approach.",
    nextAvailable: "Today, 6:00 PM",
    online: false,
  },
  {
    id: "david-mensah",
    name: "Dr. David Mensah",
    specialty: "General Practitioner",
    specialtyKey: "general",
    rating: 4.7,
    reviews: 254,
    price: 30,
    experience: 7,
    patients: "4k+",
    hospital: "Jarida Primary Care",
    about:
      "Dr. Mensah handles everyday health concerns, prescriptions, and referrals. He is your first call for fast, friendly online consultations any time of day.",
    nextAvailable: "Today, 3:15 PM",
    online: true,
  },
  {
    id: "fatima-bello",
    name: "Dr. Fatima Bello",
    specialty: "Neurologist",
    specialtyKey: "neurology",
    rating: 4.9,
    reviews: 198,
    price: 55,
    experience: 14,
    patients: "6k+",
    hospital: "NeuroCare Center",
    about:
      "Dr. Bello specializes in migraines, epilepsy, and nerve disorders. She combines the latest diagnostics with a deeply personal, patient-first philosophy.",
    nextAvailable: "Tomorrow, 1:30 PM",
    online: false,
  },
  {
    id: "omar-khalid",
    name: "Dr. Omar Khalid",
    specialty: "Psychiatrist",
    specialtyKey: "psychiatry",
    rating: 4.8,
    reviews: 342,
    price: 50,
    experience: 11,
    patients: "7k+",
    hospital: "Mindful Health Practice",
    about:
      "Dr. Khalid supports anxiety, depression, and stress management through private, judgment-free online sessions. Your mental health is always a priority here.",
    nextAvailable: "Today, 7:30 PM",
    online: true,
  },
  {
    id: "grace-adeyemi",
    name: "Dr. Grace Adeyemi",
    specialty: "Dentist",
    specialtyKey: "dental",
    rating: 4.7,
    reviews: 276,
    price: 35,
    experience: 8,
    patients: "5k+",
    hospital: "BrightSmile Dental",
    about:
      "Dr. Adeyemi covers dental check-ups, whitening advice, and oral health planning. Book a virtual consult before deciding on any in-clinic procedure.",
    nextAvailable: "Tomorrow, 9:00 AM",
    online: false,
  },
  {
    id: "ravi-patel",
    name: "Dr. Ravi Patel",
    specialty: "Orthopedist",
    specialtyKey: "orthopedics",
    rating: 4.8,
    reviews: 219,
    price: 48,
    experience: 13,
    patients: "6k+",
    hospital: "MotionWorks Orthopedics",
    about:
      "Dr. Patel treats joint pain, sports injuries, and post-surgery recovery. He guides patients through tailored rehab plans to get moving again, pain-free.",
    nextAvailable: "Today, 5:45 PM",
    online: true,
  },
];

export function getDoctor(id: string | undefined): Doctor | undefined {
  return DOCTORS.find((d) => d.id === id);
}

const now = Date.now();
const dayMs = 24 * 60 * 60 * 1000;

function isoDate(offsetDays: number): string {
  return new Date(now + offsetDays * dayMs).toISOString().slice(0, 10);
}

export const SEED_APPOINTMENTS: Appointment[] = [
  {
    id: "seed-1",
    doctorId: "amina-hassan",
    date: isoDate(2),
    time: "4:30 PM",
    reason: "Routine heart check-up",
    status: "upcoming",
    createdAt: now - dayMs,
  },
  {
    id: "seed-2",
    doctorId: "david-mensah",
    date: isoDate(-6),
    time: "3:15 PM",
    reason: "Persistent cough",
    status: "completed",
    createdAt: now - 7 * dayMs,
  },
];

export const SEED_CONVERSATIONS: Conversation[] = [
  {
    doctorId: "amina-hassan",
    messages: [
      {
        id: "m1",
        text: "Hi! I've reviewed your latest readings. Everything looks stable.",
        sender: "doctor",
        time: "9:02 AM",
      },
      {
        id: "m2",
        text: "That's a relief, thank you Doctor.",
        sender: "me",
        time: "9:05 AM",
      },
      {
        id: "m3",
        text: "Keep logging your blood pressure each morning. See you at our appointment!",
        sender: "doctor",
        time: "9:06 AM",
      },
    ],
  },
  {
    doctorId: "omar-khalid",
    messages: [
      {
        id: "m1",
        text: "How have you been sleeping since we adjusted your routine?",
        sender: "doctor",
        time: "Yesterday",
      },
      {
        id: "m2",
        text: "A bit better, around 6 hours now.",
        sender: "me",
        time: "Yesterday",
      },
    ],
  },
  {
    doctorId: "james-okoro",
    messages: [
      {
        id: "m1",
        text: "Apply the cream twice daily and send me a photo in a week.",
        sender: "doctor",
        time: "Mon",
      },
    ],
  },
];

export function formatDateLabel(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(d);
  target.setHours(0, 0, 0, 0);
  const diff = Math.round((target.getTime() - today.getTime()) / dayMs);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff === -1) return "Yesterday";
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export const TIME_SLOTS: string[] = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "11:00 AM",
  "1:30 PM",
  "2:00 PM",
  "3:15 PM",
  "4:30 PM",
  "5:45 PM",
  "7:30 PM",
];
