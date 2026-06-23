import type { FactCategory } from "./types";

export const hormonal: FactCategory = {
  id: "hormonal",
  name: "Hormonal diseases",
  description: "Conditions of the body's hormone systems, including diabetes and thyroid disorders.",
  topics: [
    {
      slug: "diabetes",
      title: "Diabetes mellitus",
      excerpt:
        "A common condition where blood sugar runs too high, which is very manageable with the right treatment and support.",
      body: [
        "Diabetes mellitus is a condition where the level of sugar in the blood becomes too high. This happens because the body either does not make enough insulin or cannot use it properly. The two main types are type 1, which usually starts in younger people, and type 2, which is more common with age and lifestyle factors.",
        "While diabetes is a lifelong condition, it can be managed very well so that most people live full, active lives. Treatment depends on the type and may include healthy eating, activity, tablets, or insulin, along with regular check-ups. With good care, the risk of long-term complications is greatly reduced.",
      ],
      symptoms: [
        "Feeling very thirsty and passing urine often",
        "Tiredness and lack of energy",
        "Unexplained weight loss",
        "Blurred vision or slow-healing cuts",
      ],
      selfCare: [
        "Eat balanced meals and watch sugary foods and drinks",
        "Stay active and keep to a healthy weight",
        "Take medicines or insulin exactly as prescribed",
        "Attend regular reviews and eye and foot checks",
      ],
      seekCare: [
        "You have ongoing thirst, weight loss, or tiredness",
        "Blood sugar levels are very high or very low",
        "You feel drowsy, confused, or unwell with a known diagnosis",
      ],
    },
    {
      slug: "type-1-diabetes",
      title: "Type 1 diabetes",
      excerpt:
        "An autoimmune condition where the body stops making insulin, which is well controlled with insulin and modern support.",
      body: [
        "Type 1 diabetes happens when the immune system stops the body from making insulin, the hormone that controls blood sugar. It often begins in childhood or young adulthood and is not caused by diet or lifestyle. Because the body can no longer produce insulin, it must be replaced every day.",
        "Living with type 1 diabetes means taking insulin and checking blood sugar regularly, which becomes part of daily routine. Modern pumps, monitors, and education make this much easier than in the past, and the diabetes team is there to support you. With good control, people with type 1 diabetes lead full and active lives.",
      ],
      symptoms: [
        "Sudden thirst and passing large amounts of urine",
        "Marked tiredness and weakness",
        "Unintended weight loss",
        "Feeling sick or having fruity-smelling breath",
      ],
      selfCare: [
        "Take insulin exactly as prescribed",
        "Check blood sugar regularly and keep records",
        "Eat balanced meals and learn how foods affect your levels",
        "Keep all appointments with your diabetes team",
      ],
      seekCare: [
        "Blood sugar is very high with vomiting or stomach pain",
        "You feel drowsy, confused, or unusually unwell",
        "You have repeated low blood sugar episodes",
      ],
    },
    {
      slug: "type-2-diabetes",
      title: "Type 2 diabetes",
      excerpt:
        "A common condition where the body struggles to use insulin, often improved with lifestyle changes and treatment.",
      body: [
        "Type 2 diabetes develops when the body cannot use insulin properly and blood sugar rises over time. It is linked to age, family history, weight, and activity levels, and often comes on gradually so symptoms can be easy to miss. It is far more common than type 1 diabetes.",
        "The encouraging news is that type 2 diabetes can often be improved, and sometimes put into remission, with healthier eating, activity, and weight loss. Many people also take tablets, and some need insulin later on. Regular check-ups help keep things on track and protect long-term health.",
      ],
      symptoms: [
        "Feeling thirsty and needing to urinate more than usual",
        "Tiredness and low energy",
        "Blurred vision",
        "Cuts or infections that are slow to heal",
      ],
      selfCare: [
        "Eat balanced meals and limit sugary and processed foods",
        "Be active most days and aim for a healthy weight",
        "Take any prescribed medicines as directed",
        "Attend regular reviews and recommended health checks",
      ],
      seekCare: [
        "You have ongoing thirst, tiredness, or blurred vision",
        "Blood sugar readings stay high despite treatment",
        "You develop foot problems, infections, or sores that do not heal",
      ],
    },
    {
      slug: "hyperthyroidism",
      title: "Hyperthyroidism",
      excerpt:
        "An overactive thyroid speeds the body up, causing symptoms that usually settle well once treatment begins.",
      body: [
        "Hyperthyroidism means the thyroid gland in the neck makes too much thyroid hormone. This speeds up many of the body's processes, which can cause a racing heart, weight loss, and feeling hot or anxious. It is more common in women and often has an autoimmune cause.",
        "Hyperthyroidism is very treatable, and symptoms usually improve once hormone levels are brought back to normal. Treatment may include medicines, radioactive iodine, or occasionally surgery, depending on the cause. With regular monitoring, most people feel much better and return to normal activities.",
      ],
      symptoms: [
        "Fast or irregular heartbeat and palpitations",
        "Weight loss despite a good appetite",
        "Feeling hot, sweaty, or restless",
        "Shaky hands, anxiety, or trouble sleeping",
      ],
      selfCare: [
        "Take medicines as prescribed and attend blood tests",
        "Rest when you need to and avoid too much caffeine",
        "Eat regular, balanced meals",
        "Tell your doctor about all symptoms you notice",
      ],
      seekCare: [
        "You have a very fast or irregular heartbeat",
        "Symptoms are severe, sudden, or rapidly worsening",
        "You develop eye problems, fever, or feel very unwell",
      ],
    },
    {
      slug: "hypothyroidism",
      title: "Hypothyroidism",
      excerpt:
        "An underactive thyroid slows the body down, causing tiredness and other symptoms that improve well with treatment.",
      body: [
        "Hypothyroidism means the thyroid gland does not make enough thyroid hormone, so many body processes slow down. This commonly causes tiredness, weight gain, feeling cold, and low mood. It is more common in women and often develops gradually over months or years.",
        "Hypothyroidism is straightforward to treat with a daily hormone tablet that replaces what the thyroid is missing. Once levels are corrected, symptoms usually improve and most people feel like themselves again. Regular blood tests help make sure the dose stays right.",
      ],
      symptoms: [
        "Tiredness and low energy",
        "Weight gain and feeling the cold",
        "Dry skin and hair",
        "Low mood, slowed thinking, or constipation",
      ],
      selfCare: [
        "Take your thyroid tablet at the same time each day",
        "Attend blood tests so the dose can be checked",
        "Eat a balanced diet and stay gently active",
        "Mention any new or ongoing symptoms to your doctor",
      ],
      seekCare: [
        "Tiredness or other symptoms persist despite treatment",
        "You feel very low, drowsy, or unusually cold",
        "You notice a fast or irregular heartbeat after a dose change",
      ],
    },
    {
      slug: "goiter",
      title: "Goiter",
      excerpt:
        "A swelling of the thyroid gland in the neck is usually harmless and often needs only monitoring rather than treatment.",
      body: [
        "A goiter is an enlargement of the thyroid gland, which sits at the front of the neck. It can appear as a smooth swelling or as lumps, and may be linked to an underactive or overactive thyroid, or to no change in hormone levels at all. In many parts of the world a lack of iodine is a common cause.",
        "Most goiters are harmless and simply need keeping an eye on, especially if they are small and not causing trouble. Treatment, when needed, depends on the cause and may involve medicines or, occasionally, surgery. A doctor can check thyroid function and arrange a scan if required.",
      ],
      symptoms: [
        "A visible swelling at the front of the neck",
        "A feeling of tightness in the throat",
        "Sometimes difficulty swallowing or breathing",
        "Symptoms of an over- or underactive thyroid in some cases",
      ],
      selfCare: [
        "Attend reviews so the swelling can be monitored",
        "Take any prescribed thyroid medicines as directed",
        "Eat a balanced diet with adequate iodine",
        "Tell your doctor if the swelling changes or grows",
      ],
      seekCare: [
        "The swelling grows quickly or feels hard or fixed",
        "You have difficulty swallowing or breathing",
        "You develop symptoms of an over- or underactive thyroid",
      ],
    },
  ],
};
