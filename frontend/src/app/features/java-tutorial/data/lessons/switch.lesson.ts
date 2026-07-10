import { Lesson } from '../../../../core/models/lesson.model';

export const SWITCH_LESSON: Lesson = {
  slug: 'switch',
  title: 'Java Switch Statement',
  seoDescription: 'The Java switch statement for multi-way branching, including fall-through behavior and the modern switch expression syntax.',

  introduction:
    'A switch statement checks one value against a list of possible matches, running the code for whichever ' +
    'one matches — a cleaner alternative to a long chain of else if statements when you\'re comparing a single ' +
    'variable against several exact values.',

  whyItMatters:
    'Once you\'re checking more than two or three exact values of the same variable, a switch is easier to read ' +
    'and maintain than a long if/else if chain.',

  explanation: [
    'A traditional switch statement compares a value against a series of case labels. When a matching case is ' +
    'found, execution starts there and continues into the following cases unless a break statement stops it — ' +
    'this is called "fall-through," and forgetting a break is one of the most common Java bugs.',
    'A default case runs when none of the listed cases match — similar to a final else in an if/else if chain. ' +
    'It\'s optional but good practice to include.',
    'Modern Java (14+) added a switch expression using arrow syntax (case X -> ...), which doesn\'t fall ' +
    'through by default and can directly return a value, removing the need for break entirely in most new code.',
    'Traditional switch works on int-like primitives (byte, short, char, int), their wrapper classes, String, ' +
    'and enum values. It does not work directly on long, float, double, or boolean, or on arbitrary objects — ' +
    'those need an if/else chain instead.',
  ],

  analogy:
    'A switch statement is like a building directory in a lobby: "Floor 1 → Reception, Floor 2 → Sales, Floor ' +
    '3 → Engineering, anything else → Front Desk." You look up the one value (the floor number) and go directly ' +
    'to the matching destination, instead of asking a series of yes/no questions ("Is it floor 1? Is it floor ' +
    '2?") the way an if/else chain would.',

  syntax: {
    code: 'switch (value) {\n    case option1:\n        // code\n        break;\n    case option2:\n        // code\n        break;\n    default:\n        // code\n}',
    language: 'java',
    description: 'Each case is checked against value; break prevents execution from continuing into the next case.',
  },

  examples: [
    {
      title: 'Traditional Switch',
      code:
        'public class DayDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int day = 3;\n' +
        '        String dayName;\n' +
        '\n' +
        '        switch (day) {\n' +
        '            case 1:\n' +
        '                dayName = "Monday";\n' +
        '                break;\n' +
        '            case 2:\n' +
        '                dayName = "Tuesday";\n' +
        '                break;\n' +
        '            case 3:\n' +
        '                dayName = "Wednesday";\n' +
        '                break;\n' +
        '            default:\n' +
        '                dayName = "Unknown";\n' +
        '        }\n' +
        '\n' +
        '        System.out.println(dayName);\n' +
        '    }\n' +
        '}',
      output: 'Wednesday',
      explanation: 'Each case needs its own break, or execution would fall through into the next case.',
      lineByLine: [
        '`switch (day)` — begins comparing the value of day against each case label in order.',
        '`case 3:` — matches, since day is 3; execution jumps here.',
        '`dayName = "Wednesday";` — runs as part of the matched case.',
        '`break;` — stops execution from continuing (falling through) into `default:` below it.',
      ],
    },
    {
      title: 'Modern Switch Expression',
      code:
        'public class DayExpressionDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int day = 3;\n' +
        '\n' +
        '        String dayName = switch (day) {\n' +
        '            case 1 -> "Monday";\n' +
        '            case 2 -> "Tuesday";\n' +
        '            case 3 -> "Wednesday";\n' +
        '            default -> "Unknown";\n' +
        '        };\n' +
        '\n' +
        '        System.out.println(dayName);\n' +
        '    }\n' +
        '}',
      output: 'Wednesday',
      explanation: 'The arrow (->) form doesn\'t fall through and can produce a value directly, assigned straight into dayName.',
    },
  ],

  commonMistakes: [
    'Forgetting a break in a traditional switch, causing execution to "fall through" into the next case unintentionally.',
    'Omitting the default case and silently doing nothing when a value doesn\'t match anything expected.',
    'Using switch on a type it doesn\'t support — traditional switch works on int-like types, char, String, and enums, not on arbitrary objects.',
    'Duplicating a case label, which is a compile error.',
  ],

  tips: [
    'Prefer the modern arrow-based switch expression in new code — it removes fall-through bugs entirely.',
    'Always include a default case, even if it just handles an "unexpected value" scenario explicitly.',
    'If several cases should run the same code, list them together: `case 1, 2, 3 -> ...` in the modern syntax.',
  ],

  bestPractices: [
    'Reach for switch (ideally the modern expression form) once you\'re checking three or more exact values of the same variable — it communicates intent more clearly than an equivalent if/else if chain.',
    'If you intentionally want fall-through in a traditional switch, add a comment explaining why — it\'s rare enough that future readers will otherwise assume it\'s a missing break.',
  ],

  performanceNotes:
    'For a small, fixed set of cases, the JVM can compile a switch on int-like values into a highly efficient ' +
    'jump table, making it faster than an equivalent long if/else if chain in some cases — though for typical ' +
    'application code, the difference is rarely noticeable and readability should drive the choice, not raw speed.',

  interviewQuestions: [
    { question: 'What is fall-through in a Java switch statement?', answer: 'When a case matches, execution continues running the code in the following cases too, unless a break statement stops it — this is fall-through, and it\'s the source of one of the most common switch bugs.' },
    { question: 'What types can a traditional switch statement operate on?', answer: 'byte, short, char, int, their wrapper classes, String, and enum values. It cannot operate directly on long, float, double, boolean, or arbitrary objects.' },
    { question: 'How does the modern arrow-based switch expression differ from the traditional switch statement?', answer: 'It doesn\'t fall through between cases by default, can be used as an expression that directly produces and returns a value, and doesn\'t require break statements.' },
    { question: 'What does the default case do in a switch?', answer: 'It runs when none of the listed case labels match the switched-on value, similar to a final else in an if/else if chain. It\'s optional in a traditional switch but strongly recommended.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a switch statement that prints the name of a month given its number (1-12).' },
    { difficulty: 'Medium', prompt: 'Rewrite your month-name switch using the modern arrow expression syntax, returning the name directly into a variable.' },
    { difficulty: 'Hard', prompt: 'Write a traditional switch that intentionally uses fall-through to group multiple case labels (e.g., grouping weekdays vs. weekend), and explain in a comment why the fall-through is intentional there.' },
  ],

  summary:
    'switch compares one value against several cases, running the matching branch. Traditional switch requires ' +
    'break to avoid fall-through; the modern arrow syntax avoids that pitfall and can return a value directly.',
};
