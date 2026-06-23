import type { FactCategory } from "./types";

export const allergies: FactCategory = {
  id: "allergies",
  name: "Allergies",
  description:
    "Allergic reactions and intolerances, from hay fever to food allergy, and how to manage them.",
  topics: [
    {
      slug: "allergy",
      title: "Allergy",
      excerpt:
        "An allergy is the immune system overreacting to something harmless, and most allergies can be managed well once you know the trigger.",
      body: [
        "An allergy happens when the immune system treats an ordinary substance, such as pollen, pet dander, or a particular food, as if it were a threat. This sets off symptoms like sneezing, itching, a rash, or a runny nose. Allergies are very common, often run in families, and can start at any age.",
        "Most allergies are uncomfortable rather than dangerous, and they are very treatable. The main approach is to identify and avoid the trigger where you can, and to use simple remedies such as antihistamines to ease symptoms. Support and testing are available if you are unsure what is causing your reactions.",
      ],
      symptoms: [
        "Sneezing, a runny or blocked nose, and itchy eyes",
        "Itchy skin, raised bumps, or a rash",
        "Tingling or itching in the mouth after certain foods",
        "Tummy upset such as cramps or loose stools",
      ],
      selfCare: [
        "Try to identify your trigger and reduce contact with it",
        "Use antihistamines from the pharmacy to ease symptoms",
        "Keep a simple diary of when and where symptoms appear",
        "Rinse your eyes and nose with saline after exposure",
      ],
      seekCare: [
        "Symptoms are severe, persistent, or affecting your daily life",
        "You have any tightness in the throat or trouble breathing",
        "You are unsure of the trigger and would like allergy testing",
      ],
    },
    {
      slug: "anaphylaxis",
      title: "Anaphylactic shock",
      excerpt:
        "A rare but serious whole-body allergic reaction that needs emergency treatment, and which responds quickly when help arrives in time.",
      body: [
        "Anaphylaxis is a severe allergic reaction that comes on suddenly, usually within minutes of contact with a trigger such as a food, insect sting, or medicine. It can affect breathing, blood pressure, and the whole body at once, which is why it is treated as an emergency. It is uncommon, but it is important to recognise so you can act quickly.",
        "The key treatment is adrenaline, given as an injection, which works fast and can be life-saving. Anyone known to be at risk is usually given an adrenaline auto-injector to carry. If you have had a reaction like this, an allergy clinic can help you understand your triggers and plan how to stay safe.",
      ],
      symptoms: [
        "Swelling of the lips, tongue, throat, or face",
        "Sudden difficulty breathing or wheezing",
        "Widespread hives, flushing, or intense itching",
        "Feeling faint, dizzy, or suddenly very unwell",
      ],
      selfCare: [
        "Use an adrenaline auto-injector straight away if you have one",
        "Lie down with your legs raised, or sit up if breathing is hard",
        "Carry your auto-injector and a written action plan at all times",
        "Avoid known triggers and tell others how to help in an emergency",
      ],
      seekCare: [
        "Call your local emergency number immediately if you suspect anaphylaxis",
        "Seek urgent review after any reaction, even if it settles",
        "Get an allergy assessment to confirm triggers and a treatment plan",
      ],
    },
    {
      slug: "food-allergy",
      title: "Food allergy",
      excerpt:
        "A reaction of the immune system to a particular food, which can usually be managed safely once the food is identified.",
      body: [
        "A food allergy is when the immune system reacts to a specific food, such as milk, egg, nuts, fish, or shellfish. Reactions usually start soon after eating and can range from an itchy mouth or rash to tummy upset. Many childhood food allergies, such as to milk and egg, are outgrown over time.",
        "The main treatment is to avoid the food that causes the reaction and to read labels carefully when eating out or shopping. Antihistamines help with mild symptoms, and a dietitian can make sure your diet stays balanced. If reactions have ever been severe, you may be given an adrenaline auto-injector to carry.",
      ],
      symptoms: [
        "Itching or tingling in the mouth or throat",
        "Hives, swelling, or a flushed rash",
        "Stomach cramps, nausea, or loose stools",
        "A runny nose or watery eyes after eating",
      ],
      selfCare: [
        "Avoid the food that triggers your symptoms",
        "Read ingredient labels and ask about dishes when eating out",
        "Keep antihistamines handy for mild reactions",
        "Tell family, friends, and schools about the allergy",
      ],
      seekCare: [
        "Call your local emergency number for any breathing difficulty or throat swelling",
        "Reactions are getting stronger or happening more often",
        "You need help confirming the trigger or planning a safe diet",
      ],
    },
    {
      slug: "cross-allergy",
      title: "Cross-allergy / oral allergy syndrome",
      excerpt:
        "A mild reaction where the body confuses certain raw fruits or vegetables with pollen, usually causing a brief itchy mouth.",
      body: [
        "Cross-allergy, or oral allergy syndrome, happens when proteins in some raw fruits, vegetables, or nuts look similar to pollen proteins to your immune system. People with hay fever may notice a tingly or itchy mouth after eating foods such as apple, carrot, or hazelnut. The reaction is usually mild and limited to the mouth and lips.",
        "Symptoms tend to settle within minutes and often improve when the food is cooked, as heat changes the proteins. Most people simply avoid the raw foods that bother them and enjoy them cooked instead. It is helpful to know your pollen triggers, as symptoms can be more noticeable during pollen season.",
      ],
      symptoms: [
        "Itching or tingling of the lips, mouth, or throat",
        "Mild swelling of the lips after eating raw fruit or veg",
        "Symptoms that come on quickly and fade soon after",
        "More noticeable reactions during your pollen season",
      ],
      selfCare: [
        "Avoid the raw foods that trigger your symptoms",
        "Try the same foods cooked, peeled, or tinned instead",
        "Use antihistamines if mild symptoms are bothersome",
        "Note which foods and which season affect you most",
      ],
      seekCare: [
        "Reactions spread beyond the mouth or include hives or swelling",
        "You ever have throat tightness or trouble breathing",
        "Symptoms are frequent and you would like allergy testing",
      ],
    },
    {
      slug: "hay-fever",
      title: "Pollen allergy / hay fever",
      excerpt:
        "A common seasonal allergy to pollen that causes a runny nose and itchy eyes, and which settles well with simple treatment.",
      body: [
        "Hay fever is an allergic reaction to pollen from grasses, trees, or weeds, and it tends to follow the seasons. When pollen lands in the nose and eyes, the immune system reacts and causes sneezing, congestion, and itching. It is very common and often runs in families alongside asthma or eczema.",
        "Hay fever is not harmful, and symptoms usually ease as the pollen season passes. Day to day, the aim is to reduce contact with pollen and to use simple treatments such as antihistamines and steroid nasal sprays. Starting treatment a little before your usual season can keep symptoms much milder.",
      ],
      symptoms: [
        "Frequent sneezing and a runny or blocked nose",
        "Itchy, red, or watery eyes",
        "An itchy throat, nose, or ears",
        "Tiredness and feeling generally run down",
      ],
      selfCare: [
        "Use antihistamines or a steroid nasal spray during your season",
        "Keep windows closed and check the daily pollen forecast",
        "Rinse your eyes and shower after being outdoors",
        "Wear wraparound sunglasses to protect your eyes",
      ],
      seekCare: [
        "Symptoms are severe or not controlled by pharmacy treatments",
        "You develop wheezing, breathlessness, or a tight chest",
        "Symptoms last well beyond the usual pollen season",
      ],
    },
  ],
};
