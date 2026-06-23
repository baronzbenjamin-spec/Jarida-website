import type { FactCategory } from "./types";

export const sti: FactCategory = {
  id: "sti",
  name: "Sexually transmitted infections",
  description:
    "Sexually transmitted infections, their symptoms, and the importance of testing.",
  topics: [
    {
      slug: "pubic-lice",
      title: "Pubic lice",
      excerpt:
        "Tiny insects that live in coarse body hair and cause itching, which are common, harmless, and easy to treat.",
      body: [
        "Pubic lice, sometimes called crabs, are small insects that live in coarse body hair, most often around the genitals. They spread mainly through close body contact, including sex, and are nothing to feel ashamed about. The main sign is itching, which is often worse at night, and you may be able to see the tiny lice or their eggs on the hairs.",
        "Pubic lice are not dangerous and clear easily with a treatment lotion or cream from a pharmacy applied to the affected areas. It is sensible for partners to be treated at the same time, and washing bedding and towels on a hot wash helps stop them coming back. Most people are clear after one or two treatments.",
      ],
      symptoms: [
        "Itching in the genital area, often worse at night",
        "Tiny lice or pale eggs on the hairs",
        "Small spots of blood or dark specks in underwear",
        "Mild irritation or redness of the skin",
      ],
      selfCare: [
        "Use a pubic lice treatment lotion or cream from a pharmacy",
        "Treat all affected hairy areas, not just the genitals",
        "Wash bedding, towels, and clothing on a hot wash",
        "Make sure recent partners are treated at the same time",
      ],
      seekCare: [
        "The itching continues after treatment or the lice return",
        "The skin becomes very sore, broken, or infected",
        "You would like a check for other sexually transmitted infections",
      ],
    },
    {
      slug: "genital-herpes",
      title: "Genital herpes",
      excerpt:
        "A common viral infection that causes occasional sores and is very manageable, even though it stays in the body.",
      body: [
        "Genital herpes is caused by a common virus and is passed on through skin-to-skin contact during sex. The first episode can cause painful blisters or sores around the genitals, sometimes with flu-like feelings, while later episodes are usually milder and shorter. Many people carry the virus without ever knowing, so a diagnosis does not mean anyone has done anything wrong.",
        "The virus stays in the body and can cause occasional outbreaks, but these tend to become less frequent over time. Antiviral medicines ease symptoms and can reduce how often outbreaks happen, and simple self-care helps during a flare. With understanding and support, genital herpes is very manageable and does not stop people having healthy relationships.",
      ],
      symptoms: [
        "Painful blisters or sores around the genitals or anus",
        "Stinging or pain when passing urine",
        "Flu-like feelings during a first outbreak",
        "Tingling or itching before sores appear",
      ],
      selfCare: [
        "Keep the area clean and dry and avoid touching the sores",
        "Take paracetamol or ibuprofen for pain if needed",
        "Use a salt water bath or cool compress to soothe soreness",
        "Avoid sex while you have symptoms to protect partners",
      ],
      seekCare: [
        "You have painful sores and want them checked and treated",
        "Outbreaks are frequent or severe and you want medication",
        "You are pregnant, as your care can be planned to protect the baby",
      ],
    },
    {
      slug: "genital-warts",
      title: "Genital warts",
      excerpt:
        "Small harmless growths caused by a common virus that can be treated and often clear on their own over time.",
      body: [
        "Genital warts are small, soft growths around the genitals or anus caused by certain types of the human papillomavirus, which spreads through skin contact during sex. They are very common and harmless, even if they can feel worrying or embarrassing at first. They are usually painless, though some people notice itching or mild discomfort.",
        "Genital warts often clear on their own as the body deals with the virus, and treatments such as creams or freezing can help them go more quickly. The HPV vaccine offers good protection against the types that cause most warts. A doctor or sexual health clinic can confirm what they are and suggest the best treatment for you.",
      ],
      symptoms: [
        "Small, soft lumps around the genitals or anus",
        "Warts that may appear singly or in clusters",
        "Occasional itching or mild discomfort",
        "Usually no pain or bleeding",
      ],
      selfCare: [
        "Avoid scratching or picking at the warts",
        "Use treatments from a clinic or pharmacy as directed",
        "Use condoms to reduce passing the virus to partners",
        "Consider the HPV vaccine if you have not had it",
      ],
      seekCare: [
        "You notice new lumps and want them checked",
        "Warts are bleeding, painful, or not clearing with treatment",
        "You would like a full sexual health check or advice on the vaccine",
      ],
    },
    {
      slug: "chlamydia",
      title: "Chlamydia",
      excerpt:
        "A very common sexually transmitted infection that often has no symptoms but is simple to test for and easy to cure.",
      body: [
        "Chlamydia is one of the most common sexually transmitted infections and is passed on through unprotected sex. Many people have no symptoms at all, which is why it can spread without anyone knowing, so regular testing is the only reliable way to find it. When symptoms do appear, they can include unusual discharge or pain when passing urine.",
        "Chlamydia is easily cured with a short course of antibiotics, and the sooner it is treated the better, as untreated infection can occasionally affect fertility. Testing is quick, free at sexual health clinics in many places, and nothing to feel awkward about. Recent partners should also be tested and treated to stop it being passed back and forth.",
      ],
      symptoms: [
        "Often no symptoms at all",
        "Unusual discharge from the vagina or penis",
        "Pain or burning when passing urine",
        "Pain in the lower abdomen or during sex",
        "Bleeding between periods or after sex",
      ],
      selfCare: [
        "Get tested if you have had unprotected sex or a new partner",
        "Take the full course of antibiotics exactly as prescribed",
        "Avoid sex until you and your partner have finished treatment",
        "Use condoms to lower the risk of future infections",
      ],
      seekCare: [
        "You have symptoms such as discharge or pain passing urine",
        "You or a partner have tested positive and need treatment",
        "You have lower abdominal pain or fever, which need prompt review",
      ],
    },
    {
      slug: "gonorrhea",
      title: "Gonorrhea",
      excerpt:
        "A common sexually transmitted infection that is straightforward to test for and treat, especially when caught early.",
      body: [
        "Gonorrhea is a sexually transmitted infection passed on through unprotected sex. It can cause symptoms such as unusual discharge or pain when passing urine, though many people, especially women, have no symptoms at all. Because it can be silent, regular testing is the best way to catch it, and a diagnosis is nothing to be ashamed of.",
        "Gonorrhea is treated effectively, usually with an antibiotic injection along with tablets, and most people recover fully when treated promptly. Leaving it untreated can occasionally lead to complications, including effects on fertility, so early testing and treatment matter. Recent partners should be tested and treated too, and a follow-up check confirms the infection has cleared.",
      ],
      symptoms: [
        "Often no symptoms, particularly in women",
        "Unusual discharge from the vagina or penis",
        "Pain or burning when passing urine",
        "Pain in the lower abdomen or testicles",
        "Bleeding between periods or after sex",
      ],
      selfCare: [
        "Get tested if you have had unprotected sex or a new partner",
        "Have the full treatment as advised by the clinic",
        "Avoid sex until you and your partner have completed treatment",
        "Use condoms to reduce the risk of future infections",
      ],
      seekCare: [
        "You have discharge, pain passing urine, or other symptoms",
        "You or a partner have tested positive and need treatment",
        "You have lower abdominal pain, testicular pain, or fever",
      ],
    },
  ],
};
