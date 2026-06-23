import type { FactCategory } from "./types";

export const urology: FactCategory = {
  id: "urology",
  name: "Urology",
  description: "Conditions affecting the urinary tract and male reproductive health.",
  topics: [
    {
      slug: "erectile-dysfunction",
      title: "Erectile dysfunction / impotence",
      excerpt:
        "Trouble getting or keeping an erection is very common, often treatable, and frequently linked to stress, tiredness, or general health.",
      body: [
        "Erectile dysfunction means it is hard to get or keep an erection firm enough for sex. It happens to most men at some point and becomes more common with age. Causes can be physical, such as circulation problems, diabetes, or some medicines, or emotional, such as stress, anxiety, or relationship worries. Often several factors work together.",
        "The good news is that erectile dysfunction is usually very treatable once the cause is understood. Lifestyle changes, talking therapies, and effective medicines all help, and addressing underlying health conditions often improves things too. A doctor can talk this through calmly and find an approach that suits you.",
      ],
      symptoms: [
        "Difficulty getting an erection",
        "Difficulty keeping an erection long enough for sex",
        "Reduced interest in sex",
        "Worry or low confidence around intimacy",
      ],
      selfCare: [
        "Stay active, eat well, and keep to a healthy weight",
        "Cut down on alcohol and stop smoking",
        "Reduce stress and try to get enough sleep",
        "Talk openly with your partner to ease pressure",
      ],
      seekCare: [
        "The problem is persistent or causing you distress",
        "You also have chest pain or symptoms of heart or circulation trouble",
        "You have diabetes or take medicines that may be involved",
      ],
    },
    {
      slug: "phimosis",
      title: "Phimosis",
      excerpt:
        "A tight foreskin that will not pull back fully is common, often harmless, and usually manageable without surgery.",
      body: [
        "Phimosis is when the foreskin is too tight to be pulled back over the head of the penis. In young boys this is completely normal and usually resolves on its own as they grow. In adults it can follow inflammation, infection, or scarring, and may make cleaning or sex uncomfortable.",
        "Most cases settle with gentle care and time, and many do not need treatment at all. When it causes problems, simple steroid creams or, occasionally, a minor procedure can help. A doctor can advise on what is normal for your age and whether anything needs doing.",
      ],
      symptoms: [
        "Foreskin that will not pull back fully",
        "Tightness or discomfort during erections",
        "Redness or soreness at the tip",
        "Difficulty keeping the area clean",
      ],
      selfCare: [
        "Wash gently with warm water and avoid harsh soaps",
        "Do not force the foreskin back, as this can cause tearing",
        "Dry the area carefully to prevent irritation",
        "Use a steroid cream only if advised by a doctor",
      ],
      seekCare: [
        "The foreskin gets stuck behind the head and cannot be returned",
        "You have repeated infections, pain, or bleeding",
        "It is interfering with passing urine or with sex",
      ],
    },
    {
      slug: "premature-ejaculation",
      title: "Premature ejaculation",
      excerpt:
        "Reaching orgasm sooner than you would like is one of the most common sexual concerns and usually responds well to simple techniques.",
      body: [
        "Premature ejaculation means ejaculating sooner during sex than you or your partner would like. It is very common and often linked to anxiety, excitement, or simply being out of practice. For most men it is occasional and nothing to worry about.",
        "When it happens regularly and causes distress, there are effective approaches that help. Behavioural techniques, reducing performance anxiety, and sometimes creams or medicines can all make a real difference. Talking it through with a doctor or partner often takes a lot of the pressure away.",
      ],
      symptoms: [
        "Ejaculating very soon after penetration",
        "Feeling little control over when you ejaculate",
        "Frustration or avoidance of intimacy",
        "Anxiety about sexual performance",
      ],
      selfCare: [
        "Practise techniques such as the stop-start or squeeze method",
        "Try to relax and reduce pressure around sex",
        "Communicate openly with your partner",
        "Use a thicker condom or numbing cream if it helps",
      ],
      seekCare: [
        "It happens regularly and is causing you distress",
        "It is affecting your relationship or wellbeing",
        "It started suddenly alongside other new symptoms",
      ],
    },
    {
      slug: "incontinence",
      title: "Incontinence",
      excerpt:
        "Leaking urine unexpectedly is common at all ages, rarely serious, and very often improved with simple measures and support.",
      body: [
        "Incontinence means losing control of the bladder so that urine leaks before you reach the toilet. It can happen when you cough, laugh, or exercise, or come with a sudden strong urge to go. It becomes more common with age but is not an inevitable part of getting older.",
        "Many people feel embarrassed and put off seeking help, but incontinence is usually very treatable. Pelvic floor exercises, bladder training, and lifestyle changes help most people, and further options are available when needed. Talking to a doctor or nurse is the first step towards getting it under control.",
      ],
      symptoms: [
        "Leaking urine when coughing, laughing, or lifting",
        "A sudden, strong urge to pass urine",
        "Needing the toilet often, including at night",
        "Not always reaching the toilet in time",
      ],
      selfCare: [
        "Do regular pelvic floor exercises",
        "Cut down on caffeine and alcohol",
        "Keep to a healthy weight and stay active",
        "Avoid drinking large amounts late in the evening",
      ],
      seekCare: [
        "Leaking is affecting your daily life or confidence",
        "You also have pain, blood in the urine, or fever",
        "Symptoms come on suddenly or are getting worse",
      ],
    },
    {
      slug: "kidney-stones",
      title: "Kidney stones",
      excerpt:
        "Hard deposits that form in the kidneys can cause sharp pain but most pass on their own with fluids and time.",
      body: [
        "Kidney stones are hard lumps that form from minerals in the urine. Small ones may pass unnoticed, but larger ones can get stuck and cause sudden, severe pain in the back or side that may spread to the groin. Not drinking enough fluid is a common reason they form.",
        "Most small stones pass by themselves within a few weeks, helped by drinking plenty of water and pain relief. Larger stones sometimes need a hospital procedure to break them up or remove them. Once you have had a stone, simple changes can lower the chance of another forming.",
      ],
      symptoms: [
        "Sudden, severe pain in the back or side that comes in waves",
        "Pain spreading to the lower abdomen or groin",
        "Blood in the urine",
        "Feeling sick, restless, or needing to urinate often",
      ],
      selfCare: [
        "Drink plenty of water throughout the day",
        "Take paracetamol or ibuprofen for pain if needed",
        "Stay gently active rather than lying still",
        "Keep to a balanced diet and watch your salt intake",
      ],
      seekCare: [
        "Pain is severe, will not settle, or comes with vomiting",
        "You have a fever or chills alongside the pain",
        "You cannot pass urine or notice a lot of blood",
      ],
    },
    {
      slug: "prostate-cancer",
      title: "Prostate cancer",
      excerpt:
        "A common cancer in older men that often grows slowly, is frequently very treatable, and is increasingly caught early.",
      body: [
        "Prostate cancer develops in the prostate, a small gland that sits below the bladder in men. It is one of the most common cancers in men, especially after the age of fifty, and often grows slowly without causing symptoms early on. When symptoms do appear, they usually relate to passing urine.",
        "Many prostate cancers grow so slowly that they may only need careful monitoring, while others are treated with surgery, radiotherapy, or hormone treatment. Outcomes are often very good, particularly when the cancer is found early. A doctor can discuss testing and the right approach for your situation.",
      ],
      symptoms: [
        "Needing to urinate more often, especially at night",
        "Difficulty starting or a weak urine flow",
        "A feeling that the bladder is not fully empty",
        "Sometimes blood in the urine or semen",
      ],
      selfCare: [
        "Keep all follow-up appointments and tests",
        "Take any medicines exactly as prescribed",
        "Stay active and eat a balanced diet to support your health",
        "Tell someone you trust how you are feeling",
      ],
      seekCare: [
        "You have ongoing changes in how you pass urine",
        "You notice blood in your urine or semen",
        "You have new bone pain, unexplained weight loss, or fatigue",
      ],
    },
    {
      slug: "urinary-incontinence",
      title: "Urinary incontinence",
      excerpt:
        "Unintended leaking of urine is very common, comes in different forms, and usually improves a great deal with the right help.",
      body: [
        "Urinary incontinence is the unintended leaking of urine. The most common forms are stress incontinence, where leaks happen with coughing or exercise, and urge incontinence, where a sudden need to go is hard to control. It affects both men and women and becomes more common with age and after childbirth.",
        "Although it can feel embarrassing, urinary incontinence is usually very treatable and there is no need to simply put up with it. Pelvic floor exercises, bladder training, and lifestyle changes help most people, with further treatments available if needed. A doctor or continence nurse can guide you through the options.",
      ],
      symptoms: [
        "Leaking urine when coughing, sneezing, or exercising",
        "A sudden, urgent need to pass urine",
        "Frequent trips to the toilet, including at night",
        "Occasional leaks before reaching the toilet",
      ],
      selfCare: [
        "Practise pelvic floor exercises regularly",
        "Try bladder training to space out toilet visits",
        "Reduce caffeine and alcohol",
        "Keep to a healthy weight and stay active",
      ],
      seekCare: [
        "Leaking affects your daily activities or confidence",
        "There is pain, blood in the urine, or signs of infection",
        "Symptoms start suddenly or steadily get worse",
      ],
    },
  ],
};
