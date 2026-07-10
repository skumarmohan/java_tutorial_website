import { Lesson } from '../../../../core/models/lesson.model';

export const INTRODUCTION_LESSON: Lesson = {
  slug: 'introduction',
  title: 'Introduction to Java',
  seoDescription:
    'Learn what Java is, why it was created, and how a Java program runs — the first step in the Java tutorial.',

  introduction:
    'Java is a general-purpose, object-oriented programming language created by Sun Microsystems in 1995 ' +
    '(now owned by Oracle). It was designed around one core promise: write your code once, and run it on ' +
    'any device or operating system without changes. That promise, combined with strong reliability and a ' +
    'huge ecosystem of libraries, has kept Java one of the most widely used languages in the world for ' +
    'nearly three decades.',

  whyItMatters:
    'Java runs a huge share of the software you interact with every day: Android apps, banking systems, ' +
    'e-commerce backends, enterprise software, and large-scale cloud services. Frameworks like Spring power ' +
    'much of the backend industry, and Java is one of the most requested skills in backend and Android job ' +
    'postings. Learning Java also teaches you object-oriented programming and static typing — concepts that ' +
    'transfer directly to languages like C#, Kotlin, and TypeScript.',

  explanation: [
    'Java code is compiled, not interpreted directly like Python or JavaScript. When you write a .java file ' +
    'and compile it, the Java compiler (javac) doesn\'t produce machine code specific to your operating ' +
    'system — instead, it produces "bytecode" (.class files), a platform-independent set of instructions.',
    'That bytecode is then run by the Java Virtual Machine (JVM), a program installed on the target device ' +
    'that translates bytecode into instructions the local machine can actually execute. Because every ' +
    'operating system has its own JVM implementation, the same .class file runs unmodified on Windows, ' +
    'macOS, and Linux. This is Java\'s famous "Write Once, Run Anywhere" (WORA) principle.',
    'Java is also statically typed (every variable\'s type is known at compile time) and object-oriented ' +
    '(programs are built from classes and objects). Both properties catch a large class of bugs before the ' +
    'program ever runs, which is part of why Java is trusted for large, long-lived codebases.',
    '"General-purpose" means Java isn\'t limited to one kind of task — the same language builds Android apps, ' +
    'web backends, desktop tools, and large data-processing systems. You\'ll see the exact same syntax and ' +
    'core rules in every one of these contexts, which is part of what makes the fundamentals in this tutorial ' +
    'so reusable.',
  ],

  analogy:
    'Think of Java bytecode as a recipe written in a standardized format that any trained chef can follow. ' +
    'You (the developer) write the recipe once. A chef in Tokyo, one in New York, and one in Berlin — each ' +
    'using different local kitchen equipment — can all read that same recipe and produce the identical dish. ' +
    'The recipe is the bytecode; each chef is a JVM installed on a different operating system, translating ' +
    'the same instructions into whatever their local "kitchen" (hardware and OS) actually understands.',

  syntax: {
    code:
      'public class ClassName {\n' +
      '    public static void main(String[] args) {\n' +
      '        // your code goes here\n' +
      '    }\n' +
      '}',
    language: 'java',
    description:
      'Every runnable Java program needs a class, and that class needs a main method — the entry point the JVM looks for when it starts your program.',
  },

  examples: [
    {
      title: 'Hello World',
      code:
        'public class HelloWorld {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println("Hello, World!");\n' +
        '    }\n' +
        '}',
      output: 'Hello, World!',
      explanation:
        'The file must be named HelloWorld.java — Java requires the file name to match the public class name exactly.',
      lineByLine: [
        '`public class HelloWorld {` — declares a class named HelloWorld. Everything the program does lives inside these braces.',
        '`public static void main(String[] args) {` — declares the main method, the exact entry point the JVM looks for when it starts the program.',
        '`System.out.println("Hello, World!");` — calls println on the standard output stream, printing the text followed by a new line.',
        'The first closing `}` ends the main method; the second ends the HelloWorld class.',
      ],
    },
    {
      title: 'Printing Multiple Lines',
      code:
        'public class Greeting {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println("Welcome to Java.");\n' +
        '        System.out.println("Let\'s start learning!");\n' +
        '    }\n' +
        '}',
      output: 'Welcome to Java.\nLet\'s start learning!',
      explanation: 'Each System.out.println() call prints its text and then moves to a new line.',
    },
  ],

  diagram: {
    caption: 'How a Java program goes from source code to running output.',
    steps: [
      { icon: '📝', label: 'Source Code', description: 'HelloWorld.java' },
      { icon: '⚙️', label: 'Compiler', description: 'javac' },
      { icon: '📦', label: 'Bytecode', description: 'HelloWorld.class' },
      { icon: '☕', label: 'JVM', description: 'Runs on any OS' },
      { icon: '🖥️', label: 'Output', description: 'Hello, World!' },
    ],
  },

  commonMistakes: [
    'Naming the file differently from the public class inside it (Java requires an exact match, including case).',
    'Forgetting the semicolon at the end of a statement.',
    'Misspelling the main method signature — it must be exactly `public static void main(String[] args)`.',
    'Forgetting that Java is case-sensitive: `String` and `string` are not the same thing.',
    'Mismatched or missing curly braces `{ }` around classes and methods.',
  ],

  tips: [
    'Use an IDE like IntelliJ IDEA or VS Code with the Java extension — they catch syntax errors as you type.',
    'Read compiler error messages carefully; they usually point to the exact line and reason for the failure.',
    'Follow Java naming conventions: PascalCase for class names, camelCase for variables and methods.',
    'Compile often. Small, frequent compiles make it much easier to spot exactly what broke.',
  ],

  bestPractices: [
    'Keep exactly one public top-level class per .java file, and make the file name match it exactly.',
    'Keep main() thin — as programs grow past a few lines, delegate real logic to other methods and classes rather than writing everything inside main().',
    'Choose meaningful class names even in throwaway learning examples (Greeting, not Test1) — it builds the right habit early.',
  ],

  performanceNotes:
    'A program this small has no meaningful performance considerations, but it\'s worth knowing early: the ' +
    'JVM\'s Just-In-Time (JIT) compiler doesn\'t optimize everything immediately. It profiles which methods run ' +
    'frequently ("hot" code) and compiles only those down to native machine code after a brief warm-up period. ' +
    'This is why short-lived scripts don\'t show the same speed-up long-running server applications do.',

  interviewQuestions: [
    {
      question: 'What does "Write Once, Run Anywhere" mean, and how does Java achieve it?',
      answer:
        'It means Java code compiled on one operating system runs unmodified on any other. Java achieves this by compiling source code to platform-independent bytecode, which each operating system\'s own JVM implementation translates into instructions the local machine can run.',
    },
    {
      question: 'Is Java a compiled or interpreted language?',
      answer:
        'Both, in a sense. Java source code is compiled to bytecode by javac, and that bytecode is then run by the JVM, which itself interprets it and also uses a JIT compiler to convert frequently-run bytecode into native machine code at runtime.',
    },
    {
      question: 'Why does Java need a JVM instead of compiling straight to machine code like C++?',
      answer:
        'Compiling straight to machine code would tie the compiled output to one specific operating system and CPU architecture. Compiling to bytecode and letting a JVM handle the final translation is what makes the exact same compiled file portable across operating systems.',
    },
    {
      question: 'Is Java a purely object-oriented language?',
      answer:
        'Not purely — Java has eight primitive types (int, double, boolean, and so on) that are not objects, for performance reasons. Everything else is built from classes and objects.',
    },
    {
      question: 'What is bytecode, and what file extension does it use?',
      answer:
        'Bytecode is the platform-independent, compiled form of Java source code that the JVM executes. It\'s stored in .class files, produced by compiling a .java source file with javac.',
    },
    {
      question: 'Who created Java, and who maintains it today?',
      answer:
        'Java was created at Sun Microsystems, led by James Gosling, and released publicly in 1995. Oracle has owned and maintained Java since acquiring Sun Microsystems in 2010.',
    },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a Java program that prints your name and your favorite hobby on two separate lines.' },
    { difficulty: 'Medium', prompt: 'Modify the Hello World program to print "Hello, World!" three times using three separate println() calls.' },
    {
      difficulty: 'Hard',
      prompt:
        'Predict what happens if you save a file as Hello.java but declare `public class HelloWorld` inside it. Write down your reasoning, then verify it by actually trying it.',
    },
  ],

  summary:
    'Java is a compiled, statically-typed, object-oriented language that runs on the JVM, which is what ' +
    'makes it portable across operating systems. A Java program always starts execution from a `main` ' +
    'method inside a public class whose name matches the file name. From here, the next step is setting up ' +
    'the JDK on your machine and writing your first real program.',
};
