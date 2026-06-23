import type { FactCategory } from "./types";

export const bitesStings: FactCategory = {
  id: "bites-stings",
  name: "Animal & insect bites",
  description:
    "Bites, stings, and the infections they can carry, with first-aid and warning signs.",
  topics: [
    {
      slug: "lyme-disease",
      title: "Lyme disease",
      excerpt:
        "An infection passed on by some tick bites that is easy to treat with antibiotics when caught early.",
      body: [
        "Lyme disease is caused by bacteria that some ticks carry and can pass on through a bite. The classic early sign is a spreading circular rash around the bite, sometimes with mild flu-like symptoms. Not every tick carries the bacteria, and removing a tick promptly greatly lowers the risk.",
        "When recognised early, Lyme disease responds very well to a course of antibiotics, and most people make a full recovery. If you notice the typical rash or feel unwell after a tick bite, it is worth getting checked so treatment can start. Knowing how to remove ticks safely is the best protection.",
      ],
      symptoms: [
        "A spreading circular or bull's-eye rash around a bite",
        "Flu-like feelings such as tiredness, headache, or fever",
        "Aching muscles or joints",
        "Sometimes no rash at all, just feeling unwell",
      ],
      selfCare: [
        "Remove ticks promptly with fine tweezers, pulling steadily upwards",
        "Clean the bite area and wash your hands afterwards",
        "Check your skin after time outdoors in grass or woodland",
        "Note the date of the bite and watch the area for a rash",
      ],
      seekCare: [
        "You develop a spreading rash after a tick bite",
        "You feel feverish or unwell in the weeks after a bite",
        "You have new joint pain, facial weakness, or nerve symptoms",
      ],
    },
    {
      slug: "head-lice",
      title: "Head lice",
      excerpt:
        "Tiny harmless insects that live in the hair, very common in children, and straightforward to clear at home.",
      body: [
        "Head lice are small insects that live close to the scalp and feed on tiny amounts of blood. They spread by head-to-head contact and are very common among school-age children. They are a nuisance rather than a danger, and having them is not a sign of poor hygiene.",
        "Head lice are treated at home with wet combing using a fine-toothed comb and conditioner, or with a lotion from the pharmacy. It helps to check everyone in the household and to treat anyone affected at the same time. Most cases clear within a couple of weeks with careful, repeated combing.",
      ],
      symptoms: [
        "An itchy scalp, especially behind the ears and at the neck",
        "Tiny eggs (nits) stuck firmly to hairs near the scalp",
        "Live lice seen when combing wet hair",
        "A tickling feeling of movement in the hair",
      ],
      selfCare: [
        "Wet comb with conditioner and a fine-toothed lice comb",
        "Use a pharmacy lice lotion and repeat as directed",
        "Check other household members and treat together",
        "Comb again over the following days to catch any newly hatched lice",
      ],
      seekCare: [
        "The scalp becomes sore, weepy, or looks infected",
        "Treatments do not work after being used correctly",
        "You are unsure whether what you are seeing is head lice",
      ],
    },
    {
      slug: "insect-bites",
      title: "Insect bites",
      excerpt:
        "Bites and stings from insects are usually harmless and settle within a few days with simple care at home.",
      body: [
        "Insect bites and stings happen when an insect such as a mosquito, midge, or wasp pierces the skin. The body reacts to the saliva or venom, causing a small red, itchy, and sometimes swollen bump. Most bites are uncomfortable but harmless and fade over a few days.",
        "The main aim is to ease itching and swelling and to avoid scratching, which can lead to infection. Cool compresses, antihistamines, and soothing creams all help. Knowing the signs of a more serious reaction means you can act quickly on the rare occasions it is needed.",
      ],
      symptoms: [
        "A small red, raised, and itchy bump",
        "Mild swelling and warmth around the bite",
        "A stinging or burning feeling at first",
        "Several bites in a cluster after time outdoors",
      ],
      selfCare: [
        "Apply a cool compress to ease swelling and itching",
        "Use an antihistamine or a soothing anti-itch cream",
        "Try not to scratch, to avoid breaking the skin",
        "Use insect repellent and cover up to prevent further bites",
      ],
      seekCare: [
        "Call your local emergency number for swelling of the throat or trouble breathing",
        "The area becomes increasingly red, hot, painful, or weepy",
        "You feel generally unwell with fever after a bite or sting",
      ],
    },
    {
      slug: "scabies",
      title: "Scabies",
      excerpt:
        "An itchy skin condition caused by tiny mites that is very treatable once recognised.",
      body: [
        "Scabies is caused by tiny mites that burrow into the top layer of skin, triggering an intense itch that is often worse at night. It spreads through close, prolonged skin contact, so it can pass between people who live together. It can affect anyone and is not linked to being unclean.",
        "Scabies is cleared with a cream or lotion applied over the whole body, usually repeated once after about a week. Everyone in the household and any close contacts should be treated at the same time, even if they have no symptoms yet. The itch can take a few weeks to fully settle after successful treatment.",
      ],
      symptoms: [
        "Intense itching that is often worse at night",
        "A fine rash or tiny tracks, often between the fingers",
        "Itching around the wrists, waist, armpits, or groin",
        "Several people in the same household itching",
      ],
      selfCare: [
        "Apply the treatment cream over the whole body as directed",
        "Treat everyone in the household at the same time",
        "Wash bedding, towels, and clothes on a hot cycle",
        "Use moisturiser and antihistamines to ease the lingering itch",
      ],
      seekCare: [
        "The diagnosis is unclear or this is your first time",
        "Itching or rash continues weeks after correct treatment",
        "The skin becomes infected, with weeping, crusting, or spreading redness",
      ],
    },
    {
      slug: "tick-borne-encephalitis",
      title: "Tick-borne encephalitis",
      excerpt:
        "A rare viral infection spread by some tick bites that can be prevented with vaccination in affected areas.",
      body: [
        "Tick-borne encephalitis (TBE) is a viral infection that a small number of ticks can pass on through a bite. Many people who catch it have only mild, flu-like symptoms, though in some cases it can affect the brain and nervous system. It occurs in particular regions, and the risk depends on where you spend time outdoors.",
        "There is no specific cure, so treatment focuses on rest and easing symptoms while the body recovers, with hospital care if needed for more serious illness. The good news is that an effective vaccine is available and is recommended for people who live in or visit higher-risk areas. Avoiding tick bites remains a simple and useful protection.",
      ],
      symptoms: [
        "Flu-like illness with fever, headache, and tiredness",
        "Aching muscles a week or two after a tick bite",
        "In some cases a second phase with a severe headache",
        "Neck stiffness, confusion, or sensitivity to light if the brain is affected",
      ],
      selfCare: [
        "Consider TBE vaccination if you live in or visit affected areas",
        "Use repellent, cover up, and check for ticks after being outdoors",
        "Remove any ticks promptly with fine tweezers",
        "Rest and use paracetamol or ibuprofen for fever and aches",
      ],
      seekCare: [
        "You feel unwell with fever in the weeks after a tick bite",
        "You develop a severe headache, neck stiffness, or confusion",
        "You are unsure whether you need the TBE vaccine for travel",
      ],
    },
  ],
};
