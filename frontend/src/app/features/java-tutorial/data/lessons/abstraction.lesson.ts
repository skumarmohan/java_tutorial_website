import { Lesson } from '../../../../core/models/lesson.model';

export const ABSTRACTION_LESSON: Lesson = {
  slug: 'abstraction',
  title: 'Java Abstraction',
  seoDescription: 'Abstraction in Java using abstract classes and methods, and why it simplifies working with complex systems.',

  introduction:
    'Abstraction means exposing only the essential details of something and hiding the complex implementation ' +
    'behind it. In Java, this is done with abstract classes and abstract methods.',

  whyItMatters:
    'When you drive a car, you use a steering wheel and pedals without knowing exactly how the engine works ' +
    'internally. Abstraction gives code the same benefit: you can use a well-designed class without needing to ' +
    'understand every detail of how it\'s implemented.',

  explanation: [
    'An abstract class is declared with the `abstract` keyword and can\'t be instantiated directly — you can\'t ' +
    'write `new Animal()` if Animal is abstract. It exists to be extended by concrete subclasses.',
    'An abstract method has a signature but no body — it\'s declared but not implemented in the abstract class. ' +
    'Any concrete (non-abstract) subclass is required to provide an implementation, or the compiler will ' +
    'reject it.',
    'This is different from a regular (non-abstract) method in an abstract class, which can have a full ' +
    'implementation that subclasses inherit as-is or choose to override — abstract classes can mix both ' +
    'abstract and fully-implemented methods.',
    'Abstraction and encapsulation are closely related but distinct: encapsulation hides an object\'s internal ' +
    'data, while abstraction hides implementation complexity behind a simpler contract of what a class or ' +
    'method does.',
    'A useful way to tell them apart: encapsulation is about restricting access (private fields, public ' +
    'methods); abstraction is about reducing complexity (a simple method name like area() standing in for ' +
    'however many lines of math it takes to actually compute it).',
  ],

  analogy:
    'When you use a television remote, you press "Volume Up" without knowing anything about the internal audio ' +
    'circuitry it triggers. The remote exposes exactly the essential controls you need (a simple interface) ' +
    'while hiding the complicated electronics behind the scenes (the implementation). An abstract class works ' +
    'the same way for code: `describe()` in the Shape example below always calls `area()`, without needing to ' +
    'know or care whether that\'s a circle\'s formula or a square\'s.',

  syntax: {
    code: 'abstract class ClassName {\n    abstract void methodName();\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'An Abstract Class',
      code:
        'abstract class Shape {\n' +
        '    abstract double area();\n' +
        '\n' +
        '    void describe() {\n' +
        '        System.out.println("This shape has an area of " + area());\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Circle extends Shape {\n' +
        '    double radius;\n' +
        '\n' +
        '    Circle(double radius) {\n' +
        '        this.radius = radius;\n' +
        '    }\n' +
        '\n' +
        '    @Override\n' +
        '    double area() {\n' +
        '        return Math.PI * radius * radius;\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class AbstractionDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Circle c = new Circle(5);\n' +
        '        c.describe();\n' +
        '    }\n' +
        '}',
      output: 'This shape has an area of 78.53981633974483',
      explanation: 'Shape defines the contract (area() must exist) and shared behavior (describe()); Circle supplies the actual area calculation.',
      lineByLine: [
        '`abstract double area();` — declares that every concrete Shape subclass must provide an area() implementation, without saying how.',
        '`void describe() {` — a fully-implemented method shared by every subclass, calling the not-yet-known area() implementation.',
        '`class Circle extends Shape {` — a concrete subclass that must (and does) implement area().',
        '`c.describe();` — calls the shared describe() method, which internally calls Circle\'s specific area() implementation.',
      ],
    },
  ],

  commonMistakes: [
    'Trying to instantiate an abstract class directly with `new` — it must be extended by a concrete subclass first.',
    'Forgetting to implement every abstract method when extending an abstract class, which is a compile error unless the subclass is also declared abstract.',
    'Making a class abstract just to prevent instantiation, when a `final` class or private constructor better expresses that intent.',
    'Confusing abstraction with encapsulation — they solve related but different problems.',
  ],

  tips: [
    'Use an abstract class when subclasses share some common state or default behavior, in addition to a shared contract.',
    'If there\'s no shared implementation to inherit at all, an interface (covered next) is usually the better fit.',
    'Design the abstract methods around what a shape (or any type) must do, and let each subclass decide how.',
  ],

  bestPractices: [
    'Name abstract methods after what they accomplish, not how (area(), not calculateUsingPiTimesRadiusSquared()) — that\'s the whole point of abstraction.',
    'Keep the number of abstract methods small and focused — a class with too many required abstract methods becomes burdensome for every new subclass to implement.',
  ],

  performanceNotes:
    'Calling a method declared in an abstract class has the same runtime characteristics as any other ' +
    'polymorphic method call (see the Polymorphism lesson) — negligible overhead on modern JVMs. Abstraction is ' +
    'a design-time tool for managing complexity, not something with meaningful runtime cost either way.',

  interviewQuestions: [
    { question: 'Can you create an instance of an abstract class directly?', answer: 'No — an abstract class cannot be instantiated with `new`. It must be extended by a concrete subclass, and an instance of that subclass is created instead.' },
    { question: 'What must a concrete subclass do when extending an abstract class?', answer: 'It must provide an implementation for every abstract method declared in the abstract superclass, or the subclass itself must also be declared abstract.' },
    { question: 'Can an abstract class have a constructor?', answer: 'Yes — even though it can\'t be instantiated directly, an abstract class can have a constructor, which runs when a concrete subclass\'s constructor calls super(...).' },
    { question: 'What is the difference between abstraction and encapsulation?', answer: 'Encapsulation restricts direct access to an object\'s internal data (private fields, controlled access via methods). Abstraction reduces complexity by exposing a simple contract (like area()) while hiding the implementation details behind it.' },
    { question: 'Can an abstract class have non-abstract (fully implemented) methods?', answer: 'Yes — abstract classes can freely mix abstract methods (no body, must be overridden) with regular, fully-implemented methods that subclasses inherit as-is or can choose to override.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create an abstract class Animal with an abstract method makeSound(), and one concrete subclass that implements it.' },
    { difficulty: 'Medium', prompt: 'Add a second abstract method and a shared, fully-implemented method to your Animal class, and create two different concrete subclasses.' },
    { difficulty: 'Hard', prompt: 'Try instantiating your abstract Animal class directly with `new Animal()`, note the exact compiler error, and explain in your own words why Java enforces this restriction.' },
  ],

  summary:
    'Abstraction hides implementation complexity behind a simpler contract. Abstract classes declare methods ' +
    'without implementations, forcing concrete subclasses to provide them, while still allowing shared, fully ' +
    'implemented behavior to live in the abstract class itself.',
};
