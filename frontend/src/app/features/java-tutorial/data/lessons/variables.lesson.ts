import { Lesson } from '../../../../core/models/lesson.model';

export const VARIABLES_LESSON: Lesson = {
  slug: 'variables',
  title: 'Java Variables',
  seoDescription:
    'Learn how to declare, initialize, and use variables in Java, including naming rules and variable scope.',

  introduction:
    'A variable is a named piece of memory that holds a value your program can read and change. Every ' +
    'variable in Java has a type, which determines what kind of data it can store — a whole number, some ' +
    'text, a true/false flag, and so on.',

  whyItMatters:
    'Variables are how a program remembers anything: a user\'s name, a shopping cart total, a game score. ' +
    'Without variables, a program could only work with fixed, hardcoded values. Every feature you\'ll ever ' +
    'build — forms, calculations, state that changes over time — is built on top of storing and updating ' +
    'variables.',

  explanation: [
    'Declaring a variable means telling Java its type and name before you use it: `int age;` reserves a ' +
    'space in memory named age that can hold a whole number. At this point the variable is declared but not ' +
    'yet given a value.',
    'Initializing a variable means giving it a starting value, either at the same time you declare it ' +
    '(`int age = 25;`) or afterward (`age = 25;`). Java will not let you read a local variable that has been ' +
    'declared but never initialized — the compiler catches this for you.',
    'Variable names must start with a letter, `$`, or `_` (letters are the convention), can contain letters ' +
    'and digits after that, and cannot be a reserved keyword like `class` or `int`. Java is case-sensitive, ' +
    'so `total` and `Total` are two different variables.',
    'Where a variable is declared determines its scope — where in the code it can be used. A variable ' +
    'declared inside a method (a local variable) only exists inside that method. A variable declared inside ' +
    'a class but outside any method (an instance or static variable) exists for as long as the object, or ' +
    'the class itself, exists. Lessons on Methods and OOP cover this in more depth.',
    'It helps to separate three distinct ideas that beginners often blur together: declaration (telling Java ' +
    'a variable exists and what type it is), initialization (giving it its first value), and assignment ' +
    '(giving it any value, including later ones). A variable is declared once, but can be assigned many times ' +
    'over its lifetime unless it\'s marked final.',
  ],

  analogy:
    'A variable is like a labeled storage box in a warehouse. The label (the variable name) never changes, ' +
    'and the box has a fixed size and shape suited to what it\'s meant to hold (the type) — a box built for ' +
    'documents (String) is a different shape than one built for coins (int). You can open the box and swap ' +
    'out its contents any time (reassignment), but you can\'t suddenly decide a document box should hold ' +
    'liquid instead — the type is fixed the moment the box is built.',

  syntax: {
    code: 'type variableName = value;',
    language: 'java',
    description: 'The general pattern for declaring and initializing a variable in one line.',
  },

  examples: [
    {
      title: 'Declaring and Printing Variables',
      code:
        'public class VariablesDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int age = 25;\n' +
        '        double price = 19.99;\n' +
        '        String name = "Alex";\n' +
        '        boolean isMember = true;\n' +
        '\n' +
        '        System.out.println(name + " is " + age + " years old.");\n' +
        '        System.out.println("Price: $" + price);\n' +
        '        System.out.println("Member: " + isMember);\n' +
        '    }\n' +
        '}',
      output: 'Alex is 25 years old.\nPrice: $19.99\nMember: true',
      explanation: 'Four variables of different types are declared and initialized in one step, then printed.',
      lineByLine: [
        '`int age = 25;` — declares a variable named age of type int, and immediately initializes it to 25.',
        '`double price = 19.99;` — declares and initializes a decimal-holding variable.',
        '`String name = "Alex";` — declares and initializes a text-holding reference variable.',
        '`boolean isMember = true;` — declares and initializes a true/false variable.',
        'The three println() calls each concatenate variables into a String using +, then print the result.',
      ],
    },
    {
      title: 'Reassigning a Variable',
      code:
        'public class ReassignDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int score = 10;\n' +
        '        System.out.println("Before: " + score);\n' +
        '\n' +
        '        score = 25;\n' +
        '        System.out.println("After: " + score);\n' +
        '    }\n' +
        '}',
      output: 'Before: 10\nAfter: 25',
      explanation: 'Unlike a constant, a regular variable can be assigned a new value after it\'s declared.',
    },
    {
      title: 'A Constant with final',
      code:
        'public class ConstantDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        final double TAX_RATE = 0.08;\n' +
        '        System.out.println("Tax rate: " + TAX_RATE);\n' +
        '    }\n' +
        '}',
      output: 'Tax rate: 0.08',
      explanation:
        'Adding the final keyword prevents the variable from ever being reassigned — attempting to change TAX_RATE again would fail to compile.',
    },
  ],

  diagram: {
    caption: 'What happens when you declare and assign a variable.',
    steps: [
      { icon: '🏷️', label: 'Declare', description: 'int age;' },
      { icon: '📍', label: 'Allocate Memory', description: 'Space reserved' },
      { icon: '✍️', label: 'Assign Value', description: 'age = 25;' },
      { icon: '📤', label: 'Read Value', description: 'System.out.println(age);' },
    ],
  },

  commonMistakes: [
    'Using a local variable before it has been initialized — Java won\'t compile this.',
    'Mismatching types, like trying to store "hello" in an int variable.',
    'Using a Java reserved keyword (e.g. `class`, `int`, `for`) as a variable name.',
    'Forgetting that Java is case-sensitive, then being confused why `Total` and `total` behave as unrelated variables.',
    'Redeclaring a variable with the same name in the same scope, which causes a compile error.',
  ],

  tips: [
    'Use camelCase for variable names: firstName, totalPrice, isMember.',
    'Give variables meaningful names — prefer `remainingAttempts` over `x`.',
    'Initialize a variable at the same time you declare it whenever the starting value is already known.',
    'Use `final` for any value that should never change, like configuration constants or fixed rates.',
  ],

  bestPractices: [
    'Declare variables as close as possible to where they\'re first used, rather than all at the top of a method — it keeps related code together.',
    'Prefer the narrowest scope that works: a local variable inside a method is easier to reason about than an instance field visible everywhere.',
    'Use ALL_CAPS_WITH_UNDERSCORES for final constants (TAX_RATE), which visually distinguishes them from regular variables at a glance.',
  ],

  performanceNotes:
    'Local variables live on the JVM\'s call stack and are extremely cheap to create and discard — there\'s no ' +
    'meaningful performance cost to declaring more of them for clarity. This is different from object creation ' +
    '(covered in the OOP lessons), which does have a real, if usually small, cost.',

  interviewQuestions: [
    { question: 'What is the difference between declaring and initializing a variable?', answer: 'Declaring a variable tells Java its type and name, reserving space for it without giving it a value. Initializing gives it its first actual value. They can happen in the same statement or separately.' },
    { question: 'Can a local variable be used before it\'s initialized in Java?', answer: 'No. Unlike instance or static fields (which get default values), Java\'s compiler requires local variables to be definitely assigned a value before they\'re read, and will refuse to compile code that violates this.' },
    { question: 'What does the `final` keyword do when applied to a variable?', answer: 'It prevents the variable from being reassigned after its initial value is set — any attempt to assign to it again is a compile error, making it effectively a constant.' },
    { question: 'What are Java\'s rules for valid variable names?', answer: 'A variable name must start with a letter, underscore, or dollar sign, can contain letters and digits afterward, cannot be a reserved keyword, and is case-sensitive.' },
    { question: 'What is variable scope, and why does it matter?', answer: 'Scope is the region of code where a variable is accessible. A local variable only exists inside the method (or block) where it\'s declared. Understanding scope prevents accidentally trying to use a variable outside the region where it\'s valid.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Declare three variables — your name, your age, and whether you\'re a student — and print a sentence using all three.' },
    { difficulty: 'Medium', prompt: 'Write a program that declares a variable, prints it, reassigns it to a new value, and prints it again to show the change.' },
    { difficulty: 'Hard', prompt: 'Try writing a program with a local variable that is declared but never initialized before being printed. Note the exact compiler error, then explain in your own words why Java enforces this rule.' },
  ],

  summary:
    'A variable is a named, typed storage location. You declare it with a type and name, initialize it with ' +
    'a starting value, and can reassign it later unless it\'s marked `final`. Where you declare a variable ' +
    'determines its scope — the next lessons on Data Types and Operators build directly on these basics.',
};
