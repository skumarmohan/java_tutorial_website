import { Lesson } from '../../../../core/models/lesson.model';

export const JAVA8_FEATURES_LESSON: Lesson = {
  slug: 'java8-features',
  title: 'Java 8 Features',
  seoDescription: 'The major features Java 8 introduced: lambdas, streams, the Optional class, and default interface methods.',

  introduction:
    'Java 8 (2014) was the most transformative release in Java\'s history — it introduced lambda expressions, ' +
    'the Streams API, and a functional style of programming that changed how idiomatic Java code looks, even ' +
    'though the language remains fundamentally object-oriented.',

  whyItMatters:
    'A huge share of Java code written today — and nearly every modern codebase — assumes Java 8 features are ' +
    'available. Recognizing what shipped in this release helps you understand why "modern Java" looks so ' +
    'different from Java\'s earlier style.',

  explanation: [
    'Lambda expressions and functional interfaces (covered in their own lessons) let you pass behavior around ' +
    'as values, replacing much of the verbose anonymous-class code common before Java 8.',
    'The Streams API brought a declarative, chainable way to filter, transform, and collect data from ' +
    'collections, also covered in its own lesson.',
    'The Optional<T> class was introduced to represent a value that might be absent, as an alternative to ' +
    'returning null and risking a NullPointerException — callers are encouraged to explicitly handle the ' +
    '"no value" case.',
    'Interfaces gained default and static methods, letting library authors add new methods to an interface ' +
    'without breaking every class that already implements it — covered in the Interfaces lesson.',
    'The entirely new java.time package (LocalDate, LocalDateTime, Duration) replaced the old, mutable Date and ' +
    'Calendar classes, covered in the Date and Time API lesson.',
  ],

  analogy:
    'If earlier Java releases were incremental renovations to a house, Java 8 was closer to adding an entirely ' +
    'new wing built with different architectural principles — the functional style (lambdas, streams, Optional) ' +
    'coexists with the original object-oriented structure rather than replacing it, and most modern Java code ' +
    'freely uses rooms from both wings.',

  examples: [
    {
      title: 'Optional Instead of null',
      code:
        'import java.util.Optional;\n' +
        '\n' +
        'public class OptionalDemo {\n' +
        '    static Optional<String> findUser(int id) {\n' +
        '        return id == 1 ? Optional.of("Alex") : Optional.empty();\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        String name = findUser(2).orElse("Unknown");\n' +
        '        System.out.println(name);\n' +
        '    }\n' +
        '}',
      output: 'Unknown',
      explanation: 'orElse() provides a fallback value instead of the caller needing a null check before using the result.',
      lineByLine: [
        '`static Optional<String> findUser(int id) {` — signals through its return type that a user might not be found.',
        '`return id == 1 ? Optional.of("Alex") : Optional.empty();` — wraps a found value with Optional.of(), or represents absence with Optional.empty().',
        '`findUser(2).orElse("Unknown")` — since id 2 isn\'t found, orElse() supplies the fallback "Unknown" instead of returning null.',
      ],
    },
  ],

  commonMistakes: [
    'Using Optional.get() without checking isPresent() first, which throws NoSuchElementException if the value is absent — defeats the purpose of using Optional at all.',
    'Using Optional as a field type or method parameter — it\'s intended mainly as a return type to signal "this might not have a value."',
    'Wrapping every method\'s return type in Optional out of habit, even when a value is always guaranteed to exist.',
  ],

  tips: [
    'Prefer orElse(), orElseGet(), or map() over get() when working with Optional — they handle the empty case without an explicit if statement.',
    'Reserve Optional for return types where "no value" is a legitimate, expected outcome.',
    'If you\'re unfamiliar with lambdas, streams, or the new date/time API, work through those dedicated lessons — they\'re the heart of what Java 8 changed.',
  ],

  bestPractices: [
    'Treat Java 8 features as the baseline for idiomatic modern Java — new code should default to streams and lambdas over manual loops and anonymous classes where they genuinely improve readability.',
    'Chain Optional methods (map, filter, orElse) rather than calling isPresent() followed by get(), which reintroduces the same null-check-style code Optional was meant to replace.',
  ],

  performanceNotes:
    'Optional adds a small amount of object-wrapping overhead compared to a plain nullable reference, which is ' +
    'irrelevant for typical application code but is exactly why Optional is discouraged as a field type in ' +
    'performance-sensitive or high-volume data structures — the standard library itself avoids Optional fields ' +
    'internally.',

  interviewQuestions: [
    { question: 'What are the four biggest features introduced in Java 8?', answer: 'Lambda expressions, the Streams API, the Optional class, and default/static methods on interfaces, alongside the entirely new java.time date and time API.' },
    { question: 'Why was Optional introduced, and what problem does it solve?', answer: 'It gives methods an explicit way to represent "no value" as a return type, encouraging callers to handle that case deliberately instead of risking a NullPointerException from an unexpected null.' },
    { question: 'Why is Optional generally discouraged as a field type or method parameter?', answer: 'Optional was designed primarily as a return type to signal potential absence to a caller. Using it for fields or parameters adds indirection and doesn\'t provide the same clear benefit, and is broadly considered a misuse of the type by the Java community and its own designers.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a method returning Optional<Integer> that finds a number in a list, or Optional.empty() if not found, and call it with orElse() providing a default.' },
    { difficulty: 'Medium', prompt: 'Rewrite a small piece of pre-Java-8 style code (an anonymous Runnable or Comparator) using a lambda instead, and compare the line count.' },
    { difficulty: 'Hard', prompt: 'Chain three Optional methods together (e.g., map(), filter(), and orElse()) to safely extract and transform a possibly-absent value in one expression, without ever calling get().' },
  ],

  summary:
    'Java 8 introduced lambda expressions, the Streams API, Optional, default interface methods, and the ' +
    'modern java.time package — together representing the biggest shift in how idiomatic Java code is written, ' +
    'even though it remains an object-oriented language at its core.',
};
