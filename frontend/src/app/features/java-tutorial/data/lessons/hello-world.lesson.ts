import { Lesson } from '../../../../core/models/lesson.model';

export const HELLO_WORLD_LESSON: Lesson = {
  slug: 'hello-world',
  title: 'Java Hello World',
  seoDescription: 'Write, compile, and run your first Java program — the classic Hello World example, explained line by line.',

  introduction:
    'With the JDK installed, it\'s time to write, compile, and run your first Java program: the traditional ' +
    '"Hello, World!" example.',

  whyItMatters:
    'This tiny program touches every core piece of Java\'s structure — a class, a main method, and a ' +
    'statement — so understanding it thoroughly makes every following lesson easier.',

  explanation: [
    'Save the code below in a file named exactly `HelloWorld.java`. Java requires the file name to match the ' +
    'public class name inside it, character for character, including capitalization.',
    'The `public class HelloWorld` line declares a class named HelloWorld. In Java, code always lives inside a ' +
    'class — there\'s no such thing as a loose statement floating outside one.',
    'The `public static void main(String[] args)` line is the entry point the JVM looks for when it starts ' +
    'your program. `public` means it can be called from outside the class, `static` means it belongs to the ' +
    'class itself rather than to an object of it, `void` means it doesn\'t return a value, and `String[] args` ' +
    'holds any command-line arguments passed in.',
    'Inside main, `System.out.println("Hello, World!");` calls the `println` method on `System.out` (the ' +
    'standard output stream) to print the given text followed by a new line.',
    'Every piece of this program is required, and Java won\'t let you skip or abbreviate any of it — unlike ' +
    'some scripting languages, there\'s no way to just write `print("Hello")` at the top level of a file. This ' +
    'strictness is intentional: it forces every piece of code to live inside a clearly-scoped class and method ' +
    'from the very first line you write.',
  ],

  analogy:
    'Think of the class as a house, and main() as the front door. No matter how large the house eventually ' +
    'gets, the JVM only ever knows to walk in through that one specific, exactly-named front door — ' +
    '`public static void main(String[] args)`. If the door isn\'t built to that exact specification, the JVM ' +
    'simply can\'t find a way in, no matter how much useful code is waiting inside.',

  examples: [
    {
      title: 'Compiling and Running',
      code: 'javac HelloWorld.java\njava HelloWorld',
      language: 'bash',
      output: 'Hello, World!',
      explanation:
        '`javac` compiles HelloWorld.java into HelloWorld.class (bytecode). `java` then tells the JVM to run that class — note you drop the .class extension when running it.',
      lineByLine: [
        '`javac HelloWorld.java` — compiles the source file, producing HelloWorld.class in the same directory if there are no errors.',
        '`java HelloWorld` — launches the JVM, loads HelloWorld.class, and calls its main() method. Note the .class extension is omitted here.',
      ],
    },
    {
      title: 'The Full Program',
      code:
        'public class HelloWorld {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println("Hello, World!");\n' +
        '    }\n' +
        '}',
      output: 'Hello, World!',
      lineByLine: [
        '`public class HelloWorld {` — starts the class declaration; the opening brace marks where the class body begins.',
        '`public static void main(String[] args) {` — declares the method the JVM calls first; the opening brace starts the method body.',
        '`System.out.println("Hello, World!");` — the only executable statement: prints the given text to the console with a trailing new line.',
        '`}` (first) — closes the main method body.',
        '`}` (second) — closes the HelloWorld class body.',
      ],
    },
  ],

  commonMistakes: [
    'Saving the file as hello.java or Hello.java instead of HelloWorld.java — it must match the public class name exactly.',
    'Forgetting the semicolon at the end of the System.out.println() statement.',
    'Typing `Main` instead of `main`, or `String args[]` in a way that doesn\'t match the expected signature — Java is strict about this exact method signature.',
    'Running `java HelloWorld.class` instead of `java HelloWorld` — the java command takes the class name, not the file name.',
  ],

  tips: [
    'If compiling fails, read the error message from the top — it names the exact file and line number.',
    'Try changing the printed text and recompiling to build confidence in the compile-then-run cycle before moving on.',
    'Most IDEs run both `javac` and `java` for you with a single "Run" button — worth switching to once the manual steps feel familiar.',
  ],

  bestPractices: [
    'Type this example out by hand rather than copy-pasting it, at least once — it builds muscle memory for Java\'s required structure.',
    'Get comfortable with the manual javac/java compile-then-run cycle before relying entirely on an IDE\'s Run button, so you understand what\'s happening underneath.',
  ],

  performanceNotes:
    'A program this size runs effectively instantly — the JVM\'s startup time (loading the runtime itself, ' +
    'typically well under a second) dominates the total time far more than executing one println() call does.',

  interviewQuestions: [
    { question: 'What must be true about the relationship between a Java file name and its public class?', answer: 'The file name must exactly match the public class name inside it, including capitalization — HelloWorld.java must contain `public class HelloWorld`.' },
    { question: 'What does each keyword in `public static void main(String[] args)` mean?', answer: 'public means it\'s callable from outside the class; static means it belongs to the class itself rather than an instance; void means it returns no value; String[] args holds any command-line arguments passed when the program is launched.' },
    { question: 'What is the difference between compiling and running a Java program?', answer: 'Compiling (javac) translates source code into platform-independent bytecode (.class files). Running (java) launches the JVM, which loads that bytecode and executes it, starting from the main method.' },
    { question: 'Why can\'t Java code exist outside of a class?', answer: 'Java enforces that all code lives inside a class as part of its object-oriented design — there\'s no concept of a top-level, loose statement or function outside a class, unlike scripting languages such as Python.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Change the Hello World program to print your own custom greeting instead.' },
    { difficulty: 'Medium', prompt: 'Create a second class in the same file (not public) and see whether the file still compiles under the same file name rule. Note what you observe.' },
    { difficulty: 'Hard', prompt: 'Deliberately misspell "main" as "Main" in the method signature, try to run the program, and explain exactly what error message you get and why.' },
  ],

  summary:
    'A minimal Java program needs a class whose name matches its file name, and a `main` method as the entry ' +
    'point. You compile with `javac` to produce bytecode, then run that bytecode with `java`. From here, the ' +
    'next lessons build on this same structure with variables, data types, and operators.',
};
