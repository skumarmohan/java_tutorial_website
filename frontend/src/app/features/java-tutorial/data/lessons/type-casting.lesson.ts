import { Lesson } from '../../../../core/models/lesson.model';

export const TYPE_CASTING_LESSON: Lesson = {
  slug: 'type-casting',
  title: 'Type Casting in Java',
  seoDescription: 'Widening and narrowing type casting in Java explained, with examples of automatic and explicit conversion.',

  introduction:
    'Type casting means converting a value from one data type to another — for example, turning an int into a ' +
    'double, or a double into an int.',

  whyItMatters:
    'You\'ll constantly mix types in real code: dividing two integers to get a precise decimal result, or ' +
    'storing a calculated decimal into a whole-number field. Casting is how you tell Java exactly what you want.',

  explanation: [
    'Widening (implicit) casting happens automatically when converting a smaller type to a larger one that can ' +
    'hold every possible value of the original — int to long, or float to double, for example. No data is ' +
    'lost, so Java doesn\'t require any special syntax.',
    'Narrowing (explicit) casting is the reverse: converting a larger type into a smaller one that might not be ' +
    'able to hold the value, such as double to int. Because data can be lost, Java requires you to explicitly ' +
    'write the cast using parentheses: `(int) someDouble`.',
    'Narrowing a decimal to an integer type truncates the decimal part — it doesn\'t round. Casting 9.9 to an ' +
    'int produces 9, not 10.',
    'The full widening order for numeric types is: byte → short → int → long → float → double. Any conversion ' +
    'moving left-to-right along that chain is automatic; any conversion moving right-to-left requires an ' +
    'explicit cast.',
  ],

  analogy:
    'Widening a value is like pouring a small cup of water into a large bucket — it always fits, with nothing ' +
    'lost, so Java lets it happen automatically. Narrowing is like pouring a large bucket of water into a small ' +
    'cup — some of it is inevitably going to spill (lost precision or data), so Java makes you explicitly say ' +
    '"yes, I understand I might lose something" by writing the cast yourself.',

  syntax: {
    code: '(targetType) value;',
    language: 'java',
    description: 'The cast operator: the target type in parentheses, immediately before the value being converted.',
  },

  examples: [
    {
      title: 'Widening (Automatic)',
      code:
        'public class WideningDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int wholeNumber = 10;\n' +
        '        double decimalNumber = wholeNumber;\n' +
        '        System.out.println(decimalNumber);\n' +
        '    }\n' +
        '}',
      output: '10.0',
      explanation: 'No cast is needed — every int value fits safely inside a double.',
      lineByLine: [
        '`int wholeNumber = 10;` — declares a plain integer.',
        '`double decimalNumber = wholeNumber;` — assigns the int directly into a double variable; Java widens it automatically since no precision can be lost going from int to double.',
        'Printing decimalNumber shows 10.0, confirming it\'s genuinely stored as a double now, not an int.',
      ],
    },
    {
      title: 'Narrowing (Explicit)',
      code:
        'public class NarrowingDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        double price = 9.99;\n' +
        '        int roundedDown = (int) price;\n' +
        '        System.out.println(roundedDown);\n' +
        '    }\n' +
        '}',
      output: '9',
      explanation: 'The explicit (int) cast truncates the decimal part — it does not round to the nearest whole number.',
    },
  ],

  commonMistakes: [
    'Forgetting the explicit cast when narrowing, which causes a compile error ("possible lossy conversion").',
    'Assuming a narrowing cast rounds to the nearest value — it truncates toward zero instead.',
    'Trying to cast a String directly to a number, like (int) "42", which isn\'t valid — use Integer.parseInt("42") instead.',
    'Casting a value so large it overflows the smaller target type, producing an unexpected wrapped-around number.',
  ],

  tips: [
    'Use Integer.parseInt(), Double.parseDouble(), and similar methods to convert Strings to numbers — casting doesn\'t work for that.',
    'If you need rounding rather than truncation, use Math.round() before narrowing to an int.',
    'Treat every narrowing cast as a deliberate decision to potentially lose precision — make sure that\'s actually what you want.',
  ],

  bestPractices: [
    'Add a short comment whenever a narrowing cast is intentional and safe, so future readers (including you) don\'t mistake it for a bug.',
    'Prefer restructuring code to avoid narrowing casts entirely where practical — for example, keep a value as a double throughout a calculation rather than repeatedly casting back and forth.',
  ],

  performanceNotes:
    'Primitive type casts are extremely cheap — they\'re simple CPU-level operations with no meaningful runtime ' +
    'cost. The real cost of casting mistakes isn\'t performance, it\'s correctness: a silent truncation or ' +
    'overflow can introduce a subtle bug that\'s far more expensive to track down later than the cast itself is ' +
    'to execute.',

  interviewQuestions: [
    { question: 'What is the difference between widening and narrowing casts?', answer: 'Widening converts a smaller type to a larger one that can safely hold every possible value (e.g. int to double) and happens automatically. Narrowing converts a larger type to a smaller one that might not fit the value (e.g. double to int) and requires an explicit cast.' },
    { question: 'Does casting a double to an int round or truncate?', answer: 'It truncates toward zero, discarding the decimal portion entirely — 9.99 becomes 9, not 10.' },
    { question: 'How do you convert a String like "42" into an int?', answer: 'Using Integer.parseInt("42") — casting doesn\'t work for String-to-number conversion, only between compatible numeric primitive types.' },
    { question: 'What is the full widening order for Java\'s numeric primitive types?', answer: 'byte → short → int → long → float → double. Moving left to right is automatic (widening); moving right to left requires an explicit cast (narrowing).' },
    { question: 'What happens if a narrowing cast is applied to a value too large for the target type?', answer: 'The value silently overflows/wraps around according to the target type\'s bit representation, rather than throwing an exception — this can produce a surprising, seemingly nonsensical result if not anticipated.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a program that stores an int in a double variable without any cast, and print the result.' },
    { difficulty: 'Medium', prompt: 'Write a program that casts a double value like 7.85 to an int and prints it, confirming truncation rather than rounding.' },
    { difficulty: 'Hard', prompt: 'Cast a long value larger than Integer.MAX_VALUE down to an int, print the result, and explain why the printed value looks the way it does.' },
  ],

  summary:
    'Widening casts (small to large type) happen automatically and safely. Narrowing casts (large to small ' +
    'type) require an explicit `(type)` and can lose data by truncation. String-to-number conversion uses ' +
    'parsing methods, not casting.',
};
