import { Lesson } from '../../../../core/models/lesson.model';

export const LAMBDA_LESSON: Lesson = {
  slug: 'lambda',
  title: 'Java Lambda Expressions',
  seoDescription: 'Lambda expressions in Java: concise syntax for implementing functional interfaces, introduced in Java 8.',

  introduction:
    'A lambda expression is a compact way to write an anonymous function — a block of code you can pass around ' +
    'as a value, without the ceremony of a full class and method declaration.',

  whyItMatters:
    'Before lambdas, passing a small piece of behavior (like "how to compare two items") meant writing an ' +
    'entire anonymous inner class for a single method. Lambdas make that same code dramatically shorter and ' +
    'more readable, and are the foundation of the Streams API covered next.',

  explanation: [
    'A lambda has the form `(parameters) -> expression` or `(parameters) -> { statements }`. It can only be ' +
    'used where Java expects a functional interface — an interface with exactly one abstract method — since ' +
    'the lambda\'s body becomes that method\'s implementation.',
    'Parameter types are usually omitted and inferred by the compiler from context: `(a, b) -> a + b` works ' +
    'wherever the target functional interface\'s method takes two matching-type parameters and returns their ' +
    'sum type.',
    'Before lambdas, the same behavior required an anonymous inner class implementing the interface explicitly. ' +
    'Lambdas compile down to something conceptually similar, but without the visual noise.',
    'A lambda can reference variables from its enclosing scope, as long as those variables are effectively ' +
    'final — never reassigned after being captured.',
    'Java also supports method references as an even shorter alternative when a lambda would do nothing but ' +
    'call one existing method: `names.forEach(System.out::println)` is equivalent to ' +
    '`names.forEach(name -> System.out.println(name))`, just more concise.',
  ],

  analogy:
    'A lambda is like writing a sticky note with quick instructions instead of filing a full formal memo. If ' +
    'you need someone to "multiply two numbers," you don\'t need to draft an entire document (a full class) ' +
    'with headers and a title — you just jot down `(a, b) -> a * b` on a sticky note and hand it over. It\'s ' +
    'only appropriate for small, self-contained instructions; anything more involved still deserves the full ' +
    'memo (a proper named method or class).',

  syntax: {
    code: '(parameters) -> expression',
    language: 'java',
  },

  examples: [
    {
      title: 'Before and After Lambdas',
      code:
        'import java.util.Comparator;\n' +
        'import java.util.List;\n' +
        'import java.util.ArrayList;\n' +
        '\n' +
        'public class LambdaDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        List<String> names = new ArrayList<>(List.of("Charlie", "Alice", "Bob"));\n' +
        '\n' +
        '        names.sort((a, b) -> a.compareTo(b));\n' +
        '\n' +
        '        System.out.println(names);\n' +
        '    }\n' +
        '}',
      output: '[Alice, Bob, Charlie]',
      explanation: '(a, b) -> a.compareTo(b) implements Comparator\'s single abstract method in one line, replacing what used to require an anonymous class.',
      lineByLine: [
        '`List<String> names = new ArrayList<>(...)` — a mutable list that can be sorted in place.',
        '`names.sort((a, b) -> a.compareTo(b));` — the lambda implements Comparator\'s compare(a, b) method inline, without a separate class.',
        'Printing names afterward shows it sorted alphabetically, since sort() mutated the list directly.',
      ],
    },
    {
      title: 'A Lambda Capturing an Outer Variable',
      code:
        'import java.util.function.Function;\n' +
        '\n' +
        'public class CaptureDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int taxRate = 8;\n' +
        '        Function<Integer, Integer> addTax = price -> price + (price * taxRate / 100);\n' +
        '\n' +
        '        System.out.println(addTax.apply(100));\n' +
        '    }\n' +
        '}',
      output: '108',
      explanation: 'The lambda captures taxRate from the enclosing method — legal because it\'s never reassigned after being declared.',
    },
  ],

  commonMistakes: [
    'Trying to reassign a variable captured by a lambda from the enclosing scope — captured variables must be effectively final.',
    'Using a lambda where the target isn\'t actually a functional interface (an interface with more than one abstract method), which won\'t compile.',
    'Writing an overly complex lambda with many statements, when extracting a named method would be more readable.',
    'Forgetting that a lambda\'s parameter types are inferred — explicitly typing them is allowed but rarely necessary.',
  ],

  tips: [
    'Keep lambdas short — one expression is ideal. If a lambda needs several statements, consider whether a named method would read better.',
    'Use lambdas with the built-in functional interfaces (Function, Predicate, Consumer, Supplier — covered in the next lesson) rather than defining new ones for common cases.',
    'Remember lambdas are the building blocks the Streams API is built on — comfort with lambdas makes Streams much easier to pick up.',
  ],

  bestPractices: [
    'Prefer a method reference (ClassName::methodName) over a lambda whenever the lambda would just delegate to a single existing method — it\'s shorter and often clearer.',
    'Avoid side effects (like modifying an outer variable) inside a lambda passed to a stream operation — it makes the pipeline harder to reason about and can break with parallel streams.',
  ],

  performanceNotes:
    'Lambdas are compiled more efficiently than the anonymous inner classes they replaced (using the invokedynamic ' +
    'bytecode instruction rather than generating a full separate class file for each one), so switching from an ' +
    'old-style anonymous class to a lambda is generally a small performance win as well as a readability one.',

  interviewQuestions: [
    { question: 'What is a lambda expression, and where can it be used?', answer: 'A lambda is a compact, anonymous implementation of a functional interface\'s single abstract method. It can be used anywhere Java expects an instance of a functional interface.' },
    { question: 'What does it mean for a captured variable to be "effectively final"?', answer: 'It means the variable is never reassigned after its initial value is set, even though it isn\'t explicitly marked `final`. Lambdas can only capture variables meeting this condition from their enclosing scope.' },
    { question: 'What is a method reference, and how does it relate to lambdas?', answer: 'A method reference (like String::toUpperCase) is an even shorter alternative to a lambda when the lambda would do nothing but call one existing method — it\'s syntactic sugar for that common lambda pattern.' },
    { question: 'Why can\'t a lambda be used with an interface that has two abstract methods?', answer: 'Because a lambda implements exactly one method — it can only target a functional interface (one with exactly one abstract method), since there\'d be no unambiguous way to map the lambda\'s single body to two different methods.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a lambda implementing Runnable that prints "Running!", and execute it directly by calling .run().' },
    { difficulty: 'Medium', prompt: 'Sort a List<Integer> in descending order using a lambda passed to sort().' },
    { difficulty: 'Hard', prompt: 'Write a lambda that captures a local variable from its enclosing method, then try to reassign that variable after the lambda is defined — observe and explain the resulting compiler error.' },
  ],

  summary:
    'Lambda expressions provide compact syntax for implementing a functional interface\'s single method, ' +
    'replacing verbose anonymous classes. They can capture effectively-final variables from their enclosing ' +
    'scope, and are the foundation the Streams API builds on.',
};
