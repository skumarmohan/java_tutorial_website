import { Lesson } from '../../../../core/models/lesson.model';

export const EXCEPTION_HANDLING_LESSON: Lesson = {
  slug: 'exception-handling',
  title: 'Java Exception Handling',
  seoDescription: 'How to handle runtime errors in Java using try, catch, finally, checked vs unchecked exceptions, and custom exceptions.',

  introduction:
    'An exception is an event that disrupts a program\'s normal flow — dividing by zero, accessing an invalid ' +
    'array index, or reading a file that doesn\'t exist. Java gives you try/catch to handle these gracefully ' +
    'instead of letting the program crash.',

  whyItMatters:
    'Real programs deal with things outside their control: missing files, bad user input, network failures. ' +
    'Exception handling is how you respond to those situations deliberately instead of the program terminating ' +
    'unexpectedly.',

  explanation: [
    'Code that might throw an exception goes inside a try block. If an exception occurs, execution jumps ' +
    'immediately to a matching catch block, which receives the exception object and can respond to it — log ' +
    'it, show a message, or retry.',
    'An optional finally block always runs after the try/catch, whether an exception occurred or not — commonly ' +
    'used to close resources like files or network connections that must be cleaned up either way.',
    'Java distinguishes checked exceptions (like IOException) that the compiler forces you to either catch or ' +
    'declare with `throws`, from unchecked exceptions (like NullPointerException or ArithmeticException), which ' +
    'extend RuntimeException and aren\'t enforced at compile time.',
    'You can define your own exception types by extending Exception (checked) or RuntimeException (unchecked), ' +
    'which is useful for representing errors specific to your application\'s domain.',
    'All exceptions in Java form a class hierarchy rooted at Throwable, which splits into Error (serious ' +
    'problems like running out of memory, which programs generally shouldn\'t try to catch) and Exception ' +
    '(problems a program can reasonably respond to). RuntimeException is a subclass of Exception representing ' +
    'the unchecked branch.',
  ],

  analogy:
    'Exception handling is like a fire alarm system in a building. Normal operation continues (the try block) ' +
    'until something goes wrong (a fire — the exception is thrown). The alarm immediately interrupts everything ' +
    'and routes people to the nearest exit matching the emergency type (the catch block matching the exception ' +
    'type). Regardless of whether there was a fire or not, the building\'s scheduled maintenance still happens ' +
    'at closing time (the finally block) — it runs either way.',

  syntax: {
    code: 'try {\n    // risky code\n} catch (ExceptionType e) {\n    // handle it\n} finally {\n    // always runs\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'Catching an Exception',
      code:
        'public class ExceptionDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        try {\n' +
        '            int result = 10 / 0;\n' +
        '            System.out.println(result);\n' +
        '        } catch (ArithmeticException e) {\n' +
        '            System.out.println("Cannot divide by zero: " + e.getMessage());\n' +
        '        } finally {\n' +
        '            System.out.println("Done.");\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Cannot divide by zero: / by zero\nDone.',
      explanation: 'The catch block prevents the program from crashing, and finally runs regardless of whether an exception happened.',
      lineByLine: [
        '`int result = 10 / 0;` — throws an ArithmeticException immediately; the println() right after it never runs.',
        '`catch (ArithmeticException e) {` — catches the specific exception type, giving access to its message via e.getMessage().',
        '`finally { System.out.println("Done."); }` — runs no matter what, whether the try succeeded or the catch handled an exception.',
      ],
    },
    {
      title: 'A Custom Exception',
      code:
        'class InsufficientFundsException extends Exception {\n' +
        '    InsufficientFundsException(String message) {\n' +
        '        super(message);\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'public class CustomExceptionDemo {\n' +
        '    static void withdraw(double balance, double amount) throws InsufficientFundsException {\n' +
        '        if (amount > balance) {\n' +
        '            throw new InsufficientFundsException("Not enough funds.");\n' +
        '        }\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        try {\n' +
        '            withdraw(100, 150);\n' +
        '        } catch (InsufficientFundsException e) {\n' +
        '            System.out.println("Error: " + e.getMessage());\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Error: Not enough funds.',
      explanation: 'InsufficientFundsException extends Exception, making it a checked exception that callers must handle or declare.',
    },
  ],

  commonMistakes: [
    'Catching Exception (or worse, Throwable) generically instead of the specific exception type, hiding bugs you didn\'t intend to catch.',
    'Leaving a catch block empty, silently swallowing an error instead of handling or at least logging it.',
    'Using exceptions for routine control flow instead of genuinely exceptional situations — exceptions are relatively expensive and meant for the unusual case.',
    'Forgetting to close resources (files, connections) when not using try-with-resources, leaking them if an exception occurs.',
  ],

  tips: [
    'Catch the most specific exception type that applies — it documents exactly what you\'re handling and avoids hiding unrelated bugs.',
    'Prefer try-with-resources for anything that implements AutoCloseable (like file streams) — it closes the resource automatically, even on exception.',
    'Only create a custom exception type when it genuinely represents a distinct error case your callers need to handle differently.',
  ],

  bestPractices: [
    'Include enough context in an exception\'s message to actually debug the problem later (what value, what operation) rather than a generic "Error occurred."',
    'Prefer unchecked exceptions (extending RuntimeException) for programming errors the caller can\'t reasonably recover from, and checked exceptions for expected, recoverable conditions the caller should explicitly handle.',
    'Never use an empty catch block silently — at minimum, log the exception so failures are visible.',
  ],

  performanceNotes:
    'Throwing and catching exceptions is noticeably more expensive than a normal method return or conditional ' +
    'check, largely because constructing an exception captures a full stack trace. This is exactly why ' +
    'exceptions should be reserved for genuinely exceptional situations rather than routine control flow — for ' +
    'example, checking a condition with an if statement is far cheaper than relying on catching an exception it ' +
    'would otherwise throw.',

  interviewQuestions: [
    { question: 'What is the difference between checked and unchecked exceptions?', answer: 'Checked exceptions (subclasses of Exception, excluding RuntimeException) must be caught or declared with throws, enforced by the compiler. Unchecked exceptions (subclasses of RuntimeException) are not enforced at compile time.' },
    { question: 'What is the purpose of the finally block?', answer: 'Code in finally always runs after the try/catch, whether an exception occurred or not, making it the standard place for cleanup logic like closing resources.' },
    { question: 'What is the root of Java\'s exception class hierarchy?', answer: 'Throwable, which splits into Error (serious problems like OutOfMemoryError, generally not meant to be caught) and Exception (problems a program can reasonably handle, including RuntimeException for unchecked exceptions).' },
    { question: 'Why is catching Exception broadly considered bad practice?', answer: 'It catches every kind of exception indiscriminately, including ones you didn\'t anticipate or intend to handle, which can hide real bugs and make debugging much harder.' },
    { question: 'How do you create a custom exception type?', answer: 'By extending Exception (for a checked exception) or RuntimeException (for an unchecked one), typically providing a constructor that passes a message to the superclass via super(message).' },
    { question: 'Why are exceptions considered relatively expensive compared to normal control flow?', answer: 'Constructing an exception object captures a full stack trace, which has real performance cost — this is why exceptions should represent genuinely exceptional situations, not routine, expected branching.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a try/catch block that safely divides two numbers input by the user, catching ArithmeticException if the divisor is zero.' },
    { difficulty: 'Medium', prompt: 'Write a method that throws a checked custom exception (e.g., InvalidAgeException) when given a negative number, and a caller that catches and handles it.' },
    { difficulty: 'Hard', prompt: 'Write a try/catch/finally block where the try block itself throws an exception and the finally block also throws a different exception. Run it, observe which exception is ultimately reported, and explain why.' },
  ],

  summary:
    'try/catch/finally lets a program respond to runtime errors instead of crashing. Checked exceptions must ' +
    'be caught or declared; unchecked exceptions aren\'t enforced by the compiler. Custom exception classes let ' +
    'you represent domain-specific error conditions clearly.',
};
