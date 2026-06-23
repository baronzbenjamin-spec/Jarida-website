import type { FactCategory, FactTopic } from "./types";

const topics: FactTopic[] = [
  {
    slug: "sinusitis-in-children",
    title: "Sinusitis in children",
    excerpt:
      "An inflammation of the sinuses that usually follows a cold and most often clears up on its own within a couple of weeks.",
    body: [
      "Sinusitis happens when the spaces behind the nose and cheeks become swollen and filled with mucus, usually after a cold or other viral infection. In children this is very common because their noses and sinuses are still small and block easily. Most cases are caused by viruses rather than bacteria, so they get better without antibiotics.",
      "The inflammation normally settles as the cold clears, often within ten days to two weeks. The aim of care at home is to keep your child comfortable and help the mucus drain while their body does the rest. Only a small number of cases need a doctor's attention.",
    ],
    symptoms: [
      "A blocked or runny nose that lingers after a cold",
      "Thick or discoloured nasal mucus",
      "Tenderness or a feeling of pressure around the nose and cheeks",
      "A cough, especially at night, and mild fever",
    ],
    selfCare: [
      "Encourage plenty of fluids and rest",
      "Use saline drops or spray to loosen and clear mucus",
      "Try gentle steam from a warm bath to ease congestion",
      "Give paracetamol or ibuprofen for pain or fever if needed",
    ],
    seekCare: [
      "Symptoms last more than about ten days or keep getting worse",
      "There is swelling, redness, or pain around the eyes",
      "Your child has a high fever, severe headache, or seems very unwell",
    ],
  },
  {
    slug: "fever-in-children",
    title: "Fever in children",
    excerpt:
      "A raised temperature is the body's natural way of fighting infection and is usually a sign the immune system is working well.",
    body: [
      "A fever means your child's temperature is higher than normal, most often because their body is fighting off a common infection such as a cold or tummy bug. It is a healthy and expected response, not a disease in itself. How your child behaves matters more than the exact number on the thermometer.",
      "Most fevers are caused by viruses and pass within a few days without any specific treatment. The focus at home is on keeping your child comfortable and well hydrated while their body clears the infection. A child who is drinking, alert at times, and settling between temperatures is usually coping well.",
    ],
    symptoms: [
      "A temperature that feels hot to the touch, often on the forehead or back",
      "Flushed cheeks and tiredness or irritability",
      "Shivering or feeling cold as the temperature rises",
      "Reduced appetite and wanting more cuddles",
    ],
    selfCare: [
      "Offer regular drinks to prevent dehydration",
      "Dress your child in light clothing and keep the room comfortable",
      "Give paracetamol or ibuprofen if the fever is making them miserable",
      "Let them rest and check on them through the night",
    ],
    seekCare: [
      "A baby under three months has any fever, or a baby aged three to six months has a high fever",
      "Your child is hard to wake, very drowsy, or has a rash that does not fade when pressed",
      "The fever lasts more than about five days, your child is getting worse, or shows signs of dehydration such as fewer wet nappies, a dry mouth, or no tears when crying",
    ],
  },
  {
    slug: "fifth-disease",
    title: "Fifth disease",
    excerpt:
      "A mild and very common childhood viral infection that causes a bright cheek rash and usually clears on its own.",
    body: [
      "Fifth disease, sometimes called slapped cheek syndrome, is caused by a virus that spreads easily among children, often in waves at nursery or school. It starts with cold-like symptoms and a mild fever, followed a few days later by a striking red rash on the cheeks. By the time the rash appears your child is usually no longer infectious.",
      "The illness is almost always mild and gets better by itself within one to three weeks, though the rash may come and go for a while with heat or sunlight. There is no specific treatment beyond keeping your child comfortable. Most children carry on with their normal activities.",
    ],
    symptoms: [
      "Bright red, warm cheeks that look like a slap mark",
      "A lacy pink rash spreading to the body, arms, and legs",
      "Mild fever, headache, and a runny nose beforehand",
      "Occasionally sore or aching joints, more often in older children",
    ],
    selfCare: [
      "Offer plenty of fluids and let your child rest",
      "Use paracetamol or ibuprofen for fever or aches if needed",
      "Apply a gentle moisturiser if the skin feels dry or itchy",
      "Keep your child cool, as heat can make the rash more noticeable",
    ],
    seekCare: [
      "Your child has a blood disorder or weakened immune system",
      "You are pregnant and have been in contact with the infection",
      "Your child becomes very pale, unusually tired, or breathless",
    ],
  },
  {
    slug: "cough-in-children",
    title: "Cough in children",
    excerpt:
      "Coughing is a normal way the body clears the airways, and in children it is usually caused by a passing viral infection.",
    body: [
      "A cough is one of the most common symptoms in childhood and is almost always part of a cold or other viral infection. It is the body's way of clearing mucus and irritation from the throat and airways, so it actually serves a useful purpose. Coughs can sound dramatic but most are nothing to worry about.",
      "Most coughs ease within one to three weeks as the infection clears, though a dry tickly cough can sometimes linger a little longer. There is no quick cure, so care is about soothing the throat and keeping your child comfortable. Cough medicines are generally not recommended for young children.",
    ],
    symptoms: [
      "A dry or chesty cough that often comes with a cold",
      "A cough that is worse at night or first thing in the morning",
      "A runny or blocked nose and mild fever",
      "A tickly or sore throat",
    ],
    selfCare: [
      "Offer plenty of warm and cool drinks to soothe the throat",
      "Keep the air moist and avoid smoky rooms",
      "Try a warm drink with honey for children over one year",
      "Use paracetamol or ibuprofen if a fever or discomfort is present",
    ],
    seekCare: [
      "Your child is breathing quickly, noisily, or with obvious effort",
      "The cough lasts more than about three to four weeks",
      "Your child coughs up blood or seems very unwell",
    ],
  },
  {
    slug: "headache-in-children",
    title: "Headache in children",
    excerpt:
      "Headaches in children are common, usually harmless, and most often linked to everyday causes like tiredness, hunger, or a cold.",
    body: [
      "Headaches happen in children for many of the same everyday reasons they do in adults, such as being tired, dehydrated, hungry, or coming down with a cold. Stress and too much screen time can also play a part. In the great majority of cases there is no serious cause behind them.",
      "Most headaches pass quickly once your child rests, eats, drinks, or recovers from a minor illness. Simple comfort measures are usually all that is needed. Keeping an eye on how often they happen can help you and your doctor spot any pattern if they become frequent.",
    ],
    symptoms: [
      "A dull ache or tightness across the head",
      "Discomfort that eases with rest, food, or fluids",
      "A headache alongside cold or fever symptoms",
      "Mild tiredness or low mood at the time",
    ],
    selfCare: [
      "Offer a drink and a snack in case hunger or thirst is the cause",
      "Encourage a quiet rest in a calm, dimly lit room",
      "Make sure your child is getting enough sleep",
      "Give paracetamol or ibuprofen if the headache is troublesome",
    ],
    seekCare: [
      "The headache is severe, sudden, or wakes your child from sleep",
      "It comes with repeated vomiting, a stiff neck, or a rash that does not fade",
      "Headaches are becoming more frequent or are affecting daily life",
    ],
  },
  {
    slug: "influenza-in-children",
    title: "Influenza in children",
    excerpt:
      "Flu is a viral infection that comes on quickly and feels worse than a cold, but most children recover fully within a week or so.",
    body: [
      "Influenza, or flu, is caused by a virus that tends to come on suddenly with fever, aches, and tiredness. It spreads easily during the colder months, particularly where children are together at nursery or school. Children often feel quite unwell for a few days but usually have a strong recovery.",
      "Flu is caused by a virus, so antibiotics do not help and the body clears it by itself within about a week. Care at home is about rest, fluids, and easing symptoms while your child recovers. A yearly flu vaccine can help protect children who are eligible.",
    ],
    symptoms: [
      "A sudden high fever and shivering",
      "Aching muscles and feeling generally rotten",
      "A dry cough, sore throat, and blocked nose",
      "Headache, tiredness, and reduced appetite",
    ],
    selfCare: [
      "Encourage rest and plenty of fluids",
      "Use paracetamol or ibuprofen to bring down fever and ease aches",
      "Offer small, light meals when your child feels up to it",
      "Keep them at home to rest and avoid spreading the infection",
    ],
    seekCare: [
      "Your child is breathing quickly or struggling to breathe",
      "They become very drowsy, hard to wake, or confused",
      "The fever lasts more than about five days or symptoms suddenly worsen",
    ],
  },
  {
    slug: "croup",
    title: "Croup",
    excerpt:
      "A common viral infection that causes a distinctive barking cough, and which usually settles within a few days with calm home care.",
    body: [
      "Croup is caused by a virus that swells the voice box and upper airways, giving the cough its unmistakable barking sound. It mostly affects young children, often after a cold, and tends to be worse at night. Although the noisy breathing can be frightening, most cases are mild.",
      "Croup usually improves within three to five days as the infection clears, and keeping your child calm makes a real difference because crying can worsen the breathing. Sitting them upright and comforting them often helps the symptoms ease. A doctor can give medicine to reduce the swelling if symptoms are more troublesome.",
    ],
    symptoms: [
      "A harsh, barking cough like a seal",
      "A hoarse voice or cry",
      "Noisy or rasping breathing, especially when upset",
      "Cold-like symptoms and a mild fever beforehand",
    ],
    selfCare: [
      "Stay calm and comfort your child to ease their breathing",
      "Sit them upright on your lap rather than lying flat",
      "Offer regular sips of fluid",
      "Give paracetamol or ibuprofen if a fever is making them miserable",
    ],
    seekCare: [
      "Your child is struggling to breathe or the skin sucks in around the ribs",
      "They make a high-pitched noise when breathing in, even at rest",
      "Your child becomes very drowsy, pale, or has a bluish tinge to the lips",
    ],
  },
  {
    slug: "colic",
    title: "Colic",
    excerpt:
      "Frequent crying in an otherwise healthy and well-fed baby that is harmless and naturally improves over the first few months.",
    body: [
      "Colic describes long bouts of crying in a baby who is otherwise feeding and growing well. The exact cause is not fully understood, but it is thought to relate to the baby's developing digestive system and sensitivity to the world around them. It is very common and is not caused by anything you have done wrong.",
      "Colic almost always settles on its own, usually by around three to four months of age. The crying can be exhausting, but it does not harm your baby and it does pass. Support is available, and looking after your own wellbeing matters just as much during this stage.",
    ],
    symptoms: [
      "Intense crying, often in the late afternoon or evening",
      "Clenched fists, a flushed face, or drawing the knees up",
      "Crying that is hard to soothe despite feeding and changing",
      "A baby who is otherwise feeding, growing, and developing well",
    ],
    selfCare: [
      "Try gentle rocking, holding, or going for a walk",
      "Offer calm, quiet surroundings during the worst times",
      "Wind your baby carefully during and after feeds",
      "Take breaks and accept help so you can rest too",
    ],
    seekCare: [
      "Your baby is feeding poorly or not putting on weight",
      "There is vomiting, blood in the stool, fever, or diarrhoea",
      "You feel unable to cope or the crying suddenly changes in nature",
    ],
  },
  {
    slug: "stomach-pain-in-children",
    title: "Stomach pain in children",
    excerpt:
      "Tummy ache is very common in childhood and is usually short-lived, harmless, and linked to everyday causes.",
    body: [
      "Stomach pain in children can come from many ordinary things, such as constipation, trapped wind, a tummy bug, or even feeling worried or upset. Younger children often describe all sorts of discomfort as tummy ache. In most cases there is no serious cause and the pain comes and goes.",
      "The majority of tummy aches settle within a day or two with simple comfort and rest. Helping your child relax, use the toilet, and eat gently usually does the trick. Keeping an eye on any other symptoms helps you judge whether it needs a closer look.",
    ],
    symptoms: [
      "A cramping or aching feeling in the tummy",
      "Pain that eases after passing wind or using the toilet",
      "Reduced appetite or feeling a bit sick",
      "Pain linked to worry, excitement, or going to school",
    ],
    selfCare: [
      "Encourage rest and a warm, comfortable position",
      "Offer small sips of water and light, plain food",
      "Help your child use the toilet in case constipation is the cause",
      "Use a covered warm compress on the tummy for comfort",
    ],
    seekCare: [
      "The pain is severe, constant, or moves to the lower right side with fever or vomiting",
      "There is blood in the stool or vomit, or persistent vomiting",
      "Your child seems very unwell, pale, or the pain will not settle",
    ],
  },
  {
    slug: "perianal-streptococcal-infection",
    title: "Perianal streptococcal infection",
    excerpt:
      "A bacterial skin infection around a child's bottom that clears well with treatment from a doctor.",
    body: [
      "This is an infection of the skin around the anus, caused by the same streptococcal bacteria that often cause sore throats. It mainly affects young children and shows up as bright redness and soreness in the area. It is not a sign of poor hygiene and it responds well once treated.",
      "The infection needs antibiotics from a doctor to clear properly, but children usually feel better quite quickly once treatment starts. The skin then heals over a couple of weeks. Gentle care of the area helps comfort while the infection settles.",
    ],
    symptoms: [
      "Bright red, well-defined skin around the anus",
      "Soreness, itching, or pain in the area",
      "Pain or holding back when passing stools",
      "Sometimes streaks of blood on the stool from the irritated skin",
    ],
    selfCare: [
      "Keep the area clean and pat it gently dry",
      "Use soft toilet paper or rinse with water instead of wiping hard",
      "Encourage your child not to hold in bowel movements",
      "Apply any cream prescribed by your doctor as directed",
    ],
    seekCare: [
      "The redness and soreness do not improve or keep coming back",
      "Your child has a fever or seems generally unwell",
      "The area becomes more swollen, painful, or starts to spread",
    ],
  },
  {
    slug: "roseola",
    title: "Three-day fever / roseola",
    excerpt:
      "A mild and common viral illness in babies where a few days of fever are followed by a harmless rash as they recover.",
    body: [
      "Roseola is a gentle viral infection that mostly affects babies and toddlers. It typically begins with a sudden high fever lasting around three days, which then settles just as a pink rash appears on the body. The arrival of the rash is usually a reassuring sign that your child is getting better.",
      "The illness clears by itself within about a week and needs no specific treatment beyond keeping your child comfortable. The rash is not itchy or sore and fades on its own over a few days. Most children carry on much as normal once the fever has passed.",
    ],
    symptoms: [
      "A sudden high fever lasting about three days",
      "A pink, slightly raised rash appearing as the fever ends",
      "The rash starting on the trunk and spreading outwards",
      "Mild irritability or a reduced appetite during the fever",
    ],
    selfCare: [
      "Offer plenty of fluids during the fever",
      "Dress your child lightly and keep the room comfortable",
      "Give paracetamol or ibuprofen if the fever is upsetting them",
      "Let your child rest and recover at their own pace",
    ],
    seekCare: [
      "The fever lasts more than about five days",
      "Your child is hard to wake, very drowsy, or has a febrile seizure",
      "A rash appears that does not fade when pressed",
    ],
  },
  {
    slug: "rash-in-children",
    title: "Rash in children",
    excerpt:
      "Rashes are extremely common in childhood and are nearly always harmless, often caused by viruses, skin irritation, or heat.",
    body: [
      "Children develop rashes for all kinds of reasons, including viral infections, eczema, heat, or contact with something that irritates the skin. Most rashes are mild and a child who is otherwise happy, feeding, and active is usually fine. The appearance of a rash can look worrying even when the cause is gentle.",
      "The great majority of rashes fade on their own as the underlying cause settles, often within days to a couple of weeks. Simple skin care and comfort are usually all that is needed. The most important check is whether the rash fades when you press on it.",
    ],
    symptoms: [
      "Red, pink, or blotchy patches on the skin",
      "Raised bumps, dryness, or mild itching",
      "A rash that may come with cold or fever symptoms",
      "Skin that is otherwise not painful or swollen",
    ],
    selfCare: [
      "Keep the skin cool and avoid overheating",
      "Use a gentle, fragrance-free moisturiser if the skin is dry",
      "Dress your child in soft, loose clothing",
      "Give paracetamol or ibuprofen if a fever is present",
    ],
    seekCare: [
      "Call your local emergency number for a rash that does not fade when pressed with a glass, especially with fever, drowsiness, or a stiff neck",
      "Your child is very unwell, has trouble breathing, or has swelling of the face or lips",
      "The rash is spreading quickly, blistering, or your child seems in pain",
    ],
  },
  {
    slug: "ear-infection-in-children",
    title: "Ear infection in children",
    excerpt:
      "A common and usually short-lived infection of the middle ear that most often clears on its own within a few days.",
    body: [
      "Ear infections happen when the middle ear becomes inflamed and fills with fluid, usually following a cold. They are very common in young children because the small tubes that drain the ear block easily. The pain can be distressing, but most infections are not serious.",
      "Most ear infections are caused by viruses and clear by themselves within a few days, so antibiotics are often not needed. Care at home focuses on easing the pain while the infection settles. A doctor can advise if antibiotics or further checks are needed.",
    ],
    symptoms: [
      "Ear pain, or a baby pulling or rubbing at the ear",
      "Irritability, crying, and trouble sleeping",
      "A fever and reduced appetite",
      "Sometimes fluid draining from the ear",
    ],
    selfCare: [
      "Give paracetamol or ibuprofen to ease the pain",
      "Hold your child upright and offer comfort and reassurance",
      "Place a warm, covered compress against the ear for comfort",
      "Encourage fluids and rest",
    ],
    seekCare: [
      "Symptoms do not improve within about two to three days",
      "There is swelling, redness, or pain behind the ear",
      "Your child has a high fever, a stiff neck, or seems very unwell",
    ],
  },
  {
    slug: "conjunctivitis-in-children",
    title: "Conjunctivitis in children",
    excerpt:
      "A common eye infection that makes the eyes red and sticky, and which usually clears on its own within a week or two.",
    body: [
      "Conjunctivitis is inflammation of the thin layer covering the eye and inner eyelid, often caused by a virus, sometimes by bacteria, and occasionally by an allergy. It is very common in children and spreads easily, but it is rarely serious. One or both eyes can be affected.",
      "Most cases settle by themselves within one to two weeks, and gentle eye cleaning is usually all that is needed. Good handwashing helps stop it spreading to others. A doctor can advise if symptoms are severe or not improving.",
    ],
    symptoms: [
      "Red or pink eyes",
      "Sticky or watery discharge, with crusty lashes after sleep",
      "A gritty or itchy feeling in the eye",
      "Eyelids that may be a little swollen",
    ],
    selfCare: [
      "Gently wipe away discharge with cooled boiled water and clean cotton wool",
      "Wash hands often and use separate towels to avoid spreading it",
      "Use a fresh piece of cotton wool for each wipe and each eye",
      "Keep your child comfortable and avoid rubbing the eyes",
    ],
    seekCare: [
      "There is eye pain, sensitivity to light, or changes in vision",
      "The eyelid or area around the eye becomes red and swollen",
      "Symptoms last more than about two weeks or keep getting worse",
    ],
  },
  {
    slug: "strep-throat-in-children",
    title: "Tonsillitis / strep throat in children",
    excerpt:
      "A sore, inflamed throat that is common in children and usually settles within about a week, whether viral or bacterial.",
    body: [
      "Tonsillitis is inflammation of the tonsils, the soft pads at the back of the throat, and is often caused by a virus and sometimes by streptococcal bacteria. It is very common in children and brings a sore throat, fever, and difficulty swallowing. Most cases are mild even when they feel uncomfortable.",
      "Viral tonsillitis clears by itself within about a week, while bacterial strep throat may be helped by antibiotics from a doctor. Either way, the focus at home is on soothing the throat and keeping your child comfortable and hydrated. A doctor can check whether antibiotics are needed.",
    ],
    symptoms: [
      "A sore throat and pain when swallowing",
      "Red or swollen tonsils, sometimes with white patches",
      "Fever and tiredness",
      "Swollen, tender glands in the neck",
    ],
    selfCare: [
      "Offer plenty of cool drinks and soft, easy-to-swallow food",
      "Give paracetamol or ibuprofen for pain and fever",
      "Encourage rest at home",
      "For older children, warm salt-water gargles can soothe the throat",
    ],
    seekCare: [
      "Your child has difficulty breathing, swallowing, or opening the mouth",
      "Symptoms are severe, last more than about a week, or keep returning",
      "There is drooling, a muffled voice, or your child seems very unwell",
    ],
  },
  {
    slug: "common-cold-in-children",
    title: "Common cold in children",
    excerpt:
      "A mild viral infection of the nose and throat that is very frequent in childhood and clears on its own within a week or two.",
    body: [
      "The common cold is caused by viruses that inflame the lining of the nose and throat, and young children catch them often as their immune systems learn and grow. Colds spread easily through droplets and on surfaces, which is why they pass quickly through nurseries and schools. Several colds a year is completely normal and healthy.",
      "There is no cure for a cold, but children's bodies clear the virus by themselves, usually within a week or two. Care is about keeping your child comfortable and well hydrated while they recover. Antibiotics do not help because the cause is a virus.",
    ],
    symptoms: [
      "A blocked or runny nose and sneezing",
      "A mild cough and sore throat",
      "A low fever, more common in younger children",
      "Being a bit tired, grumpy, or off their food",
    ],
    selfCare: [
      "Offer plenty of fluids and extra rest",
      "Use saline drops to clear a blocked nose in babies",
      "Keep the air moist and avoid smoky rooms",
      "Give paracetamol or ibuprofen if your child is uncomfortable",
    ],
    seekCare: [
      "Your child is breathing quickly or with effort",
      "Symptoms last more than about ten days or keep getting worse",
      "A baby is feeding poorly, very drowsy, or has a high fever",
    ],
  },
  {
    slug: "constipation-in-children",
    title: "Constipation in children",
    excerpt:
      "Difficulty passing stools is very common in children and usually improves with simple changes to diet and routine.",
    body: [
      "Constipation means stools are hard, infrequent, or difficult to pass, and it is one of the most common tummy complaints in childhood. It often starts after a change in diet, illness, potty training, or holding in a poo because it once hurt. It is rarely a sign of anything serious.",
      "Most constipation eases with more fluids, fibre, and a relaxed toilet routine, though it can take time to fully settle. Helping your child feel comfortable and unhurried on the toilet makes a big difference. A doctor can recommend gentle treatment if simple steps are not enough.",
    ],
    symptoms: [
      "Hard, dry, or pellet-like stools",
      "Going to the toilet less often than usual",
      "Straining, pain, or holding back when passing stools",
      "Tummy ache and a reduced appetite",
    ],
    selfCare: [
      "Offer plenty of water throughout the day",
      "Include more fruit, vegetables, and wholegrains in meals",
      "Encourage regular, unhurried time on the toilet, especially after meals",
      "Keep your child active with daily play and movement",
    ],
    seekCare: [
      "Constipation does not improve with simple changes",
      "There is blood in the stool or ongoing tummy pain",
      "Your child is losing weight, vomiting, or seems generally unwell",
    ],
  },
  {
    slug: "hives-in-children",
    title: "Hives in children",
    excerpt:
      "An itchy, raised rash that appears suddenly and usually fades on its own within hours to a few days.",
    body: [
      "Hives are raised, itchy patches that can appear anywhere on the skin, often triggered by a viral infection, a food, a medicine, or contact with something irritating. In many children no clear cause is ever found. The rash can look alarming because it spreads and moves around, but it is usually harmless.",
      "Hives typically come and go and settle on their own, often within a day or two, although they can sometimes last a little longer. Antihistamines and cool care help ease the itch in the meantime. The main thing to watch for is any swelling of the face or trouble breathing.",
    ],
    symptoms: [
      "Raised, itchy bumps or patches that may join together",
      "A rash that moves around or comes and goes",
      "Patches that are pink or red and fade when pressed",
      "Itching that can be worse in the evening",
    ],
    selfCare: [
      "Apply a cool compress to soothe the itch",
      "Dress your child in loose, soft clothing",
      "Avoid any obvious trigger if you have noticed one",
      "Consider a children's antihistamine if itching is troublesome",
    ],
    seekCare: [
      "There is swelling of the face, lips, tongue, or throat, or any trouble breathing",
      "The hives keep returning over several weeks",
      "Your child seems unwell, has a fever, or the rash is widespread and distressing",
    ],
  },
  {
    slug: "urinary-tract-infection-in-children",
    title: "Urinary tract infection in children",
    excerpt:
      "A common infection of the urinary system that clears well with treatment, so it is worth checking when you suspect it.",
    body: [
      "A urinary tract infection happens when bacteria get into the bladder or urinary system, causing irritation and discomfort when passing urine. They are fairly common in children, and in babies the only sign may be a fever or being generally off colour. They are very treatable once recognised.",
      "Most urinary infections clear quickly with a course of antibiotics from a doctor, and children usually feel better within a day or two of starting treatment. Drinking plenty of fluids supports recovery. It is worth seeing a doctor for a urine check whenever you suspect one.",
    ],
    symptoms: [
      "Pain, stinging, or crying when passing urine",
      "Needing to wee more often or new daytime wetting",
      "Smelly or cloudy urine, sometimes with tummy pain",
      "A fever, especially in babies with no obvious cause",
    ],
    selfCare: [
      "Encourage your child to drink plenty of water",
      "Help them not to hold in their wee and to empty the bladder fully",
      "Wipe from front to back to help prevent infections",
      "Give paracetamol or ibuprofen for discomfort or fever",
    ],
    seekCare: [
      "You suspect a urinary infection, as a urine test and treatment may be needed",
      "Your child has a high fever, pain in the back or side, or is vomiting",
      "Symptoms do not improve within a couple of days of starting treatment",
    ],
  },
];

export const childrensHealth: FactCategory = {
  id: "childrens-health",
  name: "Children's health",
  description:
    "Common childhood illnesses and what to watch for, with practical care for worried parents.",
  topics,
};
