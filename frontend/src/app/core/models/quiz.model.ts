export interface QuizQuestion {
  question: string;
  options: string[];
  /** Index into options. */
  correctIndex: number;
  explanation?: string;
}

export interface Quiz {
  /** Matches the Lesson.slug it belongs to. */
  slug: string;
  questions: QuizQuestion[];
}
