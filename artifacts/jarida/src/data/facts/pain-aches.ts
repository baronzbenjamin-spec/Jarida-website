import type { FactCategory } from "./types";

export const painAches: FactCategory = {
  id: "pain-aches",
  name: "Pain & aches",
  description: "Everyday and longer-lasting pain, what causes it, and how to find relief.",
  topics: [
    {
      slug: "fibromyalgia",
      title: "Fibromyalgia",
      excerpt:
        "A long-term condition causing widespread pain and tiredness that, while frustrating, can be managed and is not damaging to the body.",
      body: [
        "Fibromyalgia causes pain felt across much of the body, along with tiredness and poor sleep. It is thought to involve the way the nervous system processes pain signals, making them feel stronger than usual. It does not damage the joints or muscles, even though the aching can be very real and tiring.",
        "There is no single cure, but symptoms can be eased and daily life improved with the right mix of approaches. Gentle activity, good sleep habits, stress management, and sometimes medicines all help. Understanding the condition often takes away a lot of the worry that comes with unexplained pain.",
      ],
      symptoms: [
        "Widespread aching or tenderness",
        "Persistent tiredness and unrefreshing sleep",
        "Difficulty concentrating or remembering things",
        "Stiffness, headaches, or low mood",
      ],
      selfCare: [
        "Build up gentle, regular activity such as walking or swimming",
        "Keep a steady sleep routine",
        "Use relaxation and pacing to manage flare-ups",
        "Take paracetamol or ibuprofen for pain if it helps",
      ],
      seekCare: [
        "Pain or tiredness is affecting your daily life",
        "You develop new symptoms such as swelling, fever, or weight loss",
        "Your mood is very low or you are struggling to cope",
      ],
    },
    {
      slug: "concussion",
      title: "Concussion",
      excerpt:
        "A temporary disturbance of brain function after a knock to the head that usually settles fully with rest over days to weeks.",
      body: [
        "Concussion is a mild brain injury caused by a bump, blow, or jolt to the head. It can cause headache, dizziness, and feeling dazed or foggy, even when scans look normal. Most people recover completely, as the brain simply needs time to settle.",
        "Recovery is helped by rest in the first day or two, then a gradual return to normal activities as symptoms allow. Most symptoms ease within a couple of weeks. It is sensible to avoid contact sports until you have fully recovered to protect the brain.",
      ],
      symptoms: [
        "Headache and dizziness",
        "Feeling dazed, foggy, or slowed down",
        "Nausea or sensitivity to light and noise",
        "Trouble concentrating or remembering the event",
      ],
      selfCare: [
        "Rest in the first day or two, then ease back gradually",
        "Avoid alcohol and screens if they worsen symptoms",
        "Take paracetamol for headache if needed",
        "Have someone stay nearby in the first 24 hours",
      ],
      seekCare: [
        "You have repeated vomiting, worsening headache, or drowsiness",
        "You notice confusion, weakness, slurred speech, or a fit",
        "Symptoms do not improve after a couple of weeks",
      ],
    },
    {
      slug: "headache",
      title: "Headache",
      excerpt:
        "One of the most common complaints, headaches are usually harmless and ease with simple measures and a little time.",
      body: [
        "Headaches are very common and most are nothing to worry about. They can be triggered by tiredness, stress, dehydration, eye strain, or tension in the neck and shoulders. Most settle on their own or with simple pain relief.",
        "Keeping well hydrated, resting your eyes, and managing stress can prevent many everyday headaches. If headaches are frequent, keeping a diary can help you spot triggers. Persistent or unusual headaches are worth checking with a doctor for reassurance.",
      ],
      symptoms: [
        "A dull ache or pressure around the head",
        "Tightness in the neck or shoulders",
        "Tenderness across the forehead or temples",
        "Tiredness or difficulty concentrating",
      ],
      selfCare: [
        "Drink plenty of water and rest",
        "Take paracetamol or ibuprofen if needed",
        "Take breaks from screens and get fresh air",
        "Try to reduce stress and keep a regular sleep pattern",
      ],
      seekCare: [
        "The headache is sudden and very severe, like a thunderclap",
        "It comes with fever, a stiff neck, rash, or confusion",
        "Headaches are frequent, worsening, or wake you from sleep",
      ],
    },
    {
      slug: "migraine",
      title: "Migraine",
      excerpt:
        "A common type of severe headache that, while distressing, is manageable with treatment and steps to avoid triggers.",
      body: [
        "Migraine is more than an ordinary headache. It often causes a throbbing pain on one side of the head, with nausea and sensitivity to light and sound, and some people get warning signs called an aura. Attacks can last from hours to a few days.",
        "Although migraines can be very disruptive, they are not dangerous and can usually be managed. Resting in a dark, quiet room and taking pain relief early often helps an attack. Identifying and avoiding triggers, and sometimes preventive medicines, can reduce how often they happen.",
      ],
      symptoms: [
        "Throbbing or pulsing pain, often on one side",
        "Nausea or vomiting",
        "Sensitivity to light, sound, or smells",
        "Visual disturbances or aura before the pain",
      ],
      selfCare: [
        "Rest in a dark, quiet room during an attack",
        "Take paracetamol or ibuprofen early when pain starts",
        "Keep a diary to spot and avoid triggers",
        "Stay hydrated and keep regular meals and sleep",
      ],
      seekCare: [
        "Attacks are frequent or not controlled by usual treatment",
        "You have a sudden, very severe headache unlike your usual ones",
        "You notice new weakness, numbness, or speech problems",
      ],
    },
    {
      slug: "chest-pain",
      title: "Chest pain",
      excerpt:
        "Chest pain has many causes, often harmless, but because it can occasionally be serious it is worth knowing the warning signs.",
      body: [
        "Chest pain can come from the muscles, ribs, or digestion, such as heartburn or a strained muscle, and these causes are common and not dangerous. It can also be linked to anxiety, which can cause real physical tightness. Most chest pain is not due to a heart problem.",
        "Because chest pain can occasionally signal something serious such as a heart problem, it is important to take sudden or severe pain seriously. When the cause is harmless, it usually settles with rest, simple pain relief, or treating the underlying issue. A doctor can help work out the cause and reassure you.",
      ],
      symptoms: [
        "Aching, tightness, or sharp pain in the chest",
        "Pain that worsens with movement, breathing, or pressing",
        "Burning discomfort linked to eating or lying down",
        "Tightness that comes with stress or anxiety",
      ],
      selfCare: [
        "Rest and avoid heavy exertion until pain settles",
        "Take paracetamol or ibuprofen for muscle or rib pain",
        "Treat heartburn by avoiding trigger foods and large meals",
        "Use slow breathing to ease tension-related discomfort",
      ],
      seekCare: [
        "Call your local emergency number for sudden or severe chest pain, or pain with breathlessness or sweating",
        "Pain spreads to the arm, neck, or jaw, or comes with nausea",
        "Pain keeps returning, worsens, or comes with feeling faint",
      ],
    },
    {
      slug: "rheumatic-diseases",
      title: "Rheumatic diseases",
      excerpt:
        "A group of conditions affecting the joints, muscles, and connective tissue that can be managed well with modern treatment.",
      body: [
        "Rheumatic diseases is a broad term for conditions that cause pain and inflammation in the joints, muscles, and surrounding tissues. They include conditions such as rheumatoid arthritis and other inflammatory disorders, and often involve the immune system attacking the body's own tissues. Symptoms can come and go in flares.",
        "While many rheumatic diseases are long-term, treatment has improved greatly and most people can stay active and comfortable. Medicines that calm inflammation, gentle exercise, and support from a specialist team all help. Early diagnosis makes a real difference in protecting the joints.",
      ],
      symptoms: [
        "Painful, swollen, or stiff joints",
        "Stiffness that is worse in the morning",
        "Tiredness and feeling generally unwell",
        "Symptoms that flare and settle over time",
      ],
      selfCare: [
        "Stay gently active to keep joints moving",
        "Take prescribed medicines regularly",
        "Balance rest with activity during flares",
        "Use paracetamol or ibuprofen for pain if suitable for you",
      ],
      seekCare: [
        "You have joint swelling, stiffness, or pain that persists",
        "Symptoms are getting worse or spreading to new joints",
        "You develop fever, weight loss, or feel generally very unwell",
      ],
    },
    {
      slug: "lumbago",
      title: "Acute low back pain / lumbago",
      excerpt:
        "Sudden low back pain is extremely common, rarely a sign of serious damage, and usually eases within a few weeks.",
      body: [
        "Acute low back pain, often called lumbago, is a sudden ache or stiffness in the lower back. It frequently comes on after lifting, twisting, or an awkward movement, but sometimes appears for no clear reason. Despite how painful it can feel, it is rarely caused by anything serious.",
        "Most low back pain improves within a few weeks, and staying gently active speeds recovery more than resting in bed. Keeping moving, simple pain relief, and good posture usually do the trick. The back is strong and designed to recover, which is reassuring when the pain is at its worst.",
      ],
      symptoms: [
        "Aching or stiffness in the lower back",
        "Pain that worsens with certain movements",
        "Muscle tightness or spasm",
        "Difficulty bending or standing straight",
      ],
      selfCare: [
        "Keep moving and avoid long periods of bed rest",
        "Take paracetamol or ibuprofen for pain if needed",
        "Use a warm pack to ease tight muscles",
        "Return to normal activities gradually as pain allows",
      ],
      seekCare: [
        "Pain follows a serious fall or injury",
        "You have numbness around the groin, or loss of bladder or bowel control",
        "Pain is severe, persistent, or comes with fever or weight loss",
      ],
    },
    {
      slug: "tension-headache",
      title: "Tension headache",
      excerpt:
        "The most common kind of headache, caused by tight muscles and stress, and usually relieved by simple, gentle measures.",
      body: [
        "A tension headache feels like a band of pressure or tightness around the head. It is the most common type of headache and is often linked to stress, tiredness, poor posture, or tension in the neck and shoulders. It is not dangerous and does not signal anything serious.",
        "These headaches usually ease with rest, relaxation, and simple pain relief. Looking after posture, taking screen breaks, and managing stress can prevent them from coming back. If they become frequent, it is worth reviewing your daily habits and any triggers.",
      ],
      symptoms: [
        "A tight, pressing feeling around the head",
        "Tenderness in the neck and shoulder muscles",
        "Pain on both sides of the head",
        "Tiredness or difficulty concentrating",
      ],
      selfCare: [
        "Take regular breaks and stretch the neck and shoulders",
        "Take paracetamol or ibuprofen if needed",
        "Manage stress with relaxation or gentle exercise",
        "Stay hydrated and keep a regular sleep routine",
      ],
      seekCare: [
        "Headaches become frequent or you rely on painkillers often",
        "The pattern changes or pain becomes much more severe",
        "You develop new symptoms such as fever, vision changes, or weakness",
      ],
    },
  ],
};
