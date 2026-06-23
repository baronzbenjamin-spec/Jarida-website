import type { FactCategory } from "./types";

export const earNoseThroat: FactCategory = {
  id: "ear-nose-throat",
  name: "Ear, nose & throat",
  description: "Complaints of the ears, nose, sinuses, mouth, and throat.",
  topics: [
    {
      slug: "mouth-ulcers",
      title: "Mouth ulcers / aphthous ulcers",
      excerpt:
        "Small, painful sores inside the mouth that are very common and almost always heal by themselves within a week or two.",
      body: [
        "Mouth ulcers, also called aphthous ulcers, are shallow sores that appear on the inside of the cheeks, lips, or tongue. They often follow a minor injury such as biting the cheek or rubbing from a sharp tooth, but stress, tiredness, and certain foods can trigger them too. Although they can sting, especially when eating or drinking, they are not infectious and rarely a sign of anything serious.",
        "Most ulcers settle on their own as the lining of the mouth repairs itself, usually within seven to fourteen days. Keeping the area clean and avoiding things that irritate it gives the sore the best chance to heal, and pharmacy gels or rinses can take the edge off the discomfort while you wait.",
      ],
      symptoms: [
        "One or more round sores with a white or yellow centre and a red rim",
        "Stinging or soreness that is worse when eating, drinking, or brushing",
        "Tenderness in the area a day or two before the ulcer appears",
        "Ulcers usually on the cheeks, lips, or tongue rather than the gums",
      ],
      selfCare: [
        "Avoid spicy, acidic, or very salty foods while it heals",
        "Use a soft toothbrush and a gentle, alcohol-free mouthwash",
        "Try a pharmacy ulcer gel, rinse, or salt-water mouthwash for comfort",
        "Take paracetamol or ibuprofen if the soreness is bothering you",
      ],
      seekCare: [
        "An ulcer lasts longer than about three weeks or keeps coming back",
        "The sores are very large, very painful, or stop you eating and drinking",
        "You also feel generally unwell, have a fever, or notice ulcers elsewhere on the body",
      ],
    },
    {
      slug: "sinusitis",
      title: "Sinusitis",
      excerpt:
        "Inflammation of the air-filled spaces around the nose that usually follows a cold and clears up on its own within a couple of weeks.",
      body: [
        "Sinusitis is inflammation of the sinuses, the small hollow spaces in the bones around the nose and eyes. It most often develops after a cold, when swelling blocks the normal drainage and mucus builds up, leading to pressure and a blocked, runny nose. The vast majority of cases are caused by viruses rather than bacteria, so antibiotics are usually not needed.",
        "Sinusitis generally settles by itself as the swelling goes down and the sinuses begin to drain again, often within two to three weeks. Treatment is mainly about easing the congestion and discomfort while your body clears the infection, and simple steps at home make a real difference.",
      ],
      symptoms: [
        "Blocked or runny nose with thick mucus",
        "Pressure or pain over the cheeks, forehead, or around the eyes",
        "Reduced sense of smell and taste",
        "A headache that feels worse when bending forward",
        "Sometimes a mild fever and tiredness",
      ],
      selfCare: [
        "Use a saline spray or rinse and inhale steam to ease congestion",
        "Rest, drink plenty of fluids, and keep your head raised when resting",
        "Take paracetamol or ibuprofen for pain and pressure if needed",
        "A warm compress over the face can soothe the ache",
      ],
      seekCare: [
        "Symptoms last more than about ten days or get worse after starting to improve",
        "You have severe pain, swelling, or redness around an eye, or changes in your vision",
        "You have a high fever, a severe headache, or feel very unwell",
      ],
    },
    {
      slug: "bppv",
      title: "Benign positional vertigo",
      excerpt:
        "A common cause of brief, spinning dizziness triggered by head movements that is harmless and often settles within a few weeks.",
      body: [
        "Benign paroxysmal positional vertigo, or BPPV, happens when tiny crystals in the balance organ of the inner ear become dislodged and move into the wrong part of the canal. When you move your head, these crystals send confusing signals to the brain, which is felt as a sudden, spinning sensation. It is one of the most common causes of dizziness and, despite how unsettling it feels, it is not dangerous.",
        "The dizziness comes in short bursts lasting seconds, usually brought on by lying down, turning over in bed, or tilting the head back. BPPV often improves on its own over a few weeks, and simple repositioning manoeuvres taught by a clinician can move the crystals back into place and ease symptoms quickly.",
      ],
      symptoms: [
        "Brief spinning dizziness triggered by changing head position",
        "Episodes that come on when lying down, sitting up, or rolling over",
        "A feeling of being off balance between episodes",
        "Sometimes nausea with the spinning sensation",
      ],
      selfCare: [
        "Move your head slowly and sit up gradually rather than suddenly",
        "Use extra pillows so you sleep slightly propped up",
        "Avoid driving or climbing while you feel dizzy",
        "Ask a clinician about repositioning exercises that can help",
      ],
      seekCare: [
        "The dizziness is severe, constant, or does not settle within a few weeks",
        "You also have a bad headache, slurred speech, weakness, or hearing loss",
        "You faint, fall, or the spinning comes with double vision",
      ],
    },
    {
      slug: "mouth-sores",
      title: "Mouth sores",
      excerpt:
        "A general term for the sore spots, blisters, and patches that can appear in the mouth, most of which are minor and heal quickly.",
      body: [
        "Mouth sores cover a range of complaints, from small ulcers and cold sores to the soreness that comes with a viral infection or a rough patch from a denture. They can be caused by minor injuries, viruses, fungal infections such as oral thrush, or simple irritation. Most are uncomfortable rather than serious and clear up once the cause has passed.",
        "How long a mouth sore lasts depends on what is behind it, but the lining of the mouth heals quickly, so many sores improve within one to two weeks. Keeping the mouth clean, easing the discomfort, and avoiding anything that irritates the area help it settle while it heals.",
      ],
      symptoms: [
        "Painful spots, blisters, or raw patches inside the mouth",
        "Soreness that is worse with eating, drinking, or brushing",
        "Redness or white patches on the tongue, cheeks, or gums",
        "Sometimes a general feeling of being run down",
      ],
      selfCare: [
        "Keep the mouth clean with a soft brush and a gentle mouthwash",
        "Avoid spicy, acidic, salty, or very hot foods while it heals",
        "Use a pharmacy gel or salt-water rinse to ease soreness",
        "Stay well hydrated and take paracetamol or ibuprofen if needed",
      ],
      seekCare: [
        "A sore or patch lasts longer than about three weeks",
        "You have white or red patches, a lump, or numbness that does not go away",
        "Eating and drinking become difficult, or you feel generally unwell with a fever",
      ],
    },
    {
      slug: "sleep-apnea",
      title: "Sleep apnea",
      excerpt:
        "A condition where breathing repeatedly pauses during sleep, leaving you tired by day but very treatable once it is recognised.",
      body: [
        "Sleep apnea is a condition in which the airway narrows or briefly closes during sleep, causing the breathing to stop and start through the night. The most common form happens when the soft tissues at the back of the throat relax and block the airflow, often signalled by loud snoring and gasping. It is more common with age, in people who carry extra weight, and in those who sleep on their back.",
        "Because the interrupted breathing repeatedly disturbs sleep without fully waking you, the main effect is feeling unrefreshed and tired during the day. The good news is that sleep apnea responds well to treatment, from lifestyle changes to a simple breathing device, and addressing it can transform both energy levels and long-term health.",
      ],
      symptoms: [
        "Loud snoring with pauses, gasping, or choking sounds at night",
        "Waking unrefreshed and feeling sleepy during the day",
        "Morning headaches and a dry mouth on waking",
        "Difficulty concentrating and low mood or irritability",
      ],
      selfCare: [
        "Aim for a healthy weight, as even modest loss can help",
        "Try sleeping on your side rather than your back",
        "Reduce alcohol, especially in the evening, and avoid sedatives",
        "Keep regular sleep hours and avoid smoking",
      ],
      seekCare: [
        "A partner notices you stop breathing, gasp, or choke in your sleep",
        "You feel constantly exhausted or fall asleep during the day",
        "You feel sleepy while driving or struggle to stay alert at work",
      ],
    },
    {
      slug: "tinnitus",
      title: "Tinnitus",
      excerpt:
        "The experience of hearing ringing or buzzing without an outside source, which is very common and often becomes easier to live with over time.",
      body: [
        "Tinnitus is the sensation of hearing a sound, such as ringing, buzzing, or humming, when there is no external noise causing it. It is extremely common and often linked to exposure to loud noise, the natural changes in hearing that come with age, earwax, or a recent ear infection. It is a symptom rather than a disease, and in most people it is not a sign of anything dangerous.",
        "Tinnitus often fades or becomes much less noticeable with time as the brain learns to filter it out. While there is no single cure, many people find their symptoms ease once any underlying cause is treated and they use simple techniques to take attention away from the sound.",
      ],
      symptoms: [
        "Ringing, buzzing, hissing, or humming heard in one or both ears",
        "A sound that is often more noticeable in quiet surroundings",
        "Difficulty concentrating or sleeping when it is bothersome",
        "Sometimes accompanied by a sense of reduced hearing",
      ],
      selfCare: [
        "Protect your ears from loud noise and use ear protection when needed",
        "Use gentle background sound to make the tinnitus less noticeable",
        "Manage stress and tiredness, which can make it feel worse",
        "Limit caffeine if you notice it makes a difference",
      ],
      seekCare: [
        "The tinnitus is in only one ear, pulsing in time with your heartbeat, or getting worse",
        "It comes with hearing loss, dizziness, or pain in the ear",
        "It is affecting your sleep, mood, or daily life",
      ],
    },
    {
      slug: "motion-sickness",
      title: "Motion sickness",
      excerpt:
        "The queasy feeling some people get when travelling, caused by mixed signals to the brain and easily eased with simple measures.",
      body: [
        "Motion sickness happens when the brain receives conflicting messages about movement from the eyes, the inner ear, and the body. For example, when reading in a moving car, your inner ear senses motion while your eyes see a still page, and this mismatch can trigger nausea. It is a normal response rather than an illness, and some people, especially children, are simply more prone to it.",
        "The symptoms usually fade soon after the movement stops, and many people find they settle once they are back on stable ground. Planning ahead, looking at the horizon, and choosing where you sit can prevent most episodes, and pharmacy remedies are available for longer journeys.",
      ],
      symptoms: [
        "Nausea or vomiting during travel by car, boat, plane, or train",
        "Dizziness and a cold sweat",
        "Paleness and increased saliva",
        "Headache and general tiredness",
      ],
      selfCare: [
        "Look at the horizon or a fixed point ahead and avoid reading",
        "Sit where movement is least, such as the front of a car or over the wing of a plane",
        "Get fresh air and take regular breaks on long journeys",
        "Try pharmacy travel-sickness remedies or ginger before you set off",
      ],
      seekCare: [
        "Dizziness or sickness happens when you are not travelling",
        "Symptoms are severe, with repeated vomiting and signs of dehydration",
        "You also have a bad headache, hearing changes, or problems with balance",
      ],
    },
    {
      slug: "ear-infection",
      title: "Ear infection / otitis media",
      excerpt:
        "A common infection of the middle ear, often after a cold, that causes earache but usually clears up on its own within a few days.",
      body: [
        "An ear infection, or otitis media, is inflammation of the middle ear, the space behind the eardrum. It often develops after a cold when the small tube linking the ear to the back of the nose becomes blocked, allowing fluid and germs to build up. It is especially common in young children because of the shape of this tube, and it can cause a sharp earache and temporary muffled hearing.",
        "Most ear infections are caused by viruses and clear up by themselves within a few days as the fluid drains away. Treatment focuses on easing the pain while the body recovers, and antibiotics are only needed in some cases, so simple pain relief and rest are usually all that is required.",
      ],
      symptoms: [
        "Earache or a feeling of pressure in the ear",
        "Reduced or muffled hearing on the affected side",
        "Fever and feeling generally unwell, especially in children",
        "Sometimes discharge from the ear if the eardrum bursts",
        "In babies, pulling at the ear, irritability, and poor feeding",
      ],
      selfCare: [
        "Take paracetamol or ibuprofen for the pain and any fever",
        "Hold a warm cloth against the ear for comfort",
        "Rest and drink plenty of fluids",
        "Do not put cotton buds or anything else inside the ear",
      ],
      seekCare: [
        "Symptoms last more than a few days or keep getting worse",
        "There is swelling, redness, or tenderness behind the ear",
        "A baby or young child is very unwell, has a high fever, or seems in severe pain",
      ],
    },
    {
      slug: "glandular-fever",
      title: "Glandular fever / mononucleosis",
      excerpt:
        "A viral infection that causes a sore throat and tiredness, mainly in teenagers and young adults, and gets better with rest over a few weeks.",
      body: [
        "Glandular fever, also called infectious mononucleosis, is usually caused by the Epstein-Barr virus. It spreads through saliva, which is why it is sometimes known as the kissing disease, and it most often affects teenagers and young adults. It typically brings a severe sore throat, swollen glands, fever, and a marked sense of tiredness.",
        "There is no specific cure, as the body clears the virus by itself, and most people recover fully within two to four weeks, though tiredness can linger a little longer. Treatment is about rest and comfort, and because the spleen can swell, it is sensible to avoid contact sports for a few weeks until you are fully recovered.",
      ],
      symptoms: [
        "A severe, persistent sore throat",
        "Swollen glands in the neck and armpits",
        "High temperature and tiredness",
        "Headache and aching muscles",
        "Sometimes swelling around the eyes or a rash",
      ],
      selfCare: [
        "Rest as much as you need and return to activity gradually",
        "Drink plenty of fluids and eat soft, soothing foods",
        "Take paracetamol or ibuprofen for the sore throat, fever, and aches",
        "Avoid contact sports and heavy lifting for a few weeks",
      ],
      seekCare: [
        "You have trouble swallowing fluids or your breathing is affected",
        "You feel a sudden, sharp pain in the upper left of your tummy",
        "Symptoms are severe, or the tiredness drags on for many weeks",
      ],
    },
    {
      slug: "sore-throat",
      title: "Sore throat",
      excerpt:
        "A common and usually harmless complaint, most often caused by a virus, that clears up by itself within about a week.",
      body: [
        "A sore throat is pain, scratchiness, or irritation in the throat that is often worse when swallowing. It is usually caused by a viral infection such as a cold or flu, though sometimes a bacterial infection or simple dryness is responsible. It is one of the most common reasons people feel under the weather and is rarely a sign of anything serious.",
        "Because most sore throats are viral, they settle on their own within about a week and do not need antibiotics. Treatment is about soothing the discomfort and staying comfortable while your body fights off the infection, and there is plenty you can do at home to help.",
      ],
      symptoms: [
        "Pain or scratchiness that is worse when swallowing",
        "Redness at the back of the throat and tonsils",
        "A dry, irritated feeling and hoarse voice",
        "Sometimes swollen glands in the neck and a mild fever",
      ],
      selfCare: [
        "Drink plenty of warm or cool fluids to keep the throat moist",
        "Gargle with warm salt water and suck on lozenges",
        "Take paracetamol or ibuprofen to ease the pain",
        "Rest your voice and avoid smoke and other irritants",
      ],
      seekCare: [
        "The sore throat is severe, lasts more than about a week, or keeps returning",
        "You have difficulty swallowing or breathing, or cannot open your mouth fully",
        "You have a very high fever, a rash, or feel very unwell",
      ],
    },
  ],
};
