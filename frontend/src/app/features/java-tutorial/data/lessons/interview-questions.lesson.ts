import { Lesson } from '../../../../core/models/lesson.model';

export const INTERVIEW_QUESTIONS_LESSON: Lesson = {
  slug: 'interview-questions',
  title: 'Java Interview Questions',
  seoDescription: 'Common Java interview questions and concise answers, covering OOP, collections, exceptions, and core language concepts.',

  introduction:
    'This lesson collects Java interview questions that come up repeatedly, with concise answers referencing ' +
    'the lessons that cover each topic in depth.',

  whyItMatters:
    'Technical interviews often test whether you understand not just how to write Java, but why it behaves the ' +
    'way it does — the kind of "why" questions this entire tutorial has been building toward.',

  explanation: [
    'Q: What\'s the difference between JDK, JRE, and JVM? — A: The JVM runs bytecode, the JRE is the JVM plus ' +
    'the standard library needed to run programs, and the JDK is the JRE plus the compiler and development ' +
    'tools. See the JDK vs JRE vs JVM lesson.',
    'Q: What\'s the difference between == and .equals()? — A: == compares primitive values directly, or object ' +
    'references for reference types (are they the same object in memory?). .equals() compares the actual ' +
    'content of two objects, and is what String and most classes override for meaningful comparison. See the ' +
    'Data Types lesson.',
    'Q: What\'s the difference between an abstract class and an interface? — A: An abstract class can hold ' +
    'state and a mix of abstract and fully-implemented methods, but a class can only extend one. An interface ' +
    'defines a contract with (by default) no state, and a class can implement many of them. See the ' +
    'Abstraction and Interfaces lessons.',
    'Q: What is method overloading versus overriding? — A: Overloading is multiple methods with the same name ' +
    'but different parameters in the same class, resolved at compile time. Overriding is a subclass providing ' +
    'its own implementation of an inherited method with the same signature, resolved at runtime. See the ' +
    'Polymorphism lesson.',
    'Q: What\'s the difference between checked and unchecked exceptions? — A: Checked exceptions (like ' +
    'IOException) must be caught or declared with throws, enforced by the compiler. Unchecked exceptions ' +
    '(extending RuntimeException) aren\'t enforced at compile time. See the Exception Handling lesson.',
    'Q: Why is String immutable in Java? — A: Immutability makes Strings safe to share across threads without ' +
    'synchronization, safe to use as HashMap keys (their hash code never changes), and enables the JVM to ' +
    'safely reuse identical String literals in a shared pool.',
    'Q: What happens if you don\'t override hashCode() when you override equals()? — A: You break the contract ' +
    'that equal objects must have equal hash codes, which causes objects to behave incorrectly in hash-based ' +
    'collections like HashMap and HashSet — two "equal" objects could end up treated as different keys.',
    'Q: What is the difference between ArrayList and LinkedList? — A: ArrayList is backed by a resizable array ' +
    '— fast for indexed access, slower for inserting/removing in the middle. LinkedList is backed by a doubly ' +
    'linked list — fast for inserting/removing at the ends, slower for indexed access. See the Collections ' +
    'lesson.',
    'Q: What is the difference between the stack and the heap in Java memory? — A: The stack holds method call ' +
    'frames, local variables, and primitive values, and is automatically reclaimed as methods return. The heap ' +
    'holds every object created with `new`, and is reclaimed by the garbage collector once nothing references ' +
    'the object anymore. A reference variable itself typically lives on the stack, pointing to the object it ' +
    'refers to on the heap.',
    'Q: What is the difference between a Comparable and a Comparator? — A: Comparable is implemented by the ' +
    'class itself (compareTo()), defining its single "natural" ordering. Comparator is a separate object ' +
    '(compare()) that can define any number of alternate orderings without modifying the original class.',
  ],

  analogy:
    'Think of interview prep like training for a driving test: memorizing the rulebook (definitions) gets you ' +
    'partway, but the examiner is really checking whether you can actually apply the rules smoothly in an ' +
    'unfamiliar situation — a follow-up question, a tricky scenario, a "why" instead of a "what." The strongest ' +
    'candidates are the ones who\'ve driven enough (written enough real code) that the reasoning feels natural, ' +
    'not memorized.',

  examples: [
    {
      title: 'Classic Exercise: Reverse a String',
      code:
        'public class ReverseStringDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        String input = "hello";\n' +
        '        String reversed = new StringBuilder(input).reverse().toString();\n' +
        '        System.out.println(reversed);\n' +
        '    }\n' +
        '}',
      output: 'olleh',
      explanation: 'StringBuilder\'s reverse() method is the idiomatic way to reverse a String in Java — interviewers may also ask you to do it manually with a loop.',
    },
    {
      title: 'Classic Exercise: Check for a Palindrome',
      code:
        'public class PalindromeDemo {\n' +
        '    static boolean isPalindrome(String s) {\n' +
        '        String reversed = new StringBuilder(s).reverse().toString();\n' +
        '        return s.equals(reversed);\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println(isPalindrome("level"));\n' +
        '        System.out.println(isPalindrome("hello"));\n' +
        '    }\n' +
        '}',
      output: 'true\nfalse',
      explanation: 'A string is a palindrome if it reads the same forwards and backwards — comparing it to its own reverse is the simplest check.',
    },
  ],

  commonMistakes: [
    'Memorizing answers without understanding the underlying "why" — interviewers often ask a follow-up that memorization alone won\'t survive.',
    'Not being able to explain trade-offs (like ArrayList vs LinkedList) with a concrete example of when you\'d choose one over the other.',
    'Overlooking the basics (like == vs .equals()) while focusing only on advanced topics — fundamentals are asked just as often as advanced ones.',
  ],

  tips: [
    'Be ready to explain concepts with a small code example, not just a definition — it demonstrates you\'ve actually used the concept.',
    'Revisit the OOP section (Inheritance, Polymorphism, Abstraction, Encapsulation) — it\'s the most consistently asked-about area in Java interviews.',
    'Practice writing small, common exercises (reverse a string, check a palindrome, find duplicates in an array) without an IDE\'s autocomplete.',
  ],

  bestPractices: [
    'Think out loud during coding interviews — interviewers usually care as much about your reasoning process as the final working code.',
    'When you don\'t know an answer, say what you do know and reason toward it, rather than guessing silently or freezing — most interviewers value visible problem-solving over a perfect memorized answer.',
    'Prepare a few real examples from your own projects that demonstrate OOP principles in practice — concrete stories are more convincing than textbook definitions.',
  ],

  performanceNotes:
    'Interviewers frequently ask about the time complexity (Big-O) of common operations — for example, ArrayList ' +
    'get(index) is O(1), but contains() is O(n); HashMap get()/put() are average O(1) but worst-case O(n) under ' +
    'heavy hash collisions. Being able to state and briefly justify these complexities for the data structures ' +
    'covered in the Collections lesson is one of the most commonly tested areas in technical interviews.',

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Without looking anything up, explain out loud (or in writing) the difference between == and .equals() in Java, with an example.' },
    { difficulty: 'Medium', prompt: 'Write a method that finds the first non-repeated character in a String, then explain its time complexity.' },
    { difficulty: 'Hard', prompt: 'Simulate a mock interview: pick three questions from this lesson at random, set a 2-minute timer for each, and answer them out loud with a supporting code example, without notes.' },
  ],

  summary:
    'Java interviews consistently test the same core areas: OOP principles, collections trade-offs, exception ' +
    'handling, and String/equality semantics. Understanding why each answer is true — not just memorizing it — ' +
    'is what carries you through follow-up questions.',
};
