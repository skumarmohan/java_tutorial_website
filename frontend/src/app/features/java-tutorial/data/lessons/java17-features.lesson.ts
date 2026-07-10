import { Lesson } from '../../../../core/models/lesson.model';

export const JAVA17_FEATURES_LESSON: Lesson = {
  slug: 'java17-features',
  title: 'Java 17 Features',
  seoDescription: 'Key Java 17 LTS features: records, sealed classes, pattern matching for instanceof, and text blocks.',

  introduction:
    'Java 17 (2021) is an LTS release that finalized several features aimed at reducing boilerplate and making ' +
    'common patterns safer and more concise: records, sealed classes, pattern matching, and text blocks.',

  whyItMatters:
    'Java 17 is one of the most widely adopted LTS versions today, and its features noticeably change how new ' +
    'Java code looks compared to Java 8 or 11 — recognizing them helps you read modern codebases fluently.',

  explanation: [
    'Records (finalized in Java 16) are a compact way to declare an immutable data-carrier class. `record ' +
    'Point(int x, int y) {}` automatically generates a constructor, getters, equals(), hashCode(), and ' +
    'toString() — code that used to require dozens of hand-written or generated lines.',
    'Sealed classes and interfaces (finalized in 17) let you restrict exactly which classes are allowed to ' +
    'extend or implement them, using a `permits` clause. This gives you exhaustiveness guarantees similar to an ' +
    'enum, but for a hierarchy of different classes.',
    'Pattern matching for instanceof removes the redundant cast that used to follow a type check: `if (obj ' +
    'instanceof String s)` both checks the type and binds a properly-typed variable s in one step.',
    'Text blocks (finalized in Java 15) let you write multi-line String literals with triple quotes (`"""`), ' +
    'without needing escaped quotes or manual newline characters — especially useful for embedded SQL, JSON, or ' +
    'HTML.',
    'Together, records and sealed classes are often used to model a fixed, closed set of related data shapes — ' +
    'for example, a sealed Shape interface permitting only Circle, Square, and Triangle records — which pairs ' +
    'naturally with the exhaustive pattern matching introduced fully in Java 21.',
  ],

  analogy:
    'A record is like a pre-printed form with fixed fields (name, x, y) — you fill it in once and it\'s done; ' +
    'you don\'t get to scribble extra fields onto it later. A sealed class is like a restricted guest list for a ' +
    'private event — only the specifically invited classes (listed in permits) are allowed to extend it, so you ' +
    'can always account for every possible guest when planning around them.',

  examples: [
    {
      title: 'A Record',
      code:
        'record Point(int x, int y) {}\n' +
        '\n' +
        'public class RecordDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Point p = new Point(3, 4);\n' +
        '        System.out.println(p);\n' +
        '        System.out.println(p.x() + ", " + p.y());\n' +
        '    }\n' +
        '}',
      output: 'Point[x=3, y=4]\n3, 4',
      explanation: 'The single-line record declaration generates a constructor, accessors (x(), y()), equals(), hashCode(), and a readable toString().',
      lineByLine: [
        '`record Point(int x, int y) {}` — declares an immutable Point with two components, generating everything needed automatically.',
        '`Point p = new Point(3, 4);` — uses the auto-generated constructor.',
        '`p.x()` and `p.y()` — auto-generated accessor methods (not getX()/getY() — records use the component name directly).',
        '`System.out.println(p);` — uses the auto-generated toString(), producing a readable Point[x=3, y=4].',
      ],
    },
    {
      title: 'Pattern Matching for instanceof',
      code:
        'public class PatternMatchingDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Object value = "hello";\n' +
        '\n' +
        '        if (value instanceof String s) {\n' +
        '            System.out.println(s.toUpperCase());\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'HELLO',
      explanation: 'No separate cast to String is needed — s is already typed as String inside the if block.',
    },
  ],

  commonMistakes: [
    'Trying to add extra mutable fields to a record — records are meant to be immutable, transparent data carriers, not general-purpose classes.',
    'Forgetting that a sealed class\'s permits list must be exhaustive — every direct subclass must be explicitly listed (or in the same file/module, depending on syntax used).',
    'Using a record where a full class with custom behavior and mutable state was actually needed.',
  ],

  tips: [
    'Reach for a record whenever you need a simple, immutable holder for a fixed set of values — it removes a huge amount of boilerplate compared to a hand-written class.',
    'Use sealed classes/interfaces together with pattern matching in a switch expression for exhaustive, compiler-checked handling of a closed set of types.',
    'Use text blocks for any multi-line String, especially embedded SQL or JSON, instead of manually concatenating lines.',
  ],

  bestPractices: [
    'Use records for DTOs (data transfer objects), API request/response shapes, and any other place where you need a simple, immutable value with structural equality.',
    'Combine sealed interfaces with records to model closed sets of related types — it gives you compiler-enforced exhaustiveness that a plain open class hierarchy can\'t.',
  ],

  performanceNotes:
    'Records compile down to a regular final class with auto-generated methods — there\'s no runtime overhead ' +
    'compared to writing the equivalent class by hand. The main performance-adjacent benefit is fewer ' +
    'hand-written equals()/hashCode() bugs, since incorrect manual implementations can otherwise cause subtle, ' +
    'hard-to-diagnose issues in hash-based collections.',

  interviewQuestions: [
    { question: 'What does a record automatically generate for you?', answer: 'A constructor matching its components, accessor methods named after each component, and properly implemented equals(), hashCode(), and toString() methods.' },
    { question: 'What is a sealed class or interface, and what problem does it solve?', answer: 'A sealed type restricts exactly which classes can extend or implement it, using a permits clause. It provides exhaustiveness guarantees similar to an enum, useful for modeling a fixed, closed set of related types.' },
    { question: 'How does pattern matching for instanceof simplify code?', answer: 'It combines a type check and a cast into one step: `if (obj instanceof String s)` both verifies obj is a String and binds it to a new, properly-typed variable s, removing the redundant explicit cast previously required.' },
    { question: 'What is a text block, and when would you use one?', answer: 'A multi-line String literal delimited by triple quotes ("""), useful for embedding multi-line content like SQL, JSON, or HTML without manual escaping or newline concatenation.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create a record Person(String name, int age), instantiate it, and print it directly to see the auto-generated toString().' },
    { difficulty: 'Medium', prompt: 'Create a sealed interface Shape permitting Circle and Square records, each with their own fields.' },
    { difficulty: 'Hard', prompt: 'Write a method taking an Object parameter that uses pattern-matching instanceof checks for at least two different types, and combine the conditions with && to also check a property of the matched value in the same if statement.' },
  ],

  summary:
    'Java 17 finalized records, sealed classes, pattern matching for instanceof, and text blocks — a set of ' +
    'features focused on reducing boilerplate and making type-based logic safer and more concise.',
};
