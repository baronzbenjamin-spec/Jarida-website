import type { FactCategory } from "./types";
import { commonQuestionsPart1 } from "./common-questions-1";
import { commonQuestionsPart2 } from "./common-questions-2";
import { commonQuestionsPart3 } from "./common-questions-3";
import { commonQuestionsPart4 } from "./common-questions-4";

export const commonQuestions: FactCategory = {
  id: "common-questions",
  name: "Common questions",
  description:
    "Plain answers to the everyday questions and symptoms people search for most, with guidance on what they can mean and when to seek help.",
  topics: [
    ...commonQuestionsPart1,
    ...commonQuestionsPart2,
    ...commonQuestionsPart3,
    ...commonQuestionsPart4,
  ],
};
