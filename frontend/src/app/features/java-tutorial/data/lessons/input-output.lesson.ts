import { Lesson } from '../../../../core/models/lesson.model';

export const INPUT_OUTPUT_LESSON: Lesson = {
  slug: 'input-output',
  title: 'Java Input and Output',
  seoDescription: 'How to read user input from the console with Scanner and print formatted output in Java.',

  introduction:
    'So far every example has printed fixed output. Real programs usually need to read input too — from the ' +
    'console, a file, or a network connection. This lesson covers basic console input and output.',

  whyItMatters:
    'Reading input is what turns a static program into an interactive one — anything from a command-line tool ' +
    'to a simple calculator needs to read what the user typed.',

  explanation: [
    'For output, you\'ve already used System.out.println(). Java also offers System.out.print() (no trailing ' +
    'newline) and System.out.printf() for formatted output using placeholders like %d for integers, %s for ' +
    'strings, and %.2f for a decimal rounded to two places.',
    'For input, the standard tool is the Scanner class from java.util. You create one wrapping System.in (the ' +
    'standard input stream), then call methods like nextInt(), nextDouble(), or nextLine() depending on what ' +
    'type of value you\'re expecting.',
    'Scanner has one well-known gotcha: nextInt() (and similar) reads the number but leaves the trailing ' +
    'newline character in the input buffer. If you call nextLine() right after, it immediately returns that ' +
    'leftover empty line instead of waiting for new input.',
    'Scanner can also read input from sources other than the console, such as a String or a file, by ' +
    'constructing it with a different argument. This tutorial focuses on `new Scanner(System.in)`, the ' +
    'console-reading form, since that\'s what you\'ll use for interactive command-line programs.',
  ],

  analogy:
    'System.out is like a one-way megaphone — your program shouts information out to whoever is listening. ' +
    'Scanner wrapping System.in is like a microphone facing the other direction, waiting to pick up whatever ' +
    'the user types before your program can respond to it. A program that only prints is a monologue; a ' +
    'program that also reads input becomes a conversation.',

  syntax: {
    code: 'Scanner scanner = new Scanner(System.in);\nint value = scanner.nextInt();',
    language: 'java',
    description: 'Create one Scanner wrapping System.in, then call the method matching the type of input you expect.',
  },

  examples: [
    {
      title: 'Reading a Name and Age',
      code:
        'import java.util.Scanner;\n' +
        '\n' +
        'public class InputDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Scanner scanner = new Scanner(System.in);\n' +
        '\n' +
        '        System.out.print("Enter your name: ");\n' +
        '        String name = scanner.nextLine();\n' +
        '\n' +
        '        System.out.print("Enter your age: ");\n' +
        '        int age = scanner.nextInt();\n' +
        '\n' +
        '        System.out.println(name + " is " + age + " years old.");\n' +
        '    }\n' +
        '}',
      output: 'Enter your name: Alex\nEnter your age: 25\nAlex is 25 years old.',
      explanation: 'scanner.nextLine() reads a full line of text; scanner.nextInt() reads just the next number.',
      lineByLine: [
        '`Scanner scanner = new Scanner(System.in);` — creates one Scanner that reads from the console for the rest of the program.',
        '`System.out.print("Enter your name: ");` — prompts the user without a trailing newline, so their typed response appears on the same line.',
        '`String name = scanner.nextLine();` — blocks until the user types a line of text and presses Enter, then stores it in name.',
        '`int age = scanner.nextInt();` — blocks until the user types a number, parsing it directly as an int.',
        'The final println() concatenates and prints both captured values.',
      ],
    },
    {
      title: 'Formatted Output with printf',
      code:
        'public class PrintfDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        String item = "Coffee";\n' +
        '        double price = 4.5;\n' +
        '        System.out.printf("%s costs $%.2f%n", item, price);\n' +
        '    }\n' +
        '}',
      output: 'Coffee costs $4.50',
      explanation: '%s substitutes a String, %.2f formats a decimal to two places, and %n inserts a platform-correct newline.',
    },
  ],

  commonMistakes: [
    'Forgetting `import java.util.Scanner;` at the top of the file.',
    'Calling nextInt() followed immediately by nextLine() and getting an empty string, because nextLine() picks up the leftover newline from nextInt().',
    'Creating a new Scanner every time you need input instead of reusing one instance for the program\'s lifetime.',
    'Mixing up %d (integer) and %f (decimal) placeholders in printf, which throws a runtime exception.',
  ],

  tips: [
    'If you must call nextInt() and then nextLine(), add an extra scanner.nextLine() call in between to consume the leftover newline.',
    'Prefer nextLine() plus manual parsing (like Integer.parseInt()) over mixing nextInt()/nextDouble()/nextLine() calls, to sidestep the leftover-newline issue entirely.',
    'Use printf or String.format when output needs consistent decimal places or column alignment.',
  ],

  bestPractices: [
    'Create exactly one Scanner for System.in per program and pass it around (or keep it in a field) rather than creating multiple instances — multiple Scanners on the same input stream can cause unpredictable behavior.',
    'Validate input before parsing it (e.g., check hasNextInt() before calling nextInt()) in any program that should handle unexpected input gracefully rather than crashing.',
  ],

  performanceNotes:
    'Console I/O is inherently slow relative to in-memory computation, since it waits on a human or an external ' +
    'process. This is rarely a bottleneck for interactive programs, but for programs that read large amounts of ' +
    'data from standard input, a BufferedReader is noticeably faster than Scanner, since Scanner does extra ' +
    'work parsing and tokenizing each read.',

  interviewQuestions: [
    { question: 'What package is the Scanner class in, and what do you need to import?', answer: 'Scanner is in java.util, so you need `import java.util.Scanner;` at the top of the file before using it.' },
    { question: 'What is the classic Scanner "leftover newline" bug, and how do you avoid it?', answer: 'Calling nextInt() (or similar) reads the number but leaves the trailing newline character in the buffer. If nextLine() is called immediately after, it returns that leftover empty line instead of waiting for new input. Adding an extra scanner.nextLine() call after nextInt() consumes the leftover newline.' },
    { question: 'What is the difference between System.out.print() and System.out.println()?', answer: 'print() outputs text with no trailing newline, so subsequent output continues on the same line. println() outputs the text followed by a newline, moving subsequent output to a new line.' },
    { question: 'What does %.2f mean in a printf format string?', answer: 'It formats a floating-point value rounded to exactly two decimal places.' },
    { question: 'When would you choose BufferedReader over Scanner?', answer: 'BufferedReader is faster for reading large volumes of input since it does less parsing overhead per read, but requires manual parsing (e.g. Integer.parseInt()) of the text it returns, unlike Scanner\'s typed methods like nextInt().' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a program that asks the user for their favorite color and prints it back in a sentence.' },
    { difficulty: 'Medium', prompt: 'Write a simple calculator that reads two numbers and an operator symbol (+, -, *, /) from the user and prints the result.' },
    { difficulty: 'Hard', prompt: 'Write a program that reads an int with nextInt() and then a line of text with nextLine(), deliberately trigger the leftover-newline bug, observe the incorrect output, then fix it.' },
  ],

  summary:
    'System.out.print/println/printf cover output, including formatted output with placeholders. Scanner ' +
    'wrapping System.in is the standard way to read console input — just watch for the classic nextInt() / ' +
    'nextLine() leftover-newline trap.',
};
