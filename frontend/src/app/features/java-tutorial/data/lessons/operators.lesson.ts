import { Lesson } from '../../../../core/models/lesson.model';

export const OPERATORS_LESSON: Lesson = {
  slug: 'operators',
  title: 'Java Operators',
  seoDescription: 'Java\'s arithmetic, relational, logical, and assignment operators, with examples of common pitfalls like short-circuit evaluation.',

  introduction:
    'Operators are symbols that perform an operation on one or more values — adding two numbers, comparing ' +
    'them, or combining true/false conditions.',

  whyItMatters:
    'Operators are how a program actually does anything: calculations, decisions, and comparisons all boil ' +
    'down to operators applied to variables and values.',

  explanation: [
    'Arithmetic operators (+, -, *, /, %) work the way you\'d expect for numbers, with one catch: dividing two ' +
    'integers performs integer division, truncating any remainder rather than rounding. The % (modulo) ' +
    'operator returns the remainder of a division.',
    'Relational operators (==, !=, >, <, >=, <=) compare two values and produce a boolean result. Logical ' +
    'operators (&&, ||, !) combine or invert boolean values — && is true only if both sides are true, || is ' +
    'true if either side is true, and ! flips a boolean.',
    'Java\'s && and || are "short-circuit" operators: if the left side of && is false, or the left side of || ' +
    'is true, Java doesn\'t bother evaluating the right side at all, since the result is already determined.',
    'Assignment operators go beyond plain =: += , -=, *=, /=, and %= combine an operation with assignment ' +
    '(x += 5 is shorthand for x = x + 5). The increment and decrement operators (++, --) add or subtract 1.',
    'Operators also have precedence (which runs first) and associativity (which direction ties are broken), ' +
    'exactly like the order of operations in math class: * and / run before + and -, and comparisons run ' +
    'before && and ||. When precedence isn\'t immediately obvious to a reader, parentheses make the intended ' +
    'order explicit regardless of the underlying rules.',
  ],

  analogy:
    'Operators are like the buttons on a calculator. Arithmetic operators (+, -, *, /) are the number-crunching ' +
    'buttons. Relational operators (>, <, ==) are like a "compare" button that answers yes-or-no questions ' +
    'instead of producing a number. Logical operators (&&, ||) are like combining two yes/no answers with ' +
    '"and"/"or" to get one final yes/no answer — exactly how you\'d reason about two conditions in everyday ' +
    'conversation.',

  examples: [
    {
      title: 'Arithmetic and Integer Division',
      code:
        'public class ArithmeticDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println(7 / 2);\n' +
        '        System.out.println(7 % 2);\n' +
        '        System.out.println(7.0 / 2);\n' +
        '    }\n' +
        '}',
      output: '3\n1\n3.5',
      explanation: 'Integer division (7 / 2) truncates to 3. Making either operand a double (7.0 / 2) produces the precise decimal result.',
      lineByLine: [
        '`7 / 2` — both operands are int, so Java performs integer division and truncates the result to 3.',
        '`7 % 2` — the modulo operator returns the remainder of 7 divided by 2, which is 1.',
        '`7.0 / 2` — because 7.0 is a double, Java promotes the whole expression to decimal division, giving the precise result 3.5.',
      ],
    },
    {
      title: 'Short-Circuit Evaluation',
      code:
        'public class ShortCircuitDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int[] numbers = {};\n' +
        '        if (numbers.length > 0 && numbers[0] == 1) {\n' +
        '            System.out.println("First element is 1");\n' +
        '        } else {\n' +
        '            System.out.println("Skipped safely");\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Skipped safely',
      explanation: 'Because numbers.length > 0 is false, && short-circuits and never evaluates numbers[0] — which would otherwise throw an out-of-bounds error on an empty array.',
    },
  ],

  commonMistakes: [
    'Writing = (assignment) when == (comparison) was intended inside a condition.',
    'Expecting integer division to produce a decimal result — 7 / 2 is 3, not 3.5, unless one operand is a double.',
    'Not realizing && and || short-circuit, then relying on the right-hand side always being evaluated.',
    'Misjudging operator precedence, like assuming + happens before * — use parentheses whenever it\'s not obvious.',
  ],

  tips: [
    'When precedence isn\'t immediately obvious, add parentheses — it costs nothing and removes any ambiguity for future readers.',
    'Use short-circuit evaluation intentionally, like guarding an array access with a length check in the same condition.',
    'Prefer compound assignment operators (+=, -=) for small updates — they\'re shorter and just as clear.',
  ],

  bestPractices: [
    'Order && conditions so the cheapest or most likely-to-fail check comes first — it maximizes how often short-circuiting saves you unnecessary work.',
    'Avoid combining too many operators in a single dense expression — splitting a complex condition into a few named boolean variables often reads far more clearly.',
  ],

  performanceNotes:
    'Short-circuit evaluation isn\'t just a convenience — it can meaningfully improve performance when the ' +
    'right-hand side of a condition is expensive (like a database call or a large computation), since that ' +
    'side is skipped entirely whenever the left side already determines the result.',

  interviewQuestions: [
    { question: 'What is the result of integer division in Java, and how do you get a decimal result instead?', answer: 'Dividing two int values truncates any remainder — 7 / 2 is 3, not 3.5. To get a decimal result, at least one operand must be a floating-point type, e.g. 7.0 / 2 or (double) 7 / 2.' },
    { question: 'What does the % operator do?', answer: 'It\'s the modulo operator, returning the remainder of a division. 7 % 2 is 1, since 7 divided by 2 leaves a remainder of 1.' },
    { question: 'What is short-circuit evaluation?', answer: '&& and || stop evaluating as soon as the result is already determined — && skips the right side if the left is false, and || skips the right side if the left is true.' },
    { question: 'What is the difference between = and ==?', answer: '= is the assignment operator, storing a value into a variable. == is the equality comparison operator, checking whether two values (or references) are equal, and returns a boolean.' },
    { question: 'What is the difference between prefix (++x) and postfix (x++) increment?', answer: 'Both increase x by 1, but prefix (++x) evaluates to the new value immediately, while postfix (x++) evaluates to the original value before incrementing — this matters when the increment is used inline within a larger expression.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write expressions that demonstrate each arithmetic operator (+, -, *, /, %) with sample values, and print the results.' },
    { difficulty: 'Medium', prompt: 'Write a condition using && that safely checks whether a String variable is non-null before calling a method on it, relying on short-circuit evaluation.' },
    { difficulty: 'Hard', prompt: 'Predict the output of `int x = 5; System.out.println(x++ + ++x);` before running it, then run it and explain why the result is what it is.' },
  ],

  summary:
    'Java\'s operators cover arithmetic, comparison, logical combination, and assignment. Watch for integer ' +
    'division truncation and short-circuit evaluation — both behave correctly once you know the rule, but ' +
    'surprise beginners who don\'t.',
};
