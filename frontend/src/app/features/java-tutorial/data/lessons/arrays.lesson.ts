import { Lesson } from '../../../../core/models/lesson.model';

export const ARRAYS_LESSON: Lesson = {
  slug: 'arrays',
  title: 'Java Arrays',
  seoDescription: 'How to declare, initialize, and iterate over arrays in Java, including multi-dimensional arrays.',

  introduction:
    'An array is a fixed-size container that holds multiple values of the same type, accessed by a numeric ' +
    'index starting at 0.',

  whyItMatters:
    'Storing related values individually (score1, score2, score3...) doesn\'t scale. Arrays let you store and ' +
    'process a whole collection of values with a single variable and a loop.',

  explanation: [
    'You declare an array with a type followed by square brackets, then create it with `new` and a size: ' +
    '`int[] scores = new int[5];` creates room for 5 integers, all initialized to 0 by default. You can also ' +
    'declare and fill an array in one step with an array literal: `int[] scores = {90, 85, 77};`.',
    'Arrays are indexed from 0, so an array of length 5 has valid indexes 0 through 4. Accessing an index ' +
    'outside that range throws an ArrayIndexOutOfBoundsException at runtime rather than failing silently.',
    'Once created, an array\'s length is fixed — you can\'t grow or shrink it. If you need a resizable ' +
    'collection, the Collections lesson covers ArrayList and friends, which are built on top of arrays but can ' +
    'grow dynamically.',
    'Java also supports multi-dimensional arrays, most commonly two-dimensional ones for grid-like data: ' +
    '`int[][] grid = new int[3][3];` creates a 3x3 grid, accessed as grid[row][col].',
    'An array itself is a reference type, even when it holds primitives — an int[] variable holds a reference ' +
    'to the array object in memory, not the values directly. This is why passing an array to a method lets ' +
    'that method modify the original array\'s contents, unlike passing a plain int.',
  ],

  analogy:
    'An array is like a row of numbered mailboxes in an apartment building lobby. Every mailbox is the same ' +
    'size (the array\'s type) and there\'s a fixed number of them, set when the building was built (the array\'s ' +
    'length). Mailbox #0 is the first one, not #1 — mail carriers (your code) always address a specific box by ' +
    'its number, and reaching for a box number that doesn\'t exist gets you turned away at the door ' +
    '(ArrayIndexOutOfBoundsException).',

  syntax: {
    code: 'type[] arrayName = new type[size];',
    language: 'java',
    description: 'type[] declares an array of that type; new type[size] allocates space for size elements.',
  },

  examples: [
    {
      title: 'Declaring, Filling, and Reading an Array',
      code:
        'public class ArrayDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int[] scores = {90, 85, 77, 92};\n' +
        '\n' +
        '        System.out.println("First score: " + scores[0]);\n' +
        '        System.out.println("Length: " + scores.length);\n' +
        '\n' +
        '        for (int score : scores) {\n' +
        '            System.out.println(score);\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'First score: 90\nLength: 4\n90\n85\n77\n92',
      explanation: 'scores.length gives the array\'s size — note it\'s a field, not a method, so no parentheses.',
      lineByLine: [
        '`int[] scores = {90, 85, 77, 92};` — declares and fills a 4-element int array in one step using an array literal.',
        '`scores[0]` — accesses the first element (index 0), which is 90.',
        '`scores.length` — reads the array\'s fixed size, 4, as a field (no parentheses).',
        'The for-each loop then visits every element in order without needing a manual index.',
      ],
    },
    {
      title: 'A 2D Array (Grid)',
      code:
        'public class GridDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int[][] grid = {\n' +
        '            {1, 2, 3},\n' +
        '            {4, 5, 6}\n' +
        '        };\n' +
        '\n' +
        '        System.out.println(grid[1][2]);\n' +
        '    }\n' +
        '}',
      output: '6',
      explanation: 'grid[1][2] means row index 1, column index 2 — the value 6.',
    },
  ],

  diagram: {
    caption: 'An array of length 4, indexed from 0.',
    steps: [
      { icon: '0️⃣', label: 'scores[0]', description: '90' },
      { icon: '1️⃣', label: 'scores[1]', description: '85' },
      { icon: '2️⃣', label: 'scores[2]', description: '77' },
      { icon: '3️⃣', label: 'scores[3]', description: '92' },
    ],
  },

  commonMistakes: [
    'Accessing an index equal to the array\'s length (scores[scores.length]), which is one past the end and throws ArrayIndexOutOfBoundsException.',
    'Forgetting that array length is a field (array.length), not a method call like String\'s length() method.',
    'Trying to change an array\'s size after creation — arrays are fixed-size; you need a new array or a collection instead.',
    'Assuming a new array of objects is filled with usable objects — it\'s filled with null until you assign each element.',
  ],

  tips: [
    'Use a for-each loop to read every element unless you specifically need the index.',
    'If the size of your collection needs to change at runtime, use ArrayList instead of a raw array (covered in the Collections lesson).',
    'Use java.util.Arrays.toString(array) to print an array\'s contents readably instead of println(array), which prints an unhelpful memory reference.',
  ],

  bestPractices: [
    'Prefer array literals (`{90, 85, 77}`) over manually assigning each index when the values are known upfront — it\'s shorter and less error-prone.',
    'Validate an index is within bounds (or catch the resulting exception) before accessing an array with a computed or user-provided index.',
    'Choose arrays for fixed-size, performance-sensitive data; choose a collection like ArrayList when the size needs to change.',
  ],

  performanceNotes:
    'Arrays are one of the most efficient data structures in Java — accessing scores[i] is a constant-time ' +
    'operation with minimal overhead, and arrays of primitives avoid the boxing overhead that collections of ' +
    'wrapper types (like ArrayList<Integer>) incur. For performance-critical numeric code, a primitive array ' +
    'is usually faster than the equivalent ArrayList.',

  interviewQuestions: [
    { question: 'What is the valid index range for an array of length n?', answer: '0 through n-1. Accessing index n or beyond throws an ArrayIndexOutOfBoundsException, since there\'s no element at that position.' },
    { question: 'Can you change the size of an array after it\'s created?', answer: 'No — an array\'s length is fixed at creation time. To "grow" or "shrink" a collection, you either create a new array and copy elements over, or use a resizable collection type like ArrayList.' },
    { question: 'What is the default value of elements in a newly created int[] versus a newly created String[]?', answer: 'A new int[] is filled with 0 for every element, since int is primitive. A new String[] is filled with null for every element, since String is a reference type with no default "empty" value.' },
    { question: 'How do you find the number of elements in an array?', answer: 'Using the array\'s length field, e.g. scores.length — note it\'s a field, not a method call, unlike String\'s length().' },
    { question: 'Is an array a primitive type or a reference type in Java?', answer: 'An array is always a reference type, even when it holds primitive elements. The array variable itself holds a reference to the array object in memory.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create an int array with 5 numbers and print their sum using a loop.' },
    { difficulty: 'Medium', prompt: 'Write a method that takes an int array and returns the largest value in it.' },
    { difficulty: 'Hard', prompt: 'Create a 3x3 2D int array representing a grid, fill it with values 1 through 9 in row-major order, then write a nested loop that prints it formatted as a grid.' },
  ],

  summary:
    'Arrays store a fixed number of same-typed values, indexed from 0. Use a for-each loop for straightforward ' +
    'iteration, and reach for a resizable collection type once you need to grow or shrink the container.',
};
