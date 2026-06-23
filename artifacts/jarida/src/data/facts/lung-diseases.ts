import type { FactCategory } from "./types";

export const lungDiseases: FactCategory = {
  id: "lung-diseases",
  name: "Lung diseases",
  description:
    "Conditions affecting the airways and lungs, from asthma to pneumonia.",
  topics: [
    {
      slug: "asthma",
      title: "Asthma",
      excerpt:
        "A common long-term condition where the airways become sensitive and narrow, which is very manageable with the right treatment.",
      body: [
        "Asthma is a condition in which the airways in the lungs are more sensitive than usual and can tighten and become inflamed. Triggers such as colds, exercise, pollen, or cold air can bring on coughing, wheezing, and breathlessness. It often starts in childhood and tends to run in families alongside allergies and eczema.",
        "Although asthma is long-term, most people control it well and live full, active lives. Treatment usually involves a reliever inhaler for symptoms and, for many, a preventer inhaler used daily to keep the airways calm. Knowing your triggers and having a clear action plan makes flare-ups much less likely.",
      ],
      symptoms: [
        "Wheezing or a whistling sound when breathing out",
        "A cough, often worse at night or with exercise",
        "Breathlessness or a tight feeling in the chest",
        "Symptoms triggered by colds, allergens, or cold air",
      ],
      selfCare: [
        "Use your inhalers as prescribed, including the preventer daily",
        "Learn and avoid your personal triggers where you can",
        "Follow your written asthma action plan during flare-ups",
        "Keep a reliever inhaler with you and check your technique",
      ],
      seekCare: [
        "Call your local emergency number if breathing is very hard and the reliever is not helping",
        "You need your reliever inhaler more often than usual",
        "Symptoms wake you at night or limit your everyday activities",
      ],
    },
    {
      slug: "bronchitis",
      title: "Bronchitis",
      excerpt:
        "Inflammation of the airways that usually follows a cold and clears up on its own within a few weeks.",
      body: [
        "Bronchitis is inflammation of the larger airways, most often caused by a virus after a cold or flu. The lining of the airways becomes irritated and produces mucus, which leads to a cough that can linger. It is common, especially in winter, and is usually not serious in otherwise healthy people.",
        "Most cases of bronchitis settle by themselves as the body clears the infection, and antibiotics are usually not needed. Treatment is about staying comfortable, resting, and drinking plenty of fluids while the cough eases. The cough can take a few weeks to fully go, which is normal and not a cause for concern on its own.",
      ],
      symptoms: [
        "A persistent cough, often bringing up mucus",
        "A sore chest or rattly feeling when coughing",
        "Mild breathlessness or wheeze",
        "Tiredness and a blocked or runny nose",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Try warm drinks or honey to soothe the cough",
        "Take paracetamol or ibuprofen for aches if needed",
        "Avoid smoke and other irritants while you recover",
      ],
      seekCare: [
        "You become breathless, or have chest pain or a high fever",
        "The cough lasts more than about three weeks or keeps worsening",
        "You have a long-term lung or heart condition that is affected",
      ],
    },
    {
      slug: "viral-wheeze",
      title: "Cold-induced asthma / viral wheeze",
      excerpt:
        "Wheezing brought on by a cold, common in young children, that usually eases as they grow and the infection clears.",
      body: [
        "Viral wheeze is when a cold virus causes the small airways to narrow, leading to wheezing and a cough. It is very common in young children, whose airways are smaller and more easily irritated. In older children and adults, colds and viruses can similarly trigger asthma-like wheezing.",
        "Each episode usually settles as the cold clears, and many children grow out of it as their airways mature. Treatment often includes a reliever inhaler to open the airways during an episode. Keeping calm and following your inhaler plan helps both you and your child get through a flare-up more comfortably.",
      ],
      symptoms: [
        "Wheezing or a whistling sound that starts with a cold",
        "A cough, often worse at night",
        "Faster or harder breathing during the cold",
        "Symptoms that ease as the cold gets better",
      ],
      selfCare: [
        "Use the reliever inhaler as advised during an episode",
        "Keep your child calm, upright, and comfortable",
        "Offer plenty of fluids and small, frequent drinks",
        "Avoid smoke and other airway irritants at home",
      ],
      seekCare: [
        "Call your local emergency number if breathing is very fast or very laboured",
        "The reliever inhaler is not helping or is needed very often",
        "Your child is too breathless to feed, talk, or settle",
      ],
    },
    {
      slug: "copd",
      title: "COPD",
      excerpt:
        "A long-term lung condition that narrows the airways, where the right treatment and habits can keep you active and feeling better.",
      body: [
        "COPD (chronic obstructive pulmonary disease) is a long-term condition in which the airways become narrowed and the lungs less elastic, making breathing harder over time. It is most often linked to smoking, though other exposures can play a part. Symptoms usually develop gradually and include breathlessness and a long-standing cough.",
        "While COPD cannot be reversed, a lot can be done to ease symptoms, slow its progress, and keep you active. Stopping smoking is the single most helpful step, alongside inhalers, vaccinations, and gentle regular exercise. With good support, many people manage well and continue doing the things they enjoy.",
      ],
      symptoms: [
        "Breathlessness, especially on activity",
        "A long-standing cough, often with mucus",
        "Frequent chest infections",
        "Wheezing and tiredness",
      ],
      selfCare: [
        "Stop smoking, with support, as the most important step",
        "Use your inhalers and medicines as prescribed",
        "Stay active and try a pulmonary rehabilitation programme",
        "Keep up with flu and other recommended vaccinations",
      ],
      seekCare: [
        "Call your local emergency number for sudden severe breathlessness or blue lips",
        "Your breathing, cough, or mucus suddenly gets worse",
        "You have a fever or feel generally unwell with a chest infection",
      ],
    },
    {
      slug: "pneumonia",
      title: "Pneumonia",
      excerpt:
        "An infection that inflames the lungs, which most people recover from well with rest and the right treatment.",
      body: [
        "Pneumonia is an infection that causes the tiny air sacs in the lungs to become inflamed and filled with fluid, making breathing harder. It is usually caused by bacteria or viruses, often after a cold or flu. It can affect anyone, but very young children, older adults, and people with other health conditions need closer attention.",
        "Many people recover fully with rest, fluids, and antibiotics when the cause is bacterial. Milder cases can be managed at home, while more serious illness may need hospital care for oxygen and closer monitoring. Recovery can take a few weeks, and tiredness afterwards is common and usually improves with time.",
      ],
      symptoms: [
        "A cough, sometimes bringing up coloured mucus",
        "Fever, chills, and sweating",
        "Breathlessness and a fast heartbeat",
        "Chest pain that is worse when breathing or coughing",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Take any prescribed antibiotics exactly as directed",
        "Use paracetamol or ibuprofen for fever and discomfort",
        "Avoid smoking and give yourself time to recover fully",
      ],
      seekCare: [
        "Call your local emergency number for severe breathlessness, chest pain, or blue lips",
        "You have a high fever, confusion, or are getting worse",
        "Symptoms do not improve within a couple of days of treatment",
      ],
    },
  ],
};
