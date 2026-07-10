import { Lesson } from '../../../../core/models/lesson.model';

export const INSTALLATION_LESSON: Lesson = {
  slug: 'installation',
  title: 'Installing Java (JDK Setup)',
  seoDescription: 'How to install the Java Development Kit (JDK) and verify it works, so you can compile and run Java programs.',

  introduction:
    'Before you can write and run Java programs, you need the JDK (Java Development Kit) installed on your ' +
    'machine. The JDK includes the compiler, the JVM, and the standard library.',

  whyItMatters:
    'Every example in this tutorial assumes a working JDK on your machine. This is the one-time setup that ' +
    'unlocks everything that follows — skip it and none of the code examples will run locally.',

  explanation: [
    'The JDK bundles several tools: `javac` (the compiler, which turns .java files into .class bytecode ' +
    'files), the JVM (which runs that bytecode), the standard library (java.lang, java.util, and hundreds of ' +
    'other built-in packages), and utilities like `jshell`, an interactive Java shell for quick experiments.',
    'You have a few distribution choices, all of which implement the same Java specification: Oracle JDK, ' +
    'Eclipse Temurin (from the Adoptium project), and Amazon Corretto are the most common free options. Any of ' +
    'them works fine for learning — this tutorial recommends installing the current LTS release, Java 21.',
    'After installing, you\'ll want an editor or IDE. IntelliJ IDEA Community Edition and VS Code with the ' +
    '"Extension Pack for Java" are both free, popular choices that catch syntax errors as you type instead of ' +
    'only when you compile.',
    'On Windows and macOS, installers typically configure your PATH automatically. On Linux, or if a Windows ' +
    'installer doesn\'t do it for you, you\'ll need to manually add the JDK\'s bin directory to your PATH ' +
    'environment variable and, optionally, set a JAVA_HOME variable pointing at the JDK\'s install directory — ' +
    'some build tools and IDEs look for JAVA_HOME specifically.',
  ],

  analogy:
    'Installing the JDK is like setting up a fully equipped workshop before building furniture. The JVM is the ' +
    'workbench itself, the standard library is the pre-made set of common parts and tools already on the shelf, ' +
    'and javac is the specific tool that turns your blueprint (source code) into a finished, usable piece ' +
    '(bytecode). Without the workshop set up first, you have nowhere to actually build anything.',

  examples: [
    {
      title: 'Verifying Your Installation',
      code: 'java -version\njavac -version',
      language: 'bash',
      output: 'java 21.0.2 2024-01-16 LTS\njavac 21.0.2',
      explanation:
        'Run these two commands in a terminal after installing. If both print a version number instead of a "command not found" error, the JDK is installed and on your system PATH.',
      lineByLine: [
        '`java -version` — asks the java launcher to report its version, confirming the JVM/runtime is installed and reachable from your terminal.',
        '`javac -version` — asks the compiler to report its version, confirming you have the full JDK (not just a JRE) available.',
      ],
    },
  ],

  commonMistakes: [
    'Installing only a JRE (Java Runtime Environment) instead of a full JDK — a JRE can run Java programs but can\'t compile them.',
    'Forgetting to add the JDK\'s bin folder to your system PATH, so `java` and `javac` aren\'t recognized in the terminal.',
    'Having multiple JDK versions installed and not realizing which one your terminal or IDE is actually using.',
  ],

  tips: [
    'Stick to one JDK distribution and one current LTS version (currently 21) unless you have a specific reason not to.',
    'If `javac -version` works but your IDE still complains, check the IDE\'s own Project SDK / JDK setting — it doesn\'t always pick up your system PATH automatically.',
  ],

  bestPractices: [
    'Install one JDK distribution and version at a time when learning — juggling multiple versions is a common source of confusing, hard-to-diagnose errors early on.',
    'Set JAVA_HOME even if your IDE doesn\'t strictly require it — many command-line build tools (Maven, Gradle) expect it.',
    'Re-run `java -version` after any install or update to confirm the change actually took effect before troubleshooting further.',
  ],

  performanceNotes:
    'The JDK distribution you choose (Oracle JDK, Temurin, Corretto, and others) makes no meaningful ' +
    'performance difference for learning purposes — they\'re all built from the same OpenJDK source and pass ' +
    'the same compatibility tests. Differences mostly show up in licensing terms and long-term support windows, ' +
    'not runtime speed.',

  interviewQuestions: [
    { question: 'What is the difference between installing a JDK and installing a JRE?', answer: 'A JDK includes the compiler (javac) and development tools in addition to the JRE, so you can write and compile Java code. A JRE only includes what\'s needed to run already-compiled Java programs.' },
    { question: 'What does the JAVA_HOME environment variable do?', answer: 'It points to the JDK\'s installation directory. Many build tools (like Maven and Gradle) and some IDEs look for JAVA_HOME specifically to locate the JDK, separate from whatever is on your system PATH.' },
    { question: 'How would you verify a JDK is correctly installed?', answer: 'Run `java -version` and `javac -version` in a terminal. Both should print a version number; a "command not found" error means the JDK isn\'t installed or isn\'t on your PATH.' },
    { question: 'Name two popular free JDK distributions besides Oracle JDK.', answer: 'Eclipse Temurin (from the Adoptium project) and Amazon Corretto are both popular, free, production-ready OpenJDK builds.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Run `java -version` and `javac -version` on your machine and write down the exact output.' },
    { difficulty: 'Medium', prompt: 'Find where your JDK is installed on disk, and identify the path you\'d set as JAVA_HOME.' },
    { difficulty: 'Hard', prompt: 'If you have more than one JDK version installed, figure out how to switch which one your terminal uses by default, and verify the switch worked.' },
  ],

  summary:
    'Installing the JDK gives you the compiler, JVM, and standard library needed to write and run Java. ' +
    'Verify the install with `java -version` and `javac -version`, then move on to writing your first program ' +
    'in the next lesson.',
};
