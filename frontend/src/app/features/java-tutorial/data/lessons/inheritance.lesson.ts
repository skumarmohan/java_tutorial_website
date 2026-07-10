import { Lesson } from '../../../../core/models/lesson.model';

export const INHERITANCE_LESSON: Lesson = {
  slug: 'inheritance',
  title: 'Java Inheritance',
  seoDescription: 'How inheritance lets one Java class reuse and extend another, using extends, super, and method overriding.',

  introduction:
    'Inheritance lets one class (a subclass) reuse the fields and methods of another class (a superclass), and ' +
    'add or change behavior on top of it.',

  whyItMatters:
    'Inheritance avoids duplicating code across classes that share common behavior — a Dog and a Cat can both ' +
    'extend a shared Animal class instead of each reimplementing eat() and sleep() from scratch.',

  explanation: [
    'A class inherits from another using the `extends` keyword: `class Dog extends Animal` makes Dog a ' +
    'subclass of Animal. Dog automatically gets every non-private field and method Animal defines, without ' +
    'rewriting them.',
    'A subclass can override an inherited method to provide its own implementation, using the same method ' +
    'signature and the `@Override` annotation (which isn\'t required but catches typos at compile time).',
    'The `super` keyword lets a subclass refer to its superclass — `super.methodName()` calls the superclass\'s ' +
    'version of an overridden method, and `super(...)` calls the superclass\'s constructor, which must be the ' +
    'first statement in a subclass constructor.',
    'Java only allows single inheritance for classes — a class can extend exactly one other class, though that ' +
    'superclass can itself extend another, forming a chain. This limitation is part of why interfaces (covered ' +
    'later) exist.',
    'Every class in Java, even if you don\'t write `extends` at all, implicitly extends the built-in Object ' +
    'class. This is why every object automatically has methods like toString(), equals(), and hashCode() — ' +
    'they\'re inherited from Object and can be overridden.',
  ],

  analogy:
    'Inheritance is like a family recipe passed down through generations. The base "Animal" recipe teaches ' +
    '"how to eat" and "how to sleep." A "Dog" recipe inherits everything from the Animal recipe automatically, ' +
    'and adds its own new step, "how to bark." A "Puppy" recipe could then inherit from Dog, getting eating, ' +
    'sleeping, and barking for free, while adding its own new behavior on top — each generation builds on the ' +
    'one before it without having to rewrite the earlier steps.',

  syntax: {
    code: 'class Subclass extends Superclass {\n    // inherits Superclass\'s fields and methods\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'Basic Inheritance',
      code:
        'class Animal {\n' +
        '    void eat() {\n' +
        '        System.out.println("This animal eats food.");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Dog extends Animal {\n' +
        '    void bark() {\n' +
        '        System.out.println("The dog barks.");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class InheritanceDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Dog d = new Dog();\n' +
        '        d.eat();\n' +
        '        d.bark();\n' +
        '    }\n' +
        '}',
      output: 'This animal eats food.\nThe dog barks.',
      explanation: 'Dog didn\'t define eat() itself — it inherited it directly from Animal.',
      lineByLine: [
        '`class Dog extends Animal {` — makes Dog a subclass of Animal, inheriting its members.',
        '`Dog d = new Dog();` — creates a Dog object.',
        '`d.eat();` — calls the eat() method, which Dog never defined itself; it comes straight from Animal.',
        '`d.bark();` — calls the method Dog itself adds on top of what it inherited.',
      ],
    },
    {
      title: 'Overriding with super',
      code:
        'class Animal {\n' +
        '    void makeSound() {\n' +
        '        System.out.println("Some generic animal sound");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Cat extends Animal {\n' +
        '    @Override\n' +
        '    void makeSound() {\n' +
        '        super.makeSound();\n' +
        '        System.out.println("Meow");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class OverrideDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Cat c = new Cat();\n' +
        '        c.makeSound();\n' +
        '    }\n' +
        '}',
      output: 'Some generic animal sound\nMeow',
      explanation: 'Cat overrides makeSound() but still calls the original version first with super.makeSound().',
    },
  ],

  diagram: {
    caption: 'Dog and Cat both inherit shared behavior from Animal.',
    steps: [
      { icon: '🐾', label: 'Animal', description: 'eat(), sleep()' },
      { icon: '🐕', label: 'Dog extends Animal', description: '+ bark()' },
      { icon: '🐈', label: 'Cat extends Animal', description: '+ meow()' },
    ],
  },

  commonMistakes: [
    'Trying to extend more than one class at once — Java doesn\'t allow multiple inheritance for classes.',
    'Forgetting @Override, then introducing a typo in the method signature that silently creates a new, unrelated method instead of overriding one.',
    'Calling super(...) somewhere other than the very first line of a subclass constructor, which doesn\'t compile.',
    'Using inheritance for unrelated classes just to reuse a method, when the classes don\'t have a genuine "is-a" relationship.',
  ],

  tips: [
    'Always add @Override when overriding a method — it turns a signature mismatch into a compile error instead of a silent bug.',
    'Ask "is a Dog truly a kind of Animal?" before reaching for inheritance — if the relationship isn\'t a clean "is-a," consider composition instead.',
    'Keep superclasses focused on genuinely shared behavior — a superclass that\'s mostly ignored by its subclasses is a sign the hierarchy needs rethinking.',
  ],

  bestPractices: [
    'Keep inheritance hierarchies shallow — two or three levels deep at most. Deep hierarchies become difficult to trace and reason about.',
    'Mark a class `final` if it\'s not designed to be extended, to prevent accidental or inappropriate subclassing later.',
    'Document what a subclass is expected to override (and why) when designing a superclass meant to be extended by others.',
  ],

  performanceNotes:
    'Calling an overridden method involves a small amount of extra work at runtime (the JVM has to determine ' +
    'which version to run based on the object\'s actual type), but modern JVMs optimize this so effectively — ' +
    'including inlining — that the cost is negligible for virtually all application code.',

  interviewQuestions: [
    { question: 'What keyword is used for inheritance in Java, and what does it do?', answer: '`extends`. It makes one class (the subclass) inherit the non-private fields and methods of another class (the superclass).' },
    { question: 'Does Java support multiple inheritance of classes?', answer: 'No — a class can extend only one superclass. Java achieves similar flexibility through interfaces, which a class can implement multiple of.' },
    { question: 'What does the `super` keyword do?', answer: 'It refers to the superclass. super.methodName() calls the superclass\'s version of a method, and super(...) calls the superclass\'s constructor — the latter must be the first statement in a subclass constructor.' },
    { question: 'What class does every Java class inherit from, even without writing extends?', answer: 'java.lang.Object — every class implicitly extends it, which is why every object has methods like toString(), equals(), and hashCode() available by default.' },
    { question: 'What is the purpose of the @Override annotation?', answer: 'It tells the compiler you intend to override a superclass method, so if the method signature doesn\'t actually match one being overridden (e.g., due to a typo), the compiler produces an error instead of silently creating an unrelated new method.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create a Vehicle superclass with a method move(), and a Car subclass that inherits it and adds a honk() method.' },
    { difficulty: 'Medium', prompt: 'Override move() in Car to print something different, calling super.move() first before adding its own message.' },
    { difficulty: 'Hard', prompt: 'Design a three-level hierarchy (e.g., Vehicle → Car → SportsCar), override the same method at each level calling super each time, and trace through exactly what prints and why when you call it on a SportsCar object.' },
  ],

  summary:
    'Inheritance lets a subclass reuse and extend a superclass\'s fields and methods with `extends`, override ' +
    'behavior with matching method signatures, and reach back to the superclass with `super`. Java allows only ' +
    'single inheritance between classes.',
};
