import type { FactCategory } from "./types";

export const gynecology: FactCategory = {
  id: "gynecology",
  name: "Gynecology",
  description:
    "Women's intimate and reproductive health, from periods to menopause.",
  topics: [
    {
      slug: "bacterial-vaginosis",
      title: "Bacterial vaginosis",
      excerpt:
        "A common and harmless imbalance of the natural bacteria in the vagina that is easy to treat when it causes symptoms.",
      body: [
        "Bacterial vaginosis happens when the normal balance of bacteria in the vagina shifts, allowing certain types to become more dominant. It is very common, it is not a sexually transmitted infection, and it does not mean you have done anything wrong. The most typical sign is a thin, greyish discharge with a fishy smell that can be more noticeable after sex.",
        "Bacterial vaginosis sometimes settles on its own, and when it causes bother it clears quickly with a short course of antibiotic tablets or vaginal gel from a doctor or pharmacist. It can come back, which is frustrating but not harmful, and simple changes to how you wash can help reduce the chances of it returning.",
      ],
      symptoms: [
        "Thin, greyish or white discharge",
        "A fishy smell, often stronger after sex",
        "Usually little or no itching or soreness",
        "Symptoms that come and go",
      ],
      selfCare: [
        "Wash the outside area with warm water only, avoiding soaps and perfumed products",
        "Do not use douches or vaginal washes, which upset the natural balance",
        "Avoid putting strong soaps or bubble bath near the vagina",
        "Ask a pharmacist about treatments suitable for you",
      ],
      seekCare: [
        "Symptoms do not improve after treatment or keep coming back",
        "You have pain, fever, or unusual bleeding alongside the discharge",
        "You are pregnant, as treatment may be recommended",
      ],
    },
    {
      slug: "endometriosis",
      title: "Endometriosis",
      excerpt:
        "A common condition where tissue similar to the womb lining grows elsewhere, causing period pain that can be managed with the right support.",
      body: [
        "In endometriosis, tissue similar to the lining of the womb grows in other places, such as around the ovaries or pelvis. Each month this tissue responds to hormones in the same way as the womb lining, which can cause pain, inflammation, and sometimes scarring. It is a long-term condition, but it is common and you are far from alone in living with it.",
        "Endometriosis varies a great deal from person to person, and many people find their symptoms settle with the right combination of pain relief, hormonal treatment, and sometimes surgery. Getting a diagnosis can take time, so it is worth keeping a record of your symptoms and speaking to a doctor who can guide you through the options.",
      ],
      symptoms: [
        "Painful periods that interfere with daily life",
        "Pain in the pelvis or lower back, sometimes between periods",
        "Pain during or after sex",
        "Heavy periods or tiredness",
        "Difficulty getting pregnant for some people",
      ],
      selfCare: [
        "Use a heat pad or warm bath to ease cramping",
        "Take paracetamol or ibuprofen for pain when needed",
        "Keep a diary of your symptoms to share with your doctor",
        "Gentle exercise and rest can both help on bad days",
      ],
      seekCare: [
        "Period pain is severe or stops you doing everyday things",
        "Pain is getting worse or pain relief is not helping",
        "You are having trouble getting pregnant or have new pelvic symptoms",
      ],
    },
    {
      slug: "genital-skin-problems-women",
      title: "Genital skin problems in women",
      excerpt:
        "Itching, soreness, or changes in the skin of the genital area are common, usually harmless, and often easy to soothe.",
      body: [
        "The skin around the vulva is delicate and can become irritated, dry, or itchy for many everyday reasons, including soaps, tight clothing, sweating, or skin conditions such as eczema. Most genital skin problems are not caused by an infection and are nothing to be embarrassed about. Gentle care is often all that is needed to calm the skin.",
        "Many of these complaints settle once an irritant is removed and the skin is allowed to recover. If a particular skin condition is involved, simple moisturising treatments or a mild prescribed cream can make a real difference, and a doctor can examine the area to reassure you and suggest what will help.",
      ],
      symptoms: [
        "Itching, soreness, or stinging of the vulva",
        "Dry, flaky, or cracked skin",
        "Redness or a rash in the genital area",
        "Discomfort that worsens with certain products or clothing",
      ],
      selfCare: [
        "Wash with warm water only and pat the area dry gently",
        "Avoid perfumed soaps, wipes, and tight synthetic underwear",
        "Use a plain, unperfumed moisturiser if the skin is dry",
        "Choose loose cotton underwear to let the skin breathe",
      ],
      seekCare: [
        "Symptoms last more than a couple of weeks despite gentle care",
        "You notice a lump, sore, ulcer, or change in skin colour",
        "There is bleeding, severe pain, or a discharge with the skin changes",
      ],
    },
    {
      slug: "menopause",
      title: "Menopause",
      excerpt:
        "A natural stage of life when periods stop, bringing changes that can be eased with simple steps and effective treatments.",
      body: [
        "Menopause is the natural point when the ovaries gradually make less of the hormone oestrogen and periods come to an end, usually between the ages of about 45 and 55. The years of changing hormone levels leading up to it can bring symptoms such as hot flushes, mood changes, and disturbed sleep. This is a normal part of life, not an illness.",
        "Symptoms vary widely and often ease over time, but they can be very treatable while they last. Lifestyle measures help many people, and hormone replacement therapy or other treatments are available and effective if symptoms affect your daily life. A doctor can talk through what suits you and your health.",
      ],
      symptoms: [
        "Hot flushes and night sweats",
        "Irregular periods before they stop",
        "Mood changes, anxiety, or low mood",
        "Trouble sleeping and tiredness",
        "Vaginal dryness or reduced interest in sex",
      ],
      selfCare: [
        "Keep cool with light layers and a fan for hot flushes",
        "Stay active and aim for regular, good-quality sleep",
        "Limit triggers such as caffeine, alcohol, and spicy food if they bother you",
        "Use a vaginal moisturiser for dryness if needed",
      ],
      seekCare: [
        "Symptoms are affecting your daily life, work, or relationships",
        "You have any bleeding after your periods have fully stopped",
        "You want to discuss hormone replacement therapy or other treatments",
      ],
    },
    {
      slug: "pcos",
      title: "PCOS",
      excerpt:
        "A common hormonal condition that affects periods and other symptoms, and that can be well managed with the right support.",
      body: [
        "Polycystic ovary syndrome, or PCOS, is a common hormonal condition in which the ovaries work slightly differently, often leading to irregular periods and higher levels of certain hormones. It can cause symptoms such as acne, extra hair growth, and difficulty with weight, and it sometimes affects fertility. It is not your fault, and many people with PCOS live full and healthy lives.",
        "PCOS is a long-term condition, but its symptoms can be managed well with a mix of lifestyle measures and, where helpful, medicines. Treatment is tailored to what matters most to you, whether that is regulating periods, managing skin or hair changes, or planning a pregnancy. A doctor can help you find an approach that fits.",
      ],
      symptoms: [
        "Irregular or absent periods",
        "Acne or oily skin",
        "Extra hair growth on the face or body",
        "Difficulty losing weight",
        "Difficulty getting pregnant for some people",
      ],
      selfCare: [
        "Aim for regular physical activity, which helps the body use hormones better",
        "Eat balanced meals to support steady energy and weight",
        "Look after your skin gently and seek acne advice if needed",
        "Track your periods to share patterns with your doctor",
      ],
      seekCare: [
        "Your periods are very irregular or have stopped",
        "You are struggling with acne, hair growth, or weight",
        "You are trying to get pregnant and need advice",
      ],
    },
    {
      slug: "pms-pmdd",
      title: "PMS/PMDD",
      excerpt:
        "The physical and emotional changes some people feel before their period, which are common and can be eased with practical steps.",
      body: [
        "Premenstrual syndrome, or PMS, describes the physical and emotional symptoms that can appear in the days before a period, such as mood swings, tiredness, bloating, and tender breasts. Premenstrual dysphoric disorder, or PMDD, is a more severe form where the emotional symptoms are intense enough to affect daily life. Both are linked to natural hormone changes and are very common.",
        "These symptoms usually ease once a period starts and tend to follow a regular monthly pattern. Many people find relief through lifestyle changes and tracking their cycle, while more troublesome symptoms can be helped by treatments such as hormonal options or, for PMDD, other medicines. Support is available and there is no need to simply put up with it.",
      ],
      symptoms: [
        "Mood swings, irritability, or low mood before a period",
        "Bloating and tender breasts",
        "Tiredness and trouble sleeping",
        "Headaches or food cravings",
        "Symptoms that ease once the period begins",
      ],
      selfCare: [
        "Track your cycle to spot patterns and plan ahead",
        "Stay active and aim for regular sleep",
        "Eat regular, balanced meals and limit caffeine and alcohol",
        "Make time for rest and relaxation in the days before your period",
      ],
      seekCare: [
        "Symptoms are severe enough to affect work, study, or relationships",
        "You have very low mood, hopelessness, or thoughts of harming yourself",
        "Self-care steps are not helping and you would like treatment options",
      ],
    },
    {
      slug: "vaginal-yeast-infection",
      title: "Vaginal yeast infection",
      excerpt:
        "A very common and easily treated overgrowth of yeast that causes itching and discharge but is not harmful.",
      body: [
        "A vaginal yeast infection, often called thrush, happens when a yeast that normally lives in the body grows more than usual. It is extremely common, it is not a sexually transmitted infection, and it can be triggered by things like antibiotics, pregnancy, or simply changes in your body. The usual signs are itching and a thick white discharge.",
        "Thrush is not dangerous and clears quickly with antifungal treatment, which is available as a cream, pessary, or tablet from a pharmacy. It can return from time to time, which is common and not a sign that anything is seriously wrong, though frequent episodes are worth discussing with a doctor.",
      ],
      symptoms: [
        "Itching and soreness around the vagina and vulva",
        "Thick, white discharge, often described as like cottage cheese",
        "Stinging when passing urine or during sex",
        "Redness or swelling of the surrounding skin",
      ],
      selfCare: [
        "Use an antifungal treatment from a pharmacy as directed",
        "Wash with warm water only and avoid perfumed products",
        "Wear loose cotton underwear and avoid tight clothing",
        "Avoid soaps and shower gels on the sensitive area",
      ],
      seekCare: [
        "This is your first time and you are unsure of the cause",
        "Symptoms do not improve after treatment or keep returning",
        "You have pain in the lower abdomen, fever, or unusual bleeding",
      ],
    },
    {
      slug: "severe-period-pain",
      title: "Severe period pain",
      excerpt:
        "Painful periods are common and usually harmless, and there are effective ways to ease the discomfort.",
      body: [
        "Period pain happens when the womb tightens to shed its lining, and for some people these cramps can be strong enough to disrupt daily life. In most cases this is normal and not a sign of anything wrong, especially in younger people. The pain is usually felt low in the abdomen and may spread to the back and thighs.",
        "Period pain often eases with simple measures and tends to settle as the period goes on. When pain is severe, persistent, or new, it can occasionally point to an underlying cause such as endometriosis, which is why it is worth speaking to a doctor if pain relief is not enough. Effective help is available.",
      ],
      symptoms: [
        "Cramping pain low in the abdomen during a period",
        "Pain spreading to the lower back or thighs",
        "Pain that may come with nausea or tiredness",
        "Discomfort that eases as the period continues",
      ],
      selfCare: [
        "Use a heat pad or warm bath to relax the cramping muscles",
        "Take paracetamol or ibuprofen as needed for pain",
        "Try gentle movement such as walking or stretching",
        "Rest when you need to and stay hydrated",
      ],
      seekCare: [
        "Pain is severe, getting worse, or stops you doing everyday things",
        "Pain relief does not help or you have pain between periods",
        "You also have very heavy bleeding, pain during sex, or trouble conceiving",
      ],
    },
    {
      slug: "dry-mucous-membranes",
      title: "Dry mucous membranes",
      excerpt:
        "Dryness of the vaginal area is common, especially around menopause, and is usually easy to soothe with gentle care.",
      body: [
        "The mucous membranes of the vagina stay soft and comfortable thanks to natural moisture, which depends partly on the hormone oestrogen. When oestrogen levels fall, such as around menopause, while breastfeeding, or with certain medicines, these tissues can become drier and more delicate. This can cause itching, soreness, or discomfort during sex.",
        "Dry mucous membranes are common and not dangerous, and the discomfort can usually be eased well. Moisturisers and lubricants help many people, and where dryness is linked to low oestrogen a doctor can prescribe a gentle local treatment. There is no need to live with the discomfort in silence.",
      ],
      symptoms: [
        "Itching, soreness, or a burning feeling",
        "Discomfort or pain during sex",
        "A feeling of dryness or tightness",
        "Mild stinging when passing urine",
      ],
      selfCare: [
        "Use a vaginal moisturiser regularly to keep tissues comfortable",
        "Use a lubricant during sex to ease discomfort",
        "Wash with warm water only and avoid perfumed products",
        "Wear loose cotton underwear to reduce irritation",
      ],
      seekCare: [
        "Dryness is not helped by moisturisers and lubricants",
        "You have bleeding, an unusual discharge, or sores",
        "Discomfort is affecting your daily life or relationship",
      ],
    },
    {
      slug: "vestibulitis",
      title: "Vestibulitis / provoked vestibulodynia",
      excerpt:
        "A painful sensitivity at the entrance of the vagina that is real, treatable, and improves for most people with the right help.",
      body: [
        "Vestibulitis, also called provoked vestibulodynia, is pain and tenderness at the entrance of the vagina that is triggered by touch or pressure, such as during sex or when inserting a tampon. The skin may look normal, which can be confusing, but the pain is genuine and stems from sensitive nerves in the area. It is more common than many people realise.",
        "This is a long-term condition that tends to improve with patient, gradual treatment. Approaches such as gentle skin care, lubricants, physiotherapy for the pelvic floor, and sometimes specialist creams or other therapies help many people. A doctor or specialist can guide you through what is likely to work and offer reassurance along the way.",
      ],
      symptoms: [
        "Burning or stinging pain at the vaginal entrance when touched",
        "Pain during sex or when inserting a tampon",
        "Tenderness to light pressure in the area",
        "Skin that often looks normal despite the pain",
      ],
      selfCare: [
        "Use a gentle, unperfumed lubricant during sex",
        "Wash with warm water only and avoid soaps and wipes",
        "Wear loose cotton underwear to reduce irritation",
        "Try pelvic floor relaxation exercises as advised",
      ],
      seekCare: [
        "Pain is affecting your daily life, relationship, or wellbeing",
        "Self-care steps are not bringing enough relief",
        "You would like to discuss physiotherapy or specialist treatments",
      ],
    },
  ],
};
