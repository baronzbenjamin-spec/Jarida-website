import type { FactCategory } from "./types";

export const skin: FactCategory = {
  id: "skin",
  name: "Skin",
  description:
    "Rashes, spots, and skin complaints, with calm guidance on care and when to seek help.",
  topics: [
    {
      slug: "acne",
      title: "Acne",
      excerpt:
        "A very common skin condition where blocked pores cause spots, mostly on the face, back, and chest, that usually improves with time and care.",
      body: [
        "Acne happens when tiny hair follicles become blocked with oil and dead skin cells, which lets bacteria multiply and the skin become inflamed. It is especially common in the teenage years because hormones make the skin produce more oil, but adults can have it too. It is not caused by poor hygiene, and it is one of the most ordinary parts of growing up.",
        "Most acne settles over time and responds well to gentle, consistent care. Treatments from the pharmacy can help milder spots, and stronger options are available from a doctor if needed, so there is no reason to struggle on alone if it is bothering you.",
      ],
      symptoms: [
        "Blackheads and whiteheads on the face, chest, or back",
        "Red, tender spots or pus-filled pimples",
        "Oily or shiny skin",
        "Occasional deeper, painful lumps under the skin",
      ],
      selfCare: [
        "Wash affected skin gently twice a day with a mild cleanser",
        "Avoid squeezing or picking spots, which can cause scarring",
        "Try a pharmacy product containing benzoyl peroxide",
        "Use non-greasy, water-based skin and make-up products",
      ],
      seekCare: [
        "Spots are severe, painful, or leaving scars",
        "Pharmacy treatments have not helped after a couple of months",
        "The acne is affecting your mood or confidence",
      ],
    },
    {
      slug: "atopic-eczema",
      title: "Atopic eczema",
      excerpt:
        "A common, long-term condition where the skin becomes dry, itchy, and inflamed, often starting in childhood and tending to come and go.",
      body: [
        "Atopic eczema occurs when the skin's natural barrier does not hold moisture well, so it dries out and reacts easily to irritants and allergens. It often runs in families alongside asthma and hay fever, and it commonly appears in the folds of the elbows, knees, neck, and around the eyes. Flare-ups can be triggered by soaps, heat, stress, or changes in the weather.",
        "Although it is a condition that tends to last, most children improve as they grow, and for everyone it can be well controlled with regular moisturising and treatment of flares. The aim is to keep the skin comfortable and settle the itch, and good support is available if it is hard to manage.",
      ],
      symptoms: [
        "Dry, scaly, or cracked skin",
        "Intense itching, often worse at night",
        "Red or inflamed patches, often in skin folds",
        "Skin that thickens with repeated scratching",
      ],
      selfCare: [
        "Apply a fragrance-free moisturiser generously and often",
        "Use a soap substitute instead of ordinary soap",
        "Avoid known triggers such as overheating or harsh detergents",
        "Keep nails short to limit damage from scratching",
      ],
      seekCare: [
        "The skin becomes weepy, crusted, or looks infected",
        "Itching disturbs sleep or daily life despite moisturising",
        "Flare-ups are frequent or not settling with usual care",
      ],
    },
    {
      slug: "swimmers-itch",
      title: "Swimmer's itch",
      excerpt:
        "A short-lived itchy rash that can appear after swimming in fresh water, caused by a harmless reaction to tiny waterborne parasites.",
      body: [
        "Swimmer's itch happens when larvae of certain parasites, which normally live in birds and snails, briefly burrow into human skin while you swim in warm fresh water such as lakes. The parasites cannot survive in people and die almost at once, but the body reacts to them with an itchy rash. It is not contagious and cannot be passed from one person to another.",
        "The rash is uncomfortable but harmless, and it usually clears on its own within a week or two as the skin settles. Treatment is simply about easing the itch while your skin recovers, and it leaves no lasting marks.",
      ],
      symptoms: [
        "Tingling or itching skin soon after swimming",
        "Small red spots or raised bumps on exposed skin",
        "Itching that can become intense over a day or two",
        "Rash mainly where skin was not covered by a swimsuit",
      ],
      selfCare: [
        "Resist scratching, which can break the skin",
        "Apply a cool compress or calamine lotion to ease the itch",
        "Try a pharmacy antihistamine or mild steroid cream if needed",
        "Towel off and rinse with clean water after swimming",
      ],
      seekCare: [
        "The spots become very painful, swollen, or filled with pus",
        "The rash spreads widely or does not improve after a couple of weeks",
        "You feel generally unwell or develop a fever",
      ],
    },
    {
      slug: "dyshidrotic-eczema",
      title: "Dyshidrotic eczema",
      excerpt:
        "A type of eczema causing small, itchy blisters on the hands and feet that flares up and then settles, often over a few weeks.",
      body: [
        "Dyshidrotic eczema causes clusters of tiny, deep-seated blisters along the sides of the fingers, on the palms, and sometimes the soles. The exact cause is not fully understood, but it is linked to stress, sweating, and contact with irritants or metals such as nickel. It is not contagious, even though the blisters can look dramatic.",
        "Flare-ups usually settle within a few weeks, after which the skin may peel and feel dry before returning to normal. Treatment focuses on calming the itch and protecting the skin, and a doctor can offer stronger creams if simple measures are not enough.",
      ],
      symptoms: [
        "Small fluid-filled blisters on fingers, palms, or soles",
        "Itching or a burning feeling before blisters appear",
        "Dry, cracked, or peeling skin as blisters heal",
        "Skin that feels tender or sore in flare-ups",
      ],
      selfCare: [
        "Moisturise the hands and feet often, especially after washing",
        "Avoid harsh soaps and wear gloves for wet or dirty tasks",
        "Resist popping the blisters to lower the risk of infection",
        "Try to identify and reduce contact with possible triggers",
      ],
      seekCare: [
        "Blisters become very painful, weepy, or look infected",
        "The rash keeps coming back or interferes with daily tasks",
        "Self-care has not helped after a couple of weeks",
      ],
    },
    {
      slug: "eczema",
      title: "Eczema",
      excerpt:
        "A common condition where patches of skin become dry, itchy, and inflamed, which can usually be soothed and well controlled with regular care.",
      body: [
        "Eczema is a general term for skin that is dry, easily irritated, and prone to itchy, inflamed patches. It happens because the skin barrier does not hold moisture as well as it should, so the skin reacts to things like soaps, heat, rough fabrics, and stress. There are several types, but they share the same need for gentle, consistent care.",
        "Eczema tends to come and go in flare-ups rather than being constant, and between flares the skin often looks normal. Most people manage it well by keeping the skin moisturised and treating flares early, and a doctor can help if it is stubborn or widespread.",
      ],
      symptoms: [
        "Dry, rough, or scaly patches of skin",
        "Itching that can be persistent or intense",
        "Red or darkened, inflamed areas",
        "Skin that may crack or weep during flare-ups",
      ],
      selfCare: [
        "Moisturise daily, even when the skin looks clear",
        "Swap soap for a gentle, fragrance-free cleanser",
        "Avoid scratching and keep nails short",
        "Notice and steer clear of your personal triggers",
      ],
      seekCare: [
        "The skin looks infected, with crusting, oozing, or spreading redness",
        "Itching is severe or disturbing your sleep",
        "The rash is not improving with regular moisturising",
      ],
    },
    {
      slug: "athletes-foot",
      title: "Athlete's foot",
      excerpt:
        "A common, mild fungal infection of the feet that causes itching and flaking and usually clears up with simple treatment from the pharmacy.",
      body: [
        "Athlete's foot is caused by a fungus that thrives in warm, damp conditions, which is why it often takes hold between the toes and after using shared changing rooms or showers. It is mildly contagious and can spread to other parts of the foot or to other people through floors and towels. It is very common and not a sign of poor hygiene.",
        "The infection clears readily with antifungal creams or sprays from the pharmacy, especially when the feet are kept clean and dry. Treatment usually needs to continue for a week or two after the skin looks better to stop it returning.",
      ],
      symptoms: [
        "Itchy, flaky, or scaly skin between the toes",
        "Red, cracked, or peeling skin on the feet",
        "A stinging or burning feeling",
        "Sometimes small blisters or an unpleasant smell",
      ],
      selfCare: [
        "Use an antifungal cream, spray, or powder from the pharmacy",
        "Dry your feet well, especially between the toes",
        "Change socks daily and let shoes air out",
        "Avoid sharing towels and wear sandals in shared showers",
      ],
      seekCare: [
        "The infection does not clear after a couple of weeks of treatment",
        "The skin becomes very red, swollen, or painful",
        "You have diabetes or poor circulation in the feet",
      ],
    },
    {
      slug: "moles",
      title: "Birthmarks / moles",
      excerpt:
        "Coloured marks and moles on the skin are extremely common and almost always harmless, though it is worth knowing what changes to look out for.",
      body: [
        "Moles are small areas where pigment-producing cells have grouped together, and most people have a number of them. Birthmarks are coloured marks present at or soon after birth, ranging from flat patches to raised areas. The great majority of these marks are completely harmless and stay much the same throughout life.",
        "It helps to be familiar with your own skin so you notice if a mole changes. Most changes are nothing to worry about, but having a mole checked is quick and straightforward, and it brings peace of mind if anything looks different.",
      ],
      symptoms: [
        "Brown, black, or skin-coloured spots or patches",
        "Flat or slightly raised marks of a steady size",
        "Birthmarks present from birth or early infancy",
        "Marks that have looked the same for a long time",
      ],
      selfCare: [
        "Check your moles now and then for any changes",
        "Protect your skin from the sun with cover and sunscreen",
        "Take a photo to compare a mole over time if unsure",
        "Avoid scratching or picking at raised moles",
      ],
      seekCare: [
        "A mole changes in size, shape, or colour",
        "A mole becomes itchy, bleeds, or develops an uneven edge",
        "A new mole appears in adulthood or one looks different from the rest",
      ],
    },
    {
      slug: "skin-cancer",
      title: "Skin cancer",
      excerpt:
        "A condition where skin cells grow abnormally, usually linked to sun exposure, and which is very often successfully treated when found early.",
      body: [
        "Skin cancer develops when skin cells are damaged, most commonly by ultraviolet light from the sun or sunbeds, and begin to grow in an uncontrolled way. There are different types, including common, slow-growing forms and the less common but more serious melanoma. Knowing your skin and noticing new or changing marks is the most useful thing you can do.",
        "The outlook for skin cancer is generally very good, especially when it is found and treated early. If you are worried about a spot or mole, having it looked at is simple, and most concerns turn out to be harmless, so it is always worth checking rather than waiting.",
      ],
      symptoms: [
        "A new growth, lump, or sore that does not heal",
        "A mole that changes in size, shape, or colour",
        "A patch that is itchy, crusty, or bleeds",
        "A spot with an irregular outline or more than one colour",
      ],
      selfCare: [
        "Check your skin regularly and note any new or changing marks",
        "Protect your skin from strong sun and avoid sunbeds",
        "Use sunscreen and cover up during the hottest hours",
        "Keep all appointments for checks or treatment",
      ],
      seekCare: [
        "A mole or spot is changing, bleeding, or not healing",
        "You notice a new growth that looks unusual",
        "A sore or patch has lasted several weeks without improving",
      ],
    },
    {
      slug: "skin-rash",
      title: "Skin rash",
      excerpt:
        "A change in the skin's colour or texture that is very common, usually harmless, and often settles once any irritant or infection passes.",
      body: [
        "A skin rash is any area of skin that becomes red, bumpy, scaly, or itchy, and it can have many causes including irritation, allergy, heat, infection, or a viral illness. Most rashes are mild and short-lived, and the appearance alone often does not point to anything serious. Looking at what came before the rash, such as a new product or an illness, can help make sense of it.",
        "The majority of rashes settle on their own or with simple soothing care once the trigger has passed. Treatment is usually about easing any itch and protecting the skin, and most do not need a doctor unless they spread, persist, or come with feeling unwell.",
      ],
      symptoms: [
        "Red, pink, or darkened patches of skin",
        "Itching, bumps, or scaling",
        "Skin that feels dry, rough, or warm",
        "A rash that appears suddenly or after a trigger",
      ],
      selfCare: [
        "Avoid anything that seems to trigger or worsen the rash",
        "Apply a cool compress or a soothing moisturiser",
        "Try a pharmacy antihistamine or mild steroid cream if itchy",
        "Wear loose, soft clothing over the affected area",
      ],
      seekCare: [
        "The rash spreads quickly or you feel unwell with a fever",
        "The rash does not fade when pressed, or there is swelling of the face or lips",
        "It does not improve after a week or keeps coming back",
      ],
    },
    {
      slug: "hand-foot-and-mouth-disease",
      title: "Hand, foot and mouth disease",
      excerpt:
        "A common, mild viral illness in young children that causes mouth sores and spots on the hands and feet and clears on its own within about a week.",
      body: [
        "Hand, foot and mouth disease is caused by a common virus that mainly affects young children, though adults can occasionally catch it. It spreads easily through coughs, sneezes, and contact, especially in nurseries and playgroups. Despite the name, it is unrelated to the foot and mouth disease seen in animals.",
        "It is usually a mild illness that settles by itself within seven to ten days, and treatment is simply about keeping the child comfortable. The main thing to watch is that the child keeps drinking, as the mouth sores can make eating and drinking uncomfortable for a few days.",
      ],
      symptoms: [
        "Small blisters or spots on the hands and feet",
        "Painful sores or ulcers inside the mouth",
        "A mild fever and sore throat",
        "Reduced appetite and feeling generally off-colour",
      ],
      selfCare: [
        "Offer plenty of cool drinks to prevent dehydration",
        "Give soft, bland foods that are easy to swallow",
        "Use paracetamol or ibuprofen for fever or sore mouth if needed",
        "Wash hands well to reduce spreading the virus",
      ],
      seekCare: [
        "The child is not drinking and shows signs of dehydration",
        "The fever is high or lasts more than a few days",
        "The child is very drowsy, unusually unwell, or not improving",
      ],
    },
    {
      slug: "keratosis-pilaris",
      title: "Keratosis pilaris",
      excerpt:
        "A very common, harmless condition that causes small rough bumps on the skin, often on the upper arms and thighs, with no need for worry.",
      body: [
        "Keratosis pilaris happens when a protein called keratin builds up and blocks the openings of hair follicles, creating tiny rough bumps. It often runs in families and is more noticeable in dry weather or in people with dry skin. It is completely harmless and not a sign of any underlying illness.",
        "There is no need to treat it for health reasons, and it often becomes less noticeable with age. If the appearance bothers you, regular moisturising and gentle exfoliation can smooth the skin, though the bumps tend to come back if you stop.",
      ],
      symptoms: [
        "Small, rough bumps, often on the upper arms, thighs, or cheeks",
        "Skin that feels like fine sandpaper",
        "Bumps that may be skin-coloured, red, or brownish",
        "Dryness that can make the bumps more obvious",
      ],
      selfCare: [
        "Moisturise regularly to soften the skin",
        "Use a gentle exfoliating product a few times a week",
        "Avoid hot baths and harsh soaps that dry the skin",
        "Be patient, as improvement is gradual",
      ],
      seekCare: [
        "The bumps become red, sore, or look infected",
        "The appearance is causing you distress",
        "You are unsure whether the rash is keratosis pilaris",
      ],
    },
    {
      slug: "itching",
      title: "Itching",
      excerpt:
        "An uncomfortable urge to scratch that is very common, usually due to dry or irritated skin, and most often eases with simple soothing measures.",
      body: [
        "Itching is the skin's way of drawing attention to something, and most of the time the cause is simple, such as dry skin, an insect bite, an allergy, or a mild rash. Less often it can be linked to a skin condition or, rarely, a problem elsewhere in the body. Identifying anything new, like a product, fabric, or medicine, can help explain it.",
        "Most itching is harmless and settles once the skin is soothed and any trigger is removed. Scratching tends to make things worse by irritating the skin further, so the aim is to calm the itch and protect the skin while it recovers.",
      ],
      symptoms: [
        "An urge to scratch, with or without a visible rash",
        "Dry, flaky, or irritated skin",
        "Itching that may be worse at night or after a hot shower",
        "Redness or marks from scratching",
      ],
      selfCare: [
        "Moisturise often with a fragrance-free cream",
        "Apply a cool compress to calm the urge to scratch",
        "Avoid hot water, harsh soaps, and rough fabrics",
        "Try a pharmacy antihistamine if the itch is troublesome",
      ],
      seekCare: [
        "The itching is severe, widespread, or disturbing your sleep",
        "It lasts for several weeks without an obvious cause",
        "It comes with weight loss, tiredness, or yellowing of the skin",
      ],
    },
    {
      slug: "contact-dermatitis",
      title: "Contact dermatitis",
      excerpt:
        "An itchy, inflamed rash caused by the skin touching something that irritates it or triggers an allergy, which settles once the cause is avoided.",
      body: [
        "Contact dermatitis develops where the skin has touched an irritant, such as soaps, detergents, or chemicals, or something it is allergic to, such as nickel, fragrances, or certain plants. The rash appears on the areas of contact and can take time to build up with repeated exposure. It is not contagious and is the skin's reaction rather than an infection.",
        "Once the trigger is identified and avoided, the skin usually heals well, and soothing creams help in the meantime. Working out the cause can take a little detective work, but doing so is the key to stopping the rash from returning.",
      ],
      symptoms: [
        "Red, itchy, or burning skin where contact occurred",
        "Dry, cracked, or scaly patches",
        "Sometimes small blisters or weeping",
        "Rash with a shape matching the irritant, such as a watch strap",
      ],
      selfCare: [
        "Identify and avoid the substance causing the reaction",
        "Wash the area gently to remove any remaining irritant",
        "Apply a moisturiser and use a mild steroid cream if needed",
        "Wear gloves to protect the hands for wet or chemical tasks",
      ],
      seekCare: [
        "The rash is severe, blistering, or spreading",
        "It does not improve after avoiding the likely trigger",
        "The skin looks infected, with crusting or increasing pain",
      ],
    },
    {
      slug: "seborrheic-eczema",
      title: "Seborrheic eczema",
      excerpt:
        "A common, harmless condition causing flaky, slightly greasy patches on the scalp and face that tends to come and go and responds well to treatment.",
      body: [
        "Seborrheic eczema affects oily areas of the skin such as the scalp, eyebrows, sides of the nose, and chest. It is linked to a harmless yeast that lives on everyone's skin and to the activity of the oil glands, and stress and cold weather can make it flare. In babies it appears as cradle cap, which is also harmless.",
        "It is a long-term tendency rather than a one-off problem, but it is easily controlled with the right washes and creams. Flare-ups settle with treatment, and although it may return now and then, it can be kept comfortably in check.",
      ],
      symptoms: [
        "Flaky, white or yellowish scales on the scalp or face",
        "Red or slightly greasy patches of skin",
        "Mild itching in the affected areas",
        "Dandruff that does not clear with ordinary shampoo",
      ],
      selfCare: [
        "Use an anti-yeast or anti-dandruff shampoo from the pharmacy",
        "Wash affected skin gently and avoid harsh soaps",
        "Apply a mild moisturiser to soothe flaky patches",
        "Try to manage stress, which can trigger flares",
      ],
      seekCare: [
        "The condition does not improve with pharmacy treatments",
        "The skin becomes very red, sore, or looks infected",
        "The rash spreads widely or is affecting your confidence",
      ],
    },
    {
      slug: "molluscum-contagiosum",
      title: "Molluscum contagiosum",
      excerpt:
        "A common, harmless viral skin infection in children that causes small firm spots and clears on its own without any treatment, given time.",
      body: [
        "Molluscum contagiosum is caused by a virus that produces small, firm, raised spots, often with a tiny dimple in the centre. It is common in children and spreads through close skin contact and shared towels or baths. Although it is contagious, it is harmless and not a cause for concern.",
        "The spots clear up by themselves, although this can take several months or occasionally longer, and they usually fade without leaving scars. Treatment is generally not needed, and it is best to let the spots resolve naturally while avoiding scratching.",
      ],
      symptoms: [
        "Small, firm, raised spots with a central dimple",
        "Spots that are pink, white, or skin-coloured",
        "Clusters appearing on the trunk, arms, or skin folds",
        "Occasional itching or redness around the spots",
      ],
      selfCare: [
        "Avoid squeezing or scratching the spots",
        "Keep the skin clean and cover spots during close contact sports",
        "Do not share towels, flannels, or baths",
        "Be patient, as the spots clear in their own time",
      ],
      seekCare: [
        "The spots become very red, swollen, or look infected",
        "Spots appear near the eyes or are causing distress",
        "You are unsure what the spots are",
      ],
    },
    {
      slug: "cold-sores",
      title: "Cold sores",
      excerpt:
        "Small blisters around the mouth caused by a common virus, which are harmless and usually heal on their own within a week to ten days.",
      body: [
        "Cold sores are caused by the herpes simplex virus, which most people carry without ever knowing. After the first infection the virus stays dormant and can reactivate now and then, often triggered by illness, tiredness, stress, or strong sunlight. They are contagious, especially when blisters are present, so it helps to avoid close contact and sharing items at that time.",
        "Cold sores clear up by themselves within about ten days and rarely cause any lasting problem. Antiviral creams from the pharmacy can ease symptoms and may shorten an outbreak if used as soon as you feel the first tingle.",
      ],
      symptoms: [
        "A tingling or burning feeling before the sore appears",
        "Small fluid-filled blisters around the lips or mouth",
        "Blisters that burst, crust over, and then heal",
        "Soreness or itching at the affected spot",
      ],
      selfCare: [
        "Apply an antiviral cream at the first tingle",
        "Avoid touching, picking, or sharing items like cups and towels",
        "Use a lip balm with sun protection to prevent flares",
        "Keep the area clean and avoid kissing while blisters are present",
      ],
      seekCare: [
        "Cold sores are frequent, large, or very painful",
        "A sore has not healed after ten days",
        "You have a weakened immune system or the infection spreads, such as near an eye",
      ],
    },
    {
      slug: "hives",
      title: "Hives",
      excerpt:
        "A common, itchy raised rash that appears suddenly and usually fades within hours or days, most often without any serious cause.",
      body: [
        "Hives, also called urticaria, are raised, itchy welts that come up when the skin releases a chemical called histamine. They can be triggered by an allergic reaction, an infection, heat, stress, or sometimes for no clear reason at all. The welts can move around, appearing in one place and fading before showing up in another.",
        "In most cases hives settle on their own within a day or two and respond well to antihistamines. They are usually harmless, though occasionally they are part of a wider allergic reaction, so it is worth knowing the warning signs to look out for.",
      ],
      symptoms: [
        "Raised, itchy welts that may be pink or skin-coloured",
        "Welts that change shape and move around the body",
        "Itching that can be mild or intense",
        "A rash that appears suddenly and fades within hours",
      ],
      selfCare: [
        "Take a pharmacy antihistamine to ease the itch",
        "Apply a cool compress to soothe the skin",
        "Avoid known triggers such as heat or particular foods",
        "Wear loose, cool clothing",
      ],
      seekCare: [
        "There is swelling of the lips, tongue, throat, or face, or any trouble breathing",
        "The hives keep coming back over several weeks",
        "You feel generally unwell or the rash is very widespread",
      ],
    },
    {
      slug: "perioral-dermatitis",
      title: "Perioral dermatitis",
      excerpt:
        "A common rash of small bumps around the mouth that looks alarming but is harmless and clears well once the right approach is taken.",
      body: [
        "Perioral dermatitis causes clusters of small red bumps and scaling, usually around the mouth and sometimes the nose or eyes. It is often linked to the use of steroid creams on the face, as well as some cosmetics and heavy moisturisers. It is more common in women but can affect anyone.",
        "The rash settles with the right care, although it can take several weeks and may briefly worsen when triggers like steroid creams are stopped. A simple, gentle skincare routine usually helps, and a doctor can prescribe treatment if it is persistent.",
      ],
      symptoms: [
        "Small red bumps or pustules around the mouth",
        "Flaky or scaly skin in the affected area",
        "A burning or stinging feeling rather than itch",
        "A clear zone of skin right next to the lips",
      ],
      selfCare: [
        "Stop using steroid creams on the face unless told otherwise",
        "Simplify your skincare and avoid heavy or scented products",
        "Wash with plain water or a very mild cleanser",
        "Be patient, as improvement takes a few weeks",
      ],
      seekCare: [
        "The rash does not improve after simplifying your routine",
        "It is spreading, very sore, or affecting your confidence",
        "You are unsure what the rash is or how to treat it",
      ],
    },
    {
      slug: "psoriasis",
      title: "Psoriasis",
      excerpt:
        "A common, long-term condition where skin cells build up into thick, scaly patches, which can be well managed even though it tends to come and go.",
      body: [
        "Psoriasis happens when the immune system speeds up the production of skin cells, so they pile up faster than they can be shed, forming raised, scaly patches. It often appears on the elbows, knees, and scalp, and flare-ups can be triggered by stress, infections, certain medicines, or skin injury. It is not contagious and cannot be passed to anyone else.",
        "Although psoriasis is a condition that tends to last, it can be controlled well with creams and other treatments, and many people have long periods with clear skin. Support is available, and a doctor can tailor treatment to how much it is affecting you, including your joints if they are involved.",
      ],
      symptoms: [
        "Raised patches of skin covered with silvery scales",
        "Patches commonly on the elbows, knees, lower back, or scalp",
        "Dry, cracked skin that may itch or bleed",
        "Sometimes pitted or thickened nails, or sore joints",
      ],
      selfCare: [
        "Moisturise regularly to soften scales and ease itching",
        "Use any prescribed creams as directed",
        "Avoid known triggers such as stress and skin injury",
        "Some find gentle sunlight and not smoking help",
      ],
      seekCare: [
        "The patches are widespread, painful, or not improving",
        "Your joints become stiff, swollen, or sore",
        "The condition is affecting your mood or daily life",
      ],
    },
    {
      slug: "genital-psoriasis",
      title: "Genital psoriasis",
      excerpt:
        "Psoriasis affecting the genital area causes smooth red patches rather than scales, and although sensitive, it responds well to gentle treatment.",
      body: [
        "Genital psoriasis is a form of psoriasis that appears in the groin and genital area, where the skin is thinner and moister. Because of this, the patches tend to look smooth and red rather than scaly, and they can feel sore or itchy. It is part of the same immune-related process as psoriasis elsewhere and is not contagious or related to hygiene.",
        "This area is sensitive, so treatment uses gentler creams than those for thicker skin, and a doctor can advise on what is safe to use. With the right care the patches usually settle, and it is worth seeking help rather than putting up with discomfort in such a personal area.",
      ],
      symptoms: [
        "Smooth, red, well-defined patches in the genital area or groin",
        "Soreness, itching, or discomfort",
        "Patches with little or no scaling",
        "Sometimes discomfort during sex or when passing urine",
      ],
      selfCare: [
        "Use only gentle, prescribed creams in this sensitive area",
        "Wear loose cotton underwear to reduce irritation",
        "Avoid scented soaps and harsh washing",
        "Pat the skin dry gently rather than rubbing",
      ],
      seekCare: [
        "The patches are sore, not improving, or affecting daily life",
        "There is broken skin or signs of infection",
        "You are unsure whether the rash is psoriasis or something else",
      ],
    },
    {
      slug: "ringworm",
      title: "Ringworm",
      excerpt:
        "A common, mild fungal infection that causes a ring-shaped rash on the skin and usually clears up with antifungal treatment from the pharmacy.",
      body: [
        "Ringworm is not a worm at all but a fungal infection of the skin, named for the ring-shaped rash it often produces. It spreads through contact with infected people, animals, or surfaces, and thrives in warm, damp conditions. It is common and, while contagious, it is not serious.",
        "The infection usually responds well to antifungal creams from the pharmacy, with the rash clearing over a couple of weeks. Continuing treatment for a little while after it looks better helps make sure it does not return.",
      ],
      symptoms: [
        "A red or darker ring-shaped patch with a clearer centre",
        "Itchy, scaly, or slightly raised edges",
        "Patches that may slowly grow outwards",
        "Sometimes more than one patch on the body",
      ],
      selfCare: [
        "Apply an antifungal cream from the pharmacy as directed",
        "Keep the area clean and dry",
        "Avoid sharing towels, bedding, or clothing",
        "Wash bedding and clothes to avoid spreading it",
      ],
      seekCare: [
        "The rash does not clear after a couple of weeks of treatment",
        "It is on the scalp or is widespread",
        "The skin becomes very red, swollen, or looks infected",
      ],
    },
    {
      slug: "rosacea",
      title: "Rosacea",
      excerpt:
        "A common, long-term condition that causes facial redness and flushing, which can be managed well by avoiding triggers and using gentle treatment.",
      body: [
        "Rosacea mainly affects the central face, causing redness, flushing, and sometimes small bumps that can look a little like acne. The exact cause is not fully understood, but flushing is often set off by triggers such as heat, sun, alcohol, spicy food, and stress. It is harmless and not related to hygiene, though it can affect confidence.",
        "Rosacea tends to come and go over time and cannot be cured, but it can be controlled well by learning your triggers and using treatments from a doctor where needed. With the right approach, most people keep the redness and bumps under good control.",
      ],
      symptoms: [
        "Persistent redness across the cheeks, nose, or forehead",
        "Easy flushing or blushing",
        "Small red bumps or visible tiny blood vessels",
        "A burning or stinging feeling in the skin",
      ],
      selfCare: [
        "Keep a note of and avoid your personal flushing triggers",
        "Use gentle, fragrance-free skincare and daily sun protection",
        "Protect your face from extreme heat and cold",
        "Choose mild, non-irritating products and avoid scrubbing",
      ],
      seekCare: [
        "The redness or bumps are not improving with self-care",
        "Your eyes become sore, gritty, or irritated",
        "The condition is affecting your confidence or wellbeing",
      ],
    },
    {
      slug: "erysipelas",
      title: "Erysipelas",
      excerpt:
        "A bacterial skin infection that causes a bright, well-defined red area and feeling unwell, and which clears well with prompt antibiotic treatment.",
      body: [
        "Erysipelas is an infection of the upper layers of the skin, usually caused by bacteria entering through a small break such as a cut, crack, or insect bite. It most often affects the legs or face, producing a raised, sharply edged area of bright redness along with feeling generally unwell. It is not usually contagious through ordinary contact.",
        "Erysipelas responds well to antibiotics, and most people improve within a few days of starting treatment. Because it can spread or worsen if left untreated, it is important to see a doctor promptly when these symptoms appear.",
      ],
      symptoms: [
        "A bright red, swollen area with a clear raised edge",
        "Skin that feels hot, tight, and tender",
        "Fever, chills, or feeling generally unwell",
        "Often on the lower leg or the face",
      ],
      selfCare: [
        "See a doctor promptly, as antibiotics are usually needed",
        "Rest and raise the affected limb if it is a leg",
        "Take paracetamol or ibuprofen for pain or fever if needed",
        "Keep any cuts or breaks in the skin clean to prevent recurrence",
      ],
      seekCare: [
        "See a doctor promptly if you have a spreading red area with fever",
        "The redness is spreading quickly or you feel increasingly unwell",
        "Symptoms do not improve within a couple of days of antibiotics",
      ],
    },
    {
      slug: "sun-damage",
      title: "Sun damage",
      excerpt:
        "Changes to the skin from too much sun over time, which are common and largely preventable with simple sun-protection habits.",
      body: [
        "Sun damage builds up over years of exposure to ultraviolet light, which gradually affects the skin's structure and pigment. It shows as ageing changes such as wrinkles, dryness, and uneven colour, as well as rough patches and freckling. Sunburn is the more immediate sign that the skin has had too much sun.",
        "While past damage cannot be fully undone, protecting your skin from now on slows further changes and lowers the risk of skin cancer. Simple, consistent habits make a real difference, and any worrying spots can be checked easily.",
      ],
      symptoms: [
        "Wrinkles, dryness, or rough, leathery skin",
        "Uneven pigment, freckles, or age spots",
        "Rough, scaly patches in sun-exposed areas",
        "A history of sunburn or sunbed use",
      ],
      selfCare: [
        "Use sunscreen daily and reapply during long exposure",
        "Cover up and seek shade during the hottest hours",
        "Avoid sunbeds altogether",
        "Moisturise dry, sun-exposed skin",
      ],
      seekCare: [
        "A spot or patch changes, bleeds, or does not heal",
        "A rough patch is growing or becoming sore",
        "You notice a new or unusual mark you are worried about",
      ],
    },
    {
      slug: "impetigo",
      title: "Impetigo",
      excerpt:
        "A common, contagious bacterial skin infection, mostly in children, that causes crusty sores and clears quickly with the right treatment.",
      body: [
        "Impetigo is a skin infection caused by bacteria entering through small breaks in the skin, such as scratches, insect bites, or patches of eczema. It is most common in young children and produces sores that ooze and form a golden-brown crust, often around the nose and mouth. It spreads easily through touch and shared items, so good hygiene matters while it heals.",
        "Impetigo clears well with treatment, usually an antibiotic cream or, if more widespread, tablets from a doctor. Once treatment has begun and the sores are drying, the infection quickly stops being contagious.",
      ],
      symptoms: [
        "Red sores that quickly burst and ooze",
        "A golden-brown or honey-coloured crust",
        "Sores often around the nose, mouth, or hands",
        "Mild itching around the affected area",
      ],
      selfCare: [
        "See a doctor or pharmacist, as treatment is usually needed",
        "Avoid touching or scratching the sores",
        "Wash hands often and do not share towels or flannels",
        "Keep children off nursery or school until no longer contagious",
      ],
      seekCare: [
        "The sores are spreading or not improving with treatment",
        "Your child becomes feverish or generally unwell",
        "The infection keeps coming back",
      ],
    },
    {
      slug: "dry-skin",
      title: "Dry skin",
      excerpt:
        "A very common complaint where the skin loses moisture and feels rough or tight, which usually improves quickly with regular moisturising.",
      body: [
        "Dry skin happens when the skin's barrier loses water faster than it can hold it, leaving it rough, flaky, or tight. It is more common in cold, dry weather, with frequent washing, and with age, and it can be made worse by harsh soaps and hot water. It is usually harmless and a normal response to the environment.",
        "Most dry skin improves quickly with regular moisturising and a few gentle habits. If dryness is persistent or severe despite good care, it can occasionally point to a skin condition or another cause worth checking.",
      ],
      symptoms: [
        "Rough, flaky, or scaly skin",
        "A feeling of tightness, especially after washing",
        "Itching in the affected areas",
        "Fine cracks or redness in very dry skin",
      ],
      selfCare: [
        "Moisturise regularly, especially after washing",
        "Use lukewarm rather than hot water for washing",
        "Swap harsh soaps for a gentle, fragrance-free cleanser",
        "Avoid over-washing and protect skin from cold, dry air",
      ],
      seekCare: [
        "The skin cracks, bleeds, or looks infected",
        "Dryness is severe or does not improve with moisturising",
        "There is intense itching or a spreading rash",
      ],
    },
    {
      slug: "viral-rash",
      title: "Viral rash",
      excerpt:
        "A common rash that appears during or after a viral infection, which is usually harmless and fades on its own as the illness passes.",
      body: [
        "A viral rash is a skin reaction that accompanies many ordinary viral infections, especially in children. It often appears as widespread small red or pink spots and tends to come with other signs of a virus such as a mild fever, runny nose, or feeling tired. The rash itself is the body responding to the infection rather than a problem with the skin.",
        "Viral rashes usually fade by themselves within a few days to a week as the infection clears, and they rarely need treatment. The main aim is to keep comfortable, while keeping an eye out for the few warning signs that need a closer look.",
      ],
      symptoms: [
        "Widespread small red or pink spots",
        "A rash alongside fever, cough, or a runny nose",
        "Mild itching or no itching at all",
        "Feeling generally under the weather",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Use paracetamol or ibuprofen for fever or discomfort if needed",
        "Keep the skin cool and avoid overheating",
        "Apply a soothing moisturiser if the rash is itchy",
      ],
      seekCare: [
        "The rash does not fade when pressed against the skin",
        "There is a high fever, drowsiness, or your child seems very unwell",
        "The rash spreads quickly with swelling of the face or lips",
      ],
    },
    {
      slug: "warts",
      title: "Warts",
      excerpt:
        "Small, harmless growths caused by a common virus, which often disappear on their own over time and can be treated if they bother you.",
      body: [
        "Warts are small, rough lumps on the skin caused by the human papillomavirus, which makes the top layer of skin grow more quickly. They are common, especially in children, and spread through close contact or shared surfaces such as swimming pool floors. Verrucas are simply warts on the soles of the feet.",
        "Warts are harmless and very often clear up by themselves over months to a couple of years as the body deals with the virus. If they are uncomfortable or you would rather not wait, pharmacy treatments can help, though they need patience and persistence.",
      ],
      symptoms: [
        "Small, firm, rough lumps on the skin",
        "Warts commonly on the hands, fingers, or feet",
        "Verrucas on the soles, which may feel tender when walking",
        "Tiny black dots sometimes visible within the wart",
      ],
      selfCare: [
        "Try a pharmacy treatment such as salicylic acid if you wish",
        "Cover warts and verrucas when swimming or sharing showers",
        "Avoid picking or scratching, which can spread them",
        "Be patient, as treatment can take several weeks",
      ],
      seekCare: [
        "A wart is painful, bleeding, or changing in appearance",
        "Warts spread, multiply, or do not respond to treatment",
        "You have warts on the face or genitals, or a weakened immune system",
      ],
    },
    {
      slug: "heat-rash",
      title: "Heat rash",
      excerpt:
        "A harmless, itchy rash that appears when sweat is trapped in hot weather and usually clears within a few days once the skin cools.",
      body: [
        "Heat rash, also called prickly heat, happens when sweat glands become blocked and sweat is trapped under the skin, causing small bumps or blisters. It is common in hot, humid weather and in babies, whose sweat glands are still developing. It often appears where skin rubs together or is covered by clothing.",
        "Heat rash is harmless and usually settles on its own within a few days once the skin is cooled and kept dry. Treatment is simply about cooling down and easing any itch while the rash fades.",
      ],
      symptoms: [
        "Small red bumps or tiny blisters",
        "A prickly or itchy feeling on the skin",
        "Rash in areas that sweat or are covered, such as the neck or back",
        "Skin that feels hot or irritated",
      ],
      selfCare: [
        "Move somewhere cool and keep the skin dry",
        "Wear loose, light cotton clothing",
        "Apply a cool compress to soothe the rash",
        "Avoid heavy creams that can block the pores further",
      ],
      seekCare: [
        "The rash does not clear after a few days of cooling down",
        "The skin becomes very sore, swollen, or looks infected",
        "Your baby seems unwell, has a fever, or is very uncomfortable",
      ],
    },
  ],
};
