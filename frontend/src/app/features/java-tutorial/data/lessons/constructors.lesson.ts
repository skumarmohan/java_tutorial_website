import { Lesson } from '../../../../core/models/lesson.model';

export const CONSTRUCTORS_LESSON: Lesson = {
  slug: 'constructors',
  title: 'Java Constructors',
  seoDescription: 'How constructors initialize new objects in Java, including default constructors, overloading, and constructor chaining.',

  introduction:
    'A constructor is a special method that runs automatically when you create a new object with `new`, used ' +
    'to set up that object\'s initial state.',

  whyItMatters:
    'Constructors guarantee an object starts life in a valid state — rather than creating an object and hoping ' +
    'every field gets set correctly afterward, you require the necessary values up front.',

  explanation: [
    'A constructor looks like a method but has no return type and shares its name exactly with the class. ' +
    'When you write `new Person("Alex", 25)`, Java allocates memory for a new Person object and runs a ' +
    'matching constructor with those arguments.',
    'If you don\'t write any constructor at all, Java automatically provides a no-argument "default ' +
    'constructor" that does nothing but create the object with default field values. As soon as you write any ' +
    'constructor yourself, that automatic default disappears.',
    'Like methods, constructors can be overloaded — a class can have multiple constructors with different ' +
    'parameter lists, letting you create objects in more than one way.',
    'One constructor can call another constructor in the same class using `this(...)` as its first statement — ' +
    'called constructor chaining — which avoids duplicating initialization logic across overloaded constructors.',
    'Constructors run exactly once per object, at the moment it\'s created, and can never be called again on ' +
    'that same object afterward. This is different from a regular method, which can be called as many times as ' +
    'you like throughout an object\'s lifetime.',
  ],

  analogy:
    'A constructor is like the setup process when you buy a new phone: it asks for essential information ' +
    '(language, WiFi network, Apple ID / Google account) once, upfront, before you can use it at all. You can ' +
    'change some of those settings later through the settings menu (setter methods), but the phone can never ' +
    'be "un-set-up" and walked through initial setup again — that process happens exactly once, at creation.',

  syntax: {
    code: 'public class ClassName {\n    ClassName(parameterType parameterName) {\n        // initialize fields\n    }\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'A Basic Constructor',
      code:
        'public class Person {\n' +
        '    String name;\n' +
        '    int age;\n' +
        '\n' +
        '    public Person(String name, int age) {\n' +
        '        this.name = name;\n' +
        '        this.age = age;\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        Person p = new Person("Alex", 25);\n' +
        '        System.out.println(p.name + " is " + p.age);\n' +
        '    }\n' +
        '}',
      output: 'Alex is 25',
      explanation: 'this.name refers to the object\'s field, distinguishing it from the constructor\'s parameter, also named name.',
      lineByLine: [
        '`public Person(String name, int age) {` — the constructor; note there\'s no return type and the name matches the class exactly.',
        '`this.name = name;` — assigns the parameter\'s value into the object\'s own name field; `this` disambiguates the field from the parameter.',
        '`Person p = new Person("Alex", 25);` — allocates a new Person object and runs the constructor with "Alex" and 25.',
      ],
    },
    {
      title: 'Constructor Chaining',
      code:
        'public class Product {\n' +
        '    String name;\n' +
        '    double price;\n' +
        '\n' +
        '    public Product(String name) {\n' +
        '        this(name, 0.0);\n' +
        '    }\n' +
        '\n' +
        '    public Product(String name, double price) {\n' +
        '        this.name = name;\n' +
        '        this.price = price;\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        Product p = new Product("Notebook");\n' +
        '        System.out.println(p.name + ": $" + p.price);\n' +
        '    }\n' +
        '}',
      output: 'Notebook: $0.0',
      explanation: 'The single-argument constructor delegates to the two-argument one with a default price, avoiding duplicated initialization code.',
    },
  ],

  commonMistakes: [
    'Forgetting that writing any constructor removes the automatic no-argument default constructor, breaking code that expected `new ClassName()` to work.',
    'Naming the constructor slightly differently than the class (even in casing), which makes it a regular method instead of a constructor.',
    'Giving a constructor a return type, which also silently turns it into a regular method rather than a constructor.',
    'Not calling this(...) as the very first statement in a chained constructor — Java requires it to be first.',
  ],

  tips: [
    'Use constructor parameters for values an object truly needs to be valid; use plain setter methods for optional, changeable state.',
    'Use constructor chaining with this(...) instead of repeating the same initialization logic across overloaded constructors.',
    'Name constructor parameters the same as the fields they initialize, and use this.field = field to disambiguate them.',
  ],

  bestPractices: [
    'Validate constructor arguments (e.g., reject a negative age) before assigning them to fields, so an object can never be created in an invalid state.',
    'Keep constructors focused on assignment and validation — avoid doing heavy computation or I/O inside a constructor.',
    'When a class has many optional fields, consider a builder pattern instead of a constructor with a long parameter list.',
  ],

  performanceNotes:
    'Object creation (and running its constructor) is fast in modern JVMs — allocation is typically a simple ' +
    'pointer bump on the heap. The real performance concern with object-heavy code isn\'t constructors ' +
    'themselves, but creating far more short-lived objects than necessary in a hot loop, which increases ' +
    'garbage collector pressure.',

  interviewQuestions: [
    { question: 'What is a constructor, and how does it differ from a regular method?', answer: 'A constructor initializes a new object when it\'s created with `new`. Unlike a regular method, it has no return type, must share its name exactly with the class, and runs automatically exactly once per object, at creation.' },
    { question: 'What is the default constructor, and when does Java provide it?', answer: 'It\'s a no-argument constructor Java automatically generates only if you don\'t write any constructor yourself. As soon as you define even one constructor, Java stops providing the automatic default.' },
    { question: 'What is constructor chaining, and how do you do it?', answer: 'It\'s one constructor calling another constructor in the same class, using this(...) as the very first statement, to avoid duplicating shared initialization logic across overloaded constructors.' },
    { question: 'Why would you use `this.name = name;` instead of just `name = name;` inside a constructor?', answer: 'When a parameter has the same name as a field, `this.name` explicitly refers to the object\'s field, while plain `name` refers to the parameter — without `this`, `name = name;` would just assign the parameter to itself and leave the field untouched.' },
    { question: 'Can a constructor be overloaded?', answer: 'Yes — a class can have multiple constructors with different parameter lists, exactly like method overloading, letting objects be created in more than one way.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a class Book with fields title and author, a constructor that sets both, and a main method that creates and prints one.' },
    { difficulty: 'Medium', prompt: 'Add a second constructor to Book that only takes a title, chaining to the first constructor with a default author of "Unknown".' },
    { difficulty: 'Hard', prompt: 'Write a constructor that validates its parameters (e.g., rejects an empty title) and throws an IllegalArgumentException if invalid. Demonstrate it both succeeding and failing.' },
  ],

  summary:
    'Constructors initialize new objects and share their class\'s name with no return type. Java provides a ' +
    'default one only if you don\'t write any yourself, and overloaded constructors can chain into each other ' +
    'with this(...) to avoid duplicated setup code.',
};
