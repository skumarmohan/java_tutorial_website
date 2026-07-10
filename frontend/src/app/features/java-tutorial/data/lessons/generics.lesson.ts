import { Lesson } from '../../../../core/models/lesson.model';

export const GENERICS_LESSON: Lesson = {
  slug: 'generics',
  title: 'Java Generics',
  seoDescription: 'Generics in Java explained: writing type-safe, reusable classes and methods with type parameters.',

  introduction:
    'Generics let you write a class or method that works with any type, while still catching type mismatches ' +
    'at compile time instead of at runtime. You\'ve already been using generics every time you wrote ' +
    'List<String> or Map<String, Integer>.',

  whyItMatters:
    'Without generics, a reusable container (like a List) would have to store everything as a generic Object, ' +
    'forcing you to cast values back to their real type everywhere you used them — and giving up any ' +
    'compile-time protection against putting the wrong type in.',

  explanation: [
    'A generic type parameter, conventionally a single capital letter like T (Type), E (Element), or K/V ' +
    '(Key/Value), acts as a placeholder for a real type that\'s supplied when the class or method is used. ' +
    '`List<String>` means "a List where T is String."',
    'You can write your own generic classes: `class Box<T> { T content; }` creates a Box that can hold any ' +
    'single type, decided when you instantiate it — `Box<String>` or `Box<Integer>`.',
    'Generic methods work similarly but declare their own type parameter, independent of the class they\'re in ' +
    '— useful for a utility method that should work with any type without making the whole class generic.',
    'Generics are enforced at compile time and largely erased at runtime (a process called "type erasure") — ' +
    'this is why you can\'t do certain things like create an array of a generic type directly.',
    'Generics also support "bounded" type parameters, like `<T extends Number>`, restricting T to Number or one ' +
    'of its subclasses (Integer, Double, and so on). This lets a generic method safely call Number\'s methods on ' +
    'values of type T, which wouldn\'t be possible with an unbounded T.',
  ],

  analogy:
    'A generic class is like a shipping box designed to be reconfigured for different contents. The box itself ' +
    '(the class) doesn\'t care whether it holds books or clothes — but once you label a specific box "Books ' +
    'Only" (instantiate it as Box<Book>), the shipping company (the compiler) will flag it immediately if ' +
    'someone tries to put a pair of shoes inside, instead of only discovering the mistake after the box arrives ' +
    'at its destination.',

  syntax: {
    code: 'class ClassName<T> {\n    T value;\n}\n\n<T> void methodName(T value) {\n    // generic method\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'A Generic Class',
      code:
        'class Box<T> {\n' +
        '    private T content;\n' +
        '\n' +
        '    void set(T content) {\n' +
        '        this.content = content;\n' +
        '    }\n' +
        '\n' +
        '    T get() {\n' +
        '        return content;\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class GenericsDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Box<String> box = new Box<>();\n' +
        '        box.set("Hello");\n' +
        '        System.out.println(box.get());\n' +
        '    }\n' +
        '}',
      output: 'Hello',
      explanation: 'Box<String> fixes T to String for this instance — box.get() returns a String with no cast needed.',
      lineByLine: [
        '`class Box<T> {` — declares T as a placeholder type used throughout the class.',
        '`private T content;` — a field whose actual type depends on what T is chosen to be.',
        '`Box<String> box = new Box<>();` — creates a Box where T is fixed to String; the diamond `<>` lets the compiler infer it on the right-hand side.',
        '`box.get()` — returns a String directly, with no cast required, since the compiler already knows T is String here.',
      ],
    },
    {
      title: 'A Generic Method',
      code:
        'public class GenericMethodDemo {\n' +
        '    static <T> void printItem(T item) {\n' +
        '        System.out.println("Item: " + item);\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        printItem("text");\n' +
        '        printItem(42);\n' +
        '    }\n' +
        '}',
      output: 'Item: text\nItem: 42',
      explanation: 'The same generic method works for a String and an int, with T inferred separately at each call.',
    },
  ],

  commonMistakes: [
    'Using a raw type (Box instead of Box<String>), which compiles but loses type safety and generates a compiler warning.',
    'Trying to create a generic array directly (`new T[10]`), which isn\'t allowed due to type erasure.',
    'Assuming generic type information is available at runtime — after compilation, `List<String>` and `List<Integer>` are both just List.',
    'Overcomplicating a class with generics when it will only ever be used with one specific type.',
  ],

  tips: [
    'Use the standard naming convention (T, E, K, V, R) so other Java developers immediately recognize the role of each type parameter.',
    'Reach for generics when writing reusable containers or utility methods — not every class needs to be generic.',
    'Let the compiler infer type arguments where possible (the diamond operator `<>`) instead of repeating them.',
  ],

  bestPractices: [
    'Use bounded type parameters (`<T extends Number>`) whenever a generic method needs to call specific methods on the type, rather than casting inside the method.',
    'Avoid raw types entirely in new code — always specify the type argument, even when it feels redundant, to keep the compiler\'s type checking active.',
  ],

  performanceNotes:
    'Because generics are erased at compile time (type erasure), there is no runtime performance cost to using ' +
    'them compared to an equivalent non-generic version working with Object and manual casts — generics are a ' +
    'compile-time safety feature, not a runtime one.',

  interviewQuestions: [
    { question: 'What problem do generics solve?', answer: 'They let a class or method work with any type while catching type mismatches at compile time, avoiding the need to store everything as Object and manually cast it back, which loses compile-time type safety.' },
    { question: 'What is type erasure?', answer: 'The process by which the compiler removes generic type information after compiling — at runtime, List<String> and List<Integer> are both just List, with no way to distinguish them via reflection.' },
    { question: 'What is a bounded type parameter, and why would you use one?', answer: 'A type parameter restricted to a specific type or its subtypes, like `<T extends Number>`. It\'s used when a generic method needs to call methods specific to that bound (like Number\'s doubleValue()) on values of type T.' },
    { question: 'Why can\'t you create an array of a generic type directly, like `new T[10]`?', answer: 'Because of type erasure — at runtime, the JVM wouldn\'t know what type of array to actually allocate, since the specific type T represents is erased by the time the code runs.' },
    { question: 'What are the conventional single-letter names used for generic type parameters?', answer: 'T for Type, E for Element, K and V for Key and Value (common in Map-related generics), and R for Return type.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a generic class Pair<T> holding two values of the same type, with getters for both.' },
    { difficulty: 'Medium', prompt: 'Write a generic method `<T> T firstNonNull(T a, T b)` that returns a if it\'s not null, otherwise b.' },
    { difficulty: 'Hard', prompt: 'Write a generic method with a bounded type parameter `<T extends Comparable<T>>` that returns the larger of two values using compareTo(), and test it with both Integers and Strings.' },
  ],

  summary:
    'Generics add compile-time type safety to reusable classes and methods, avoiding manual casting and ' +
    'catching type mismatches before the program runs. You\'ve used them throughout the Collections lesson ' +
    'without necessarily naming them.',
};
