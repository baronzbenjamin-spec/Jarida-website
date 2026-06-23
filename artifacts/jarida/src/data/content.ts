import calmMorning from "@assets/stock_images/calm_morning_routine.jpg";
import restfulBedroom from "@assets/stock_images/restful_bedroom.jpg";
import healthyFood from "@assets/stock_images/healthy_food_bowl.jpg";
import outdoorWalking from "@assets/stock_images/outdoor_walking.jpg";
import calmBreathing from "@assets/stock_images/calm_breathing.jpg";
import parentChild from "@assets/stock_images/parent_caring_child.jpg";
import doctorCheck from "@assets/stock_images/doctor_health_check.jpg";
import cozyTea from "@assets/stock_images/cozy_tea_season.jpg";
import heartExercise from "@assets/stock_images/heart_health_exercise.jpg";

import type { FactCategory, FactTopic } from "./facts/types";
import { allergies } from "./facts/allergies";
import { childrensHealth } from "./facts/childrens-health";
import { mentalHealth } from "./facts/mental-health";
import { urology } from "./facts/urology";
import { infections } from "./facts/infections";
import { bitesStings } from "./facts/bites-stings";
import { lungDiseases } from "./facts/lung-diseases";
import { painAches } from "./facts/pain-aches";
import { skin } from "./facts/skin";
import { hormonal } from "./facts/hormonal";
import { sti } from "./facts/sti";
import { gynecology } from "./facts/gynecology";
import { fertilityPregnancy } from "./facts/fertility-pregnancy";
import { eyeConditions } from "./facts/eye-conditions";
import { earNoseThroat } from "./facts/ear-nose-throat";
import { heartCirculation } from "./facts/heart-circulation";
import { stomachIntestines } from "./facts/stomach-intestines";
import { otherHealth } from "./facts/other-health";
import { selfTests } from "./facts/self-tests";
import { jointsMuscles } from "./facts/joints-muscles";
import { commonQuestions } from "./facts/common-questions";

export type { FactTopic, FactCategory } from "./facts/types";

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  body: string[];
};

export type PatientQuestion = {
  question: string;
  answer: string;
};

export const FACT_CATEGORIES: FactCategory[] = [
  infections,
  skin,
  childrensHealth,
  stomachIntestines,
  earNoseThroat,
  allergies,
  painAches,
  jointsMuscles,
  heartCirculation,
  lungDiseases,
  mentalHealth,
  hormonal,
  eyeConditions,
  gynecology,
  fertilityPregnancy,
  urology,
  sti,
  bitesStings,
  otherHealth,
  selfTests,
  commonQuestions,
];

export const ARTICLES: Article[] = [
  {
    slug: "calmer-daily-routine",
    title: "How to build a calmer daily routine",
    category: "Wellbeing",
    excerpt:
      "Small, repeatable habits do more for your wellbeing than occasional big changes. Here is how to build a day that supports you.",
    readTime: "5 min read",
    image: calmMorning,
    body: [
      "When life feels busy, it is tempting to look for a dramatic fix. In practice, the things that protect our wellbeing are usually small and repeatable: a steady wake-up time, a few minutes outdoors, a proper pause for lunch. These quiet anchors give the day a shape that the body and mind can settle into.",
      "Start with one part of the day rather than trying to overhaul everything at once. A calm morning often sets the tone, so you might begin there with a simple sequence you can repeat without thinking. Once it feels natural, add the next small habit.",
      "Be realistic about energy. Most people have a natural rhythm, with sharper focus at certain times and a dip later in the day. Planning demanding tasks for your stronger hours, and gentler ones for the dip, makes the whole day feel less of a struggle.",
      "Finally, protect a clear end to the day. A short wind-down routine signals to your body that it is time to rest, which makes both sleep and the next morning easier.",
    ],
  },
  {
    slug: "better-sleep-habits",
    title: "Small habits for better sleep",
    category: "Sleep",
    excerpt:
      "Good sleep rarely comes from one change. These gentle habits add up to deeper, more reliable rest.",
    readTime: "4 min read",
    image: restfulBedroom,
    body: [
      "Sleep is one of the most powerful things we can do for our health, yet it is often the first thing we sacrifice. The good news is that better sleep usually comes from a handful of small, consistent habits rather than a single dramatic change.",
      "Consistency matters most. Going to bed and waking at similar times, even at weekends, helps your body clock settle into a steady rhythm. Over time, you will find it easier to fall asleep and wake feeling more refreshed.",
      "The hour before bed sets you up for the night. Dimming lights, stepping away from screens, and avoiding caffeine late in the day all help your body prepare for rest. A cool, dark, quiet bedroom does the rest.",
      "If you wake in the night and cannot drift off, try not to clock-watch. Getting up briefly to do something calm, then returning to bed when sleepy, is often more effective than lying awake and worrying.",
    ],
  },
  {
    slug: "eating-well-simply",
    title: "Eating well without overthinking it",
    category: "Nutrition",
    excerpt:
      "Healthy eating does not need to be complicated. A few simple principles cover most of what matters.",
    readTime: "5 min read",
    image: healthyFood,
    body: [
      "Nutrition advice can feel overwhelming, with new rules appearing all the time. In reality, the basics are steady and simple, and they cover most of what your body needs without strict counting or expensive products.",
      "Aim to fill half your plate with vegetables and fruit, choose wholegrains where you can, and include a source of protein at meals. These habits naturally crowd out less helpful choices without you having to forbid anything.",
      "Pay attention to how you eat, not just what. Eating slowly and without distraction helps you notice when you are comfortably full, which is often a more useful guide than any portion chart.",
      "Most importantly, allow flexibility. A way of eating you can keep up for years, that still leaves room for the foods you enjoy, will do far more for your health than a perfect plan you abandon after a fortnight.",
    ],
  },
  {
    slug: "everyday-movement",
    title: "Why everyday movement matters",
    category: "Movement",
    excerpt:
      "You do not need a gym to stay active. Building movement into ordinary life brings lasting benefits.",
    readTime: "4 min read",
    image: outdoorWalking,
    body: [
      "When we think about exercise, we often picture intense workouts. But for everyday health, regular gentle movement spread across the day is just as valuable, and far easier to keep up.",
      "Walking is one of the most underrated forms of activity. A brisk walk supports the heart, lifts mood, and helps with sleep, and it fits easily into ordinary routines such as commuting or running errands.",
      "Breaking up long periods of sitting is just as important as planned exercise. Standing up, stretching, or taking a short walk every hour keeps the body comfortable and the mind sharper.",
      "Choose movement you actually enjoy. Whether it is cycling, dancing, gardening, or playing with children, the best activity is the one you will come back to, week after week.",
    ],
  },
  {
    slug: "easing-everyday-stress",
    title: "Recognising and easing everyday stress",
    category: "Mental health",
    excerpt:
      "Stress is a normal part of life, but learning to notice and ease it protects both mind and body.",
    readTime: "6 min read",
    image: calmBreathing,
    body: [
      "Stress is the body's natural response to pressure, and in short bursts it can even be helpful. It becomes a problem when it is constant, leaving little time to recover. Learning to recognise your own signs of stress is the first step to managing it.",
      "Those signs vary from person to person. Some notice it in the body as tension, headaches, or disturbed sleep, while others feel it as irritability, worry, or difficulty concentrating. Naming what you are feeling can itself take some of its power away.",
      "Simple techniques help in the moment. Slow breathing, a short walk, or stepping away from a situation can settle the nervous system. Over the longer term, regular movement, good sleep, and time with people you trust build resilience.",
      "If stress feels constant or starts to affect daily life, it is worth reaching out. Talking to a clinician early can prevent ongoing stress from taking a heavier toll on your health.",
    ],
  },
  {
    slug: "caring-for-sick-child",
    title: "Caring for a sick child at home",
    category: "Family health",
    excerpt:
      "Most childhood illnesses pass at home. Knowing what helps, and what to watch for, brings peace of mind.",
    readTime: "5 min read",
    image: parentChild,
    body: [
      "When a child is unwell, it is natural to worry. The reassuring truth is that most common childhood illnesses, such as colds and tummy bugs, pass within a few days with rest and care at home.",
      "Comfort and fluids are the foundation of home care. Offering drinks regularly, keeping your child rested, and using the right dose of paracetamol or ibuprofen when they are distressed will help them feel better while their body recovers.",
      "How a child behaves often tells you more than a thermometer. A child who is drinking, responsive, and settling between temperatures is usually managing well, even with a fever.",
      "Trust your instincts about when to seek help. A baby under three months with a fever, a rash that does not fade under pressure, difficulty breathing, or unusual drowsiness all warrant prompt medical advice.",
    ],
  },
  {
    slug: "yearly-health-checks",
    title: "Health checks worth doing each year",
    category: "Prevention",
    excerpt:
      "A little prevention goes a long way. These simple checks help you stay ahead of common health issues.",
    readTime: "5 min read",
    image: doctorCheck,
    body: [
      "Much of good health is quiet and preventive: small checks that catch issues early, when they are easiest to address. Building a few of these into your year is one of the most worthwhile things you can do.",
      "Blood pressure is a good example. It rarely causes symptoms but has a big effect on long-term health, so an occasional check is well worth the few minutes it takes. Depending on your age and history, your clinician may also suggest checking cholesterol or blood sugar.",
      "Keep up with recommended screening for your age group and stay current with vaccinations, including the yearly flu vaccine if it is offered to you. These are simple steps with a strong protective effect.",
      "Finally, do not ignore changes you notice in your own body. Mentioning them early, rather than waiting, gives you and your clinician the best chance to deal with anything before it grows.",
    ],
  },
  {
    slug: "cold-and-flu-season",
    title: "Staying well through cold and flu season",
    category: "Prevention",
    excerpt:
      "The colder months bring more coughs and colds. A few simple habits help you stay healthier.",
    readTime: "4 min read",
    image: cozyTea,
    body: [
      "As the weather turns colder, coughs and colds spread more easily, partly because we spend more time indoors and closer together. A few straightforward habits can lower your chances of catching something, and of passing it on.",
      "Hand washing remains one of the most effective protections. Washing thoroughly with soap, especially before eating and after being out, removes the viruses that cause many seasonal infections.",
      "Support your body with the basics: enough sleep, regular meals, and time outdoors when you can. A well-rested body is better equipped to fight off infections.",
      "If you do fall ill, rest and fluids are usually the best medicine. Staying home while you recover protects colleagues, classmates, and anyone more vulnerable around you.",
    ],
  },
  {
    slug: "healthier-heart",
    title: "Simple steps for a healthier heart",
    category: "Prevention",
    excerpt:
      "Heart health is built from everyday choices. Small, steady habits protect you for the long term.",
    readTime: "6 min read",
    image: heartExercise,
    body: [
      "Heart health can sound like a serious, complicated topic, but much of it comes down to everyday habits repeated over time. Small, consistent choices add up to real protection for your heart and circulation.",
      "Regular movement is one of the strongest allies your heart has. You do not need intense exercise: brisk walking on most days already makes a meaningful difference to your fitness and blood pressure.",
      "What you eat matters too. A pattern rich in vegetables, fruit, wholegrains, and healthy fats, with less heavily processed food and salt, supports healthy blood pressure and cholesterol.",
      "Not smoking, keeping alcohol within sensible limits, and managing stress all play their part. If you have a family history of heart problems, mention it to your clinician so you can keep an eye on the things that matter most for you.",
    ],
  },
];

export const MOST_VISITED: string[] = [
  "common-cold",
  "urinary-tract-infection",
  "hay-fever",
  "sore-throat",
  "eczema",
  "headache",
  "fever-in-children",
  "heartburn",
];

export const DOCTOR_HELP: string[] = [
  "sinusitis",
  "urinary-tract-infection",
  "hay-fever",
  "sore-throat",
  "acne",
  "hives",
  "ear-infection",
  "cold-sores",
  "eczema",
  "food-allergy",
  "influenza",
  "migraine",
];

export const PATIENT_QUESTIONS: PatientQuestion[] = [
  {
    question: "When should I see a doctor about a cold?",
    answer:
      "Most colds clear on their own within a week or two. Speak to a doctor if symptoms last beyond about ten days, keep getting worse, or come with a high fever, chest pain, or trouble breathing.",
  },
  {
    question: "Do I really need antibiotics for a sore throat?",
    answer:
      "Usually not. Most sore throats are caused by viruses, which antibiotics do not help. They are only useful for certain bacterial infections, so soothing remedies and pain relief are normally all that is needed.",
  },
  {
    question: "How long is a stomach bug contagious?",
    answer:
      "You can usually pass on a stomach bug while you have symptoms and for a couple of days after they settle. Careful hand washing and staying home until you feel better helps protect those around you.",
  },
  {
    question: "When is a fever in my child something to worry about?",
    answer:
      "How your child behaves matters more than the exact temperature. Seek advice if a baby under three months has any fever, if your child is very drowsy, has a rash that does not fade, struggles to breathe, or you are simply worried.",
  },
  {
    question: "What can I do at home for a urinary tract infection?",
    answer:
      "Drink plenty of water, use over-the-counter pain relief, and avoid holding urine for long periods. If symptoms are severe, do not improve within a day or two, or you notice fever or blood in the urine, speak to a doctor.",
  },
  {
    question: "How do I know if my symptoms are an emergency?",
    answer:
      "Treat sudden difficulty breathing, severe chest pain, swelling of the lips or throat, fainting, or a rash that does not fade under pressure as emergencies and call your local emergency number straight away.",
  },
  {
    question: "Is it normal to feel tired for weeks after the flu?",
    answer:
      "Yes. The flu can leave you feeling drained for a week or more, and tiredness can linger as you recover. Rest, fluids, and a gradual return to activity usually help. See a doctor if symptoms return worse or do not ease.",
  },
  {
    question: "Can I look after most symptoms myself first?",
    answer:
      "Many everyday complaints can be eased at home with rest, fluids, and simple pain relief. Each topic here explains what you can do yourself and the signs that mean it is worth speaking to a doctor.",
  },
];

export function getAllTopics(): Array<{
  topic: FactTopic;
  category: FactCategory;
}> {
  return FACT_CATEGORIES.flatMap((category) =>
    category.topics.map((topic) => ({ topic, category })),
  );
}

export function findTopicsBySlugs(slugs: string[]): FactTopic[] {
  const all = getAllTopics();
  return slugs
    .map((slug) => all.find((entry) => entry.topic.slug === slug)?.topic)
    .filter((topic): topic is FactTopic => Boolean(topic));
}

export function findFactBySlug(slug: string):
  | { topic: FactTopic; category: FactCategory }
  | undefined {
  for (const category of FACT_CATEGORIES) {
    const topic = category.topics.find((t) => t.slug === slug);
    if (topic) return { topic, category };
  }
  return undefined;
}

export function findCategoryById(id: string): FactCategory | undefined {
  return FACT_CATEGORIES.find((category) => category.id === id);
}

export function findArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
