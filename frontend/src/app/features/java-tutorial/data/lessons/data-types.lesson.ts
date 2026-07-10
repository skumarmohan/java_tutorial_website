import { Lesson } from '../../../../core/models/lesson.model';

export const DATA_TYPES_LESSON: Lesson = {
  slug: 'data-types',
  title: 'Java Data Types',
  seoDescription: 'Java\'s primitive and reference data types explained, with sizes, ranges, and when to use each one.',

  introduction:
    'Every variable in Java has a data type, and Java splits types into two categories: eight built-in ' +
    '"primitive" types that store simple values directly, and "reference" types that store a reference to an ' +
    'object elsewhere in memory.',

  whyItMatters:
    'Picking the right type affects how much memory your program uses, how precise your calculations are, and ' +
    'whether your code even compiles — Java\'s type system catches a huge class of bugs before your program runs.',

  explanation: [
    'The eight primitive types are: byte, short, int, and long for whole numbers of increasing size; float and ' +
    'double for decimal numbers; char for a single character; and boolean for true/false. int and double are ' +
    'the default choices for whole numbers and decimals respectively unless you have a specific reason to use ' +
    'something smaller or larger.',
    'Each numeric primitive has a fixed size and range: byte is 8 bits (-128 to 127), short is 16 bits, int is ' +
    '32 bits (about -2.1 billion to 2.1 billion), and long is 64 bits. float is a 32-bit decimal with less ' +
    'precision, and double is a 64-bit decimal with much higher precision — which is exactly why double, not ' +
    'float, is Java\'s default choice for decimal values.',
    'Reference types include String, arrays, and any class you define or use, including built-in ones from the ' +
    'Java standard library. A reference type variable doesn\'t hold the object itself — it holds a reference ' +
    '(effectively an address) pointing to where the object lives in memory.',
    'This difference matters for comparisons and default values. Primitive fields default to a zero-like value ' +
    '(0, 0.0, false) when not explicitly initialized; reference type fields default to null, meaning "points ' +
    'to nothing." Local variables of either kind must always be initialized before use.',
    'Java also provides a "wrapper class" for every primitive type — Integer for int, Double for double, ' +
    'Boolean for boolean, and so on. These let a primitive value be used anywhere an object is required, such ' +
    'as inside a collection like ArrayList (covered in the Collections lesson). Java automatically converts ' +
    'between a primitive and its wrapper in most cases, a process called autoboxing.',
  ],

  analogy:
    'Think of primitive types like standard-sized containers at a hardware store — a small screw box (byte), a ' +
    'medium parts bin (int), a large storage tub (long) — each built for a specific size range, cheap to stock, ' +
    'and holding the item directly. A reference type is more like a claim ticket at a coat check: the ticket ' +
    'itself is small and simple, but it points to a full coat (the actual object) stored somewhere else ' +
    'entirely.',

  examples: [
    {
      title: 'Declaring Each Primitive Type',
      code:
        'public class DataTypesDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        byte smallNumber = 100;\n' +
        '        int age = 25;\n' +
        '        long population = 8_000_000_000L;\n' +
        '        double price = 19.99;\n' +
        '        char grade = \'A\';\n' +
        '        boolean isActive = true;\n' +
        '\n' +
        '        System.out.println(age + " " + population + " " + price + " " + grade + " " + isActive);\n' +
        '    }\n' +
        '}',
      output: '25 8000000000 19.99 A true',
      explanation: 'Long literals need an L suffix, and underscores in number literals (8_000_000_000) are purely for readability.',
      lineByLine: [
        '`byte smallNumber = 100;` — an 8-bit whole number, valid from -128 to 127.',
        '`int age = 25;` — a standard 32-bit whole number, Java\'s default integer type.',
        '`long population = 8_000_000_000L;` — a 64-bit whole number; the L suffix tells Java to treat the literal as a long, since it\'s too large for an int.',
        '`double price = 19.99;` — a 64-bit decimal number, Java\'s default decimal type.',
        '`char grade = \'A\';` — a single character, written with single quotes.',
        '`boolean isActive = true;` — a true/false value.',
      ],
    },
    {
      title: 'Primitive vs. Reference Comparison',
      code:
        'public class ComparisonDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int a = 5;\n' +
        '        int b = 5;\n' +
        '        System.out.println(a == b);\n' +
        '\n' +
        '        String s1 = new String("hello");\n' +
        '        String s2 = new String("hello");\n' +
        '        System.out.println(s1 == s2);\n' +
        '        System.out.println(s1.equals(s2));\n' +
        '    }\n' +
        '}',
      output: 'true\nfalse\ntrue',
      explanation: '== compares primitive values directly, but compares reference types by memory address, not content — use .equals() to compare the actual contents of objects.',
    },
  ],

  commonMistakes: [
    'Using float when double was intended — float literals need an f suffix (3.14f), and double is Java\'s default decimal type.',
    'Comparing String or other object references with == instead of .equals(), which can silently produce false even when the content is identical.',
    'Assigning a value outside a type\'s range and being surprised when it silently overflows instead of throwing an error.',
    'Confusing char, written with single quotes (\'A\'), with String, written with double quotes ("A").',
  ],

  tips: [
    'Default to int and double for numbers unless memory constraints or a specific API require something smaller or larger.',
    'Always use .equals() (or a dedicated comparison method) for reference type equality — reserve == for primitives.',
    'Use underscores in large numeric literals for readability, e.g. 1_000_000 instead of 1000000.',
  ],

  bestPractices: [
    'Don\'t "optimize" prematurely by reaching for byte or short to save memory unless you\'re working with large arrays where it genuinely matters — int is simpler and avoids subtle overflow bugs.',
    'Prefer wrapper types (Integer, Double) only when required, such as inside a collection — primitives are more efficient for ordinary calculations.',
    'When precision matters for money, avoid float and double altogether and use BigDecimal instead — both can introduce small rounding errors that are unacceptable for financial calculations.',
  ],

  performanceNotes:
    'Primitive types are stored directly and are extremely fast to work with, since there\'s no object overhead ' +
    'or indirection. Wrapper types (Integer, Double, etc.) carry extra memory overhead and, due to autoboxing, ' +
    'can introduce subtle performance costs in tight loops — this is one reason primitive arrays typically ' +
    'outperform collections of boxed types for large numeric workloads.',

  interviewQuestions: [
    { question: 'What are the eight primitive data types in Java?', answer: 'byte, short, int, long, float, double, char, and boolean.' },
    { question: 'Why is double preferred over float as Java\'s default decimal type?', answer: 'double is a 64-bit type offering far more precision than the 32-bit float, which matters for the vast majority of calculations. float is mainly used when memory is tightly constrained, such as large arrays on embedded systems.' },
    { question: 'What is the difference between a primitive type and a reference type?', answer: 'A primitive variable stores its value directly. A reference type variable stores a reference (address) pointing to an object stored elsewhere in memory, and its default value is null rather than a zero-like value.' },
    { question: 'What is autoboxing?', answer: 'Autoboxing is Java automatically converting a primitive value into its corresponding wrapper object (e.g., int to Integer) when an object is required, such as when adding a value to a collection like ArrayList<Integer>.' },
    { question: 'Why shouldn\'t you use == to compare two String objects?', answer: '== compares object references (are they the exact same object in memory?), not content. Two different String objects with identical text will often return false with ==; .equals() compares the actual characters instead.' },
    { question: 'What happens if you assign a value larger than a type\'s range?', answer: 'If it\'s a compile-time constant, the compiler will reject it. If it happens at runtime through calculation, the value silently overflows (wraps around) rather than throwing an exception, which can introduce hard-to-spot bugs.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Declare one variable of each primitive type and print all eight values in a single statement.' },
    { difficulty: 'Medium', prompt: 'Write a program that creates two String objects with identical text using `new String(...)`, and demonstrate the difference between == and .equals() on them.' },
    { difficulty: 'Hard', prompt: 'Research what happens when you add 1 to the maximum possible int value (Integer.MAX_VALUE) in Java, run it, and explain the result you observe.' },
  ],

  summary:
    'Java has eight primitive types for simple values and reference types for everything else, including ' +
    'objects and Strings. Primitives compare by value with ==; reference types should be compared with ' +
    '.equals(). Choosing the right type is the foundation for correct, efficient Java code.',
};
