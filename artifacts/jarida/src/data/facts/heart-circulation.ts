import type { FactCategory } from "./types";

export const heartCirculation: FactCategory = {
  id: "heart-circulation",
  name: "Heart & circulation",
  description:
    "Conditions of the heart and blood vessels, including clear emergency warning signs.",
  topics: [
    {
      slug: "blood-clot",
      title: "Blood clot",
      excerpt:
        "A clot in a deep vein, usually in the leg, that needs prompt treatment but responds well once it is recognised.",
      body: [
        "A blood clot in a deep vein, often called a deep vein thrombosis, usually forms in the lower leg or thigh. It can happen after long periods of being still, such as a long journey or a spell in bed, and some people are more prone to clots because of surgery, pregnancy, or certain medicines. The clot blocks normal blood flow, which causes the leg to become swollen, warm, and painful.",
        "With prompt treatment using blood-thinning medicines, a deep vein clot usually settles safely and the risk of complications is greatly reduced. The main concern is that a piece of clot can travel to the lungs, so it is important to take warning signs seriously and seek care quickly rather than waiting to see if it improves.",
      ],
      symptoms: [
        "Swelling in one leg, often the calf",
        "Pain, tenderness, or cramping in the affected leg",
        "Skin that feels warm and looks red or discoloured",
        "A heavy, aching feeling in the leg",
      ],
      selfCare: [
        "Keep moving and stretch your legs on long journeys",
        "Stay well hydrated, especially when travelling",
        "Take any prescribed blood-thinning medicine exactly as directed",
        "Wear compression stockings if your clinician advises them",
      ],
      seekCare: [
        "Seek urgent care for a hot, swollen, painful leg or sudden breathlessness or chest pain",
        "You cough up blood or feel faint or lightheaded",
        "Symptoms come on after recent surgery, illness, or a long period of being still",
      ],
    },
    {
      slug: "atrial-fibrillation",
      title: "Atrial fibrillation",
      excerpt:
        "A common irregular heart rhythm that can feel unsettling but is very manageable once it has been assessed and treated.",
      body: [
        "Atrial fibrillation is a condition in which the upper chambers of the heart beat in a fast, irregular way rather than in a steady rhythm. It becomes more common with age and can be linked to high blood pressure, an overactive thyroid, or drinking too much alcohol. Many people notice a fluttering or racing heartbeat, while others have no symptoms and it is found during a routine check.",
        "Although an irregular heartbeat can feel alarming, atrial fibrillation is usually not immediately dangerous and is very treatable. The main aims of treatment are to control the heart rate or rhythm and to reduce the risk of stroke, often with medicines, so getting it assessed allows the right plan to be put in place.",
      ],
      symptoms: [
        "A fluttering, racing, or pounding heartbeat",
        "An irregular pulse",
        "Tiredness and reduced energy",
        "Breathlessness or dizziness",
        "Sometimes no symptoms at all",
      ],
      selfCare: [
        "Take any prescribed medicines, including blood thinners, exactly as directed",
        "Limit alcohol and caffeine, which can trigger episodes",
        "Keep to a healthy weight and stay physically active",
        "Attend follow-up appointments and have your blood pressure checked",
      ],
      seekCare: [
        "You notice a new irregular, racing, or fluttering heartbeat",
        "You feel very breathless, dizzy, or faint, or have chest discomfort",
        "Your symptoms are getting worse despite treatment",
      ],
    },
    {
      slug: "heart-attack",
      title: "Heart attack / myocardial infarction",
      excerpt:
        "A medical emergency where the blood supply to part of the heart is suddenly blocked, needing immediate treatment.",
      body: [
        "A heart attack, or myocardial infarction, happens when the blood supply to part of the heart muscle is suddenly cut off, usually by a clot in a narrowed artery. Without blood and oxygen, the affected muscle begins to be damaged, which is why acting quickly matters so much. The classic warning is a heavy, tight, or crushing pain in the centre of the chest that may spread to the arm, neck, or jaw.",
        "Fast treatment to restore blood flow saves heart muscle and lives, so a heart attack should never be waited out. Modern emergency care is very effective, and the sooner help arrives, the better the chances of a full recovery, so it is always right to call for help immediately if you suspect one.",
      ],
      symptoms: [
        "Central chest pain or pressure that may feel heavy, tight, or crushing",
        "Pain spreading to the arm, neck, jaw, back, or stomach",
        "Shortness of breath and a cold sweat",
        "Nausea, lightheadedness, or a feeling of impending doom",
        "Symptoms can be milder, especially in women, older people, and those with diabetes",
      ],
      selfCare: [
        "Treat a heart attack as an emergency, not something to manage at home",
        "Stop what you are doing, sit down, and stay calm while help is on the way",
        "Afterwards, take all prescribed medicines and attend cardiac rehabilitation",
        "Stop smoking, eat well, and stay active to protect your heart in future",
      ],
      seekCare: [
        "Call your local emergency number immediately if you suspect a heart attack",
        "Do not wait to see if the pain passes, even if you are unsure",
        "If advised and not allergic, chew an aspirin while waiting for help",
      ],
    },
    {
      slug: "palpitations",
      title: "Palpitations",
      excerpt:
        "The sensation of feeling your own heartbeat, which is very common and usually harmless even though it can be unsettling.",
      body: [
        "Palpitations are when you become aware of your heartbeat, perhaps feeling it racing, pounding, fluttering, or skipping a beat. They are very common and most often triggered by everyday things such as exercise, stress, caffeine, alcohol, or feeling anxious. In most people the heart is healthy and the sensation, while uncomfortable, is nothing to worry about.",
        "Palpitations usually pass quickly on their own once the trigger settles, and noticing and avoiding what brings them on often reduces how often they happen. Occasionally they point to an underlying rhythm problem, so it is worth getting them checked if they are frequent, last a long time, or come with other symptoms.",
      ],
      symptoms: [
        "A racing, pounding, or fluttering heartbeat",
        "A feeling that the heart has skipped or added a beat",
        "Awareness of the heartbeat in the chest, throat, or neck",
        "Often brought on by caffeine, alcohol, stress, or exertion",
      ],
      selfCare: [
        "Cut back on caffeine, alcohol, and nicotine",
        "Use relaxation and breathing techniques to ease stress",
        "Keep well rested and stay hydrated",
        "Note what triggers your palpitations so you can avoid them",
      ],
      seekCare: [
        "The palpitations are frequent, last a long time, or are getting worse",
        "They come with chest pain, breathlessness, dizziness, or fainting",
        "You have a known heart condition or a family history of heart problems",
      ],
    },
    {
      slug: "heart-failure",
      title: "Heart failure",
      excerpt:
        "A long-term condition where the heart pumps less efficiently than it should, which can be well managed with treatment and support.",
      body: [
        "Heart failure means the heart is not pumping blood around the body as effectively as it should. Despite its name, it does not mean the heart has stopped, but rather that it needs help to keep up with the body's demands. It often develops gradually after other heart problems, such as a previous heart attack, high blood pressure, or a heart rhythm disorder, and tends to be more common with age.",
        "Heart failure is a long-term condition, but with the right medicines and lifestyle changes many people live active, comfortable lives and keep their symptoms well controlled. Treatment focuses on easing the strain on the heart, managing fluid, and treating the underlying cause, so regular review and support make a real difference.",
      ],
      symptoms: [
        "Breathlessness during activity or when lying flat",
        "Swelling in the ankles, legs, or tummy",
        "Tiredness and reduced ability to exercise",
        "Waking at night feeling short of breath",
        "Rapid weight gain from fluid build-up",
      ],
      selfCare: [
        "Take all prescribed medicines and attend regular reviews",
        "Weigh yourself regularly and report sudden gains",
        "Limit salt and follow any advice on how much to drink",
        "Stay as active as you can within your limits and stop smoking",
      ],
      seekCare: [
        "Breathlessness, swelling, or tiredness gets noticeably worse",
        "You gain weight quickly or your tummy or legs swell rapidly",
        "You feel severely breathless even at rest or wake gasping for air",
      ],
    },
    {
      slug: "high-blood-pressure",
      title: "High blood pressure / hypertension",
      excerpt:
        "A common condition where blood pressure stays raised, usually without symptoms, that is straightforward to monitor and treat.",
      body: [
        "High blood pressure, or hypertension, means the pressure of blood against the walls of the arteries is persistently higher than it should be. It is very common and usually has no single cause, though age, weight, diet, lack of activity, and family history all play a part. Because it rarely causes symptoms, it is often picked up during a routine check rather than because someone feels unwell.",
        "Left untreated over many years, high blood pressure can strain the heart and blood vessels, but the good news is that it is easy to measure and very treatable. Lifestyle changes and, where needed, medicines bring it under control and greatly reduce the long-term risks, so regular monitoring is the key.",
      ],
      symptoms: [
        "Usually no symptoms, so it is often found at a routine check",
        "Occasionally headaches when blood pressure is very high",
        "Sometimes a feeling of dizziness or general unease",
        "Most people feel completely well",
      ],
      selfCare: [
        "Eat a balanced diet with less salt and plenty of vegetables",
        "Stay physically active and keep to a healthy weight",
        "Limit alcohol and stop smoking",
        "Take any prescribed medicines regularly and check your readings",
      ],
      seekCare: [
        "Your home readings stay high despite lifestyle changes",
        "You have a very high reading with a severe headache, chest pain, or breathlessness",
        "You notice problems with your vision or feel confused",
      ],
    },
    {
      slug: "angina",
      title: "Angina",
      excerpt:
        "Chest discomfort that comes on with exertion because the heart is not getting quite enough blood, and which usually eases with rest.",
      body: [
        "Angina is chest pain or tightness that happens when the heart muscle is not getting enough blood, usually because the arteries that supply it have become narrowed. It typically comes on during exertion or stress, when the heart is working harder, and eases again with rest. It is a warning sign that the heart's blood supply is limited rather than an emergency in itself.",
        "Angina is usually a stable, manageable condition, and with the right medicines and lifestyle changes most people keep their symptoms well controlled. Treatment aims to relieve the discomfort, improve blood flow, and reduce the risk of a heart attack, so it is important to have any new chest pain assessed.",
      ],
      symptoms: [
        "Chest tightness, pressure, or pain brought on by exertion or stress",
        "Discomfort that may spread to the arm, neck, jaw, or back",
        "Symptoms that ease within a few minutes of resting",
        "Sometimes breathlessness with the discomfort",
      ],
      selfCare: [
        "Rest at the first sign of chest discomfort",
        "Take prescribed medicines, including any spray or tablet, as directed",
        "Stop smoking and keep to a healthy diet and weight",
        "Stay active within the limits your clinician has agreed",
      ],
      seekCare: [
        "Chest pain comes on more easily, lasts longer, or happens at rest",
        "The pain does not ease with rest or your usual medicine",
        "You have new or rapidly worsening chest pain, which should be treated as an emergency",
      ],
    },
    {
      slug: "low-blood-pressure",
      title: "Low blood pressure / hypotension",
      excerpt:
        "Blood pressure that runs on the low side, which is often normal and harmless but can sometimes cause dizziness.",
      body: [
        "Low blood pressure, or hypotension, simply means the pressure of blood in the arteries is lower than average. For many people this is completely normal and even healthy, and they have no symptoms at all. It can become noticeable when standing up quickly, during hot weather, after a large meal, or as a side effect of some medicines.",
        "Low blood pressure usually needs no treatment when it causes no problems, and simple measures handle the occasional dizzy moment. If it is troublesome, finding and addressing the cause, such as dehydration or a medicine, usually settles things, so it is rarely a cause for concern.",
      ],
      symptoms: [
        "Dizziness or lightheadedness, especially on standing",
        "Feeling faint or briefly blacking out",
        "Blurred vision and tiredness",
        "Nausea or feeling generally washed out",
      ],
      selfCare: [
        "Stand up slowly and sit or lie down if you feel dizzy",
        "Drink plenty of fluids and avoid getting too hot",
        "Eat smaller, more frequent meals if large meals trigger symptoms",
        "Avoid alcohol and rise gently after sitting or lying for a while",
      ],
      seekCare: [
        "You faint, fall, or feel dizzy often enough to affect daily life",
        "Symptoms come on after starting a new medicine",
        "You also have chest pain, breathlessness, confusion, or a fast heartbeat",
      ],
    },
    {
      slug: "stroke",
      title: "Stroke",
      excerpt:
        "A medical emergency where the blood supply to part of the brain is interrupted, needing immediate treatment.",
      body: [
        "A stroke happens when the blood supply to part of the brain is suddenly cut off, either by a clot blocking a vessel or by a vessel bursting. Without blood and oxygen, brain cells start to be damaged within minutes, which is why a stroke is always a medical emergency. The signs come on suddenly and often affect one side of the body.",
        "Acting fast is vital, because the quicker treatment begins, the more brain tissue can be saved and the better the recovery. The simple FAST check, looking for changes to the Face, Arms, and Speech and noting the Time, helps people recognise a stroke and get help without delay.",
      ],
      symptoms: [
        "Sudden drooping on one side of the face",
        "Weakness or numbness in one arm or leg",
        "Slurred or muddled speech, or trouble understanding",
        "Sudden blurred vision, dizziness, or loss of balance",
        "A sudden, severe headache with no clear cause",
      ],
      selfCare: [
        "Treat any sign of a stroke as an emergency, never wait it out",
        "Note the time the symptoms started to tell the emergency team",
        "After a stroke, attend rehabilitation and take all prescribed medicines",
        "Manage blood pressure, stop smoking, and stay active to lower future risk",
      ],
      seekCare: [
        "Call your local emergency number immediately if you notice any signs of a stroke",
        "Act even if the symptoms ease, as a brief warning stroke still needs urgent assessment",
        "Use the FAST check: Face, Arms, Speech, Time to call for help",
      ],
    },
    {
      slug: "varicose-veins",
      title: "Varicose veins",
      excerpt:
        "Swollen, twisted veins, usually in the legs, that are very common and mostly a cosmetic concern rather than a health risk.",
      body: [
        "Varicose veins are enlarged, twisted veins that show up most often in the legs. They develop when the small valves inside the veins weaken, so blood pools instead of flowing smoothly back to the heart. They become more common with age and are more likely during pregnancy, in people who stand for long periods, and where they run in the family.",
        "For most people varicose veins are harmless and more of a cosmetic worry than a medical problem, though they can ache or feel heavy. Simple measures often ease the discomfort, and treatments are available if they are troublesome, so there is no need to put up with symptoms that bother you.",
      ],
      symptoms: [
        "Bulging, twisted, blue or purple veins, usually on the legs",
        "Aching, heavy, or tired legs, often worse after standing",
        "Swelling around the ankles by the end of the day",
        "Itching or mild cramping over the affected veins",
      ],
      selfCare: [
        "Move regularly and avoid standing or sitting still for long periods",
        "Raise your legs when resting to help the blood flow back",
        "Wear compression stockings if advised and stay active",
        "Keep to a healthy weight to reduce pressure on the veins",
      ],
      seekCare: [
        "The skin over a vein becomes discoloured, hard, or develops a sore",
        "A vein becomes hot, swollen, and painful, or starts bleeding",
        "The aching and heaviness affect your daily life or you want treatment",
      ],
    },
  ],
};
