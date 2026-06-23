import type { FactCategory } from "./types";

export const infections: FactCategory = {
  id: "infections",
  name: "Infections",
  description:
    "Viral and bacterial infections, how they spread, and when they need medical care.",
  topics: [
    {
      slug: "shingles",
      title: "Shingles",
      excerpt:
        "A painful blistering rash caused by the reactivation of the chickenpox virus, which usually heals within a few weeks.",
      body: [
        "Shingles happens when the virus that causes chickenpox, which stays dormant in the body after a childhood infection, becomes active again later in life. It tends to appear when the immune system is run down, with age, or during times of stress, and it shows up as a band of rash on one side of the body. The reactivation is not something you have done wrong, and most people recover well.",
        "The rash usually crusts over and heals within two to four weeks, and early antiviral treatment can ease symptoms and lower the risk of lingering nerve pain. Pain relief and good wound care help you stay comfortable while the body clears the flare, and a vaccine is available for older adults to reduce the chance of it returning.",
      ],
      symptoms: [
        "Burning, tingling or pain in one area of skin, often before the rash",
        "A band or patch of red blisters on one side of the body",
        "Itching and tenderness over the affected skin",
        "Tiredness, headache or a mild fever",
      ],
      selfCare: [
        "Keep the rash clean and dry, and cover it loosely to protect it",
        "Take paracetamol or ibuprofen to ease the pain",
        "Wear loose clothing so it does not rub against the blisters",
        "Rest and avoid close contact with anyone who has not had chickenpox",
      ],
      seekCare: [
        "The rash is near your eye, or your vision changes",
        "You have a weakened immune system or the rash is spreading widely",
        "The pain is severe or lasts long after the rash has healed",
      ],
    },
    {
      slug: "coronavirus",
      title: "Coronavirus",
      excerpt:
        "A common respiratory infection that for most people causes mild, cold-like symptoms and clears up at home within a week or two.",
      body: [
        "Coronavirus (COVID-19) is a viral infection that spreads through droplets in the air and on surfaces, much like a cold or flu. Most people have mild to moderate symptoms and recover at home, although the illness can be more serious for older adults and those with certain long-term conditions. Vaccination and good hand hygiene continue to reduce both the spread and the severity of infection.",
        "There is no specific cure for most cases, and the body clears the virus on its own with rest and fluids. Staying at home while you are unwell protects others, and the great majority of people feel better within one to two weeks, though tiredness can sometimes linger a little longer.",
      ],
      symptoms: [
        "Fever, chills or feeling generally unwell",
        "Dry cough and sore throat",
        "Loss or change of taste or smell",
        "Headache, body aches and tiredness",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Take paracetamol or ibuprofen for fever and aches",
        "Stay at home and avoid contact with vulnerable people",
        "Keep your room ventilated and monitor how you feel",
      ],
      seekCare: [
        "You become breathless or have chest pain or pressure",
        "You feel confused, very drowsy, or unable to stay awake",
        "Your symptoms worsen sharply or you are at high risk of complications",
      ],
    },
    {
      slug: "fever",
      title: "Fever",
      excerpt:
        "A raised body temperature is the body's natural response to infection and usually settles as the underlying illness improves.",
      body: [
        "A fever is a temperature above the normal range, and it is a sign that the immune system is working to fight off an infection rather than an illness in itself. It is most often caused by common viral infections, and the body raises its temperature on purpose to make conditions less comfortable for germs. In itself, a moderate fever is rarely dangerous.",
        "Most fevers settle on their own within a few days as the underlying infection clears. The aim is to stay comfortable and well hydrated rather than to bring the temperature down to a particular number, and how the person looks and behaves matters more than the exact reading on the thermometer.",
      ],
      symptoms: [
        "Feeling hot, flushed or shivery",
        "Sweating or chills",
        "Headache and aching muscles",
        "Tiredness and reduced appetite",
      ],
      selfCare: [
        "Drink plenty of fluids to stay hydrated",
        "Rest and dress in light, comfortable clothing",
        "Take paracetamol or ibuprofen if the fever is uncomfortable",
        "Keep the room at a comfortable, not too warm, temperature",
      ],
      seekCare: [
        "The fever is very high, lasts more than a few days, or keeps returning",
        "You feel very unwell, confused, or develop a stiff neck or rash",
        "A baby under three months has any fever at all",
      ],
    },
    {
      slug: "febrile-seizure",
      title: "Febrile seizure",
      excerpt:
        "A short convulsion that can happen when a young child has a fever, which is frightening to watch but usually harmless and brief.",
      body: [
        "A febrile seizure is a fit that can occur in young children, usually between six months and five years, when their temperature rises quickly during an infection. It happens because a child's developing brain is sensitive to rapid changes in temperature, not because of any lasting problem. Although it is alarming to witness, most febrile seizures are simple, last only a few minutes, and do not cause harm.",
        "After the seizure the child may be sleepy or confused for a short while before returning to normal. Having one febrile seizure does not mean a child has epilepsy, and most children grow out of them completely. The focus afterwards is on finding and treating the underlying infection and keeping the child comfortable.",
      ],
      symptoms: [
        "Sudden stiffening or jerking of the arms and legs",
        "Loss of awareness or rolling of the eyes during a fever",
        "Brief stopping of breathing or a change in colour",
        "Drowsiness or confusion for a short time afterwards",
      ],
      selfCare: [
        "Lay the child on their side in a safe space and stay calm",
        "Remove nearby objects and do not put anything in their mouth",
        "Note how long the seizure lasts",
        "Once recovered, treat the fever with fluids and paracetamol or ibuprofen",
      ],
      seekCare: [
        "Call your local emergency number for a first seizure, one lasting more than five minutes or repeating, or if the child is hard to wake",
        "The child has trouble breathing or turns very pale or blue",
        "The child seems very unwell, has a stiff neck, or develops a rash",
      ],
    },
    {
      slug: "common-cold",
      title: "Common cold",
      excerpt:
        "A mild viral infection of the nose and throat that usually clears on its own within a week or two.",
      body: [
        "The common cold is caused by viruses that inflame the lining of the nose and throat. Most adults catch a cold a few times a year, and children even more often. It spreads through tiny droplets in the air and on surfaces, which is why hand washing makes such a difference.",
        "There is no cure for a cold, but the body clears the virus by itself. Treatment is about staying comfortable while you recover and giving your immune system time to do its work.",
      ],
      symptoms: [
        "Blocked or runny nose and sneezing",
        "Sore or scratchy throat",
        "Mild cough and tiredness",
        "Sometimes a low fever, more often in children",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Use a saline spray or steam to ease a blocked nose",
        "Take paracetamol or ibuprofen for aches if needed",
      ],
      seekCare: [
        "Symptoms last longer than about ten days or keep getting worse",
        "You have a high fever, chest pain, or trouble breathing",
        "You have a long-term lung or heart condition that is affected",
      ],
    },
    {
      slug: "infected-wound",
      title: "Infected wound",
      excerpt:
        "A cut or graze that has become infected, which usually responds well to good cleaning and, when needed, antibiotics.",
      body: [
        "A wound can become infected when bacteria enter broken skin and begin to multiply, leading to redness, swelling and discomfort around the area. This is more likely with deeper or dirtier wounds, or when a cut has not been kept clean. Recognising the early signs means an infection can usually be treated before it causes any real trouble.",
        "Many minor wound infections settle with careful cleaning and dressing, while others need a course of antibiotics from a doctor. Keeping the wound clean and watching how it changes over a few days helps you judge whether it is healing as it should or needs a closer look.",
      ],
      symptoms: [
        "Increasing redness, warmth or swelling around the wound",
        "Pain that is getting worse rather than better",
        "Yellow or green pus, or a bad smell",
        "Fever or feeling generally unwell",
      ],
      selfCare: [
        "Clean the wound gently with clean water and pat it dry",
        "Cover it with a clean, dry dressing and change it regularly",
        "Take paracetamol or ibuprofen for discomfort",
        "Keep the area raised and rested where you can",
      ],
      seekCare: [
        "The redness is spreading, or you see red streaks running from the wound",
        "You develop a fever or feel increasingly unwell",
        "The wound is deep, from an animal or human bite, or your tetanus cover is not up to date",
      ],
    },
    {
      slug: "influenza",
      title: "Influenza",
      excerpt:
        "A viral infection that comes on suddenly with fever and aches, and for most healthy people clears up with rest at home.",
      body: [
        "Influenza, or flu, is a viral infection of the airways that tends to arrive quickly and make you feel much more unwell than a common cold. It spreads easily through coughs, sneezes and contact, especially in the winter months. While it can knock you off your feet for a few days, most otherwise healthy people recover fully at home.",
        "There is no quick cure, and the body clears the virus by itself with rest and fluids. Symptoms usually peak within a few days and ease over a week or so, though tiredness and a cough can linger a little longer. A yearly flu vaccine is offered to those most at risk of complications.",
      ],
      symptoms: [
        "Sudden high fever and chills",
        "Aching muscles and joints",
        "Headache and extreme tiredness",
        "Dry cough and sore throat",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Take paracetamol or ibuprofen for fever and aches",
        "Stay warm and avoid contact with vulnerable people",
        "Give yourself time to recover before returning to normal activity",
      ],
      seekCare: [
        "You become short of breath or have chest pain",
        "Symptoms improve and then suddenly get worse again",
        "You are pregnant, older, or have a long-term health condition and feel very unwell",
      ],
    },
    {
      slug: "measles",
      title: "Measles",
      excerpt:
        "A very contagious viral infection that causes a fever and rash, and which vaccination protects against very effectively.",
      body: [
        "Measles is a highly contagious viral infection that spreads easily through coughing and sneezing. It usually begins with cold-like symptoms and a fever, followed a few days later by a distinctive blotchy rash that starts on the face and spreads down the body. Two doses of the MMR vaccine give strong, lasting protection.",
        "Most healthy people recover within a week or two with rest and fluids, as the body clears the virus on its own. Because measles can occasionally lead to more serious complications and spreads so readily, it is important to stay away from others while infectious and to let a doctor know rather than turning up unannounced.",
      ],
      symptoms: [
        "High fever, runny nose and a cough",
        "Red, sore or watery eyes",
        "Tiny white spots inside the mouth",
        "A blotchy red-brown rash spreading from the face",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Take paracetamol or ibuprofen for fever and discomfort",
        "Keep the lights dim if the eyes are sensitive",
        "Stay at home and away from others while you are infectious",
      ],
      seekCare: [
        "You suspect measles, so the practice can advise without exposing others",
        "There is breathlessness, chest pain, or a worsening fever",
        "You become drowsy, confused, or have a fit, or are pregnant or have low immunity",
      ],
    },
    {
      slug: "kidney-infection",
      title: "Kidney infection / pyelonephritis",
      excerpt:
        "An infection that has reached one of the kidneys, which usually clears well with prompt antibiotic treatment.",
      body: [
        "A kidney infection, or pyelonephritis, usually happens when bacteria travel up from the bladder into one of the kidneys. It often follows a urinary tract infection and tends to cause back or side pain along with a fever, making you feel more unwell than a simple bladder infection. It is more common in women, but it can affect anyone.",
        "With prompt antibiotic treatment most people recover fully, and the sooner it is treated the smoother the recovery tends to be. Drinking plenty of fluids and resting supports the body while the antibiotics work, and it is important to finish the full course even once you feel better.",
      ],
      symptoms: [
        "Pain in the back or side, below the ribs",
        "Fever, chills or shivering",
        "A burning feeling when passing urine, or needing to go often",
        "Feeling sick, tired or generally unwell",
      ],
      selfCare: [
        "Drink plenty of fluids to help flush the urinary system",
        "Rest while your body recovers",
        "Take paracetamol for pain and fever",
        "Finish the full course of any antibiotics you are given",
      ],
      seekCare: [
        "You have back or side pain with a fever, as this needs prompt treatment",
        "You are being sick and cannot keep fluids or medicines down",
        "You feel very unwell, confused, or your symptoms are getting rapidly worse",
      ],
    },
    {
      slug: "post-covid",
      title: "Post-COVID",
      excerpt:
        "Symptoms that linger for weeks or months after a COVID infection, which tend to improve gradually with time and support.",
      body: [
        "Post-COVID, sometimes called long COVID, describes symptoms that continue or appear after the initial infection has passed. The most common are tiredness, breathlessness and difficulty concentrating, and they can come and go from day to day. It is a recognised condition, and the symptoms are real even when routine tests look normal.",
        "Most people gradually improve over weeks to months, and pacing yourself rather than pushing through often helps recovery. Support is available through your doctor and, where needed, specialist rehabilitation services, who can help you build activity back up safely and manage individual symptoms.",
      ],
      symptoms: [
        "Persistent tiredness and low energy",
        "Breathlessness on activity",
        "Brain fog or difficulty concentrating",
        "Aches, palpitations or disturbed sleep",
      ],
      selfCare: [
        "Pace your activity and build it up gradually rather than pushing through",
        "Prioritise rest and a regular sleep routine",
        "Keep a simple diary of symptoms to spot patterns",
        "Stay gently active within your limits and ask for support when you need it",
      ],
      seekCare: [
        "Symptoms are not improving or are affecting your daily life",
        "You have new chest pain, marked breathlessness, or palpitations",
        "Your mood is low or you are struggling to cope",
      ],
    },
    {
      slug: "rsv",
      title: "RSV / respiratory syncytial virus",
      excerpt:
        "A common winter virus that causes cold-like symptoms in most people and usually clears up with rest at home.",
      body: [
        "RSV (respiratory syncytial virus) is a very common cause of coughs and colds, and almost all children have caught it by the age of two. In older children and healthy adults it usually causes mild, cold-like symptoms. In babies and frail older people it can sometimes affect the smaller airways and cause more troublesome breathing.",
        "Most infections settle on their own within a week or two as the body clears the virus, and treatment is about keeping comfortable and well hydrated. Keeping a close eye on a young baby's breathing and feeding helps you judge whether they are coping well or need to be seen.",
      ],
      symptoms: [
        "Runny or blocked nose and sneezing",
        "Cough and a mild fever",
        "Reduced appetite or feeding in babies",
        "Faster or noisier breathing in young children",
      ],
      selfCare: [
        "Offer plenty of fluids and smaller, more frequent feeds for babies",
        "Use saline drops to ease a blocked nose",
        "Keep the air comfortable and not too dry",
        "Take or give paracetamol or ibuprofen for fever if needed",
      ],
      seekCare: [
        "A baby is breathing fast, struggling, or drawing in under the ribs",
        "Feeding drops well below normal, or there are fewer wet nappies",
        "The lips or skin look pale or blue, or breathing pauses occur",
      ],
    },
    {
      slug: "rubella",
      title: "Rubella",
      excerpt:
        "A usually mild viral infection causing a light rash, which the MMR vaccine prevents very effectively.",
      body: [
        "Rubella, sometimes called German measles, is a viral infection that spreads through coughs and sneezes. In most people it is mild, with a light pink rash and swollen glands, and many do not feel particularly unwell. The MMR vaccine protects against it, and widespread vaccination has made it uncommon.",
        "The illness usually clears on its own within about a week with rest and fluids. The main concern is for pregnant women, because rubella can harm an unborn baby, so anyone who is pregnant or could be should take particular care to avoid contact and seek advice.",
      ],
      symptoms: [
        "A light pink or red rash, often starting on the face",
        "Swollen glands behind the ears and in the neck",
        "A mild fever and headache",
        "Aching joints, more often in adults",
      ],
      selfCare: [
        "Rest and drink plenty of fluids",
        "Take paracetamol or ibuprofen for fever and aches",
        "Stay at home and away from others while you are infectious",
        "Keep well clear of anyone who is pregnant",
      ],
      seekCare: [
        "You are pregnant and have been in contact with rubella or have a rash",
        "You suspect rubella, so the practice can advise without exposing others",
        "Symptoms are severe, or you become drowsy or confused",
      ],
    },
    {
      slug: "sepsis",
      title: "Sepsis",
      excerpt:
        "A serious reaction to an infection that needs urgent treatment, and which is very treatable when caught early.",
      body: [
        "Sepsis happens when the body's response to an infection becomes overwhelming and starts to harm its own tissues and organs. It can develop from any infection, including a chest, urine or skin infection, and it can affect anyone, although the very young, the very old and those with weakened immunity are most at risk. It is a medical emergency, but it is treatable, and acting quickly saves lives.",
        "Because sepsis can get worse fast, the key is to recognise it early and get help straight away rather than waiting to see if things improve. In hospital it is treated with antibiotics, fluids and close monitoring, and the earlier this begins, the better the chances of a full recovery.",
      ],
      symptoms: [
        "Acting confused, slurred speech or hard to wake",
        "Very fast breathing or breathlessness",
        "A high or very low temperature with shivering",
        "Mottled, pale or blue-tinged skin, or a rash that does not fade",
      ],
      selfCare: [
        "Treat infections promptly and keep wounds clean to help prevent sepsis",
        "Keep up to date with recommended vaccinations",
        "Trust your instincts and seek help early if someone is going downhill fast",
        "Do not wait at home hoping a severe infection will settle",
      ],
      seekCare: [
        "Call your local emergency number immediately if you suspect sepsis",
        "Someone with an infection is confused, very drowsy, or breathing very fast",
        "The skin is mottled, pale or blue, or there is a rash that does not fade under pressure",
      ],
    },
    {
      slug: "fungal-infections",
      title: "Fungal infections",
      excerpt:
        "Common infections of the skin, nails or mucous membranes that are usually harmless and respond well to antifungal treatment.",
      body: [
        "Fungal infections occur when types of fungus or yeast that normally live on or around the body grow more than usual, often in warm, moist areas such as the feet, skin folds or nails. They are very common and easily picked up, for example in changing rooms or from shared towels, and they are not a sign of poor hygiene. Most cause itching, redness or scaling rather than serious illness.",
        "The great majority clear up with antifungal creams, sprays or, for some, tablets, alongside keeping the affected area clean and dry. Nail infections take longer to treat than skin ones, so patience helps, and simple habits make a return less likely.",
      ],
      symptoms: [
        "Itchy, red or scaly patches of skin",
        "Cracking or peeling, often between the toes",
        "Thickened, discoloured or crumbly nails",
        "White patches or soreness on moist areas such as the mouth or groin",
      ],
      selfCare: [
        "Keep the affected area clean and thoroughly dry",
        "Use an antifungal cream, powder or spray as directed",
        "Wear loose, breathable clothing and change socks daily",
        "Avoid sharing towels and let footwear dry out between wears",
      ],
      seekCare: [
        "The infection does not improve with treatment from the pharmacy",
        "It is spreading, very sore, or keeps coming back",
        "You have diabetes or low immunity, or a nail or scalp infection",
      ],
    },
    {
      slug: "urinary-tract-infection",
      title: "Urinary tract infection",
      excerpt:
        "A common infection of the bladder or urethra that often settles quickly with fluids and, when needed, a short course of antibiotics.",
      body: [
        "A urinary tract infection (UTI) usually happens when bacteria enter the bladder or urethra, causing a burning feeling when passing urine and a need to go more often. They are very common, particularly in women, because of the body's anatomy, and they are not anything to feel embarrassed about. Most are uncomplicated and confined to the bladder.",
        "Milder infections sometimes settle with extra fluids, while others clear quickly with a short course of antibiotics from a doctor or pharmacist. Drinking plenty of water and treating it early usually means a swift and full recovery.",
      ],
      symptoms: [
        "A burning or stinging feeling when passing urine",
        "Needing to pass urine more often or urgently",
        "Cloudy, dark or strong-smelling urine",
        "Discomfort low in the tummy",
      ],
      selfCare: [
        "Drink plenty of water to help flush the bladder",
        "Take paracetamol for discomfort",
        "Go to the toilet when you need to rather than holding on",
        "Rest and avoid drinks that irritate the bladder if they bother you",
      ],
      seekCare: [
        "You have back or side pain, a fever, or feel shivery and unwell",
        "You see blood in your urine, or symptoms do not improve",
        "You are pregnant, male, or have frequent infections",
      ],
    },
    {
      slug: "chickenpox",
      title: "Chickenpox",
      excerpt:
        "A common and usually mild childhood infection that causes an itchy, spotty rash and clears up on its own within a week or two.",
      body: [
        "Chickenpox is a very contagious viral infection that mostly affects young children, causing an itchy rash of small, fluid-filled blisters that appear in crops over a few days. It spreads easily through the air and by contact with the blisters before they crust over. For most children it is uncomfortable but mild, and one bout usually gives lifelong immunity.",
        "The body clears the virus on its own, usually within one to two weeks, and care is about easing the itch and keeping the child comfortable. The spots crust over and fall off, and keeping the child away from others until then helps stop it spreading, especially to those at higher risk.",
      ],
      symptoms: [
        "Small, red, itchy spots that blister and then crust over",
        "Spots appearing in waves across the body",
        "A mild fever and feeling generally unwell",
        "Loss of appetite and tiredness",
      ],
      selfCare: [
        "Use cooling creams or soothing lotions to ease the itch",
        "Keep fingernails short and try to discourage scratching",
        "Dress the child in loose, cool clothing and offer plenty of fluids",
        "Give paracetamol for fever, and avoid ibuprofen with chickenpox",
      ],
      seekCare: [
        "The skin around the spots becomes hot, red, swollen or painful",
        "The child is drowsy, breathless, or has a fever that will not settle",
        "A newborn, pregnant woman, or someone with low immunity is affected",
      ],
    },
    {
      slug: "tonsillitis",
      title: "Tonsillitis / strep throat",
      excerpt:
        "Inflammation of the tonsils causing a sore throat, which is often viral and usually settles within about a week.",
      body: [
        "Tonsillitis is inflammation of the tonsils at the back of the throat, most often caused by a virus but sometimes by bacteria such as streptococcus. It leads to a sore throat, pain on swallowing and sometimes a fever, and it is especially common in children and young people. Although it is uncomfortable, it is rarely serious.",
        "Viral tonsillitis settles on its own within about a week, and treatment is mainly about easing the pain and staying hydrated. When a bacterial infection is likely or symptoms are more severe, a doctor may prescribe antibiotics, but many cases do not need them.",
      ],
      symptoms: [
        "A sore throat and pain when swallowing",
        "Red or swollen tonsils, sometimes with white patches",
        "Fever and swollen glands in the neck",
        "Headache and tiredness",
      ],
      selfCare: [
        "Drink plenty of fluids and rest",
        "Take paracetamol or ibuprofen for pain and fever",
        "Try warm drinks or gargling with warm salt water if it soothes you",
        "Eat soft, cool foods that are easier to swallow",
      ],
      seekCare: [
        "The sore throat is severe, one-sided, or lasts more than about a week",
        "You have difficulty swallowing, breathing, or opening your mouth",
        "Symptoms keep returning or you feel very unwell with a high fever",
      ],
    },
    {
      slug: "quinsy",
      title: "Peritonsillar abscess / quinsy",
      excerpt:
        "A collection of pus beside a tonsil that causes severe one-sided throat pain and needs prompt medical treatment.",
      body: [
        "A peritonsillar abscess, often called quinsy, is a pocket of pus that forms next to a tonsil, usually as a complication of tonsillitis. It causes intense pain on one side of the throat, difficulty swallowing and often a muffled voice, and it tends to make a person feel quite unwell. It is more common in older children and young adults.",
        "Quinsy needs medical attention, as it usually requires antibiotics and often draining of the pus, after which people generally recover well. Getting it seen promptly relieves the pain quickly and prevents it from worsening, so it is not something to wait out at home.",
      ],
      symptoms: [
        "Severe pain on one side of the throat",
        "Difficulty swallowing, and sometimes trouble opening the mouth",
        "A muffled or 'hot potato' voice",
        "Fever, swollen neck glands and feeling very unwell",
      ],
      selfCare: [
        "Take paracetamol or ibuprofen for the pain while arranging to be seen",
        "Sip cool fluids to stay hydrated as best you can",
        "Rest and keep your fluid intake up",
        "Do not delay getting medical help, as this needs treatment",
      ],
      seekCare: [
        "You have severe one-sided throat pain and struggle to swallow",
        "You cannot fully open your mouth, or your voice is muffled with a high fever",
        "You have any difficulty breathing, drooling, or swallowing saliva",
      ],
    },
  ],
};
