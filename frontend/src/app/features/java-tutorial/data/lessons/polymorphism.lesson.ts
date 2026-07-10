import { Lesson } from '../../../../core/models/lesson.model';

export const POLYMORPHISM_LESSON: Lesson = {
  slug: 'polymorphism',
  title: 'Java Polymorphism',
  seoDescription: 'Compile-time and runtime polymorphism in Java, explained through method overloading and overriding.',

  introduction:
    'Polymorphism — literally "many forms" — means the same method call can behave differently depending on ' +
    'the actual object it\'s called on. Java achieves this two ways: method overloading and method overriding.',

  whyItMatters:
    'Polymorphism is what lets you write code against a general type (like Animal) and have it correctly call ' +
    'the specific behavior of whatever actual object (Dog, Cat, Bird) is passed in, without an if/else chain ' +
    'checking types.',

  explanation: [
    'Compile-time polymorphism (also called static polymorphism) is method overloading — multiple methods with ' +
    'the same name but different parameters, covered in the Methods lesson. Java decides which one to call at ' +
    'compile time, based on the argument types you pass.',
    'Runtime polymorphism is the more powerful form, achieved through method overriding (covered in the ' +
    'Inheritance lesson). When you call an overridden method through a superclass reference, Java looks at the ' +
    'object\'s actual runtime type — not the reference\'s declared type — to decide which version to run.',
    'This means a single Animal[] array can hold Dog, Cat, and Bird objects, and calling .makeSound() on each ' +
    'one runs that specific object\'s version, even though every element in the array is declared as type ' +
    'Animal.',
    'This mechanism is sometimes called "dynamic dispatch" — the specific method that ends up running is ' +
    'decided dynamically, at runtime, based on the real object, rather than statically at compile time based on ' +
    'the variable\'s declared type.',
  ],

  analogy:
    'Imagine pressing a "speak" button that exists on every remote-controlled toy animal you own — a dog, a ' +
    'cat, and a bird. Pressing the exact same button produces a different sound depending on which toy you\'re ' +
    'actually holding, even though the button itself, and the instruction to press it, is identical every time. ' +
    'You don\'t need a different button for each toy, or to check which toy it is first — each one just knows ' +
    'how to respond to "speak" in its own way.',

  examples: [
    {
      title: 'Runtime Polymorphism',
      code:
        'class Animal {\n' +
        '    void makeSound() {\n' +
        '        System.out.println("Some generic sound");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Dog extends Animal {\n' +
        '    @Override\n' +
        '    void makeSound() {\n' +
        '        System.out.println("Woof");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Cat extends Animal {\n' +
        '    @Override\n' +
        '    void makeSound() {\n' +
        '        System.out.println("Meow");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class PolymorphismDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Animal[] animals = { new Dog(), new Cat() };\n' +
        '\n' +
        '        for (Animal a : animals) {\n' +
        '            a.makeSound();\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Woof\nMeow',
      explanation: 'Every element in animals is declared as Animal, but each call to makeSound() runs the specific subclass\'s overridden version.',
      lineByLine: [
        '`Animal[] animals = { new Dog(), new Cat() };` — an array declared as Animal, but holding Dog and Cat objects.',
        '`for (Animal a : animals)` — each element is accessed through an Animal-typed reference, regardless of its real type.',
        '`a.makeSound();` — Java checks the object\'s actual runtime type (Dog or Cat) to decide which overridden version to run, not the declared Animal type.',
      ],
    },
  ],

  commonMistakes: [
    'Confusing overloading (same name, different parameters, resolved at compile time) with overriding (same signature in a subclass, resolved at runtime).',
    'Trying to override a method marked `static` or `final` — static methods aren\'t polymorphic, and final methods can\'t be overridden at all.',
    'Assuming a field is polymorphic like a method — field access in Java is resolved by the reference\'s declared type, not the object\'s runtime type.',
    'Writing repetitive if/instanceof chains to handle each subclass differently, instead of relying on overriding to handle it automatically.',
  ],

  tips: [
    'If you find yourself writing `if (animal instanceof Dog) { ... } else if (animal instanceof Cat) { ... }`, that logic likely belongs in an overridden method instead.',
    'Program against the superclass or interface type where possible (`Animal a = new Dog();`) — it keeps calling code decoupled from specific subclasses.',
    'Remember static methods don\'t participate in runtime polymorphism — they\'re resolved by the reference type, not the object.',
  ],

  bestPractices: [
    'Design methods to be overridden intentionally — document what behavior a subclass is expected to provide when overriding a given method.',
    'Prefer polymorphic method calls over type-checking (instanceof chains) whenever the differing behavior can naturally live inside each subclass instead.',
  ],

  performanceNotes:
    'Dynamic dispatch (deciding which overridden method to call at runtime) has historically had a small cost ' +
    'compared to a direct, non-polymorphic call, but modern JVMs use techniques like inline caching to make this ' +
    'overhead very small in practice — it\'s rarely worth avoiding polymorphism purely for performance reasons.',

  interviewQuestions: [
    { question: 'What is polymorphism, and what two forms does it take in Java?', answer: 'Polymorphism means the same method call can behave differently depending on context. Java has compile-time polymorphism (method overloading, resolved by argument types at compile time) and runtime polymorphism (method overriding, resolved by the object\'s actual type at runtime).' },
    { question: 'What is dynamic dispatch?', answer: 'The mechanism by which Java decides, at runtime, which overridden method implementation to actually run, based on the object\'s real type rather than the type of the reference variable used to call it.' },
    { question: 'Can static methods be polymorphic (overridden) in Java?', answer: 'No — static methods are resolved based on the reference\'s declared type at compile time, not the object\'s runtime type, so they don\'t participate in runtime polymorphism (they can be "hidden," not overridden).' },
    { question: 'Why is field access not polymorphic in Java?', answer: 'Field access is resolved statically, based on the declared type of the reference used to access it, unlike method calls, which are resolved dynamically based on the actual object\'s type.' },
    { question: 'How does polymorphism help avoid long if/instanceof chains?', answer: 'Instead of checking an object\'s specific type and branching accordingly, you can call a single overridden method on a common supertype reference, letting each subclass\'s own implementation handle its specific behavior automatically.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create a Shape superclass with a method describe(), and two subclasses (Circle, Square) that each override it with their own message.' },
    { difficulty: 'Medium', prompt: 'Create an array of Shape holding both Circle and Square objects, loop through it, and call describe() on each, observing the polymorphic behavior.' },
    { difficulty: 'Hard', prompt: 'Add a static method with the same name to both a superclass and a subclass, call it through a superclass-typed reference pointing to a subclass object, and explain why the result differs from calling an overridden instance method the same way.' },
  ],

  summary:
    'Polymorphism lets the same method call run different code depending on the object it\'s called on. ' +
    'Overloading resolves at compile time based on argument types; overriding resolves at runtime based on the ' +
    'object\'s actual class — the more commonly meant form of polymorphism in OOP design.',
};
