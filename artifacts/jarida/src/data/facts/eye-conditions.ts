import type { FactCategory } from "./types";

export const eyeConditions: FactCategory = {
  id: "eye-conditions",
  name: "Eye conditions",
  description:
    "Common eye complaints and infections, and when an eye needs urgent attention.",
  topics: [
    {
      slug: "eye-herpes",
      title: "Eye herpes",
      excerpt:
        "An infection of the eye caused by the cold sore virus that usually responds well to prompt treatment.",
      body: [
        "Eye herpes is an infection caused by the herpes simplex virus, the same virus behind cold sores. It can affect the surface or deeper parts of the eye, causing redness, discomfort, and watering. Flare-ups can come back from time to time, often when you are run down or unwell.",
        "With prompt treatment using antiviral eye drops or ointment, most people recover well and protect their sight. Because the eye is delicate, it is important to have any suspected eye herpes assessed quickly rather than treating it at home. Avoiding touching or rubbing the eye helps prevent it spreading.",
      ],
      symptoms: [
        "A red, sore, or watering eye",
        "Sensitivity to light",
        "A gritty feeling, as if something is in the eye",
        "Blurred vision or a small blister near the eye",
      ],
      selfCare: [
        "Avoid rubbing or touching the affected eye",
        "Wash your hands often to avoid spreading the virus",
        "Do not wear contact lenses until it has cleared",
        "Use only treatments prescribed for your eye",
      ],
      seekCare: [
        "Seek same-day eye care for a painful red eye with light sensitivity",
        "Your vision becomes blurred or changes",
        "Symptoms keep returning or do not improve with treatment",
      ],
    },
    {
      slug: "stye",
      title: "Stye",
      excerpt:
        "A small, tender lump on the eyelid caused by a blocked gland that usually clears on its own within a week or so.",
      body: [
        "A stye is a small, painful lump that forms at the edge of the eyelid when a tiny gland or eyelash follicle becomes blocked and infected. It looks a little like a pimple and can make the eyelid red and tender. Styes are common and, although uncomfortable, are usually harmless.",
        "Most styes come to a head and drain by themselves within a week or two without any specific treatment. Warm compresses speed things up by helping the blockage clear. It is best not to squeeze a stye, as this can make it worse and spread the infection.",
      ],
      symptoms: [
        "A tender red lump on the eyelid edge",
        "Swelling and soreness of the eyelid",
        "A watery eye",
        "A gritty feeling on the affected side",
      ],
      selfCare: [
        "Hold a clean warm compress on the eye a few times a day",
        "Avoid squeezing or bursting the stye",
        "Keep the eyelid clean and avoid eye make-up for now",
        "Do not wear contact lenses until it has settled",
      ],
      seekCare: [
        "The stye does not improve after a week or two",
        "Swelling spreads across the eyelid or to the cheek",
        "Your vision is affected or the eye becomes very painful",
      ],
    },
    {
      slug: "eye-problems",
      title: "Eye problems",
      excerpt:
        "Most everyday eye complaints are minor and settle quickly, though it is worth knowing the few signs that need prompt attention.",
      body: [
        "Eye problems cover a wide range of everyday complaints, from dryness, irritation, and redness to watering or tired eyes. They are often caused by screen use, tiredness, allergies, or a minor infection. Most are mild and improve with simple care and a little rest for your eyes.",
        "Because sight is precious, it helps to know which symptoms can be managed at home and which need checking. Pain, sudden changes in vision, or a very red eye are signs to get reviewed promptly. For most other complaints, gentle care and time are all that is needed.",
      ],
      symptoms: [
        "Redness, dryness, or irritation",
        "Watering or itchy eyes",
        "Tired or strained eyes after screen use",
        "A gritty feeling or mild discomfort",
      ],
      selfCare: [
        "Rest your eyes and take regular breaks from screens",
        "Use lubricating drops for dryness or irritation",
        "Avoid rubbing your eyes and remove eye make-up gently",
        "If a chemical splashes in your eye, rinse it at once with plenty of clean water for at least fifteen minutes, then seek care",
      ],
      seekCare: [
        "Seek prompt eye care for sudden vision loss or a very painful red eye",
        "You have flashing lights, new floaters, or a curtain over your vision",
        "Symptoms persist, worsen, or follow a chemical splash or injury to the eye",
      ],
    },
    {
      slug: "conjunctivitis",
      title: "Conjunctivitis",
      excerpt:
        "A common inflammation of the surface of the eye that is usually mild and clears up within a week or two.",
      body: [
        "Conjunctivitis is inflammation of the conjunctiva, the thin clear layer covering the white of the eye and the inside of the eyelids. It can be caused by a virus, bacteria, or an allergy, and makes the eye red, watery, and sometimes sticky. It is very common and usually affects both eyes in turn.",
        "Most cases settle by themselves within a week or two, and treatment is mainly about keeping the eye clean and comfortable. Infectious conjunctivitis spreads easily, so good hand washing helps protect others. Allergic conjunctivitis improves with antihistamines and by avoiding the trigger.",
      ],
      symptoms: [
        "Red or pink, watery eyes",
        "A sticky or crusty discharge, especially in the morning",
        "A gritty or itchy feeling",
        "Both eyes affected, often one after the other",
      ],
      selfCare: [
        "Gently wipe the eyes with cooled boiled water and clean cotton wool",
        "Wash your hands often and use your own towel",
        "Avoid contact lenses and eye make-up until it clears",
        "Use antihistamines if the cause is an allergy",
      ],
      seekCare: [
        "The eye is very painful or your vision is affected",
        "There is intense redness, light sensitivity, or thick discharge",
        "Symptoms do not improve within a week or two",
      ],
    },
    {
      slug: "blepharitis",
      title: "Eyelid inflammation / blepharitis",
      excerpt:
        "A common, long-term inflammation of the eyelid edges that is harmless and managed well with simple daily care.",
      body: [
        "Blepharitis is inflammation of the edges of the eyelids, where the eyelashes grow. It often happens when tiny oil glands along the lid become blocked or when skin conditions affect the area. It causes sore, crusty, or itchy eyelids and tends to come and go over time.",
        "Blepharitis is not harmful and does not usually affect sight, but it can be persistent. A simple daily routine of warm compresses and gentle lid cleaning keeps it under control. Because it is a long-term tendency, keeping up the routine even when things settle helps prevent flare-ups.",
      ],
      symptoms: [
        "Red, sore, or itchy eyelid edges",
        "Crusty or flaky lashes, often worse in the morning",
        "A gritty or burning feeling in the eyes",
        "Eyelids that stick together on waking",
      ],
      selfCare: [
        "Hold a warm compress on the eyelids for a few minutes",
        "Gently clean the lid edges with a clean cloth or lid wipe daily",
        "Keep up the routine even when symptoms settle",
        "Avoid eye make-up during flare-ups",
      ],
      seekCare: [
        "The eye becomes painful, very red, or your vision changes",
        "Symptoms do not improve with regular lid care",
        "You notice swelling, a lump, or loss of eyelashes",
      ],
    },
  ],
};
