import type { FactCategory } from "./types";

export const fertilityPregnancy: FactCategory = {
  id: "fertility-pregnancy",
  name: "Fertility & pregnancy",
  description:
    "Guidance through pregnancy, birth recovery, and planning a family.",
  topics: [
    {
      slug: "breastfeeding",
      title: "Breastfeeding",
      excerpt:
        "A natural way to feed your baby that takes practice for many parents, with plenty of support available when you need it.",
      body: [
        "Breastfeeding provides your baby with nourishment and comfort, and your body adjusts the amount of milk to meet their needs. Many parents find the early days take patience as both they and the baby learn, and it is completely normal to need time and help to get comfortable. Sore nipples and a feeling of fullness in the early weeks are common and usually settle.",
        "Most feeding challenges, such as latching difficulties or worries about supply, improve with simple adjustments and good support. Midwives, health visitors, and breastfeeding counsellors can offer practical guidance, and however you choose to feed your baby, the goal is that you both stay healthy and content. Fed is best, and support is there whatever path you take.",
      ],
      symptoms: [
        "Sore or tender nipples in the early days",
        "Breasts that feel full or firm between feeds",
        "Uncertainty about whether the baby is latching well",
        "Worries about whether the baby is getting enough milk",
      ],
      selfCare: [
        "Find a comfortable position and bring the baby to the breast",
        "Feed often and let the baby finish one side before offering the other",
        "Keep nipples dry between feeds and use a plain moisturiser if sore",
        "Rest when you can and drink plenty of fluids",
      ],
      seekCare: [
        "You have a red, painful area on the breast with fever or feeling unwell",
        "The baby is not feeding well, not having wet nappies, or not gaining weight",
        "Feeding is very painful or you are struggling and want support",
      ],
    },
    {
      slug: "pelvic-girdle-pain",
      title: "Pelvic girdle pain during pregnancy",
      excerpt:
        "A common and harmless pain in the pelvis during pregnancy that usually eases with gentle care and settles after birth.",
      body: [
        "Pelvic girdle pain is discomfort felt in the joints of the pelvis during pregnancy, often at the front or back, and sometimes spreading to the hips or thighs. It happens as the body softens and adjusts to make room for the baby, and it is very common. It can make walking, turning over in bed, or climbing stairs uncomfortable, but it does not harm the baby.",
        "The pain usually improves with simple measures and tends to settle in the weeks after birth. Physiotherapy is helpful for many people, and small changes to how you move can make daily life more comfortable. A midwife or physiotherapist can show you supportive exercises and reassure you about what to expect.",
      ],
      symptoms: [
        "Pain at the front or back of the pelvis",
        "Discomfort when walking, climbing stairs, or turning in bed",
        "Pain spreading to the hips, thighs, or lower back",
        "A clicking or grinding feeling in the pelvis",
      ],
      selfCare: [
        "Move little and often, avoiding standing for long periods",
        "Keep your knees together when getting in and out of bed or a car",
        "Rest when you need to and use a pillow between your knees at night",
        "Ask about pregnancy-safe physiotherapy exercises",
      ],
      seekCare: [
        "Pain is severe or stopping you doing everyday things",
        "You are struggling to walk or move around the house",
        "You want a referral to a physiotherapist for support",
      ],
    },
    {
      slug: "postpartum-depression",
      title: "Postpartum depression",
      excerpt:
        "A common and treatable low mood after having a baby that is not your fault and improves with the right support.",
      body: [
        "Postpartum depression is a low mood that lasts beyond the first couple of weeks after birth, and it is more than the short-lived baby blues that many parents feel. It can bring persistent sadness, tiredness, anxiety, and a sense of being unable to cope or bond with the baby. It is common, it is an illness rather than a weakness, and it is absolutely not your fault.",
        "With support, postpartum depression usually improves well. Talking therapies help many people, and medicines can be used safely when needed, including while breastfeeding, under a doctor's guidance. Reaching out early to a midwife, health visitor, or doctor makes recovery quicker, and you do not have to manage this on your own.",
      ],
      symptoms: [
        "Persistent low mood, tearfulness, or emptiness",
        "Feeling unable to cope or bond with the baby",
        "Anxiety, irritability, or trouble sleeping even when the baby sleeps",
        "Loss of interest in things you usually enjoy",
        "Feelings of guilt or that you are not a good enough parent",
      ],
      selfCare: [
        "Tell someone you trust how you are feeling",
        "Accept help with the baby and household tasks where you can",
        "Rest when the baby sleeps and try to eat regularly",
        "Get outside for fresh air and gentle activity when possible",
      ],
      seekCare: [
        "Low mood lasts more than two weeks or is getting worse",
        "You are struggling to care for yourself or your baby",
        "You have thoughts of harming yourself or your baby, which need urgent help",
      ],
    },
    {
      slug: "miscarriage",
      title: "Miscarriage",
      excerpt:
        "The loss of a pregnancy in the early weeks, which is common and not caused by anything you did, with support available.",
      body: [
        "A miscarriage is the loss of a pregnancy, most often in the first few months. It is far more common than many people realise, and in most cases it happens because the pregnancy was not developing as it should, not because of anything you did or did not do. The main signs are vaginal bleeding and cramping, though bleeding in early pregnancy does not always mean a miscarriage.",
        "Physically, an early miscarriage often passes on its own, while sometimes medicine or a small procedure is needed, and a doctor will talk you through the options. The emotional side can be just as important, and feelings of grief are natural and valid. Support is available from your care team and from organisations who understand pregnancy loss.",
      ],
      symptoms: [
        "Vaginal bleeding, which may be light or heavy",
        "Cramping or pain low in the abdomen",
        "Passing clots or tissue",
        "A loss of pregnancy symptoms such as nausea or tender breasts",
      ],
      selfCare: [
        "Rest and use paracetamol for cramping pain if needed",
        "Use sanitary pads rather than tampons while bleeding",
        "Allow yourself time to grieve and lean on people you trust",
        "Reach out to a pregnancy loss support service if it helps",
      ],
      seekCare: [
        "You have very heavy bleeding, severe pain, fever, or feel faint",
        "You have any bleeding or pain in early pregnancy and want it checked",
        "You are struggling emotionally and would like support",
      ],
    },
    {
      slug: "natural-contraception",
      title: "Natural contraceptive methods",
      excerpt:
        "Hormone-free ways to plan or avoid pregnancy by tracking your cycle, which suit some people well with care and learning.",
      body: [
        "Natural contraceptive methods, sometimes called fertility awareness, involve tracking signs of your menstrual cycle to work out the days when you are most likely to conceive. By watching things like body temperature, cervical mucus, and cycle length, you can identify fertile days and either avoid sex or use a barrier method then. These methods are free of hormones and have no medical side effects.",
        "Used carefully and consistently, fertility awareness can work well for some people, though it takes commitment and learning, and it is less reliable if your cycles are irregular or your routine changes. It does not protect against sexually transmitted infections. A doctor or family planning nurse can explain how to track your cycle accurately and whether it suits you.",
      ],
      symptoms: [
        "Tracking changes in cervical mucus through the cycle",
        "Recording body temperature each morning",
        "Noting the length and pattern of your periods",
        "Identifying the fertile window each month",
      ],
      selfCare: [
        "Learn the method properly from a reliable source or nurse",
        "Keep careful, consistent daily records of your fertility signs",
        "Use a barrier method or avoid sex on fertile days if avoiding pregnancy",
        "Remember this does not protect against sexually transmitted infections",
      ],
      seekCare: [
        "Your cycles are irregular and hard to track reliably",
        "You want to discuss how effective this method is for you",
        "You would like advice on other contraceptive options",
      ],
    },
    {
      slug: "contraception",
      title: "Contraceptives and contraceptive methods",
      excerpt:
        "There are many safe and effective ways to prevent pregnancy, and a doctor can help you find the one that suits you.",
      body: [
        "Contraception is any method used to prevent pregnancy, and there is a wide range to choose from, including the pill, implants, coils, injections, and barrier methods such as condoms. Each works in a different way, and some also help with other things like heavy or painful periods. Most methods are very effective and safe for the great majority of people.",
        "Choosing contraception is a personal decision, and what suits you can change over time and through different stages of life. A doctor or family planning nurse can talk you through the benefits and any side effects so you can pick what fits your needs. Remember that condoms are the only method that also protects against sexually transmitted infections.",
      ],
      symptoms: [
        "Wanting to prevent pregnancy reliably",
        "Looking for help with heavy or painful periods",
        "Needing protection against sexually transmitted infections",
        "Wanting a method that fits your routine and health",
      ],
      selfCare: [
        "Read about the different methods so you know your options",
        "Use condoms to protect against sexually transmitted infections",
        "Take or use your chosen method consistently as directed",
        "Note any side effects to discuss at a review",
      ],
      seekCare: [
        "You have side effects that bother you or do not settle",
        "You have missed pills or think your method may have failed",
        "You want to change method or discuss what suits you best",
      ],
    },
  ],
};
