export type FactTopic = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  symptoms: string[];
  selfCare: string[];
  seekCare: string[];
};

export type FactCategory = {
  id: string;
  name: string;
  description: string;
  topics: FactTopic[];
};
