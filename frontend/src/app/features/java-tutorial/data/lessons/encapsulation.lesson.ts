import { Lesson } from '../../../../core/models/lesson.model';

export const ENCAPSULATION_LESSON: Lesson = {
  slug: 'encapsulation',
  title: 'Java Encapsulation',
  seoDescription: 'Encapsulation in Java: keeping fields private and exposing controlled access through getters and setters.',

  introduction:
    'Encapsulation means keeping an object\'s internal data private, and only allowing it to be read or changed ' +
    'through controlled methods — rather than letting any other code reach in and modify it directly.',

  whyItMatters:
    'Without encapsulation, any code anywhere in a large program could set a field to an invalid value — a ' +
    'negative age, an empty required name — with no way to prevent or even notice it. Encapsulation lets a ' +
    'class enforce its own rules.',

  explanation: [
    'The standard pattern is to declare fields `private`, so they\'re only accessible from inside the class ' +
    'itself, then provide public "getter" and "setter" methods for any field that needs to be read or changed ' +
    'from outside.',
    'A setter method can validate a value before accepting it — for example, rejecting a negative age instead ' +
    'of silently storing it. Direct field access can\'t do that; a method can.',
    'Not every field needs both a getter and a setter. A field that should never change after construction ' +
    'might only get a getter, making it effectively read-only from outside the class.',
    'Encapsulation is closely tied to Java\'s access modifiers: private (visible only in the same class), ' +
    'package-private / default (visible in the same package), protected (visible in the same package plus ' +
    'subclasses), and public (visible everywhere).',
    'Encapsulation also makes it safe to change how a class works internally without breaking the code that ' +
    'uses it. If balance were a public field, every piece of code touching it directly would need to change if ' +
    'you later decided balance should be calculated instead of stored. Because it\'s private and only exposed ' +
    'through getBalance(), the internal representation can change freely as long as the method\'s contract ' +
    'stays the same.',
  ],

  analogy:
    'Encapsulation is like a bank vault with a teller window. You can\'t walk behind the counter and grab cash ' +
    'directly out of the vault (the private field) — you have to go through the teller (the public method), who ' +
    'checks your ID and verifies the withdrawal is valid before handing anything over. The vault\'s internal ' +
    'organization can be completely rearranged without you ever noticing, as long as the teller window still ' +
    'works the same way from the outside.',

  examples: [
    {
      title: 'Getters, Setters, and Validation',
      code:
        'public class BankAccount {\n' +
        '    private double balance;\n' +
        '\n' +
        '    public double getBalance() {\n' +
        '        return balance;\n' +
        '    }\n' +
        '\n' +
        '    public void deposit(double amount) {\n' +
        '        if (amount > 0) {\n' +
        '            balance += amount;\n' +
        '        }\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        BankAccount account = new BankAccount();\n' +
        '        account.deposit(100);\n' +
        '        account.deposit(-50);\n' +
        '        System.out.println(account.getBalance());\n' +
        '    }\n' +
        '}',
      output: '100.0',
      explanation: 'balance is private, so it can only change through deposit(), which rejects the invalid negative amount.',
      lineByLine: [
        '`private double balance;` — the field is inaccessible from outside the class entirely.',
        '`public double getBalance() {` — a getter, providing controlled read access.',
        '`public void deposit(double amount) {` — a setter-like method that validates amount > 0 before changing balance.',
        '`account.deposit(-50);` — rejected silently by the validation check, so balance stays at 100.0.',
      ],
    },
  ],

  commonMistakes: [
    'Making every field public "to keep things simple," which removes any ability to validate or control how the object\'s state changes.',
    'Writing a getter and setter for every single field automatically, even ones that should never be changed once constructed.',
    'Returning a mutable object (like an array or List) directly from a getter, which lets outside code modify it without going through any controlling method.',
    'Putting validation logic in the constructor but not in the corresponding setter, leaving a way to bypass the same rule later.',
  ],

  tips: [
    'Default to private fields and only expose what actually needs to be accessible from outside the class.',
    'Put validation in setters (and constructors) so an object can never be put into an invalid state.',
    'For getters that return a mutable object, consider returning a copy or an unmodifiable view to preserve encapsulation.',
  ],

  bestPractices: [
    'Ask "does this field genuinely need a setter?" before adding one — many fields should only ever be set once, in the constructor.',
    'Keep validation logic in one place (ideally the setter, called by the constructor too) rather than duplicating the same check in multiple spots.',
    'Favor immutable objects (no setters at all, only a constructor) wherever an object\'s state doesn\'t need to change after creation.',
  ],

  performanceNotes:
    'Getter and setter method calls are so simple that the JIT compiler routinely inlines them entirely, making ' +
    'them effectively free at runtime compared to direct field access — there\'s no meaningful performance ' +
    'reason to prefer public fields over encapsulated ones.',

  interviewQuestions: [
    { question: 'What is encapsulation, and why is it useful?', answer: 'Encapsulation means keeping an object\'s fields private and exposing controlled access through methods. It lets a class validate and control how its state changes, and allows the internal implementation to change without breaking code that uses the class.' },
    { question: 'What are Java\'s four access modifiers, from most to least restrictive?', answer: 'private (same class only), package-private / default (same package), protected (same package plus subclasses), and public (accessible everywhere).' },
    { question: 'Why might a class provide only a getter and no setter for a field?', answer: 'Because that field should be read-only from outside the class after construction — a common pattern for creating effectively immutable objects.' },
    { question: 'What is a common encapsulation mistake involving getters that return collections or arrays?', answer: 'Returning the actual internal array or List directly lets outside code modify it without going through any validating method, silently breaking encapsulation — returning a copy or an unmodifiable view avoids this.' },
    { question: 'How does encapsulation support the idea of "information hiding"?', answer: 'By exposing only a class\'s public methods as its contract, callers never need to know (or depend on) how the class stores or computes its data internally — that implementation detail is hidden and free to change.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a class Person with a private name field, a getter, and a setter that rejects an empty String.' },
    { difficulty: 'Medium', prompt: 'Write a class Temperature that stores degrees privately in Celsius, but provides both getCelsius() and getFahrenheit() methods, demonstrating how one internal representation can support multiple public views.' },
    { difficulty: 'Hard', prompt: 'Write a class with a private List<String> field and a getter. First return the list directly and show how a caller can corrupt it. Then fix the getter to return a defensive copy and show the caller can no longer do so.' },
  ],

  summary:
    'Encapsulation keeps fields private and exposes controlled access through methods, letting a class enforce ' +
    'its own rules about what values are valid. It\'s implemented in Java through access modifiers and the ' +
    'getter/setter pattern.',
};
