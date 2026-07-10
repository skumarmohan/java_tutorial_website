import { Lesson } from '../../../../core/models/lesson.model';

export const OOP_LESSON: Lesson = {
  slug: 'oop',
  title: 'Object-Oriented Programming in Java',
  seoDescription: 'An introduction to object-oriented programming in Java: classes, objects, and the four core OOP pillars.',

  introduction:
    'Object-oriented programming (OOP) is a way of structuring code around "objects" — bundles of data (fields) ' +
    'and behavior (methods) modeled after real-world things. Java is built around this idea from the ground up.',

  whyItMatters:
    'OOP is how large Java codebases stay manageable. Modeling a system as interacting objects — a Customer, ' +
    'an Order, a PaymentProcessor — mirrors how people already think about the problem, and keeps related data ' +
    'and behavior together instead of scattered across the program.',

  explanation: [
    'A class is a blueprint that defines what fields (data) and methods (behavior) its objects will have. An ' +
    'object is a specific instance created from that blueprint using `new` — you might have one Person class ' +
    'but many different Person objects, each with its own name and age.',
    'Object-oriented programming rests on four pillars, each covered in its own lesson: Encapsulation (keeping ' +
    'an object\'s internal data protected and controlled through methods), Inheritance (letting one class reuse ' +
    'and extend another), Polymorphism (treating different types through a common interface), and Abstraction ' +
    '(hiding implementation detail behind a simpler interface).',
    'Java enforces "everything lives in a class" — there\'s no way to write a function or a variable outside ' +
    'of one. This is part of why even Hello World needs a class wrapping its main method.',
    'OOP is often contrasted with procedural programming, where a program is mostly a sequence of steps and ' +
    'functions operating on data passed between them. OOP instead groups the data and the functions that ' +
    'operate on it together into one unit (a class), which tends to scale better as a program grows, since ' +
    'related logic stays physically close together instead of spreading across many unrelated functions.',
  ],

  analogy:
    'Think of a class as an architectural blueprint for a house, and each object as an actual house built from ' +
    'that blueprint. The blueprint defines that every house has a number of bedrooms and a front door (fields) ' +
    'and can have its door opened or its lights turned on (methods). You can build many houses from the same ' +
    'blueprint — each one is a separate object with its own address and its own current state (lights on or ' +
    'off), even though they were all constructed from identical plans.',

  examples: [
    {
      title: 'A Simple Class and Object',
      code:
        'public class Car {\n' +
        '    String model;\n' +
        '    int speed;\n' +
        '\n' +
        '    void accelerate() {\n' +
        '        speed += 10;\n' +
        '        System.out.println(model + " is now going " + speed + " km/h");\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        Car myCar = new Car();\n' +
        '        myCar.model = "Sedan";\n' +
        '        myCar.speed = 0;\n' +
        '        myCar.accelerate();\n' +
        '    }\n' +
        '}',
      output: 'Sedan is now going 10 km/h',
      explanation: 'Car is the blueprint; myCar is one object created from it, with its own model and speed values.',
      lineByLine: [
        '`String model; int speed;` — fields defining what data every Car object holds.',
        '`void accelerate() {` — a method defining behavior every Car object can perform.',
        '`Car myCar = new Car();` — creates one specific Car object from the Car blueprint.',
        '`myCar.model = "Sedan";` — sets this particular object\'s model field.',
        '`myCar.accelerate();` — calls the method on this specific object, operating on its own speed field.',
      ],
    },
  ],

  diagram: {
    caption: 'The four pillars of object-oriented programming.',
    steps: [
      { icon: '🔒', label: 'Encapsulation' },
      { icon: '👪', label: 'Inheritance' },
      { icon: '🎭', label: 'Polymorphism' },
      { icon: '🫥', label: 'Abstraction' },
    ],
  },

  commonMistakes: [
    'Making every field public, which defeats the purpose of encapsulation and lets any code change an object\'s state unpredictably.',
    'Creating classes purely as data containers with all the logic living elsewhere — a sign the design isn\'t really object-oriented yet.',
    'Confusing a class (the blueprint) with an object (a specific instance built from it).',
    'Overusing inheritance for code reuse when composition (an object containing another object) would model the relationship more accurately.',
  ],

  tips: [
    'Design classes around nouns in the problem you\'re solving (Customer, Invoice, Cart), and methods around the verbs they perform.',
    'Keep fields private and expose behavior through methods — the Encapsulation lesson covers exactly why.',
    'Don\'t reach for inheritance just to avoid retyping a method — only use it when a genuine "is-a" relationship exists.',
  ],

  bestPractices: [
    'Favor composition ("has-a," one object containing another) over inheritance ("is-a") when the relationship isn\'t a clean, unambiguous hierarchy.',
    'Give every class a single, clear responsibility — a class trying to do too many unrelated things is a common sign of a design that needs to be split up.',
  ],

  performanceNotes:
    'Object-oriented design has no inherent performance penalty in Java — the JVM is heavily optimized for ' +
    'object allocation and virtual method dispatch. Performance issues in OOP code usually come from allocating ' +
    'far more short-lived objects than necessary, not from using objects and classes in the first place.',

  interviewQuestions: [
    { question: 'What is the difference between a class and an object?', answer: 'A class is a blueprint defining what fields and methods its instances will have. An object is a specific instance created from that blueprint, with its own independent copy of the instance fields.' },
    { question: 'What are the four pillars of object-oriented programming?', answer: 'Encapsulation, Inheritance, Polymorphism, and Abstraction.' },
    { question: 'How does OOP differ from procedural programming?', answer: 'Procedural programming organizes code mainly as a sequence of functions operating on data passed between them. OOP groups data and the behavior that operates on it together into objects, which tends to scale better for large, evolving systems.' },
    { question: 'Why can\'t Java code exist outside of a class?', answer: 'Java is designed around the object-oriented paradigm from the ground up — there\'s no concept of a top-level function or variable outside a class, unlike procedural or scripting languages.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Design a simple class Book with fields for title and pageCount, and a method that prints a description of the book.' },
    { difficulty: 'Medium', prompt: 'Create two different Book objects from your class and demonstrate that changing one object\'s fields doesn\'t affect the other.' },
    { difficulty: 'Hard', prompt: 'Sketch (in comments or on paper) a small class design for a simple library system with Book, Member, and Loan classes, identifying which fields and methods each would need before writing any code.' },
  ],

  summary:
    'OOP structures a program as objects — instances of classes that combine data and behavior. The four ' +
    'pillars — encapsulation, inheritance, polymorphism, and abstraction — are the tools Java gives you to ' +
    'model relationships between those objects cleanly, each covered in the following lessons.',
};
