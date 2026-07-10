import { Lesson } from '../../../../core/models/lesson.model';

export const JAVA11_FEATURES_LESSON: Lesson = {
  slug: 'java11-features',
  title: 'Java 11 Features',
  seoDescription: 'Key Java 11 LTS features: the var keyword, new String methods, the standardized HTTP Client, and single-file source execution.',

  introduction:
    'Java 11 (2018) was the first Long-Term Support release after Java 8, and the first under Java\'s new ' +
    'six-month release cadence — a good snapshot of how the language evolved once it started shipping smaller, ' +
    'more frequent updates.',

  whyItMatters:
    'Java 11 is still widely deployed in production systems, so recognizing what it added (versus what came ' +
    'later in 17 or 21) helps you know what you can rely on in an 11-based codebase.',

  explanation: [
    'The `var` keyword (technically introduced in Java 10, but commonly discussed alongside 11) lets the ' +
    'compiler infer a local variable\'s type from its initializer: `var name = "Alex";` is exactly equivalent ' +
    'to `String name = "Alex";` — it only affects how you write the code, not the type itself, which is still ' +
    'fixed at compile time.',
    'String gained several convenience methods: isBlank() (true for empty or whitespace-only strings), ' +
    'strip() (a Unicode-aware trim), repeat(n), and lines() (splits a string into a stream of its lines).',
    'The HTTP Client API, previously an incubating feature, was standardized in java.net.http — giving Java a ' +
    'modern, built-in way to make HTTP requests without needing a third-party library for basic cases.',
    'You could also run a single .java file directly with `java Main.java`, without a separate explicit ' +
    'compile step — convenient for quick scripts and experiments.',
    'Java 11 also marked Oracle\'s shift in licensing for Oracle JDK builds, which is part of why the broader ' +
    'community increasingly moved toward free OpenJDK-based distributions like Eclipse Temurin around this ' +
    'time — a good example of how a Java version\'s release can carry ecosystem implications beyond just ' +
    'language features.',
  ],

  analogy:
    'If Java 8 was a new wing added to a house, Java 11 was more like a round of quality-of-life renovations to ' +
    'the existing rooms — smoother door hinges (var), a better-organized pantry (new String methods), and a ' +
    'proper built-in intercom system (the standardized HTTP Client) — useful, welcome improvements, but not a ' +
    'fundamental change to how the house is laid out.',

  examples: [
    {
      title: 'Using var',
      code:
        'public class VarDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        var count = 10;\n' +
        '        var name = "Alex";\n' +
        '\n' +
        '        System.out.println(name + " has count " + count);\n' +
        '    }\n' +
        '}',
      output: 'Alex has count 10',
      explanation: 'count is still an int and name is still a String — var only saves you from writing the type explicitly.',
      lineByLine: [
        '`var count = 10;` — the compiler infers count\'s type as int from the literal 10.',
        '`var name = "Alex";` — the compiler infers name\'s type as String.',
        'Both behave exactly as if their types had been written out explicitly — var is purely a compile-time convenience.',
      ],
    },
    {
      title: 'New String Methods',
      code:
        'public class StringMethodsDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println("  ".isBlank());\n' +
        '        System.out.println("ab".repeat(3));\n' +
        '    }\n' +
        '}',
      output: 'true\nababab',
      explanation: 'isBlank() checks for whitespace-only content, and repeat() duplicates a String n times.',
    },
  ],

  commonMistakes: [
    'Overusing var for every variable, even when an explicit type would make the code clearer at a glance.',
    'Assuming var makes Java dynamically typed — the type is still fixed at compile time, just inferred rather than written out.',
    'Trying to use var for a field, method parameter, or return type — it\'s only allowed for local variables.',
  ],

  tips: [
    'Use var when the type is already obvious from the right-hand side (`var list = new ArrayList<String>();`), and skip it when it would obscure the type.',
    'Reach for the built-in HTTP Client for straightforward HTTP calls before adding a third-party dependency.',
  ],

  bestPractices: [
    'Use var to reduce redundant boilerplate (especially with long generic types), but keep the variable name descriptive enough that its purpose and rough type are still clear from context.',
    'Avoid using var when it would hide an important type distinction, such as when a method\'s return type isn\'t obvious from its name.',
  ],

  performanceNotes:
    'var has zero runtime performance impact — it\'s resolved entirely at compile time and produces bytecode ' +
    'identical to writing the explicit type. It exists purely to reduce source code verbosity, not to change ' +
    'how the program executes.',

  interviewQuestions: [
    { question: 'What does the var keyword do in Java, and what are its limitations?', answer: 'It lets the compiler infer a local variable\'s type from its initializer, reducing verbosity. It only works for local variables (not fields, parameters, or return types), and the inferred type is still fixed and enforced at compile time — Java remains statically typed.' },
    { question: 'Name two new String methods added in Java 11.', answer: 'isBlank() (checks for empty or whitespace-only content) and strip() (a Unicode-aware trim), among others like repeat(n) and lines().' },
    { question: 'What HTTP-related feature was standardized in Java 11?', answer: 'The java.net.http HTTP Client API, giving Java a modern, built-in way to make HTTP requests without requiring a third-party library.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Rewrite three explicitly-typed variable declarations using var instead, and confirm the program still behaves identically.' },
    { difficulty: 'Medium', prompt: 'Use String\'s isBlank() and strip() methods to clean and validate a piece of user input text.' },
    { difficulty: 'Hard', prompt: 'Research the built-in java.net.http.HttpClient API and write (without necessarily running it) a short snippet showing how to make a simple GET request with it.' },
  ],

  summary:
    'Java 11 added the var keyword for local type inference, useful new String methods, a standardized HTTP ' +
    'Client, and single-file source execution — evolutionary, quality-of-life improvements rather than a ' +
    'dramatic shift like Java 8.',
};
