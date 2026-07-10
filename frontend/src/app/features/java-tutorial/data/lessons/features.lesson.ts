import { Lesson } from '../../../../core/models/lesson.model';

export const FEATURES_LESSON: Lesson = {
  slug: 'features',
  title: 'Java Features',
  seoDescription: 'The core features that define Java: platform independence, object orientation, robustness, security, and performance.',

  introduction:
    'Java\'s design centers on a small set of properties that have kept it relevant for decades: it runs ' +
    'anywhere, it\'s built around objects, and it\'s difficult to accidentally corrupt memory or crash in the ' +
    'ways older languages made easy.',

  whyItMatters:
    'These features aren\'t just marketing points — they directly explain why companies pick Java for systems ' +
    'that need to run reliably for years across many machines, and why some of Java\'s syntax choices look the ' +
    'way they do.',

  explanation: [
    'Platform independence is Java\'s signature feature. Source code compiles to bytecode, not machine code, ' +
    'and the JVM on each operating system translates that bytecode locally — the same .class file runs ' +
    'unmodified on Windows, macOS, or Linux. The Introduction lesson covers this compile-and-run pipeline in ' +
    'detail.',
    'Java is object-oriented: programs are built from classes and objects that bundle data and behavior ' +
    'together. This encourages modular, reusable code, and is the foundation the entire OOP section of this ' +
    'tutorial builds on.',
    'Java is robust and (relatively) secure by design. It manages memory automatically through garbage ' +
    'collection, so you don\'t manually allocate and free memory the way you would in C or C++. Strong compile' +
    '-time type checking catches large classes of bugs before a program ever runs.',
    'Java is also multithreaded and performant. The JVM includes a Just-In-Time (JIT) compiler that watches ' +
    'which bytecode runs frequently and compiles that "hot" code down to optimized native machine code while ' +
    'the program is running — closing much of the performance gap with natively-compiled languages.',
    'Java is also distributed and network-friendly by design — the standard library ships with built-in ' +
    'support for networking, remote method invocation, and (as of Java 11) a modern HTTP client, making it a ' +
    'natural fit for the client-server and microservice architectures common in industry today.',
  ],

  analogy:
    'Think of Java\'s feature set like a well-built, standardized shipping container. Because every container ' +
    'has the same dimensions and locking mechanism (platform independence), any ship, train, or crane in the ' +
    'world can move it without modification. Because it\'s built from reinforced steel with standardized ' +
    'inspection rules (robustness and type safety), it\'s far less likely to fail or leak in transit than a ' +
    'loosely-packed crate.',

  examples: [],

  commonMistakes: [
    'Assuming Java is slow because it isn\'t compiled ahead-of-time to machine code — the JIT compiler makes hot code run close to native speed after warm-up.',
    'Assuming "object-oriented" means literally everything is an object — Java\'s primitive types (int, double, boolean, etc.) are not objects.',
    'Treating "secure" as "unhackable" — Java reduces certain classes of bugs (like buffer overflows) but doesn\'t make application logic immune to security mistakes.',
  ],

  tips: [
    'When comparing Java\'s performance to another language, measure the specific thing you care about (throughput, latency, startup time) rather than relying on generic reputations.',
    'If you want to see garbage collection happening, try running a program with the `-verbose:gc` JVM flag.',
  ],

  bestPractices: [
    'Lean into Java\'s strengths (strong typing, tooling, huge ecosystem) rather than fighting them — for example, prefer compile-time checks over runtime type inspection where possible.',
    'When evaluating whether Java fits a project, weigh its actual features (portability, mature libraries, JVM tooling) against the project\'s real requirements, not just general reputation.',
  ],

  performanceNotes:
    'Modern JVMs include multiple garbage collector implementations tuned for different goals — G1 (the ' +
    'default in recent versions) balances throughput and pause times for most applications, while low-latency ' +
    'collectors like ZGC are built for applications where even brief pauses are unacceptable. Picking the right ' +
    'garbage collector is itself a performance decision most developers only need to revisit for ' +
    'high-throughput or latency-sensitive systems.',

  interviewQuestions: [
    { question: 'What does "platform independence" mean in Java, and how is it achieved?', answer: 'It means compiled Java code runs unmodified on any operating system with a compatible JVM. It\'s achieved because javac compiles to platform-independent bytecode, and each OS has its own JVM implementation that executes that same bytecode.' },
    { question: 'How does Java manage memory automatically?', answer: 'Through garbage collection — the JVM periodically identifies objects no longer reachable by the running program and reclaims their memory, so developers don\'t manually allocate and free memory like in C or C++.' },
    { question: 'What is the JIT compiler, and why does it matter for performance?', answer: 'The Just-In-Time compiler watches which bytecode methods run frequently ("hot" code) while the program executes, and compiles those specific methods down to optimized native machine code, closing much of the performance gap with natively-compiled languages.' },
    { question: 'Is Java a fully object-oriented language?', answer: 'No — Java has eight primitive types (int, double, boolean, char, etc.) that are not objects, kept as primitives for performance and memory efficiency. Everything else is class- and object-based.' },
    { question: 'In what sense is Java considered "secure"?', answer: 'Java reduces entire classes of bugs common in languages like C — such as buffer overflows and dangling pointers — through automatic memory management and the absence of raw pointers. It doesn\'t make application-level logic immune to security mistakes.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'List three of Java\'s core features described in this lesson, in your own words.' },
    { difficulty: 'Medium', prompt: 'Explain why platform independence was a bigger competitive advantage in the 1990s than it might seem today.' },
    { difficulty: 'Hard', prompt: 'Research the difference between the G1 and ZGC garbage collectors, and write a short paragraph on when you might choose one over the other.' },
  ],

  summary:
    'Java\'s defining features — platform independence via the JVM, object-oriented design, automatic memory ' +
    'management, and JIT-compiled performance — are what have made it a dependable choice for large, ' +
    'long-lived systems for nearly three decades.',
};
