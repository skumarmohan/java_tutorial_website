import { Lesson } from '../../../../core/models/lesson.model';

export const HISTORY_LESSON: Lesson = {
  slug: 'history',
  title: 'Java History',
  seoDescription: 'A brief history of Java — from the Green Project at Sun Microsystems to the modern six-month release cycle.',

  introduction:
    'Java began in 1991 as an internal project at Sun Microsystems, originally aimed at consumer electronics ' +
    'rather than the web or servers it\'s known for today. It was publicly released in 1995 and has been ' +
    'actively developed ever since.',

  whyItMatters:
    'Knowing where Java came from explains a lot about how it behaves today: why it prioritizes portability, ' +
    'why it can feel verbose compared to newer languages, and why it now ships a new version every six months ' +
    'instead of once every few years.',

  explanation: [
    'In 1991, a small team at Sun Microsystems led by James Gosling started the "Green Project," building a ' +
    'language called Oak for interactive television and embedded consumer devices. The devices never took off, ' +
    'but the language — renamed Java in 1995 — found a new home on the World Wide Web, where its "Write Once, ' +
    'Run Anywhere" design let small programs called applets run inside any browser.',
    'Through the late 1990s and 2000s, Java grew into the "Java 2" era (J2SE, J2EE, J2ME), adding major features ' +
    'like generics, annotations, and enums in Java 5 (2004). Oracle acquired Sun Microsystems in 2010 and has ' +
    'owned Java\'s development ever since.',
    'Java 9 (2017) introduced the module system and a major shift in strategy: instead of large, multi-year ' +
    'releases, Java moved to a predictable six-month release cycle. Every few releases is designated a Long-Term ' +
    'Support (LTS) version — 8, 11, 17, and 21 are the LTS releases most production systems run today.',
    'The renaming from Oak to Java happened because "Oak" was already trademarked by another company. Legend ' +
    'has it the name "Java" was picked in a brainstorming session, inspired by the coffee the team was drinking ' +
    '— which is also why Java\'s logo is a steaming coffee cup and why coffee terminology (like "hot code") ' +
    'shows up throughout its culture.',
  ],

  analogy:
    'Think of Java like a long-running car manufacturer\'s model line. The "Oak" prototype in 1991 never ' +
    'shipped to the public — like a concept car. The production model, launched in 1995 as Java 1.0, has been ' +
    'continuously redesigned and re-released every "model year" since, with certain flagship trims — the LTS ' +
    'releases — built and supported for many years of daily, heavy-duty use, while the in-between models ' +
    'update quickly with smaller refinements.',

  examples: [],

  diagram: {
    caption: 'Key milestones in Java\'s evolution.',
    steps: [
      { icon: '🌱', label: '1991', description: 'Green Project (Oak)' },
      { icon: '☕', label: '1995', description: 'Java 1.0 released' },
      { icon: '🧬', label: '2004', description: 'Java 5: generics' },
      { icon: '🏢', label: '2010', description: 'Oracle acquires Sun' },
      { icon: '🚀', label: '2017+', description: '6-month release cycle' },
    ],
  },

  commonMistakes: [
    'Assuming Java and JavaScript are related languages — they share a name (for marketing reasons in 1995) and little else.',
    'Thinking "Java 2" refers to a version 2 release rather than a branding umbrella that covered many versions.',
    'Believing Java is outdated because it\'s decades old — it still ships a new version every six months.',
    'Mixing up Sun Microsystems (Java\'s creator) with Oracle (its current owner and steward since 2010).',
  ],

  tips: [
    'When someone says "Java 8" or "Java 17," they almost always mean an LTS release — those are what most companies actually run in production.',
    'If you read about a Java feature and it isn\'t working the way an article describes, check the version it was introduced in.',
  ],

  bestPractices: [
    'When researching a Java feature online, check which version introduced it before assuming it\'s available in the JDK you have installed.',
    'Prefer official Oracle/OpenJDK release notes over blog posts when you need to verify exactly when a feature shipped or changed.',
  ],

  performanceNotes:
    'Performance has been a continuous thread throughout Java\'s history, not just a modern concern: garbage ' +
    'collector algorithms have improved release over release (from the original simple collector, to G1 ' +
    'becoming the default in Java 9, to low-pause collectors like ZGC in later versions), and the JIT compiler ' +
    'has been refined for decades. A modern JVM is dramatically faster than Java 1.0 was on equivalent hardware.',

  interviewQuestions: [
    { question: 'Why was Java originally called Oak, and why was it renamed?', answer: 'The language began as "Oak," named after a tree outside creator James Gosling\'s office, but had to be renamed because that name was already trademarked. "Java" was chosen in a brainstorming session, reportedly inspired by the coffee the team was drinking.' },
    { question: 'In what year was Java publicly released, and by which company?', answer: 'Java 1.0 was publicly released in 1995 by Sun Microsystems.' },
    { question: 'What major change did Java 9 introduce to Java\'s release process?', answer: 'Java 9 (2017) introduced the module system and, more importantly for developers, switched Java to a predictable six-month release cycle instead of infrequent, multi-year releases.' },
    { question: 'Which Java versions are considered LTS (Long-Term Support) releases?', answer: 'Java 8, 11, 17, and 21 are the LTS releases most production systems run, each supported for an extended period compared to the non-LTS releases in between.' },
    { question: 'Who owns and maintains Java today?', answer: 'Oracle has owned and maintained Java since it acquired Sun Microsystems in 2010.' },
    { question: 'What was Java\'s original target market before it became a web and enterprise language?', answer: 'Java was originally designed for embedded consumer electronics, including interactive television set-top boxes, before finding success on the World Wide Web via applets.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'List the four LTS Java versions mentioned in this lesson, in chronological order.' },
    { difficulty: 'Medium', prompt: 'Research one Java feature introduced in a non-LTS release (9, 10, 12, 13, 14, 15, 16, 18, 19, or 20) and write two sentences about what it does.' },
    { difficulty: 'Hard', prompt: 'Explain, in a short paragraph, one advantage and one challenge a six-month release cycle creates for a company maintaining a large production Java application.' },
  ],

  summary:
    'Java started as Oak, an embedded-device language from 1991, was renamed and released publicly in 1995, ' +
    'passed to Oracle in 2010, and moved to a six-month release cadence starting with Java 9. The LTS releases ' +
    '— 8, 11, 17, and 21 — are the versions worth knowing best.',
};
