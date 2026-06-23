import type { FactCategory } from "./types";

export const selfTests: FactCategory = {
  id: "self-tests",
  name: "Self-tests",
  description:
    "Simple informational guides to help you reflect on your health and decide whether to seek support.",
  topics: [
    {
      slug: "depression-self-test",
      title: "Self-test for depression",
      excerpt:
        "A gentle guide to reflecting on low mood, what a depression self-test covers, and when it is worth reaching out for support.",
      body: [
        "A self-test for depression is a simple way to reflect on how you have been feeling over recent weeks. It usually asks about things like low mood, loss of interest, sleep, energy, appetite, and how you feel about yourself. The aim is not to give a diagnosis, but to help you notice patterns and decide whether to talk to someone.",
        "Low mood is very common and often eases with time, support, and small changes to daily life. If a self-reflection suggests you have been struggling for a while, that is a useful prompt to reach out, not a cause for alarm. Help is available, and depression is very treatable once you take that first step.",
      ],
      symptoms: [
        "Persistent low mood or sadness most days",
        "Loss of interest or pleasure in usual activities",
        "Changes in sleep, appetite, or energy",
        "Feeling worthless, hopeless, or unable to concentrate",
      ],
      selfCare: [
        "Keep a gentle routine with regular sleep and meals",
        "Stay active and spend a little time outdoors each day",
        "Tell someone you trust how you have been feeling",
        "Be patient and kind with yourself as you take small steps",
      ],
      seekCare: [
        "Your low mood has lasted more than two weeks or is worsening",
        "It is affecting your work, relationships, or daily life",
        "You have any thoughts of harming yourself — seek help straight away",
      ],
    },
    {
      slug: "health-anxiety-self-test",
      title: "Self-test for health anxiety / hypochondria",
      excerpt:
        "An informational guide to recognising health anxiety, what a self-test explores, and when support could help you feel calmer.",
      body: [
        "A self-test for health anxiety helps you reflect on how much worry about your health is affecting your daily life. It usually asks about how often you check your body, search symptoms online, seek reassurance, or feel frightened by normal sensations. It is a way of noticing patterns rather than a diagnosis.",
        "Worrying about health from time to time is completely normal, but for some people the worry becomes persistent and tiring. If a self-reflection suggests health fears are taking up a lot of your time or distress, support can make a real difference. Talking therapies in particular help many people feel calmer and more in control.",
      ],
      symptoms: [
        "Frequent worry about having a serious illness",
        "Repeatedly checking your body or searching symptoms online",
        "Seeking reassurance but not feeling reassured for long",
        "Misreading normal body sensations as signs of disease",
      ],
      selfCare: [
        "Try to limit symptom searching and repeated body checking",
        "Set gentle limits on reassurance seeking",
        "Use relaxation, exercise, and a steady daily routine",
        "Share your worries with someone you trust",
      ],
      seekCare: [
        "Health worries take up a lot of your time or cause distress",
        "Anxiety is affecting your sleep, work, or relationships",
        "Self-help is not easing the worry and you would like support",
      ],
    },
    {
      slug: "gambling-self-test",
      title: "Self-test for gambling problems",
      excerpt:
        "A supportive guide to reflecting on your gambling habits, what a self-test asks about, and where to find help if you need it.",
      body: [
        "A self-test for gambling problems is a way to honestly reflect on how gambling fits into your life. It usually asks whether you gamble more than you intend, chase losses, hide it from others, or feel restless when you try to stop. The aim is to help you notice early signs, not to judge.",
        "Many people gamble without harm, but for some it can gradually take more time, money, and peace of mind than they would like. Recognising this early is a real strength, and effective support is available and confidential. Reaching out, whether to a helpline or a professional, is a positive first step.",
      ],
      symptoms: [
        "Gambling more money or time than you planned",
        "Chasing losses to try to win them back",
        "Feeling restless or irritable when trying to cut down",
        "Hiding gambling or borrowing money to keep going",
      ],
      selfCare: [
        "Set firm limits on time and money before you start",
        "Use blocking tools or self-exclusion to reduce access",
        "Tell someone you trust and ask them to support you",
        "Replace gambling time with other activities you enjoy",
      ],
      seekCare: [
        "Gambling is affecting your finances, work, or relationships",
        "You feel unable to stop despite wanting to",
        "You feel low or hopeless about it — reach out for support",
      ],
    },
    {
      slug: "stress-self-test",
      title: "Self-test for stress",
      excerpt:
        "A simple guide to checking in on your stress levels, what a self-test covers, and when it is worth seeking extra support.",
      body: [
        "A self-test for stress helps you pause and reflect on how pressure has been affecting you lately. It usually asks about feeling overwhelmed, tension, sleep, concentration, irritability, and physical signs like headaches or a racing heart. It is a way of taking stock rather than a formal diagnosis.",
        "Some stress is a normal part of life and can even help us rise to challenges, but ongoing stress can wear us down. If a self-reflection shows stress is building up, small changes and support often help a great deal. Noticing it early makes it easier to find a healthier balance before it affects your wellbeing.",
      ],
      symptoms: [
        "Feeling overwhelmed, tense, or constantly under pressure",
        "Trouble sleeping or switching off",
        "Difficulty concentrating or feeling irritable",
        "Physical signs such as headaches, tiredness, or a racing heart",
      ],
      selfCare: [
        "Build in regular breaks, rest, and time to wind down",
        "Stay active and keep up sleep and healthy meals",
        "Share how you are feeling with someone you trust",
        "Break tasks into smaller steps and set realistic limits",
      ],
      seekCare: [
        "Stress is ongoing and affecting your sleep, mood, or health",
        "You feel unable to cope or your symptoms are getting worse",
        "Self-help is not helping and you would like further support",
      ],
    },
    {
      slug: "anxiety-self-test",
      title: "Self-test for anxiety and worry",
      excerpt:
        "An informational guide to reflecting on anxiety and worry, what a self-test explores, and when reaching out can help.",
      body: [
        "A self-test for anxiety and worry helps you reflect on how much nervousness and worry have been part of your recent weeks. It usually asks about feeling on edge, finding it hard to relax, excessive worry, restlessness, and physical signs like a racing heart. The aim is to help you understand yourself, not to label you.",
        "Anxiety is a natural response that everyone feels at times, but when worry becomes constant or hard to control it can be exhausting. If a self-reflection suggests anxiety is affecting your daily life, that is a helpful sign to seek support. Anxiety responds well to treatment, and many people feel much better with the right help.",
      ],
      symptoms: [
        "Excessive worry that is hard to control",
        "Feeling restless, on edge, or unable to relax",
        "Trouble sleeping or concentrating",
        "Physical signs such as a racing heart, tension, or stomach upset",
      ],
      selfCare: [
        "Try breathing exercises or relaxation to ease tension",
        "Keep active and maintain a steady daily routine",
        "Limit caffeine and check your sleep habits",
        "Talk through your worries with someone you trust",
      ],
      seekCare: [
        "Worry is constant or interfering with your daily life",
        "Anxiety affects your sleep, work, or relationships",
        "Self-help is not enough and you would like professional support",
      ],
    },
  ],
};
