import { Lesson } from '../../../../core/models/lesson.model';

export const FUNCTIONAL_INTERFACE_LESSON: Lesson = {
  slug: 'functional-interface',
  title: 'Java Functional Interfaces',
  seoDescription: 'What a functional interface is in Java, the @FunctionalInterface annotation, and the built-in Function, Predicate, Consumer, and Supplier types.',

  introduction:
    'A functional interface is an interface with exactly one abstract method. It\'s the piece that makes lambda ' +
    'expressions possible — a lambda is really just a compact implementation of a functional interface\'s ' +
    'single method.',

  whyItMatters:
    'Understanding functional interfaces demystifies what a lambda actually is under the hood, and unlocks the ' +
    'standard library\'s built-in functional types, which you\'ll use constantly with the Streams API.',

  explanation: [
    'An interface qualifies as "functional" simply by having one abstract method — it can still have any ' +
    'number of default or static methods, since those already have bodies and don\'t count. The optional ' +
    '`@FunctionalInterface` annotation asks the compiler to verify this and error out if a second abstract ' +
    'method is accidentally added.',
    'The java.util.function package ships with several ready-made, general-purpose functional interfaces so ' +
    'you rarely need to define your own: Function<T, R> takes a T and returns an R, Predicate<T> takes a T and ' +
    'returns a boolean, Consumer<T> takes a T and returns nothing, and Supplier<T> takes nothing and returns a T.',
    'Runnable (used in the Multithreading lesson) and Comparator (used for sorting) are also functional ' +
    'interfaces — that\'s exactly why lambdas could be passed to Thread\'s constructor and List\'s sort() ' +
    'method.',
    'There are also two-argument variants of the common functional interfaces — BiFunction<T, U, R>, ' +
    'BiPredicate<T, U>, and BiConsumer<T, U> — for when a lambda needs to accept two inputs instead of one.',
  ],

  analogy:
    'A functional interface is like a standardized job posting with exactly one required task listed. Anyone ' +
    '(any lambda) can apply for that job as long as they can perform that one specific task with the right ' +
    'inputs and outputs. Function<T, R> is the posting for "take one thing, produce another thing." Predicate<T> ' +
    'is the posting for "take one thing, answer yes or no about it." Different postings for different shapes of ' +
    'work, but each one has exactly one required responsibility.',

  syntax: {
    code: '@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'A Custom Functional Interface',
      code:
        '@FunctionalInterface\n' +
        'interface Calculator {\n' +
        '    int calculate(int a, int b);\n' +
        '}\n' +
        '\n' +
        'public class FunctionalInterfaceDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Calculator add = (a, b) -> a + b;\n' +
        '        Calculator multiply = (a, b) -> a * b;\n' +
        '\n' +
        '        System.out.println(add.calculate(3, 4));\n' +
        '        System.out.println(multiply.calculate(3, 4));\n' +
        '    }\n' +
        '}',
      output: '7\n12',
      explanation: 'Both add and multiply implement Calculator\'s single method differently, chosen by which lambda is assigned.',
      lineByLine: [
        '`@FunctionalInterface interface Calculator {` — declares the contract, and asks the compiler to verify it stays functional.',
        '`int calculate(int a, int b);` — the single abstract method every lambda assigned to a Calculator variable must implement.',
        '`Calculator add = (a, b) -> a + b;` — the lambda\'s parameters and body directly implement calculate().',
        '`add.calculate(3, 4)` — invokes the lambda through the interface\'s method name.',
      ],
    },
    {
      title: 'Built-in Function and Predicate',
      code:
        'import java.util.function.Function;\n' +
        'import java.util.function.Predicate;\n' +
        '\n' +
        'public class BuiltInDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Function<Integer, Integer> square = n -> n * n;\n' +
        '        Predicate<Integer> isEven = n -> n % 2 == 0;\n' +
        '\n' +
        '        System.out.println(square.apply(5));\n' +
        '        System.out.println(isEven.test(4));\n' +
        '    }\n' +
        '}',
      output: '25\ntrue',
      explanation: 'Function and Predicate are general-purpose functional interfaces from java.util.function, ready to use without defining your own.',
    },
  ],

  commonMistakes: [
    'Adding a second abstract method to an interface marked @FunctionalInterface, which fails to compile.',
    'Defining a new custom functional interface when one of the built-in java.util.function types already fits.',
    'Forgetting that default and static methods don\'t count toward the "exactly one abstract method" rule.',
    'Confusing Function<T, R> (returns a value) with Consumer<T> (returns nothing) and using the wrong one for the job.',
  ],

  tips: [
    'Reach for Function, Predicate, Consumer, and Supplier before defining a custom functional interface — they cover the overwhelming majority of cases.',
    'Add @FunctionalInterface to interfaces you intend to use with lambdas — it\'s free compile-time protection against accidentally breaking the contract later.',
    'When a method name would help readability at the call site (like Calculator.calculate() versus Function.apply()), a small custom functional interface can still be worth it.',
  ],

  bestPractices: [
    'Use @FunctionalInterface on every custom functional interface you write, even though it\'s optional — it documents intent and catches accidental contract-breaking changes early.',
    'Prefer the standard java.util.function interfaces in method signatures (e.g., accepting a Function<T, R> parameter) so your API composes naturally with the rest of the functional ecosystem, including Streams.',
  ],

  performanceNotes:
    'Calling a method through a functional interface reference has the same small, JIT-optimized overhead as ' +
    'any other interface method call — there\'s no meaningful performance difference between a hand-written ' +
    'functional interface and one of the built-in java.util.function types.',

  interviewQuestions: [
    { question: 'What defines a functional interface?', answer: 'An interface with exactly one abstract method. It can still have any number of default or static methods, since those already have implementations and don\'t count toward the rule.' },
    { question: 'What is the purpose of the @FunctionalInterface annotation?', answer: 'It\'s an optional annotation that asks the compiler to verify the interface has exactly one abstract method, producing a compile error if a second one is accidentally added later.' },
    { question: 'What are the four most commonly used built-in functional interfaces, and what does each do?', answer: 'Function<T, R> transforms a T into an R. Predicate<T> tests a T and returns a boolean. Consumer<T> accepts a T and returns nothing. Supplier<T> takes no input and produces a T.' },
    { question: 'Are Runnable and Comparator functional interfaces?', answer: 'Yes — Runnable has one abstract method (run()), and Comparator has one abstract method (compare()), which is exactly why lambdas can be used wherever either of those types is expected.' },
    { question: 'What is BiFunction, and when would you use it instead of Function?', answer: 'BiFunction<T, U, R> is like Function but takes two input arguments instead of one, useful when a lambda needs to combine two values into a result.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a custom functional interface StringTransformer with one method transform(String s), and implement it with a lambda that uppercases its input.' },
    { difficulty: 'Medium', prompt: 'Use a Consumer<String> to print each name in a List<String>, and a Predicate<String> to filter only names longer than 4 characters, combining them in a loop.' },
    { difficulty: 'Hard', prompt: 'Write a method that accepts a BiFunction<Integer, Integer, Integer> as a parameter and uses it to combine two numbers, then call it with two different lambda implementations (e.g., addition and multiplication).' },
  ],

  summary:
    'A functional interface has exactly one abstract method, which is what a lambda expression implements. The ' +
    'built-in Function, Predicate, Consumer, and Supplier interfaces from java.util.function cover most common ' +
    'cases and pair directly with the Streams API in the next lessons.',
};
