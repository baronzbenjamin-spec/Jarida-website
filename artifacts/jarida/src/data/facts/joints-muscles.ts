import type { FactCategory } from "./types";

export const jointsMuscles: FactCategory = {
  id: "joints-muscles",
  name: "Joints, muscles & skeleton",
  description: "Conditions of the bones, joints, and muscles, with advice on movement and recovery.",
  topics: [
    {
      slug: "osteoarthritis",
      title: "Osteoarthritis",
      excerpt:
        "A common wear-related joint condition that, while it can be uncomfortable, is usually well managed with movement and simple measures.",
      body: [
        "Osteoarthritis is the most common form of joint problem, caused by gradual wear of the smooth cartilage that cushions the joints. It often affects the knees, hips, and hands, and becomes more common with age. It tends to cause pain and stiffness that can vary from day to day.",
        "Although osteoarthritis is long-term, much can be done to keep joints comfortable and working well. Staying active, keeping to a healthy weight, and using pain relief when needed all help a great deal. Many people manage well for years, and further treatments are available if symptoms become troublesome.",
      ],
      symptoms: [
        "Joint pain that is worse with activity",
        "Stiffness, especially after rest",
        "Swelling or a grating feeling in the joint",
        "Reduced movement in the affected joint",
      ],
      selfCare: [
        "Keep active with gentle, regular exercise",
        "Maintain a healthy weight to ease joint load",
        "Use paracetamol or ibuprofen for pain if suitable",
        "Try warm packs and strengthening exercises",
      ],
      seekCare: [
        "Pain is limiting your daily activities or sleep",
        "A joint becomes hot, very swollen, or suddenly more painful",
        "You have a joint that locks, gives way, or rapidly worsens",
      ],
    },
    {
      slug: "osteoporosis",
      title: "Osteoporosis",
      excerpt:
        "A condition where bones become more fragile, which is largely preventable and treatable to lower the risk of fractures.",
      body: [
        "Osteoporosis means the bones have become weaker and more likely to break. It develops slowly and silently over many years, often without symptoms until a bone breaks after a minor fall. It is more common after the menopause and in older age.",
        "The good news is that osteoporosis can be managed and fractures prevented. Weight-bearing exercise, enough calcium and vitamin D, and medicines when needed all help keep bones strong. A bone density scan can assess your risk and guide treatment.",
      ],
      symptoms: [
        "Often no symptoms until a bone breaks",
        "A fracture after a minor fall or knock",
        "Loss of height over time",
        "A stooped posture or back pain from spine changes",
      ],
      selfCare: [
        "Do regular weight-bearing and strengthening exercise",
        "Eat foods rich in calcium and get enough vitamin D",
        "Stop smoking and limit alcohol",
        "Reduce fall risks at home",
      ],
      seekCare: [
        "You break a bone after a minor fall",
        "You notice loss of height or new back pain",
        "You have risk factors and want to discuss a bone scan",
      ],
    },
    {
      slug: "herniated-disc",
      title: "Herniated disc",
      excerpt:
        "A slipped disc in the spine can cause pain that travels down a limb but usually settles on its own over weeks.",
      body: [
        "A herniated, or slipped, disc happens when one of the soft cushions between the bones of the spine bulges and presses on a nearby nerve. This can cause back pain along with pain, tingling, or weakness that travels down an arm or leg. It is often triggered by lifting or twisting, but can happen gradually too.",
        "Most herniated discs improve on their own within a few weeks as the inflammation settles. Staying gently active, using pain relief, and avoiding prolonged rest all help recovery. Surgery is rarely needed and is only considered when symptoms are severe or do not improve.",
      ],
      symptoms: [
        "Back pain with pain spreading into an arm or leg",
        "Tingling or numbness in the limb",
        "Weakness in the affected arm or leg",
        "Pain that worsens with sitting, bending, or coughing",
      ],
      selfCare: [
        "Stay gently active and avoid long bed rest",
        "Take paracetamol or ibuprofen for pain if needed",
        "Use good posture and lift carefully",
        "Return to normal activities gradually",
      ],
      seekCare: [
        "You have numbness around the groin or loss of bladder or bowel control",
        "You develop worsening weakness in a leg or arm",
        "Pain is severe or fails to improve after several weeks",
      ],
    },
    {
      slug: "gout",
      title: "Gout",
      excerpt:
        "A form of arthritis causing sudden, intense joint pain that settles with treatment and can be prevented from returning.",
      body: [
        "Gout is caused by tiny crystals of uric acid building up in a joint, often the big toe. This triggers a sudden attack of intense pain, redness, and swelling that can come on overnight. Certain foods, alcohol, and being overweight can make attacks more likely.",
        "Gout attacks settle with rest and anti-inflammatory treatment, usually over a few days to a week. Lifestyle changes and, if attacks are frequent, daily medicine can lower uric acid and prevent gout from coming back. With the right approach, most people get attacks well under control.",
      ],
      symptoms: [
        "Sudden, severe pain in a joint, often the big toe",
        "Redness, warmth, and swelling around the joint",
        "Skin that is shiny and very tender to touch",
        "Attacks that often start at night",
      ],
      selfCare: [
        "Rest the joint and keep it raised during an attack",
        "Use ice packs and take ibuprofen if suitable for you",
        "Drink plenty of water and limit alcohol",
        "Cut down on rich, high-purine foods",
      ],
      seekCare: [
        "It is your first attack and you are unsure of the cause",
        "The joint is very hot and you feel feverish or unwell",
        "Attacks keep returning despite self-care",
      ],
    },
    {
      slug: "plantar-fasciitis",
      title: "Heel spur / plantar fasciitis",
      excerpt:
        "A common cause of heel pain from an irritated band under the foot that usually improves with stretches and time.",
      body: [
        "Plantar fasciitis is irritation of the tough band of tissue that runs along the sole of the foot. It causes heel pain that is often worst with the first steps in the morning or after sitting. A heel spur is a small bony growth sometimes seen alongside it, but the pain comes mainly from the soft tissue.",
        "Although it can be slow to settle, plantar fasciitis nearly always improves with simple measures over a few months. Stretching, supportive footwear, and easing off aggravating activities make a real difference. It does not cause lasting harm, which is reassuring when progress feels slow.",
      ],
      symptoms: [
        "Heel pain, especially with the first steps in the morning",
        "Pain that eases with movement but returns after rest",
        "Tenderness on the underside of the heel",
        "Discomfort after long standing or walking",
      ],
      selfCare: [
        "Stretch the calf and the sole of the foot regularly",
        "Wear supportive, cushioned shoes and avoid going barefoot",
        "Use ice and paracetamol or ibuprofen for pain",
        "Reduce high-impact activity while it settles",
      ],
      seekCare: [
        "Pain is severe or not improving after several weeks of self-care",
        "The heel is swollen, red, or hot",
        "Pain followed a sudden injury or a snapping sensation",
      ],
    },
    {
      slug: "rheumatoid-arthritis",
      title: "Rheumatoid arthritis (RA)",
      excerpt:
        "An inflammatory joint condition that, with today's treatments, can usually be controlled well to protect the joints.",
      body: [
        "Rheumatoid arthritis is a condition where the immune system mistakenly attacks the lining of the joints, causing inflammation. This leads to pain, swelling, and stiffness, often in the hands and feet and usually on both sides of the body. It can also cause tiredness and a general feeling of being unwell.",
        "Modern treatment has transformed the outlook for rheumatoid arthritis, and early treatment helps protect the joints from damage. Medicines that calm the immune system, gentle exercise, and support from a specialist team allow most people to stay active. Symptoms often come in flares that settle with the right care.",
      ],
      symptoms: [
        "Painful, swollen joints, often in the hands and feet",
        "Stiffness that is worst in the morning",
        "Symmetrical joint involvement on both sides",
        "Tiredness and feeling generally unwell",
      ],
      selfCare: [
        "Take prescribed medicines regularly",
        "Stay gently active to keep joints mobile",
        "Balance activity with rest during flares",
        "Use paracetamol or ibuprofen for pain if suitable",
      ],
      seekCare: [
        "You have new joint swelling, pain, and morning stiffness",
        "A flare is severe or not settling with usual treatment",
        "You develop fever, chest symptoms, or feel very unwell",
      ],
    },
    {
      slug: "muscle-strain",
      title: "Muscle tear / muscle strain",
      excerpt:
        "A pulled or torn muscle is a common injury that usually heals well with rest and gradual return to activity.",
      body: [
        "A muscle strain happens when muscle fibres are overstretched or torn, often during sport, lifting, or a sudden movement. It causes pain, tenderness, and sometimes swelling or bruising in the affected area. Most strains are minor and heal completely.",
        "Recovery is helped by resting the muscle at first, then gradually returning to gentle movement as it eases. Most strains settle within a few weeks, with more severe tears taking longer. Building strength again before going back to full activity helps prevent it happening again.",
      ],
      symptoms: [
        "Sudden pain at the time of injury",
        "Tenderness and tightness in the muscle",
        "Swelling or bruising",
        "Weakness or pain when using the muscle",
      ],
      selfCare: [
        "Rest, then ease back into gentle movement",
        "Use an ice pack in the first day or two",
        "Take paracetamol or ibuprofen for pain if needed",
        "Build up strength gradually before full activity",
      ],
      seekCare: [
        "You heard a snap or cannot use or bear weight on the limb",
        "There is severe swelling, deformity, or numbness",
        "The injury is not improving after a couple of weeks",
      ],
    },
    {
      slug: "stiff-neck",
      title: "Stiff neck / acute torticollis",
      excerpt:
        "A sudden stiff, painful neck is common and alarming but almost always harmless and settles within a few days.",
      body: [
        "A stiff neck, sometimes called acute torticollis, often appears suddenly, frequently after sleeping awkwardly or a quick movement. It causes pain and difficulty turning the head, and the neck may feel locked to one side. Although it can be very uncomfortable, it is rarely a sign of anything serious.",
        "Most stiff necks ease on their own within a few days as the muscle spasm relaxes. Keeping the neck gently moving, rather than holding it still, helps recovery. Simple pain relief and warmth make it more comfortable in the meantime.",
      ],
      symptoms: [
        "Sudden neck pain and stiffness",
        "Difficulty turning the head to one side",
        "Muscle tightness or spasm",
        "Pain spreading to the shoulder or upper back",
      ],
      selfCare: [
        "Keep the neck gently moving rather than holding it still",
        "Use a warm pack to relax tight muscles",
        "Take paracetamol or ibuprofen for pain if needed",
        "Check your posture and pillow support",
      ],
      seekCare: [
        "Pain follows a significant injury or fall",
        "You have fever, severe headache, or a stiff neck with feeling unwell",
        "You notice numbness, tingling, or weakness in the arms",
      ],
    },
  ],
};
