import { Lesson } from '../../../../core/models/lesson.model';

export const METHODS_LESSON: Lesson = {
  slug: 'methods',
  title: 'Java Methods',
  seoDescription: 'How to define and call methods in Java, including parameters, return values, and method overloading.',

  introduction:
    'A method is a named, reusable block of code that performs a task. You\'ve already been using one in every ' +
    'example — main() is itself a method.',

  whyItMatters:
    'Methods let you break a program into small, understandable, reusable pieces instead of one long block of ' +
    'code — the same reason recipes have named steps instead of one giant paragraph.',

  explanation: [
    'A method declaration has a few parts: an access modifier (like public), a return type (what kind of value ' +
    'it produces, or void for none), a name, and a parameter list in parentheses — the inputs the method ' +
    'accepts.',
    'If a method has a return type other than void, it must use the return keyword to send a value back to ' +
    'whoever called it. A void method can still use return with no value to exit early.',
    'Java supports method overloading: multiple methods with the same name but different parameter lists (different ' +
    'number or types of parameters). Java picks the right one based on the arguments you pass at the call site.',
    'Parameters are passed by value in Java — the method receives a copy of the value (or, for objects, a copy ' +
    'of the reference). Reassigning a parameter inside a method doesn\'t affect the caller\'s original variable.',
    'The word "static" in `public static void main` means the method belongs to the class itself, callable ' +
    'without creating an object first (`ClassName.methodName()`). A non-static method, by contrast, belongs to ' +
    'an individual object and can only be called through an instance (`objectName.methodName()`) — this ' +
    'distinction becomes central once the OOP lessons introduce objects properly.',
  ],

  analogy:
    'A method is like a vending machine. You give it specific inputs (parameters) — insert coins and press B4 ' +
    '— and it performs a fixed, repeatable process to hand you back a specific output (the return value), a ' +
    'snack. You don\'t need to know the internal mechanics each time; you just need to know what to put in and ' +
    'what you\'ll get out. Two people pressing B4 get the identical process run independently, just like two ' +
    'calls to the same method with the same arguments.',

  syntax: {
    code: 'accessModifier returnType methodName(parameterType parameterName) {\n    // code\n    return value; // omit if returnType is void\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'A Method That Returns a Value',
      code:
        'public class MethodDemo {\n' +
        '    public static int add(int a, int b) {\n' +
        '        return a + b;\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        int result = add(3, 4);\n' +
        '        System.out.println(result);\n' +
        '    }\n' +
        '}',
      output: '7',
      explanation: 'add() takes two int parameters and returns their sum; main() calls it and stores the result.',
      lineByLine: [
        '`public static int add(int a, int b) {` — declares a method named add, returning an int, taking two int parameters.',
        '`return a + b;` — sends the sum of a and b back to wherever add() was called from.',
        '`int result = add(3, 4);` — calls add() with 3 and 4, storing its returned value (7) into result.',
      ],
    },
    {
      title: 'Method Overloading',
      code:
        'public class OverloadDemo {\n' +
        '    public static int multiply(int a, int b) {\n' +
        '        return a * b;\n' +
        '    }\n' +
        '\n' +
        '    public static double multiply(double a, double b) {\n' +
        '        return a * b;\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println(multiply(2, 3));\n' +
        '        System.out.println(multiply(2.5, 4.0));\n' +
        '    }\n' +
        '}',
      output: '6\n10.0',
      explanation: 'Java picks the int version or the double version automatically based on the argument types passed in.',
    },
  ],

  commonMistakes: [
    'Declaring a return type other than void but forgetting to return a value on every possible path through the method.',
    'Assuming reassigning a parameter inside a method changes the caller\'s original variable — it doesn\'t, since parameters are passed by value.',
    'Overloading methods in a way that\'s ambiguous to the compiler, such as differing only by return type (not allowed).',
    'Giving a method a vague name like process() or doStuff() that doesn\'t describe what it actually does.',
  ],

  tips: [
    'Name methods with verbs that describe the action: calculateTotal(), isValid(), sendEmail().',
    'Keep methods focused on one task — if a method\'s name needs "and" to describe it, consider splitting it.',
    'Use method overloading for genuinely related operations on different types, not as a way to give unrelated behavior the same name.',
  ],

  bestPractices: [
    'Keep methods short — a good rule of thumb is that you should be able to see the whole method without scrolling.',
    'Limit the number of parameters a method takes; beyond three or four, consider grouping related parameters into an object.',
    'Prefer returning a value over mutating a parameter passed in — code that returns its result is easier to trace and test.',
  ],

  performanceNotes:
    'Method calls in Java have a small, fixed overhead, but the JIT compiler aggressively inlines short, ' +
    'frequently-called methods (effectively pasting their body directly into the caller) once it identifies ' +
    'them as "hot" — so breaking logic into small, well-named methods for readability rarely has a measurable ' +
    'performance cost in practice.',

  interviewQuestions: [
    { question: 'What is the difference between a method with a void return type and one that returns a value?', answer: 'A void method performs an action but doesn\'t send any value back to the caller. A method with any other return type must use `return value;` to send a result back, and that value can be captured or used by the caller.' },
    { question: 'Is Java pass-by-value or pass-by-reference?', answer: 'Java is strictly pass-by-value. For objects, what\'s passed by value is the reference itself (effectively a copy of the address) — so a method can modify the object the reference points to, but reassigning the parameter to a different object has no effect on the caller\'s original variable.' },
    { question: 'What is method overloading, and how does Java decide which overload to call?', answer: 'Overloading is defining multiple methods with the same name but different parameter lists. Java decides which one to call at compile time, based on the number and types of arguments provided at the call site.' },
    { question: 'Can two methods be overloaded if they differ only by return type?', answer: 'No — Java does not allow overloading based on return type alone; the parameter lists must differ.' },
    { question: 'What does the `static` keyword mean on a method?', answer: 'It means the method belongs to the class itself rather than to any individual object, and can be called directly through the class name without creating an instance.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a method `isEven(int n)` that returns true if n is even, and call it with a few different values.' },
    { difficulty: 'Medium', prompt: 'Write two overloaded methods named `describe` — one taking an int and one taking a String — each printing a different message.' },
    { difficulty: 'Hard', prompt: 'Write a method that takes an int parameter, reassigns the parameter inside the method body, and prints it before returning. Call it from main() with a variable, and explain why the caller\'s original variable is unaffected.' },
  ],

  summary:
    'Methods package reusable logic behind a name, optional parameters, and an optional return value. Java ' +
    'passes parameters by value and supports overloading multiple methods with the same name but different ' +
    'parameter lists.',
};
