import { Lesson } from '../../../../core/models/lesson.model';

export const LOOPS_LESSON: Lesson = {
  slug: 'loops',
  title: 'Java Loops',
  seoDescription: 'Java\'s for, while, and do-while loops explained, including the enhanced for-each loop and break/continue.',

  introduction:
    'Loops let a program repeat a block of code multiple times instead of writing the same statements over and ' +
    'over. Java provides for, while, and do-while loops, each suited to slightly different situations.',

  whyItMatters:
    'Processing a list of items, retrying an operation, or counting through a range of numbers are all things ' +
    'you\'ll do constantly — loops are one of the most-used tools in any Java program.',

  explanation: [
    'A for loop is best when you know how many times you want to repeat, or you\'re counting through a range: ' +
    'it combines initialization, a condition, and an update step into one line.',
    'A while loop repeats as long as a condition stays true, checked before each iteration — useful when you ' +
    'don\'t know in advance how many times you\'ll need to loop.',
    'A do-while loop is like while, but checks the condition after running the loop body, guaranteeing it runs ' +
    'at least once even if the condition is false from the start.',
    'Java also has an enhanced for loop (for-each) for iterating directly over arrays and collections without ' +
    'manually tracking an index. Inside any loop, `break` exits it immediately, and `continue` skips straight ' +
    'to the next iteration.',
    'A standard for loop has three parts separated by semicolons: initialization (runs once, before the loop ' +
    'starts), a condition (checked before every iteration — the loop stops as soon as it\'s false), and an ' +
    'update (runs after every iteration, typically incrementing a counter).',
  ],

  analogy:
    'A for loop is like setting a washing machine for exactly 3 cycles — you know the count up front. A while ' +
    'loop is like microwaving food "until it\'s hot," checking after every interval rather than committing to a ' +
    'fixed number of rounds in advance. A do-while loop is like tasting a dish once before deciding whether it ' +
    'needs more seasoning — you always taste it at least once, then decide whether to repeat.',

  syntax: {
    code: 'for (int i = 0; i < 5; i++) {\n    // runs 5 times\n}',
    language: 'java',
    description: 'initialization; condition; update — each part separated by a semicolon.',
  },

  examples: [
    {
      title: 'for and while',
      code:
        'public class LoopsDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        for (int i = 1; i <= 3; i++) {\n' +
        '            System.out.println("for: " + i);\n' +
        '        }\n' +
        '\n' +
        '        int count = 0;\n' +
        '        while (count < 3) {\n' +
        '            System.out.println("while: " + count);\n' +
        '            count++;\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'for: 1\nfor: 2\nfor: 3\nwhile: 0\nwhile: 1\nwhile: 2',
      lineByLine: [
        '`for (int i = 1; i <= 3; i++)` — i starts at 1, the loop runs while i <= 3, and i increases by 1 after each pass, producing i = 1, 2, 3.',
        '`int count = 0;` — declared once, before the while loop starts.',
        '`while (count < 3)` — checked before each iteration; the loop body runs, then count++ moves it closer to the exit condition.',
      ],
    },
    {
      title: 'Enhanced For-Each Loop',
      code:
        'public class ForEachDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        String[] fruits = {"Apple", "Banana", "Cherry"};\n' +
        '\n' +
        '        for (String fruit : fruits) {\n' +
        '            System.out.println(fruit);\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Apple\nBanana\nCherry',
      explanation: 'The for-each loop reads "for each String fruit in fruits" — no index variable needed.',
    },
  ],

  commonMistakes: [
    'Writing an off-by-one error, like using <= when < was intended (or the reverse), causing one extra or missing iteration.',
    'Forgetting to update the loop variable inside a while loop, causing an infinite loop.',
    'Using a for-each loop when you actually need the index (use a regular for loop instead if you need `i`).',
    'Confusing break (exits the loop entirely) with continue (skips to the next iteration).',
  ],

  tips: [
    'Prefer the for-each loop whenever you don\'t need the index — it\'s shorter and eliminates off-by-one bugs.',
    'Use do-while specifically when the loop body must run at least once regardless of the condition, like a menu prompt.',
    'If a loop condition never seems to become false, check whether the loop variable is actually being updated inside the loop.',
  ],

  bestPractices: [
    'Keep loop bodies short and focused — if a loop\'s body is doing several unrelated things, consider extracting a method called from inside it.',
    'Avoid modifying the loop variable inside the body of a for loop beyond its normal update step — it makes the number of iterations much harder to reason about.',
  ],

  performanceNotes:
    'For arrays and ArrayList, the enhanced for-each loop and an indexed for loop perform essentially the same. ' +
    'For a LinkedList, however, repeatedly accessing by index inside a manual for loop is much slower than ' +
    'using a for-each loop, since each indexed access has to walk the list from the start — a good example of ' +
    'why the right loop style can matter beyond just readability.',

  interviewQuestions: [
    { question: 'What are the three parts of a standard for loop, and when does each run?', answer: 'Initialization (runs once, before the loop starts), the condition (checked before every iteration, and the loop stops once it\'s false), and the update (runs after every iteration, typically incrementing a counter).' },
    { question: 'What is the difference between a while loop and a do-while loop?', answer: 'A while loop checks its condition before running the body, so it might never run. A do-while loop checks its condition after running the body, guaranteeing the body runs at least once.' },
    { question: 'What is the difference between break and continue?', answer: 'break exits the loop entirely, skipping any remaining iterations. continue skips only the rest of the current iteration and moves on to the next one.' },
    { question: 'When would you use a for-each loop instead of a standard for loop?', answer: 'Whenever you need to process every element of an array or collection and don\'t need the index itself — it\'s shorter and avoids off-by-one errors. A standard for loop is still needed when you need the index or want to iterate in a non-standard order.' },
    { question: 'What causes an infinite loop, and how do you fix one?', answer: 'An infinite loop happens when the loop\'s condition never becomes false — commonly because the loop variable is never updated, or the update moves it the wrong direction. Fixing it means ensuring the loop variable reliably progresses toward making the condition false.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a for loop that prints the numbers 1 through 10.' },
    { difficulty: 'Medium', prompt: 'Write a while loop that keeps doubling a starting value of 1 until it exceeds 1000, printing each value along the way.' },
    { difficulty: 'Hard', prompt: 'Write a nested loop that prints a multiplication table from 1x1 to 5x5, using break or continue at least once to skip printing the diagonal (where the two numbers are equal).' },
  ],

  summary:
    'for loops suit counted iteration, while loops suit condition-based repetition, and do-while guarantees at ' +
    'least one run. The enhanced for-each loop is the cleanest way to iterate over arrays and collections when ' +
    'you don\'t need an index.',
};
