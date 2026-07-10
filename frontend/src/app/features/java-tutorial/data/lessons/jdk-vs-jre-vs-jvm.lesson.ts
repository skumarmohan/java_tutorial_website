import { Lesson } from '../../../../core/models/lesson.model';

export const JDK_VS_JRE_VS_JVM_LESSON: Lesson = {
  slug: 'jdk-vs-jre-vs-jvm',
  title: 'JDK vs JRE vs JVM',
  seoDescription: 'The difference between the JDK, JRE, and JVM, and why you need each one for different jobs.',

  introduction:
    'JDK, JRE, and JVM are three acronyms every Java beginner runs into immediately — and they\'re nested ' +
    'inside each other, which is exactly why they\'re confusing at first.',

  whyItMatters:
    'Knowing the difference tells you exactly what you need installed for a given task: writing and compiling ' +
    'code needs more than just running a finished program does.',

  explanation: [
    'The JVM (Java Virtual Machine) is the program that actually executes Java bytecode. It\'s what makes ' +
    '"Write Once, Run Anywhere" possible — every operating system has its own JVM implementation, and each one ' +
    'knows how to run the exact same .class bytecode files.',
    'The JRE (Java Runtime Environment) is the JVM plus the standard library classes a running program needs ' +
    '(java.lang, java.util, and so on). If you only need to run a finished Java application — not write or ' +
    'compile one — the JRE is technically all you need. In practice, most people now install the full JDK even ' +
    'just to run programs, since standalone JRE downloads are less common than they used to be.',
    'The JDK (Java Development Kit) is the full package: the JRE, plus the compiler (`javac`) and development ' +
    'tools like `jshell` and `javadoc`. If you\'re writing Java code — which is why you\'re reading this ' +
    'tutorial — you need the JDK.',
    'It helps to think of these three as concentric circles rather than three unrelated things: the JVM is the ' +
    'innermost, smallest piece; the JRE wraps around it by adding the standard library; and the JDK wraps ' +
    'around the JRE by adding development tools. Each outer layer is a strict superset of the one inside it.',
  ],

  analogy:
    'The JVM is like a car\'s engine — it\'s what actually makes things move. The JRE is the complete car built ' +
    'around that engine, ready to drive (the standard library is the fuel system, dashboard, and everything ' +
    'else a driver needs). The JDK is that same car plus a full mechanic\'s toolkit in the trunk — everything ' +
    'you\'d need not just to drive, but to build and repair the car yourself.',

  examples: [],

  diagram: {
    caption: 'Each layer contains the one before it.',
    steps: [
      { icon: '☕', label: 'JVM', description: 'Runs bytecode' },
      { icon: '📚', label: 'JRE', description: 'JVM + standard library' },
      { icon: '🛠️', label: 'JDK', description: 'JRE + compiler & tools' },
    ],
  },

  commonMistakes: [
    'Installing a JRE and then being confused why `javac` doesn\'t exist — the compiler only ships with the JDK.',
    'Thinking the JVM is a single piece of software everyone shares — each OS actually has its own JVM implementation.',
    'Assuming JRE is a newer or older version of the JDK, rather than a subset of it.',
  ],

  tips: [
    'When in doubt, install the JDK — it includes everything the JRE has, plus what you need to actually write code.',
    'If you only need to distribute a finished application to end users who won\'t write code, some tools can bundle a minimal runtime so they don\'t need a separate Java install at all.',
  ],

  bestPractices: [
    'For any machine where you\'ll write or compile Java code, install the JDK — never assume a JRE is enough.',
    'For production servers only running a pre-built application, consider a minimal custom runtime image (via jlink) instead of a full JDK, to reduce footprint.',
  ],

  performanceNotes:
    'Neither the JRE nor the JDK affects runtime performance by itself — performance is determined by the JVM ' +
    'implementation and its configuration (heap size, garbage collector choice, JIT settings), which is shared ' +
    'by both. The JDK\'s extra developer tools have no runtime cost for the applications you build with it.',

  interviewQuestions: [
    { question: 'What is the relationship between the JDK, JRE, and JVM?', answer: 'They are nested: the JVM executes bytecode, the JRE is the JVM plus the standard library needed to run programs, and the JDK is the JRE plus the compiler and developer tools. Each is a superset of the one before it.' },
    { question: 'If you only need to run a compiled Java application, what\'s the minimum you need installed?', answer: 'Technically just a JRE, since it includes the JVM and standard library needed to run bytecode. In practice, many people install the full JDK regardless, since standalone JRE installers are less commonly offered today.' },
    { question: 'Why does every operating system need its own JVM implementation?', answer: 'Because the JVM is the piece responsible for translating platform-independent bytecode into instructions the specific local operating system and hardware can execute — that translation step has to be built separately for each platform.' },
    { question: 'What tools does the JDK add on top of the JRE?', answer: 'Primarily the javac compiler, plus development utilities like jshell (an interactive REPL) and javadoc (documentation generation).' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'In your own words, explain the difference between the JDK, JRE, and JVM to someone who has never programmed before.' },
    { difficulty: 'Medium', prompt: 'Check which one (JDK or JRE) is installed on your machine by trying to run `javac -version`.' },
    { difficulty: 'Hard', prompt: 'Research the `jlink` tool and explain, in a short paragraph, what problem it solves for deploying Java applications.' },
  ],

  summary:
    'The JVM runs bytecode, the JRE is the JVM plus the standard library needed to run programs, and the JDK ' +
    'is the JRE plus the compiler and developer tools. As a Java developer, the JDK is what you install.',
};
