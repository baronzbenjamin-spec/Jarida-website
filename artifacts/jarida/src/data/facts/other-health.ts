import type { FactCategory } from "./types";

export const otherHealth: FactCategory = {
  id: "other-health",
  name: "Other health problems",
  description:
    "Health concerns that do not fit neatly elsewhere, from fatigue to quitting smoking.",
  topics: [
    {
      slug: "anemia",
      title: "Anemia",
      excerpt:
        "Anemia means your blood carries less oxygen than usual, and in most cases the cause is easy to find and treat.",
      body: [
        "Anemia happens when you have too few red blood cells, or too little of the protein haemoglobin that carries oxygen around your body. The most common reason is a lack of iron, which can build up slowly through heavy periods, a low-iron diet, or pregnancy. Because it often develops gradually, you may simply feel a bit more tired or out of puff than usual before you notice anything is wrong.",
        "Most anemia is mild and responds well once the cause is addressed, often with dietary changes or an iron supplement. A simple blood test confirms it and points to why it has happened, and your symptoms usually ease within a few weeks of treatment. Where there is an underlying cause, treating that as well brings your blood count back to normal.",
      ],
      symptoms: [
        "Tiredness and lack of energy",
        "Pale skin and feeling short of breath on exertion",
        "Dizziness or headaches",
        "A faster or pounding heartbeat",
      ],
      selfCare: [
        "Eat iron-rich foods such as meat, beans, lentils and leafy greens",
        "Have vitamin C, like a glass of orange juice, with iron-rich meals to help absorption",
        "Take any prescribed iron supplement as directed and give it a few weeks to work",
        "Limit tea and coffee with meals, as they can reduce how much iron you absorb",
      ],
      seekCare: [
        "You feel very breathless, have chest pain, or your heart is racing",
        "You notice blood in your stool, very dark stools, or unusually heavy periods",
        "Tiredness and pallor do not improve despite eating well or taking supplements",
      ],
    },
    {
      slug: "vitamin-d",
      title: "Vitamin D",
      excerpt:
        "Vitamin D keeps your bones and muscles strong, and a mild shortfall is common and simple to put right.",
      body: [
        "Vitamin D helps your body absorb calcium and keeps your bones, teeth and muscles healthy. Most of it is made in the skin from sunlight, so levels naturally dip in the darker months or if you spend little time outdoors, cover up, or have darker skin. A mild shortfall is very common and often causes no symptoms at all.",
        "When levels are low for a long time you may feel tired or notice aching muscles and bones, but this usually improves once vitamin D is topped up. A daily supplement during autumn and winter is a safe, easy way to keep levels healthy, and a blood test can check things if you are unsure. Most people feel steadily better as their levels recover.",
      ],
      symptoms: [
        "Tiredness and general low energy",
        "Aching muscles or bones",
        "Muscle weakness, such as struggling on stairs",
        "Low mood, especially in winter",
      ],
      selfCare: [
        "Spend short spells outdoors in daylight when you can",
        "Take a daily vitamin D supplement, particularly in autumn and winter",
        "Include oily fish, eggs and fortified foods in your diet",
        "Follow the dose on the packet and avoid taking very high amounts",
      ],
      seekCare: [
        "You have ongoing bone pain, muscle weakness, or repeated fractures",
        "Tiredness or aches do not improve after a few months of supplements",
        "You have a condition affecting how you absorb nutrients and are worried about your levels",
      ],
    },
    {
      slug: "hair-loss",
      title: "Hair loss",
      excerpt:
        "Losing some hair is normal, and many causes of thinning are temporary or treatable once understood.",
      body: [
        "We all shed hair every day, and noticing more than usual can be unsettling but is rarely a sign of anything serious. Common reasons include inherited pattern thinning, stress, illness, pregnancy, thyroid changes, or a lack of iron. Hair often thins evenly or recedes gradually, and in many cases it grows back once the trigger has passed.",
        "Temporary hair loss after a stressful event, illness or childbirth usually recovers on its own over several months. Where thinning is inherited or longer-lasting, there are treatments that can slow it or improve growth, and a doctor can check for treatable causes such as low iron or thyroid problems. Being gentle with your hair while you wait helps avoid extra breakage.",
      ],
      symptoms: [
        "More hair than usual on your brush, pillow or in the shower",
        "Gradual thinning on the top of the head or a receding hairline",
        "Widening parting or a smaller ponytail",
        "Sometimes patchy bald spots",
      ],
      selfCare: [
        "Handle your hair gently and avoid tight styles and harsh treatments",
        "Eat a balanced diet with enough iron and protein",
        "Manage stress where you can and allow time for regrowth",
        "Avoid excessive heat styling and aggressive brushing",
      ],
      seekCare: [
        "Hair falls out in patches, or your scalp is red, sore or scaly",
        "Thinning is sudden, rapid, or comes with other symptoms like tiredness",
        "The hair loss is distressing or you want to discuss treatment options",
      ],
    },
    {
      slug: "womens-health",
      title: "Women's health",
      excerpt:
        "From periods to menopause, women's health covers many everyday concerns that are common and well supported.",
      body: [
        "Women's health covers the wide range of physical and hormonal changes across life, from the first period through pregnancy and into menopause. Many of the things women worry about, such as changes in periods, intimate discomfort, or shifts in mood and energy, are common and have clear explanations. Knowing what is usual for you makes it easier to spot when something needs a closer look.",
        "Most everyday concerns can be eased with simple self-care and reassurance, and support is always available when you need it. Regular check-ups, cervical screening and being able to talk openly with a health professional all help you stay well. If something feels different or worrying, it is always reasonable to ask for advice.",
      ],
      symptoms: [
        "Changes in your menstrual cycle or period flow",
        "Pelvic pain or intimate discomfort",
        "Changes in vaginal discharge",
        "Mood, sleep or energy changes linked to your cycle or menopause",
      ],
      selfCare: [
        "Keep a note of your cycle and any symptoms to spot patterns",
        "Attend cervical screening and routine check-ups when invited",
        "Use a healthy diet, regular activity and good sleep to support hormone balance",
        "Talk to someone you trust if symptoms affect your wellbeing",
      ],
      seekCare: [
        "You have unusual bleeding, such as between periods or after the menopause",
        "You notice a new breast lump, persistent pelvic pain, or a change you cannot explain",
        "Symptoms are affecting your daily life and you would like advice or treatment",
      ],
    },
    {
      slug: "nail-fungus",
      title: "Nail fungus",
      excerpt:
        "A fungal nail infection is harmless but slow to clear, and treatment steadily improves the look of the nail.",
      body: [
        "Nail fungus is a common infection, usually of the toenails, caused by the same fungi that lead to athlete's foot. It tends to start at the edge of the nail and spreads slowly, making the nail thicker, discoloured and brittle. It is more likely if your feet are often warm and damp, if you have had athlete's foot, or as you get older.",
        "Fungal nails are not dangerous, but they grow out very slowly, so any treatment takes patience and steady results rather than a quick fix. Mild cases can improve with over-the-counter antifungal lacquers and good foot care, while more stubborn infections may need a longer course from a doctor. As the healthy nail grows through, the affected part is gradually trimmed away.",
      ],
      symptoms: [
        "Thickened, discoloured nails, often yellow, white or brown",
        "Brittle or crumbly nail edges",
        "Nail lifting away from the nail bed",
        "Sometimes athlete's foot on the surrounding skin",
      ],
      selfCare: [
        "Keep your feet clean and dry, especially between the toes",
        "Use an antifungal nail treatment from the pharmacy as directed",
        "Wear breathable footwear and change socks daily",
        "Trim affected nails and avoid sharing nail tools or towels",
      ],
      seekCare: [
        "The infection spreads, is painful, or several nails are affected",
        "Over-the-counter treatment has not helped after a few months",
        "You have diabetes or poor circulation and notice a nail or foot problem",
      ],
    },
    {
      slug: "ingrown-toenail",
      title: "Ingrown toenail",
      excerpt:
        "An ingrown toenail is sore but very common, and simple care at home settles most cases.",
      body: [
        "An ingrown toenail happens when the edge of the nail grows into the surrounding skin, usually on the big toe. It often follows cutting the nail too short or curved, wearing tight shoes, or a minor injury. The skin becomes red, tender and swollen, and sometimes a little fluid builds up if it gets infected.",
        "Most ingrown toenails improve with gentle home care and time, especially if you let the nail grow out properly. Soaking and good footwear ease the pressure, and the toe usually settles within a couple of weeks. If it keeps coming back or becomes infected, a doctor or foot specialist can treat it, sometimes with a small procedure on the nail edge.",
      ],
      symptoms: [
        "Pain and tenderness along the side of the toenail",
        "Redness and swelling of the surrounding skin",
        "The nail edge digging into the skin",
        "Sometimes fluid, pus or a bad smell if infected",
      ],
      selfCare: [
        "Soak the foot in warm water a few times a day to soften the skin",
        "Cut nails straight across, not too short or rounded at the corners",
        "Wear roomy, comfortable shoes that do not press on the toe",
        "Gently keep the area clean and dry between soaks",
      ],
      seekCare: [
        "The toe becomes increasingly painful, swollen, or oozes pus",
        "Home care does not help or the problem keeps returning",
        "You have diabetes or poor circulation and develop a toe problem",
      ],
    },
    {
      slug: "kidney-failure",
      title: "Kidney failure",
      excerpt:
        "Kidney failure means the kidneys are not filtering as well as they should, and modern care helps people live well with it.",
      body: [
        "Kidney failure, often called chronic kidney disease, means the kidneys have lost some of their ability to filter waste and excess fluid from the blood. It usually develops slowly over years, often linked to conditions like high blood pressure or diabetes, and early on it causes few or no symptoms. It is frequently picked up through routine blood and urine tests before you notice anything.",
        "While kidney function that is lost cannot usually be restored, much can be done to protect the kidneys and slow any decline. Controlling blood pressure and blood sugar, taking prescribed medicines and attending regular check-ups all make a real difference, and even advanced kidney disease can be managed effectively. Your care team will guide you and adjust treatment as needed.",
      ],
      symptoms: [
        "Tiredness and difficulty concentrating",
        "Swelling in the ankles, feet or around the eyes",
        "Needing to pass urine more or less often, especially at night",
        "Poor appetite, nausea or itchy skin in more advanced stages",
      ],
      selfCare: [
        "Keep all follow-up appointments and have your blood and urine checked as advised",
        "Take medicines for blood pressure, blood sugar and your kidneys exactly as prescribed",
        "Eat a balanced, lower-salt diet and stay a healthy weight",
        "Avoid smoking and check with your doctor before taking anti-inflammatory painkillers",
      ],
      seekCare: [
        "You develop marked swelling, breathlessness, or pass very little urine",
        "You feel increasingly unwell, sick, or unusually drowsy and confused",
        "You have diabetes or high blood pressure and want your kidney health reviewed",
      ],
    },
    {
      slug: "test-methods",
      title: "Sampling methods / test methods",
      excerpt:
        "Knowing how everyday medical tests are taken can make appointments feel calmer and far less daunting.",
      body: [
        "Sampling and test methods are the simple, routine ways health professionals gather information about your body, such as blood tests, urine samples, swabs and blood pressure readings. Each is chosen to answer a particular question, like checking for infection, screening for a condition, or monitoring a known problem. Most are quick, safe and cause little or no discomfort.",
        "Understanding what a test involves often takes away much of the worry, and staff are used to explaining each step as they go. A small bruise after a blood test or mild discomfort during a swab is normal and soon settles. If a result needs follow-up, your clinic will let you know clearly what it means and what happens next.",
      ],
      symptoms: [
        "A brief sting or pinch when blood is taken",
        "A small bruise or tenderness at a needle site",
        "Mild, short-lived discomfort during a swab",
        "Feeling lightheaded if you are anxious about needles",
      ],
      selfCare: [
        "Drink water beforehand unless you have been asked to fast",
        "Tell the person taking the sample if you feel faint around needles",
        "Press gently on a blood test site afterwards to reduce bruising",
        "Follow any instructions about preparing for or collecting a sample",
      ],
      seekCare: [
        "A sample site becomes red, swollen, increasingly painful or hot",
        "You feel very unwell or faint after a test and it does not pass",
        "You are unsure about a result and would like it explained",
      ],
    },
    {
      slug: "smoking",
      title: "Smoking",
      excerpt:
        "Smoking affects nearly every part of the body, and the benefits of cutting down or stopping begin almost straight away.",
      body: [
        "Smoking exposes the lungs and blood vessels to harmful chemicals that, over time, raise the risk of heart disease, lung problems and many cancers. It can also cause everyday effects such as a cough, breathlessness, reduced fitness and poorer skin. Because the harm builds up gradually, you may not notice the impact until it has been going on for a while.",
        "The encouraging news is that the body starts to recover remarkably quickly once you smoke less or stop. Within days circulation and breathing begin to improve, and long-term risks fall steadily the longer you stay smoke-free. Support, nicotine replacement and stop-smoking services make quitting far more achievable, and it is never too late to benefit.",
      ],
      symptoms: [
        "A persistent cough or bringing up phlegm",
        "Breathlessness and reduced fitness",
        "Frequent chest infections",
        "Stained teeth and a dulled sense of taste and smell",
      ],
      selfCare: [
        "Set a quit date and tell people who can support you",
        "Consider nicotine replacement or a stop-smoking service for extra help",
        "Notice your triggers and plan other things to do instead",
        "Be kind to yourself and try again if you slip, rather than giving up",
      ],
      seekCare: [
        "You have a cough that lasts more than three weeks or that brings up blood",
        "You feel increasingly breathless or have ongoing chest pain",
        "You would like help and advice to stop smoking for good",
      ],
    },
    {
      slug: "quit-smoking",
      title: "Quit smoking",
      excerpt:
        "Stopping smoking is one of the best things you can do for your health, and plenty of support makes it achievable.",
      body: [
        "Quitting smoking can feel daunting, but most people who succeed have tried more than once, so a slip is part of the journey rather than a failure. Cravings come from nicotine and from habits tied to daily routines, and both can be managed with the right plan. Understanding what to expect in the first days and weeks makes the process far less overwhelming.",
        "Withdrawal symptoms such as irritability, restlessness and strong cravings are temporary and usually ease within a few weeks. Nicotine replacement, prescribed medicines and stop-smoking services all greatly improve your chances, and combining them works best. Each smoke-free day strengthens the new habit, and the health benefits begin almost immediately.",
      ],
      symptoms: [
        "Strong urges or cravings to smoke",
        "Irritability, restlessness or low mood",
        "Difficulty concentrating or sleeping",
        "Increased appetite in the early weeks",
      ],
      selfCare: [
        "Choose a quit date and remove cigarettes and ashtrays from your home",
        "Use nicotine replacement or talk to a pharmacist about other options",
        "Plan distractions for cravings, such as a short walk or a drink of water",
        "Lean on friends, family or a stop-smoking service for encouragement",
      ],
      seekCare: [
        "Cravings or low mood are overwhelming despite trying to manage them",
        "You would like medication or structured support to help you stop",
        "You feel persistently low or anxious after stopping",
      ],
    },
    {
      slug: "sweating",
      title: "Sweating",
      excerpt:
        "Sweating is the body's natural way of cooling down, and even heavy sweating is usually harmless and manageable.",
      body: [
        "Sweating is how the body controls its temperature, releasing fluid through the skin that cools you as it evaporates. It is normal to sweat more in hot weather, during exercise, or when you are nervous or stressed. Some people simply sweat more than others, particularly on the hands, feet, underarms or face, and this is rarely a sign of anything wrong.",
        "Heavy sweating can be uncomfortable or embarrassing, but it usually responds well to simple measures and stronger antiperspirants. Where it is excessive and affects daily life, there are effective treatments a doctor can offer. Occasionally sweating points to another cause, such as a thyroid problem or menopause, which can be checked and treated.",
      ],
      symptoms: [
        "Sweating more than seems necessary for the temperature or activity",
        "Damp hands, feet or underarms",
        "Sweat that soaks through clothing",
        "Sweating triggered by stress or nervousness",
      ],
      selfCare: [
        "Use a strong antiperspirant, applying it at night for best effect",
        "Wear loose, breathable clothing in natural fabrics",
        "Wash regularly and choose footwear that lets your feet breathe",
        "Cut back on triggers such as spicy food, caffeine and alcohol if they affect you",
      ],
      seekCare: [
        "Heavy sweating disrupts your daily life despite trying these measures",
        "You sweat a lot at night, lose weight, or feel generally unwell",
        "Sweating starts suddenly or comes with a racing heart or chest pain",
      ],
    },
    {
      slug: "fatigue",
      title: "Tiredness / fatigue",
      excerpt:
        "Feeling tired is extremely common, and most of the time the cause is everyday and improvable.",
      body: [
        "Tiredness, or fatigue, is one of the most common reasons people feel below par, and it usually has an everyday explanation. Poor sleep, stress, doing too much, a low mood, or a run-down period after an illness can all leave you drained. Because so many things contribute, a little detective work into your sleep, routine and worries often points to the cause.",
        "Most fatigue improves once you address what is behind it, whether that is better sleep, more balance in your day, or managing stress. Sometimes a simple blood test rules out causes such as low iron, an underactive thyroid or low vitamin D. If tiredness lingers despite looking after yourself, it is worth a check to make sure nothing is being missed.",
      ],
      symptoms: [
        "Feeling drained or low on energy much of the time",
        "Difficulty concentrating or staying motivated",
        "Needing more sleep but not feeling refreshed",
        "Aching muscles or feeling generally run down",
      ],
      selfCare: [
        "Aim for a regular sleep routine and a consistent wake time",
        "Stay gently active, as movement often boosts energy",
        "Eat balanced meals and stay hydrated through the day",
        "Make time to rest and manage stress where you can",
      ],
      seekCare: [
        "Tiredness lasts for several weeks despite resting and looking after yourself",
        "You also have weight loss, breathlessness, or feel persistently low",
        "Fatigue comes on suddenly or stops you doing your usual activities",
      ],
    },
    {
      slug: "obesity",
      title: "Obesity",
      excerpt:
        "Obesity is a common, treatable condition, and even modest, steady changes bring real health benefits.",
      body: [
        "Obesity means carrying more body fat than is healthy, usually measured using body mass index alongside waist size. It develops over time from a mix of factors, including diet, activity levels, genetics, sleep, stress and some medical conditions or medicines. It is very common and is best understood as a health condition rather than a question of willpower.",
        "The good news is that even small, lasting changes can improve blood pressure, blood sugar, joint comfort and energy levels. A steady, realistic approach to eating and activity works far better than crash diets, and support is available from your doctor, dietitians and structured programmes. For some people, medicines or other treatments may be considered as part of a wider plan.",
      ],
      symptoms: [
        "Carrying excess weight, particularly around the waist",
        "Breathlessness or tiredness with everyday activity",
        "Joint aches, especially in the knees, hips or back",
        "Snoring or disturbed sleep",
      ],
      selfCare: [
        "Build up regular activity you enjoy, aiming to move more each day",
        "Choose balanced meals with plenty of vegetables and fewer sugary, processed foods",
        "Set small, realistic goals and track your progress over time",
        "Prioritise good sleep and manage stress, as both affect weight",
      ],
      seekCare: [
        "You are struggling to manage your weight despite making changes",
        "You have related problems such as high blood pressure, diabetes or sleep apnea",
        "You would like support, a structured programme, or advice on treatment options",
      ],
    },
  ],
};
