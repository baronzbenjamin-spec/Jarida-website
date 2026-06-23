import type { FactCategory } from "./types";

export const stomachIntestines: FactCategory = {
  id: "stomach-intestines",
  name: "Stomach & intestines",
  description:
    "Digestive complaints, from heartburn to stomach bugs, and how to settle them.",
  topics: [
    {
      slug: "fecal-incontinence",
      title: "Fecal incontinence",
      excerpt:
        "Difficulty controlling when you pass stool is more common than people think, and in most cases it can be improved with the right help.",
      body: [
        "Fecal incontinence means leaking stool or struggling to hold on until you reach a toilet. It happens when the muscles or nerves around the back passage are weakened, often after childbirth, surgery, or with age, or when very loose or very hard stool is hard to control. It is far more common than most people realise, and it is not something you have caused.",
        "Although it can feel embarrassing, this is a medical problem with practical solutions, and many people improve a great deal once they get support. Treatment depends on the cause and may include changes to diet, pelvic floor exercises, or help from a continence specialist.",
      ],
      symptoms: [
        "Leaking stool before reaching the toilet",
        "Difficulty controlling wind or loose stool",
        "Needing to rush to the toilet urgently",
        "Soiling that happens without you noticing",
      ],
      selfCare: [
        "Eat regular meals with enough fibre to keep stool soft and formed",
        "Practise pelvic floor exercises to strengthen the muscles",
        "Keep a simple diary of foods that make things worse",
        "Use a barrier cream to protect the skin around the back passage",
      ],
      seekCare: [
        "The leaking is ongoing, getting worse, or affecting your daily life",
        "It starts suddenly or comes with numbness or weakness in the legs",
        "There is bleeding, unexplained weight loss, or a change in your usual bowel pattern",
      ],
    },
    {
      slug: "appendicitis",
      title: "Appendicitis",
      excerpt:
        "Inflammation of the appendix that causes worsening tummy pain and usually needs prompt treatment, often a straightforward operation.",
      body: [
        "Appendicitis is inflammation of the appendix, a small pouch attached to the start of the large intestine. The pain often begins around the navel and then moves to the lower right side of the abdomen, becoming steadily worse over a number of hours. It can affect anyone but is most common in children, teenagers, and young adults.",
        "Appendicitis is a condition that needs to be assessed quickly, because an inflamed appendix can burst if it is left untreated. The usual treatment is an operation to remove the appendix, and most people recover well afterwards.",
      ],
      symptoms: [
        "Pain that starts near the navel and moves to the lower right abdomen",
        "Pain that gets worse with movement, coughing, or pressing",
        "Loss of appetite, nausea, or vomiting",
        "A mild fever that may rise as the day goes on",
      ],
      selfCare: [
        "Do not eat or drink much in case an operation is needed",
        "Avoid taking laxatives or strong painkillers that could mask the picture",
        "Rest and keep still while you arrange to be seen",
        "Have someone stay with you who can help you get to care",
      ],
      seekCare: [
        "Seek urgent care for worsening pain that moves to the lower right abdomen with fever or vomiting",
        "The abdomen becomes hard, very tender, or painful to touch all over",
        "You feel very unwell, confused, or the pain suddenly eases then returns worse",
      ],
    },
    {
      slug: "celiac-disease",
      title: "Celiac disease",
      excerpt:
        "A lifelong reaction to gluten that can be managed well once it is diagnosed and gluten is removed from the diet.",
      body: [
        "Celiac disease is an autoimmune condition where eating gluten, a protein found in wheat, rye, and barley, makes the immune system damage the lining of the small intestine. This makes it harder to absorb nutrients from food and can cause tummy symptoms, tiredness, and other problems. It can appear at any age and often runs in families.",
        "There is no cure, but the condition is managed very effectively by following a strict gluten-free diet for life, which allows the gut lining to heal. A diagnosis is confirmed with a blood test and usually a sample taken from the gut, so it is important not to remove gluten before being tested.",
      ],
      symptoms: [
        "Bloating, wind, diarrhoea, or tummy pain after eating gluten",
        "Tiredness and a feeling of being run down",
        "Unexplained weight loss or, in children, poor growth",
        "Anaemia or other signs of poor nutrient absorption",
      ],
      selfCare: [
        "Follow a strict gluten-free diet once you have been diagnosed",
        "Read food labels carefully and watch for hidden sources of gluten",
        "Take any recommended vitamin or mineral supplements",
        "Ask a dietitian for help in planning balanced meals",
      ],
      seekCare: [
        "You have ongoing tummy symptoms, tiredness, or weight loss without a clear cause",
        "Symptoms continue despite avoiding gluten",
        "You want testing before changing your diet, especially if celiac disease runs in the family",
      ],
    },
    {
      slug: "diarrhea",
      title: "Diarrhea",
      excerpt:
        "Loose or frequent stools are usually caused by a passing infection and settle on their own within a few days.",
      body: [
        "Diarrhoea means passing loose or watery stools more often than usual. It is most commonly caused by a viral or bacterial infection of the gut, but it can also follow certain foods, medicines, or stress. In most cases it is the body's way of clearing something out and does not last long.",
        "The main risk with diarrhoea is losing too much fluid, so the most important thing is to keep drinking. It usually settles by itself within a few days, and the focus is on staying hydrated and comfortable while your gut recovers.",
      ],
      symptoms: [
        "Loose or watery stools, often more frequently than normal",
        "Tummy cramps or a sense of urgency",
        "Nausea or a mild fever",
        "Feeling tired or thirsty",
      ],
      selfCare: [
        "Drink plenty of fluids in small, frequent sips",
        "Eat plain, easy foods when you feel able to",
        "Wash your hands well to avoid passing it on",
        "Rest and let your body recover",
      ],
      seekCare: [
        "It lasts longer than about a week or keeps coming back",
        "There is blood in the stool, a high fever, or severe tummy pain",
        "You show signs of dehydration, such as very little urine, dizziness, or a dry mouth",
      ],
    },
    {
      slug: "constipation",
      title: "Constipation",
      excerpt:
        "Difficulty passing stool is very common, rarely serious, and usually improves with small changes to diet and routine.",
      body: [
        "Constipation means passing stools less often than usual, or finding them hard, dry, and difficult to push out. It often happens when we do not eat enough fibre, drink too little, or are less active than normal, and it can also be triggered by travel, stress, or certain medicines. It is uncomfortable but very rarely a sign of anything serious.",
        "In most cases constipation settles with simple changes to what you eat and drink and how much you move. If it persists, a pharmacist can suggest a gentle laxative, and there is plenty that can be done to get things moving comfortably again.",
      ],
      symptoms: [
        "Passing stool less often than usual for you",
        "Hard, dry, or lumpy stools that are difficult to pass",
        "Straining or a feeling that the bowel is not fully empty",
        "Tummy ache or bloating",
      ],
      selfCare: [
        "Eat more fibre, such as fruit, vegetables, and wholegrains",
        "Drink plenty of fluids through the day",
        "Stay active with regular walking or gentle exercise",
        "Do not ignore the urge to go when it comes",
      ],
      seekCare: [
        "It lasts more than a few weeks despite self-care",
        "There is blood in the stool, unexplained weight loss, or ongoing tummy pain",
        "Constipation alternates with diarrhoea or your usual bowel pattern changes",
      ],
    },
    {
      slug: "gallstones",
      title: "Gallstones",
      excerpt:
        "Small stones in the gallbladder are common and often cause no trouble at all, but they can sometimes bring on bouts of pain.",
      body: [
        "Gallstones are small, hard lumps that form in the gallbladder, a little pouch under the liver that stores bile. They are very common and many people have them without ever knowing. Problems arise only when a stone blocks the flow of bile, which can cause pain, usually in the upper right or central tummy, often after a fatty meal.",
        "If gallstones are not causing symptoms, they usually need no treatment at all. When they do cause repeated pain, the most reliable solution is a planned operation to remove the gallbladder, after which people manage perfectly well.",
      ],
      symptoms: [
        "Sudden, gripping pain in the upper right or central tummy",
        "Pain that may spread to the back or right shoulder",
        "Nausea or vomiting, often after fatty food",
        "Bloating or indigestion",
      ],
      selfCare: [
        "Eat a balanced diet and try to reduce very fatty foods",
        "Maintain a healthy weight, losing extra weight slowly if needed",
        "Take paracetamol or ibuprofen for mild discomfort if needed",
        "Note which foods seem to trigger attacks",
      ],
      seekCare: [
        "Pain lasts more than a few hours or keeps returning",
        "You develop yellowing of the skin or eyes, dark urine, or pale stools",
        "Pain comes with a high fever, shivering, or you feel very unwell",
      ],
    },
    {
      slug: "heartburn",
      title: "Heartburn",
      excerpt:
        "A burning feeling behind the breastbone caused by stomach acid rising up, usually eased with simple measures and rarely serious.",
      body: [
        "Heartburn is a burning sensation in the chest, behind the breastbone, that happens when acid from the stomach rises back up into the gullet. It is often brought on by large or rich meals, lying down soon after eating, being overweight, or pregnancy. It is very common and, on its own, is not dangerous.",
        "Most heartburn settles with changes to eating habits and over-the-counter remedies from a pharmacist. If it keeps coming back, treatment to reduce stomach acid works well, and a doctor can check there is nothing more to it.",
      ],
      symptoms: [
        "Burning feeling in the chest, often after eating",
        "An acidic or bitter taste in the mouth",
        "Symptoms that are worse when lying down or bending over",
        "A feeling of food coming back up",
      ],
      selfCare: [
        "Eat smaller meals and avoid eating late at night",
        "Cut down on foods and drinks that trigger it, such as fatty or spicy food, coffee, and alcohol",
        "Raise the head of the bed and avoid lying down soon after eating",
        "Ask a pharmacist about antacids for occasional relief",
      ],
      seekCare: [
        "Heartburn is frequent, persistent, or not helped by pharmacy remedies",
        "You have difficulty or pain when swallowing, or food sticks",
        "There is unexplained weight loss, vomiting, or black or bloody stools",
      ],
    },
    {
      slug: "hemorrhoids",
      title: "Hemorrhoids",
      excerpt:
        "Swollen blood vessels around the back passage are very common, often harmless, and usually settle with simple self-care.",
      body: [
        "Haemorrhoids, sometimes called piles, are swollen blood vessels in and around the back passage. They are often caused by straining to pass hard stools, constipation, pregnancy, or sitting for long periods. They are extremely common and, although they can be uncomfortable or alarming when they bleed, they are usually harmless.",
        "Most haemorrhoids improve within a week or so with self-care aimed at softer stools and less straining. A pharmacist can suggest soothing creams, and if they keep returning there are simple treatments a doctor can offer.",
      ],
      symptoms: [
        "Bright red blood on the paper or in the toilet after passing stool",
        "Itching, soreness, or swelling around the back passage",
        "A small lump that you can feel near the opening",
        "A feeling of fullness or discomfort when sitting",
      ],
      selfCare: [
        "Eat more fibre and drink plenty of fluids to keep stool soft",
        "Avoid straining and do not sit on the toilet for long periods",
        "Keep the area clean and pat dry gently after going",
        "Ask a pharmacist about soothing creams or ointments",
      ],
      seekCare: [
        "Bleeding continues, is heavy, or the blood is dark rather than bright red",
        "Symptoms do not improve after a week of self-care or keep returning",
        "There is severe pain, a hard painful lump, unexplained weight loss, or a change in bowel habit",
      ],
    },
    {
      slug: "ibs",
      title: "IBS / irritable bowel syndrome",
      excerpt:
        "A common, long-term gut condition that causes tummy pain and changeable bowels but does not damage the body and can be managed well.",
      body: [
        "Irritable bowel syndrome is a common condition that affects how the gut works rather than its structure. It causes tummy pain, bloating, and bouts of diarrhoea or constipation, and symptoms often flare with stress or after certain foods. It can be uncomfortable and frustrating, but it does not harm the bowel or shorten life.",
        "There is no single cure, but most people learn to control their symptoms over time through changes to diet, stress, and routine. Support is available, and a doctor can help rule out other causes and suggest treatments that ease the worst symptoms.",
      ],
      symptoms: [
        "Tummy pain or cramps that often ease after going to the toilet",
        "Bloating and excess wind",
        "Diarrhoea, constipation, or a mix of the two",
        "A feeling that the bowel has not fully emptied",
      ],
      selfCare: [
        "Eat regular meals and avoid foods that seem to trigger symptoms",
        "Find ways to manage stress, such as exercise or relaxation",
        "Stay active and drink enough fluids",
        "Keep a food and symptom diary to spot patterns",
      ],
      seekCare: [
        "Symptoms are new, especially if you are over 50, or they change suddenly",
        "There is blood in the stool, unexplained weight loss, or a fever",
        "Symptoms wake you at night or there is a family history of bowel disease",
      ],
    },
    {
      slug: "nausea-and-vomiting",
      title: "Nausea and vomiting",
      excerpt:
        "Feeling sick or being sick is usually short-lived and caused by a passing bug, settling on its own with rest and fluids.",
      body: [
        "Nausea is the unpleasant feeling that you might be sick, and vomiting is when the stomach empties itself. They are most often caused by a tummy bug, but can also come from food that disagreed with you, motion, pregnancy, migraine, or some medicines. In most cases they are unpleasant but short-lived.",
        "The main aim is to stay hydrated while it passes, because being sick can leave you short of fluids. Most episodes settle within a day or two on their own, and gentle eating and drinking help you recover.",
      ],
      symptoms: [
        "A queasy or churning feeling in the stomach",
        "Bringing up stomach contents",
        "Loss of appetite",
        "Feeling tired, sweaty, or lightheaded",
      ],
      selfCare: [
        "Sip small amounts of fluid often to avoid dehydration",
        "Rest and return to plain, light foods when you feel ready",
        "Get plenty of fresh air and avoid strong smells",
        "Avoid fatty, spicy, or very rich foods for a while",
      ],
      seekCare: [
        "Vomiting lasts more than a day or two or you cannot keep fluids down",
        "There is blood in the vomit, severe tummy pain, or a high fever",
        "You show signs of dehydration, a stiff neck, or a severe headache",
      ],
    },
    {
      slug: "stomach-pain",
      title: "Stomach pain / abdominal pain",
      excerpt:
        "Tummy pain is very common, usually caused by something minor like trapped wind or a bug, and most often passes on its own.",
      body: [
        "Stomach or abdominal pain can come from many places, including the gut, the muscles of the tummy wall, or nearby organs. Most pain is caused by everyday things such as trapped wind, indigestion, constipation, or a passing tummy bug. Where the pain is and what brings it on often gives a clue to the cause.",
        "The great majority of tummy aches settle by themselves within a short time with rest and simple measures. Knowing the warning signs helps you decide when a pain is more than a passing one and needs a doctor to look at it.",
      ],
      symptoms: [
        "Cramping, gnawing, or dull ache in the tummy",
        "Bloating or trapped wind",
        "Pain linked to eating or to going to the toilet",
        "Sometimes nausea or a change in bowel habit",
      ],
      selfCare: [
        "Rest and use a covered hot water bottle for comfort",
        "Eat light, plain foods and drink plenty of fluids",
        "Take paracetamol for pain if needed",
        "Avoid foods that seem to upset your stomach",
      ],
      seekCare: [
        "The pain is severe, sudden, or steadily getting worse",
        "There is blood in vomit or stool, a high fever, or you feel very unwell",
        "The pain lasts more than a few days, or comes with unexplained weight loss",
      ],
    },
    {
      slug: "lactose-intolerance",
      title: "Lactose intolerance",
      excerpt:
        "Difficulty digesting the sugar in milk is common and harmless, and symptoms ease easily once you adjust what you eat.",
      body: [
        "Lactose intolerance happens when the gut does not make enough of the enzyme needed to break down lactose, the natural sugar in milk and dairy. The undigested sugar then causes bloating, wind, and loose stools. It is very common, often develops in adulthood, and varies a lot from person to person in how much dairy can be tolerated.",
        "It is not an allergy and does not damage the body, so it is mostly about comfort and finding what suits you. Many people manage well by reducing dairy or choosing lactose-free products, and a dietitian can help keep the diet balanced.",
      ],
      symptoms: [
        "Bloating and excess wind after dairy foods",
        "Tummy cramps or rumbling",
        "Loose stools or diarrhoea",
        "Nausea after milk, cream, or soft cheese",
      ],
      selfCare: [
        "Cut down on dairy or switch to lactose-free milk and products",
        "Check food labels for milk and lactose",
        "Try small amounts to find how much you can tolerate",
        "Make sure you still get enough calcium from other foods",
      ],
      seekCare: [
        "You are unsure whether dairy is really the cause of your symptoms",
        "Symptoms continue despite avoiding lactose",
        "There is weight loss, blood in the stool, or severe ongoing tummy pain",
      ],
    },
    {
      slug: "gastroenteritis",
      title: "Gastroenteritis / stomach flu",
      excerpt:
        "A short-lived infection of the gut that causes diarrhoea and vomiting and almost always clears up on its own within a few days.",
      body: [
        "Gastroenteritis is inflammation of the stomach and intestines, usually caused by a virus and sometimes by bacteria. It spreads easily from person to person and through contaminated food or water, which is why it often passes through households. It brings on diarrhoea and vomiting that come on quickly but rarely last long.",
        "There is no specific cure because the body clears the infection itself, so treatment is about staying hydrated and comfortable. Most people feel much better within a few days, and good hand washing helps stop it spreading to others.",
      ],
      symptoms: [
        "Diarrhoea and vomiting",
        "Tummy cramps",
        "A mild fever, aches, or headache",
        "Loss of appetite and tiredness",
      ],
      selfCare: [
        "Drink plenty of fluids in small, frequent sips",
        "Rest and return to plain foods when you feel ready",
        "Wash your hands well and avoid preparing food for others",
        "Stay off work or school until 48 hours after symptoms stop",
      ],
      seekCare: [
        "Symptoms last more than a few days or you cannot keep any fluids down",
        "There is blood in the stool or vomit, or a high fever",
        "You show signs of dehydration, such as very little urine, dizziness, or a dry mouth",
      ],
    },
    {
      slug: "gastritis",
      title: "Gastritis / dyspepsia",
      excerpt:
        "Irritation of the stomach lining that causes upper tummy discomfort and usually settles with simple changes and pharmacy remedies.",
      body: [
        "Gastritis means the lining of the stomach has become inflamed or irritated, while dyspepsia is the discomfort and indigestion this can cause. It is often linked to a common stomach bacterium called Helicobacter pylori, to anti-inflammatory painkillers, or to alcohol and stress. It usually causes burning or gnawing discomfort in the upper tummy.",
        "In most cases it improves once the cause is addressed and the stomach lining is given a chance to recover. A pharmacist can suggest remedies to reduce acid, and a doctor can test for and treat the bacterium if needed.",
      ],
      symptoms: [
        "Burning or gnawing pain in the upper tummy",
        "Feeling full quickly or bloated after eating",
        "Nausea or belching",
        "Discomfort that may improve or worsen with food",
      ],
      selfCare: [
        "Eat smaller, regular meals and avoid foods that trigger it",
        "Cut down on alcohol, coffee, and spicy or fatty foods",
        "Avoid anti-inflammatory painkillers if they upset your stomach",
        "Ask a pharmacist about antacids or acid-reducing remedies",
      ],
      seekCare: [
        "Symptoms persist despite self-care or keep coming back",
        "There is difficulty swallowing, vomiting, or unexplained weight loss",
        "You pass black, tarry stools or vomit that looks like coffee grounds",
      ],
    },
    {
      slug: "stomach-ulcer",
      title: "Stomach ulcer / peptic ulcer",
      excerpt:
        "A sore in the lining of the stomach or gut that causes burning pain but heals well once the cause is treated.",
      body: [
        "A peptic ulcer is a sore that forms in the lining of the stomach or the first part of the small intestine. Most are caused by a common bacterium called Helicobacter pylori or by long-term use of anti-inflammatory painkillers, which weaken the protective lining. The main symptom is a burning or gnawing pain in the upper tummy.",
        "Ulcers heal reliably once the underlying cause is dealt with, usually with medicine to reduce stomach acid and, if needed, antibiotics to clear the bacterium. Most people make a full recovery, so it is well worth getting the pain checked.",
      ],
      symptoms: [
        "Burning or gnawing pain in the upper tummy",
        "Pain that may ease or worsen with eating",
        "Bloating, belching, or feeling sick",
        "Loss of appetite",
      ],
      selfCare: [
        "Avoid anti-inflammatory painkillers and use paracetamol instead if needed",
        "Cut down on alcohol and stop smoking",
        "Eat smaller, regular meals and avoid foods that worsen symptoms",
        "Ask a pharmacist about acid-reducing remedies while you arrange to be seen",
      ],
      seekCare: [
        "You have ongoing upper tummy pain that needs assessment and testing",
        "You pass black, tarry stools or vomit blood or material like coffee grounds",
        "There is sudden severe tummy pain, faintness, or unexplained weight loss",
      ],
    },
    {
      slug: "food-poisoning",
      title: "Food poisoning",
      excerpt:
        "An upset stomach from contaminated food that usually clears on its own within a few days with rest and fluids.",
      body: [
        "Food poisoning happens when you eat food contaminated with bacteria, viruses, or their toxins. Symptoms such as nausea, vomiting, and diarrhoea often come on within hours to a couple of days of eating the affected food. It is unpleasant but, for most healthy people, short-lived.",
        "The body usually clears it without specific treatment, so the focus is on replacing lost fluids and resting. Most people recover fully within a few days, and careful food handling and hand washing help prevent it happening again.",
      ],
      symptoms: [
        "Nausea and vomiting",
        "Diarrhoea, sometimes with cramps",
        "Tummy pain",
        "A mild fever, aches, or tiredness",
      ],
      selfCare: [
        "Drink plenty of fluids in small, frequent sips",
        "Rest and eat plain, light foods when you feel able",
        "Wash your hands well and avoid preparing food for others",
        "Avoid alcohol, caffeine, and fatty foods until you recover",
      ],
      seekCare: [
        "Symptoms last more than a few days or are very severe",
        "There is blood in the stool or vomit, or a high fever",
        "You show signs of dehydration, or you are pregnant, very young, or elderly",
      ],
    },
    {
      slug: "salmonella",
      title: "Salmonella",
      excerpt:
        "A bacterial gut infection from contaminated food that causes diarrhoea and fever but usually clears on its own with rest and fluids.",
      body: [
        "Salmonella is a type of bacteria that causes a gut infection, usually caught from undercooked eggs, poultry, or other contaminated food and water. It brings on diarrhoea, tummy cramps, and fever, often within a day or two of being exposed. It can also spread from contact with some animals, so hand washing matters.",
        "Most healthy people recover without antibiotics within about a week, and treatment is mainly about staying hydrated. The infection clears as the body fights it off, but it is worth getting checked if you are very unwell or in a higher-risk group.",
      ],
      symptoms: [
        "Diarrhoea, sometimes with blood",
        "Tummy cramps and pain",
        "Fever and chills",
        "Nausea, vomiting, or headache",
      ],
      selfCare: [
        "Drink plenty of fluids in small, frequent sips",
        "Rest and eat plain foods when you feel able",
        "Wash your hands well and avoid preparing food for others",
        "Stay off work or school until 48 hours after symptoms stop",
      ],
      seekCare: [
        "Symptoms last more than about a week or keep getting worse",
        "There is a lot of blood in the stool, a high fever, or severe tummy pain",
        "You show signs of dehydration, or you are pregnant, very young, elderly, or have a weakened immune system",
      ],
    },
    {
      slug: "pinworm",
      title: "Pinworm",
      excerpt:
        "A common and harmless gut worm, especially in children, that causes an itchy bottom and is easily treated.",
      body: [
        "Pinworms are tiny, thread-like worms that live in the gut and lay their eggs around the back passage, usually at night. They are very common, particularly in children, and spread easily when eggs are picked up on the hands and swallowed. The main sign is itching around the bottom, which is often worse at night.",
        "Although the thought of worms can be unsettling, the infection is harmless and very easy to treat. A pharmacist can provide a simple medicine, usually taken by the whole household, along with careful hygiene to clear the eggs.",
      ],
      symptoms: [
        "Itching around the bottom, often worse at night",
        "Disturbed sleep or restlessness in children",
        "Tiny white thread-like worms seen around the bottom or in the stool",
        "Sometimes mild tummy discomfort",
      ],
      selfCare: [
        "Ask a pharmacist about treatment, usually for everyone in the household",
        "Wash hands and scrub under nails, especially after the toilet and before eating",
        "Wash bedding, nightclothes, and towels at a hot temperature",
        "Keep nails short and discourage scratching or nail biting",
      ],
      seekCare: [
        "Itching or symptoms continue after treatment",
        "You are pregnant, breastfeeding, or treating a very young child",
        "There is tummy pain, weight loss, or you are unsure what is causing the symptoms",
      ],
    },
    {
      slug: "norovirus",
      title: "Norovirus / winter vomiting disease",
      excerpt:
        "A very contagious tummy bug that causes sudden vomiting and diarrhoea but usually clears on its own within a couple of days.",
      body: [
        "Norovirus is a highly contagious virus that causes sudden vomiting and diarrhoea, and is sometimes called the winter vomiting disease because it is common in colder months. It spreads very easily from person to person and through contaminated food, surfaces, and water, which is why outbreaks often sweep through schools, hospitals, and households. Symptoms tend to start abruptly.",
        "There is no specific treatment because the body clears the virus by itself, so the aim is to rest and keep up your fluids. Most people feel better within two to three days, and staying away from others helps stop it spreading.",
      ],
      symptoms: [
        "Sudden nausea and vomiting",
        "Watery diarrhoea",
        "Tummy cramps",
        "Sometimes a mild fever, aches, or headache",
      ],
      selfCare: [
        "Drink plenty of fluids in small, frequent sips",
        "Rest and return to plain foods when you feel able",
        "Wash your hands well and avoid preparing food for others",
        "Stay at home until 48 hours after symptoms stop",
      ],
      seekCare: [
        "Symptoms last more than a few days or you cannot keep fluids down",
        "There is blood in the stool, severe tummy pain, or a high fever",
        "You show signs of dehydration, or you are caring for someone very young, elderly, or frail",
      ],
    },
  ],
};
