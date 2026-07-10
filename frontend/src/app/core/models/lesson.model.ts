export interface LessonExample {
  title: string;
  code: string;
  /** Defaults to 'java'. Set for non-Java snippets (e.g. terminal commands, SQL). */
  language?: string;
  output?: string;
  explanation?: string;
  /** Curated line-by-line (or key-line) walkthrough of what the code does. */
  lineByLine?: string[];
}

export interface DiagramStep {
  icon: string;
  label: string;
  description?: string;
}

export interface LessonDiagram {
  caption: string;
  steps: DiagramStep[];
}

export interface LessonSyntax {
  code: string;
  language?: string;
  description?: string;
}

export interface InterviewQA {
  question: string;
  answer: string;
}

export interface PracticeExercise {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prompt: string;
}

// The shape every one of the 39 Java tutorial pages is rendered from.
// One LessonPageComponent template, driven entirely by this data —
// adding a new lesson means adding one data file, not one new component.
export interface Lesson {
  slug: string;
  title: string;
  seoDescription: string;
  introduction: string;
  whyItMatters: string;
  /** Rendered as separate paragraphs, in order. */
  explanation: string[];
  /** A real-world, non-technical comparison that makes the concept click. */
  analogy?: string;
  /** Omit for conceptual topics with no code syntax to show (e.g. History, Best Practices). */
  syntax?: LessonSyntax;
  examples: LessonExample[];
  diagram?: LessonDiagram;
  commonMistakes: string[];
  /** Short, actionable tips. */
  tips: string[];
  /** Broader clean-code / design guidance specific to this topic. */
  bestPractices?: string[];
  /** Efficiency, memory, or scalability considerations, where relevant. */
  performanceNotes?: string;
  interviewQuestions?: InterviewQA[];
  practiceExercises?: PracticeExercise[];
  summary: string;
}
