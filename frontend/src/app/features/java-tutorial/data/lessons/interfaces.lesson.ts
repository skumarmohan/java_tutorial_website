import { Lesson } from '../../../../core/models/lesson.model';

export const INTERFACES_LESSON: Lesson = {
  slug: 'interfaces',
  title: 'Java Interfaces',
  seoDescription: 'Java interfaces explained: defining contracts that classes implement, including default methods and multiple interface implementation.',

  introduction:
    'An interface defines a contract — a set of methods a class promises to implement — without providing any ' +
    'implementation itself (with a few modern exceptions covered below).',

  whyItMatters:
    'Interfaces let unrelated classes agree to a shared contract without needing a common superclass. Java ' +
    'only allows a class to extend one superclass, but a class can implement as many interfaces as it needs — ' +
    'interfaces are how Java gets flexibility that single inheritance alone can\'t provide.',

  explanation: [
    'You declare an interface with the `interface` keyword instead of `class`. Its methods are implicitly ' +
    'public and abstract (no body) by default — a class that implements the interface must provide an ' +
    'implementation for every one of them.',
    'A class implements an interface with the `implements` keyword, and can implement multiple interfaces at ' +
    'once, separated by commas — this is how Java works around the single-inheritance limitation on classes.',
    'Since Java 8, interfaces can also include default methods (with a body, using the `default` keyword) and ' +
    'static methods. Default methods let an interface add new functionality without breaking every class that ' +
    'already implements it.',
    'A common use is defining behavior contracts like Comparable or Runnable from the standard library — any ' +
    'class that implements Comparable promises to provide a compareTo() method, so it can be sorted.',
    'A good way to decide between an abstract class and an interface: use an abstract class when subclasses ' +
    'share real implementation and state; use an interface when you just need to guarantee unrelated classes ' +
    'all expose the same capability, regardless of how differently they\'re otherwise built.',
  ],

  analogy:
    'An interface is like an electrical outlet standard. Any appliance manufacturer can build a device that ' +
    'plugs into a standard outlet — a lamp, a toaster, a phone charger — as long as it has the right shape of ' +
    'plug (implements the contract). The outlet doesn\'t care what\'s inside the appliance or how it works ' +
    'internally; it only cares that the plug fits and delivers power the expected way.',

  syntax: {
    code: 'interface InterfaceName {\n    void methodName();\n}\n\nclass ClassName implements InterfaceName {\n    public void methodName() {\n        // implementation\n    }\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'Defining and Implementing an Interface',
      code:
        'interface Playable {\n' +
        '    void play();\n' +
        '}\n' +
        '\n' +
        'class Song implements Playable {\n' +
        '    @Override\n' +
        '    public void play() {\n' +
        '        System.out.println("Playing song...");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class InterfaceDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Playable p = new Song();\n' +
        '        p.play();\n' +
        '    }\n' +
        '}',
      output: 'Playing song...',
      explanation: 'Song promises to implement play() by implementing Playable, and can be referenced through the Playable type.',
      lineByLine: [
        '`interface Playable {` — declares a contract with one required method, play().',
        '`class Song implements Playable {` — Song promises to fulfill the Playable contract.',
        '`public void play() {` — Song\'s required implementation; must be public since interface methods are implicitly public.',
        '`Playable p = new Song();` — a Song object referenced through its Playable interface type.',
      ],
    },
    {
      title: 'A Default Method',
      code:
        'interface Greetable {\n' +
        '    default void greet() {\n' +
        '        System.out.println("Hello!");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Person implements Greetable {\n' +
        '}\n' +
        '\n' +
        'public class DefaultMethodDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Person p = new Person();\n' +
        '        p.greet();\n' +
        '    }\n' +
        '}',
      output: 'Hello!',
      explanation: 'Person doesn\'t implement greet() itself — it gets the default implementation straight from the interface.',
    },
  ],

  commonMistakes: [
    'Trying to instantiate an interface directly with `new` — like abstract classes, interfaces can\'t be instantiated.',
    'Forgetting to implement one of the interface\'s abstract methods in an implementing class, which is a compile error.',
    'Assuming interface fields can hold regular mutable state — fields declared in an interface are implicitly public, static, and final (constants).',
    'Overusing default methods to add unrelated behavior to an interface instead of keeping it focused on one contract.',
  ],

  tips: [
    'Name interfaces after a capability when possible: Playable, Comparable, Runnable — it reads naturally at the call site.',
    'Prefer programming against an interface type (`Playable p = new Song();`) rather than the concrete class, to keep code flexible about which implementation is used.',
    'Use default methods sparingly — mainly for adding new methods to an interface without breaking existing implementers.',
  ],

  bestPractices: [
    'Keep interfaces small and focused on one capability (the "Interface Segregation" principle) rather than bundling many unrelated methods into one large interface.',
    'When a class implements multiple interfaces, make sure it genuinely fulfills each contract meaningfully — don\'t implement an interface just to satisfy a type check.',
  ],

  performanceNotes:
    'Calling a method through an interface reference has a small amount of extra indirection compared to a ' +
    'direct call, similar to any polymorphic call — and just like with class-based polymorphism, the JIT ' +
    'compiler optimizes this heavily in hot code paths, making it a non-issue for the vast majority of ' +
    'applications.',

  interviewQuestions: [
    { question: 'What is an interface, and how does it differ from an abstract class?', answer: 'An interface defines a contract of methods a class must implement, with (traditionally) no implementation of its own. A class can implement many interfaces but extend only one abstract (or regular) class. Abstract classes can hold shared state and implementation; traditional interface methods cannot.' },
    { question: 'Can a class implement multiple interfaces in Java?', answer: 'Yes — unlike class inheritance, which is limited to one superclass, a class can implement any number of interfaces, separated by commas after `implements`.' },
    { question: 'What are default methods, and why were they added in Java 8?', answer: 'Default methods are interface methods with a body, introduced so library authors could add new methods to an existing interface without breaking every class that already implements it — those classes automatically get the default implementation unless they choose to override it.' },
    { question: 'What is the implicit modifier on interface fields?', answer: 'Fields declared in an interface are implicitly public, static, and final — effectively constants — they can\'t hold per-instance mutable state.' },
    { question: 'Give an example of a well-known interface from the Java standard library.', answer: 'Comparable, which requires implementing compareTo() so objects of a class can be sorted; or Runnable, which requires implementing run(), commonly used for defining a task to execute on a thread.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Define an interface Drawable with a method draw(), and implement it in a class Circle.' },
    { difficulty: 'Medium', prompt: 'Create a second class Square that also implements Drawable, then write a method that accepts any Drawable and calls draw() on it, passing in both a Circle and a Square.' },
    { difficulty: 'Hard', prompt: 'Create two interfaces with a default method of the same name and signature, then create a class implementing both, resolving the resulting compile error by providing the class\'s own override — explain why Java forces this resolution.' },
  ],

  summary:
    'An interface defines a contract of methods a class must implement, and a class can implement multiple ' +
    'interfaces even though it can only extend one class. Default and static methods (since Java 8) let ' +
    'interfaces evolve without breaking existing code.',
};
