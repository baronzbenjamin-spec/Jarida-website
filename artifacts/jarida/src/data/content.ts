import calmMorning from "@assets/stock_images/calm_morning_routine.jpg";
import restfulBedroom from "@assets/stock_images/restful_bedroom.jpg";
import healthyFood from "@assets/stock_images/healthy_food_bowl.jpg";
import outdoorWalking from "@assets/stock_images/outdoor_walking.jpg";
import calmBreathing from "@assets/stock_images/calm_breathing.jpg";
import parentChild from "@assets/stock_images/parent_caring_child.jpg";
import doctorCheck from "@assets/stock_images/doctor_health_check.jpg";
import cozyTea from "@assets/stock_images/cozy_tea_season.jpg";
import heartExercise from "@assets/stock_images/heart_health_exercise.jpg";

export type FactTopic = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  symptoms: string[];
  selfCare: string[];
  seekCare: string[];
};

export type FactCategory = {
  id: string;
  name: string;
  description: string;
  topics: FactTopic[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  body: string[];
};

export const FACT_CATEGORIES: FactCategory[] = [
  {
    id: "colds-airways",
    name: "Colds & airways",
    description:
      "Everyday infections of the nose, throat, and chest, and how to ease them at home.",
    topics: [
      {
        slug: "common-cold",
        title: "Common cold",
        excerpt:
          "A mild viral infection of the nose and throat that usually clears on its own within a week or two.",
        body: [
          "The common cold is caused by viruses that inflame the lining of the nose and throat. Most adults catch a cold a few times a year, and children even more often. It spreads through tiny droplets in the air and on surfaces, which is why hand washing makes such a difference.",
          "There is no cure for a cold, but the body clears the virus by itself. Treatment is about staying comfortable while you recover and giving your immune system time to do its work.",
        ],
        symptoms: [
          "Blocked or runny nose and sneezing",
          "Sore or scratchy throat",
          "Mild cough and tiredness",
          "Sometimes a low fever, more often in children",
        ],
        selfCare: [
          "Rest and drink plenty of fluids",
          "Use a saline spray or steam to ease a blocked nose",
          "Take paracetamol or ibuprofen for aches if needed",
        ],
        seekCare: [
          "Symptoms last longer than about ten days or keep getting worse",
          "You have a high fever, chest pain, or trouble breathing",
          "You have a long-term lung or heart condition that is affected",
        ],
      },
      {
        slug: "seasonal-flu",
        title: "Seasonal flu",
        excerpt:
          "A respiratory infection that tends to come on quickly with fever, aches, and exhaustion.",
        body: [
          "Influenza, or flu, is caused by influenza viruses that circulate mainly in the colder months. Unlike a cold, the flu often arrives suddenly and can leave you feeling drained for a week or more.",
          "Most healthy people recover at home with rest. A yearly vaccine is the best way to lower your risk, especially if you are older or have a long-term health condition.",
        ],
        symptoms: [
          "Sudden fever and chills",
          "Aching muscles and headache",
          "Dry cough and sore throat",
          "Marked tiredness and weakness",
        ],
        selfCare: [
          "Rest, keep warm, and drink fluids regularly",
          "Use paracetamol or ibuprofen to bring down fever and ease aches",
          "Stay home to recover and avoid spreading it",
        ],
        seekCare: [
          "Breathing becomes difficult or chest pain develops",
          "Symptoms improve and then suddenly return worse",
          "You are pregnant, older, or have a condition that raises your risk",
        ],
      },
      {
        slug: "sore-throat",
        title: "Sore throat",
        excerpt:
          "Throat pain that is usually viral and settles within a few days without antibiotics.",
        body: [
          "A sore throat is most often part of a cold or other viral infection. The throat feels raw or scratchy and swallowing can be uncomfortable. Antibiotics do not help viral sore throats and are only needed for certain bacterial infections.",
          "Most sore throats ease on their own. Soothing remedies and pain relief help you stay comfortable while it heals.",
        ],
        symptoms: [
          "Pain or scratchiness when swallowing",
          "Red or swollen throat",
          "Mild fever and swollen neck glands",
          "Hoarse voice",
        ],
        selfCare: [
          "Drink warm or cool fluids and stay hydrated",
          "Try lozenges or a salt-water gargle for adults",
          "Use paracetamol or ibuprofen for pain",
        ],
        seekCare: [
          "Severe pain, drooling, or difficulty swallowing or breathing",
          "Symptoms last more than about a week",
          "A high fever with white spots on the tonsils",
        ],
      },
      {
        slug: "sinus-infection",
        title: "Sinus infection",
        excerpt:
          "Inflammation of the sinuses that often follows a cold and brings facial pressure.",
        body: [
          "Sinusitis is swelling of the air-filled spaces behind the cheeks and forehead. It usually develops after a cold, when mucus builds up and the sinuses cannot drain well. Most cases are viral and improve within two to three weeks.",
          "Self-care to keep the sinuses draining is the mainstay of treatment. Antibiotics are only useful in the smaller number of cases that are bacterial and persistent.",
        ],
        symptoms: [
          "Pressure or pain around the cheeks, eyes, or forehead",
          "Thick or discolored nasal discharge",
          "Reduced sense of smell",
          "A blocked nose and headache",
        ],
        selfCare: [
          "Use saline rinses or sprays to clear the nose",
          "Apply a warm compress over the face",
          "Stay hydrated and rest",
        ],
        seekCare: [
          "Symptoms last beyond about three weeks or keep returning",
          "Severe pain, swelling around the eye, or a high fever",
          "Vision changes or a stiff neck",
        ],
      },
    ],
  },
  {
    id: "skin",
    name: "Skin",
    description:
      "Common skin complaints, what tends to trigger them, and how to care for your skin.",
    topics: [
      {
        slug: "eczema",
        title: "Eczema",
        excerpt:
          "A common condition that makes skin dry, itchy, and inflamed, often in flare-ups.",
        body: [
          "Eczema, also called atopic dermatitis, makes the skin barrier less able to hold moisture. The skin becomes dry, itchy, and easily irritated, and symptoms often come and go in flares. It is common in children but can affect any age.",
          "Eczema cannot be cured, but most people manage it well by moisturizing regularly and avoiding triggers. Flares are usually treated with creams prescribed by a clinician.",
        ],
        symptoms: [
          "Dry, scaly, or cracked skin",
          "Persistent itching, sometimes worse at night",
          "Red or darkened inflamed patches",
          "Commonly affects the hands, face, and skin folds",
        ],
        selfCare: [
          "Moisturize generously and often, even when skin is clear",
          "Use gentle, fragrance-free washes and lukewarm water",
          "Identify and avoid personal triggers such as certain fabrics or soaps",
        ],
        seekCare: [
          "Skin becomes weepy, crusted, or shows signs of infection",
          "Itching disrupts sleep or daily life",
          "Flares are not controlled by usual moisturizing",
        ],
      },
      {
        slug: "acne",
        title: "Acne",
        excerpt:
          "Spots and blocked pores that are very common in teenagers but can affect adults too.",
        body: [
          "Acne happens when pores become blocked with oil and dead skin cells, sometimes leading to inflammation and spots. It is driven largely by hormones, which is why it is so common during the teenage years.",
          "Mild acne often responds to a consistent skincare routine and over-the-counter products. More stubborn or scarring acne can be treated effectively with prescribed options.",
        ],
        symptoms: [
          "Blackheads and whiteheads",
          "Red or tender spots and pustules",
          "Oily skin",
          "Most often on the face, back, and chest",
        ],
        selfCare: [
          "Wash affected skin gently twice a day, avoiding harsh scrubbing",
          "Avoid squeezing spots, which can cause scarring",
          "Try products containing benzoyl peroxide for mild acne",
        ],
        seekCare: [
          "Acne is severe, painful, or leaving scars",
          "Over-the-counter treatments have not helped after a couple of months",
          "Acne is affecting your confidence or mood",
        ],
      },
      {
        slug: "hives",
        title: "Hives",
        excerpt:
          "A raised, itchy rash that can appear suddenly and usually fades within hours to days.",
        body: [
          "Hives, or urticaria, are raised itchy welts that develop when the skin releases histamine. They can be triggered by an allergic reaction, an infection, heat, or stress, and sometimes no cause is found.",
          "Most hives are short-lived and settle on their own. Antihistamines help ease the itch while they fade.",
        ],
        symptoms: [
          "Raised welts that may be pink, red, or skin-colored",
          "Intense itching",
          "Welts that move around and change shape",
          "Sometimes mild swelling of the lips or eyelids",
        ],
        selfCare: [
          "Take a non-drowsy antihistamine to relieve itching",
          "Avoid known triggers and keep cool",
          "Wear loose, comfortable clothing",
        ],
        seekCare: [
          "Swelling of the lips, tongue, or throat, or any trouble breathing — seek emergency care",
          "Hives last longer than about six weeks",
          "Hives keep returning without an obvious cause",
        ],
      },
      {
        slug: "cold-sores",
        title: "Cold sores",
        excerpt:
          "Small blisters around the mouth caused by a common virus that can flare from time to time.",
        body: [
          "Cold sores are caused by the herpes simplex virus, which most people carry without problems. The virus can reactivate from time to time, often when you are run down, stressed, or exposed to strong sun.",
          "Cold sores clear by themselves within a week or two. Antiviral creams can shorten an outbreak if started early.",
        ],
        symptoms: [
          "A tingling or burning feeling before the sore appears",
          "Small fluid-filled blisters, usually on the lips",
          "Blisters that burst and crust over",
          "Outbreaks that recur in the same area",
        ],
        selfCare: [
          "Apply antiviral cream at the first tingle",
          "Avoid touching the sore and wash hands carefully",
          "Use lip balm with sun protection to prevent flares",
        ],
        seekCare: [
          "Sores are severe, widespread, or very slow to heal",
          "You have frequent outbreaks",
          "You have a weakened immune system",
        ],
      },
    ],
  },
  {
    id: "stomach",
    name: "Stomach & digestion",
    description:
      "Tummy upsets and digestive complaints, with practical steps to feel better.",
    topics: [
      {
        slug: "stomach-bug",
        title: "Stomach bug",
        excerpt:
          "A short-lived infection causing diarrhoea and vomiting that usually passes within a few days.",
        body: [
          "Gastroenteritis, often called a stomach bug, is inflammation of the gut caused by a virus or, less often, bacteria. It spreads easily, so careful hand washing helps protect those around you.",
          "Most people recover at home within a few days. The main risk is dehydration, so the priority is replacing lost fluids.",
        ],
        symptoms: [
          "Diarrhoea and stomach cramps",
          "Nausea and vomiting",
          "A mild fever and headache",
          "Loss of appetite",
        ],
        selfCare: [
          "Sip fluids often to stay hydrated",
          "Eat small, plain meals when you feel able",
          "Wash hands well and stay home until symptoms settle",
        ],
        seekCare: [
          "Signs of dehydration such as little urine, dizziness, or a dry mouth",
          "Blood in vomit or stool, or severe stomach pain",
          "Symptoms last more than a few days, especially in young children or older adults",
        ],
      },
      {
        slug: "heartburn-reflux",
        title: "Heartburn & reflux",
        excerpt:
          "A burning feeling in the chest when stomach acid rises into the food pipe.",
        body: [
          "Heartburn happens when acid from the stomach travels back up into the oesophagus, causing a burning sensation. Occasional heartburn is very common, often after a large or rich meal.",
          "Lifestyle changes ease most symptoms. Over-the-counter antacids and longer-term medicines can help when reflux is frequent.",
        ],
        symptoms: [
          "A burning feeling in the chest, often after eating",
          "An acidic or bitter taste in the mouth",
          "Discomfort that is worse when lying down",
          "Bloating or frequent burping",
        ],
        selfCare: [
          "Eat smaller meals and avoid eating late at night",
          "Cut back on triggers such as rich, spicy, or fatty foods",
          "Raise the head of the bed if symptoms occur at night",
        ],
        seekCare: [
          "Symptoms are frequent or do not improve with self-care",
          "Difficulty or pain when swallowing, or unexplained weight loss",
          "Any severe or crushing chest pain — treat as an emergency",
        ],
      },
      {
        slug: "constipation",
        title: "Constipation",
        excerpt:
          "Infrequent or difficult bowel movements that usually respond well to simple changes.",
        body: [
          "Constipation means passing stools less often than usual or finding them hard to pass. It is very common and often linked to diet, fluid intake, and activity levels.",
          "Most constipation improves with changes to food, drink, and routine. Gentle laxatives can help for a short time if needed.",
        ],
        symptoms: [
          "Fewer bowel movements than normal",
          "Hard, dry, or lumpy stools",
          "Straining or a feeling of incomplete emptying",
          "Stomach ache or bloating",
        ],
        selfCare: [
          "Eat more fibre from fruit, vegetables, and wholegrains",
          "Drink plenty of water and stay active",
          "Do not ignore the urge to go to the toilet",
        ],
        seekCare: [
          "Constipation lasts more than a couple of weeks despite changes",
          "Blood in the stool or unexplained weight loss",
          "Severe pain, vomiting, or a swollen abdomen",
        ],
      },
      {
        slug: "ibs",
        title: "Irritable bowel syndrome",
        excerpt:
          "A long-term gut condition that causes cramping, bloating, and changes in bowel habits.",
        body: [
          "Irritable bowel syndrome (IBS) affects how the gut works rather than causing damage to it. Symptoms can come and go and are often linked to certain foods, stress, or changes in routine.",
          "IBS is managed rather than cured. Many people find relief by understanding their triggers and adjusting diet and stress levels.",
        ],
        symptoms: [
          "Stomach cramps, often eased by going to the toilet",
          "Bloating and excess wind",
          "Diarrhoea, constipation, or alternating between the two",
          "Symptoms that flare at stressful times",
        ],
        selfCare: [
          "Keep a simple diary to spot food and stress triggers",
          "Eat regular meals and stay hydrated",
          "Try gentle exercise and stress-management techniques",
        ],
        seekCare: [
          "A sudden change in bowel habit that persists",
          "Blood in the stool, unexplained weight loss, or anaemia",
          "Symptoms that significantly disrupt daily life",
        ],
      },
    ],
  },
  {
    id: "allergies",
    name: "Allergies",
    description:
      "Reactions to pollen, dust, and other triggers, and how to keep symptoms under control.",
    topics: [
      {
        slug: "hay-fever",
        title: "Hay fever",
        excerpt:
          "An allergic reaction to pollen that brings sneezing, a runny nose, and itchy eyes.",
        body: [
          "Hay fever, or seasonal allergic rhinitis, is an allergic response to pollen from grasses, trees, or weeds. Symptoms tend to follow the pollen season and can range from mild to disruptive.",
          "There is no cure, but symptoms are very treatable. Antihistamines and steroid nasal sprays help most people stay comfortable through the season.",
        ],
        symptoms: [
          "Frequent sneezing and a runny or blocked nose",
          "Itchy, red, or watery eyes",
          "An itchy throat or roof of the mouth",
          "Tiredness from poor sleep",
        ],
        selfCare: [
          "Use antihistamines or a steroid nasal spray during the season",
          "Keep windows closed when pollen counts are high",
          "Shower and change clothes after time outdoors",
        ],
        seekCare: [
          "Symptoms are not controlled by over-the-counter treatments",
          "Hay fever worsens asthma or breathing",
          "You would like help identifying your specific triggers",
        ],
      },
      {
        slug: "allergic-rhinitis",
        title: "Allergic rhinitis",
        excerpt:
          "Year-round nasal allergy symptoms often triggered by dust mites or pet dander.",
        body: [
          "Allergic rhinitis is inflammation of the nose caused by an allergic reaction. When it lasts all year it is often due to indoor triggers such as house dust mites, mould, or animal dander.",
          "Reducing exposure to triggers and using the right medicines keeps most symptoms in check.",
        ],
        symptoms: [
          "Persistent sneezing and a blocked or runny nose",
          "Postnasal drip and throat clearing",
          "Itchy nose and eyes",
          "Symptoms that continue beyond the pollen season",
        ],
        selfCare: [
          "Reduce dust by washing bedding regularly at a high temperature",
          "Use antihistamines or a nasal spray as needed",
          "Keep pets out of the bedroom if they are a trigger",
        ],
        seekCare: [
          "Symptoms persist despite avoiding triggers and using treatments",
          "You have ongoing sinus problems or disturbed sleep",
          "You want allergy testing to confirm the cause",
        ],
      },
      {
        slug: "food-allergy",
        title: "Food allergy",
        excerpt:
          "An immune reaction to certain foods that ranges from mild to a medical emergency.",
        body: [
          "A food allergy is when the immune system reacts to a particular food. Reactions usually appear within minutes to a couple of hours and can affect the skin, gut, and breathing.",
          "The main approach is to avoid the food that triggers a reaction. Anyone at risk of a severe reaction should have an emergency plan and adrenaline auto-injector.",
        ],
        symptoms: [
          "Itchy skin, hives, or swelling",
          "Tingling in the mouth or stomach upset",
          "A runny nose or watery eyes",
          "In severe cases, swelling of the throat and trouble breathing",
        ],
        selfCare: [
          "Read labels carefully and avoid the trigger food",
          "Carry any prescribed emergency medication at all times",
          "Tell restaurants and friends about your allergy",
        ],
        seekCare: [
          "Any swelling of the throat, trouble breathing, or faintness — call emergency services",
          "You suspect a new food allergy and want testing",
          "Reactions are becoming more frequent or severe",
        ],
      },
    ],
  },
  {
    id: "children",
    name: "Children's health",
    description:
      "Common childhood complaints and reassuring guidance on when to seek help.",
    topics: [
      {
        slug: "fever-in-children",
        title: "Fever in children",
        excerpt:
          "A raised temperature is usually the body's normal response to fighting an infection.",
        body: [
          "Fever is common in children and is usually a sign that the body is fighting off an infection. How your child behaves often matters more than the exact temperature reading.",
          "Most fevers settle within a few days. Keeping your child comfortable and well hydrated is the main priority.",
        ],
        symptoms: [
          "A temperature above the normal range",
          "Flushed cheeks and feeling hot",
          "Tiredness or irritability",
          "Reduced appetite",
        ],
        selfCare: [
          "Offer fluids regularly to prevent dehydration",
          "Use paracetamol or ibuprofen if your child is distressed",
          "Dress them in light clothing and keep the room comfortable",
        ],
        seekCare: [
          "A baby under three months has any fever",
          "Your child is very drowsy, has a rash that does not fade, or struggles to breathe",
          "The fever lasts more than a few days or you are worried",
        ],
      },
      {
        slug: "ear-infection",
        title: "Ear infection",
        excerpt:
          "A common cause of ear pain in children that often clears without antibiotics.",
        body: [
          "Middle ear infections are common in young children, often following a cold. Fluid builds up behind the eardrum and can become painful.",
          "Most ear infections improve on their own within a few days. Pain relief is usually all that is needed, with antibiotics reserved for certain cases.",
        ],
        symptoms: [
          "Ear pain, or a baby tugging at the ear",
          "A fever and irritability",
          "Trouble sleeping",
          "Sometimes reduced hearing or fluid from the ear",
        ],
        selfCare: [
          "Give paracetamol or ibuprofen for pain",
          "Encourage fluids and rest",
          "Avoid putting anything inside the ear",
        ],
        seekCare: [
          "Symptoms do not improve after a few days or get worse",
          "Fluid or discharge comes from the ear",
          "Your child seems very unwell or has swelling behind the ear",
        ],
      },
      {
        slug: "chickenpox",
        title: "Chickenpox",
        excerpt:
          "A common, very itchy viral infection of childhood that usually clears within a week.",
        body: [
          "Chickenpox is a viral infection that causes an itchy, spotty rash. It is most common in children and is very contagious until the last blister has crusted over.",
          "Chickenpox usually clears by itself. Care focuses on easing the itch and keeping your child comfortable.",
        ],
        symptoms: [
          "Itchy spots that turn into fluid-filled blisters",
          "A fever, often before the rash appears",
          "Tiredness and aches",
          "Spots in crops across the body",
        ],
        selfCare: [
          "Use cooling lotions or antihistamines to ease itching",
          "Keep nails short to reduce scratching",
          "Offer fluids and keep your child off school until blisters crust over",
        ],
        seekCare: [
          "The skin around spots becomes hot, red, or painful",
          "Your child is drowsy, has breathing trouble, or a severe headache",
          "The patient is a newborn, pregnant, or has a weakened immune system",
        ],
      },
    ],
  },
  {
    id: "everyday",
    name: "Everyday health",
    description:
      "Frequent complaints that affect daily life, with practical ways to find relief.",
    topics: [
      {
        slug: "headache",
        title: "Headache",
        excerpt:
          "A very common complaint that is usually harmless and eases with rest and simple measures.",
        body: [
          "Most headaches are tension-type, caused by things like stress, tiredness, dehydration, or screen time. They are uncomfortable but rarely a sign of anything serious.",
          "Simple self-care relieves most headaches. Keeping a note of when they happen can help you spot and avoid triggers.",
        ],
        symptoms: [
          "A dull, aching pressure across the head",
          "Tightness around the forehead or back of the neck",
          "Sensitivity to light or noise",
          "Headaches linked to stress or tiredness",
        ],
        selfCare: [
          "Drink water, rest, and take regular screen breaks",
          "Use paracetamol or ibuprofen occasionally if needed",
          "Keep regular sleep and meal patterns",
        ],
        seekCare: [
          "A sudden, severe headache unlike any before — seek urgent care",
          "Headache with a stiff neck, rash, confusion, or weakness",
          "Frequent headaches or ones that keep getting worse",
        ],
      },
      {
        slug: "urinary-tract-infection",
        title: "Urinary tract infection",
        excerpt:
          "A common infection of the bladder that causes stinging and a frequent need to urinate.",
        body: [
          "A urinary tract infection (UTI) usually affects the bladder and is much more common in women. It develops when bacteria enter the urinary tract and cause irritation.",
          "Mild UTIs sometimes settle with fluids and time, but many need a short course of antibiotics, especially if symptoms are marked.",
        ],
        symptoms: [
          "A burning or stinging feeling when urinating",
          "Needing to urinate more often or urgently",
          "Cloudy or strong-smelling urine",
          "Lower tummy discomfort",
        ],
        selfCare: [
          "Drink plenty of water to flush the bladder",
          "Use over-the-counter pain relief for discomfort",
          "Do not hold urine for long periods",
        ],
        seekCare: [
          "Symptoms are severe or do not improve within a day or two",
          "Back or side pain, fever, or blood in the urine",
          "You are pregnant, or UTIs keep coming back",
        ],
      },
      {
        slug: "trouble-sleeping",
        title: "Trouble sleeping",
        excerpt:
          "Difficulty falling or staying asleep that often improves with better sleep habits.",
        body: [
          "Sleep problems are very common and often linked to stress, irregular routines, or too much screen time before bed. Occasional poor sleep is normal, but ongoing insomnia can affect mood and concentration.",
          "Most sleep difficulties improve with consistent habits, sometimes called sleep hygiene. Support is available if poor sleep continues.",
        ],
        symptoms: [
          "Difficulty falling asleep or waking in the night",
          "Waking too early and not getting back to sleep",
          "Feeling tired or irritable during the day",
          "Worrying about sleep itself",
        ],
        selfCare: [
          "Keep regular sleep and wake times, even at weekends",
          "Avoid screens, caffeine, and large meals before bed",
          "Make the bedroom dark, quiet, and cool",
        ],
        seekCare: [
          "Poor sleep continues for several weeks despite good habits",
          "It is affecting your mood, work, or safety",
          "You snore heavily or stop breathing during sleep",
        ],
      },
    ],
  },
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

export function findFactBySlug(slug: string):
  | { topic: FactTopic; category: FactCategory }
  | undefined {
  for (const category of FACT_CATEGORIES) {
    const topic = category.topics.find((t) => t.slug === slug);
    if (topic) return { topic, category };
  }
  return undefined;
}

export function findArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
