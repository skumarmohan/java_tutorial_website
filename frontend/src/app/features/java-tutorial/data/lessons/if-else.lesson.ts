import { Lesson } from '../../../../core/models/lesson.model';

export const IF_ELSE_LESSON: Lesson = {
  slug: 'if-else',
  title: 'Java If Else',
  seoDescription: 'Conditional branching in Java with if, else if, and else, including common mistakes and nested conditions.',

  introduction:
    'The if statement lets a program make decisions — running one block of code when a condition is true, and ' +
    'optionally a different block when it\'s false.',

  whyItMatters:
    'Almost no useful program runs the exact same steps every time. Conditional logic is what lets a program ' +
    'react differently to different input, state, or user actions.',

  explanation: [
    'An if statement evaluates a boolean expression in parentheses. If it\'s true, the block of code in curly ' +
    'braces runs; if it\'s false, that block is skipped entirely.',
    'An else block runs only when the if condition was false, giving you a fallback path. Chaining else if ' +
    'lets you test several conditions in order — Java checks each one from top to bottom and runs the first ' +
    'block whose condition is true, skipping the rest.',
    'You can nest if statements inside other if or else blocks to test a second condition only when the first ' +
    'one holds — useful, but readable code usually keeps nesting shallow by restructuring conditions or using ' +
    '&&/|| instead.',
    'Only one branch of an if/else if/else chain ever runs, no matter how many conditions would technically be ' +
    'true. Java stops checking as soon as it finds the first true condition — this is different from writing ' +
    'several separate, independent if statements, where every one of them gets checked and potentially run.',
  ],

  analogy:
    'An if/else chain works like a triage nurse checking patients one condition at a time: "Is this an ' +
    'emergency? If so, send them straight back. If not, is it urgent? If so, this queue. Otherwise, general ' +
    'waiting room." The nurse stops at the very first matching category and never re-checks the remaining ' +
    'questions for that patient — exactly how Java stops at the first true condition in the chain.',

  syntax: {
    code: 'if (condition) {\n    // runs if condition is true\n} else if (anotherCondition) {\n    // runs if anotherCondition is true\n} else {\n    // runs if none of the above were true\n}',
    language: 'java',
    description: 'if, the optional else if (repeatable), and the optional final else, checked strictly top to bottom.',
  },

  examples: [
    {
      title: 'Grading Example',
      code:
        'public class GradeDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        int score = 82;\n' +
        '\n' +
        '        if (score >= 90) {\n' +
        '            System.out.println("Grade: A");\n' +
        '        } else if (score >= 80) {\n' +
        '            System.out.println("Grade: B");\n' +
        '        } else if (score >= 70) {\n' +
        '            System.out.println("Grade: C");\n' +
        '        } else {\n' +
        '            System.out.println("Grade: F");\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Grade: B',
      explanation: 'Java checks each condition top to bottom and stops at the first one that\'s true — score >= 90 fails, score >= 80 succeeds.',
      lineByLine: [
        '`int score = 82;` — the value being tested.',
        '`if (score >= 90)` — checked first; 82 >= 90 is false, so this block is skipped.',
        '`else if (score >= 80)` — checked next; 82 >= 80 is true, so "Grade: B" prints and the rest of the chain is skipped entirely.',
        'The remaining else if and else are never even evaluated once a match is found.',
      ],
    },
    {
      title: 'Combining Conditions',
      code:
        'public class LoginDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        boolean hasAccount = true;\n' +
        '        int age = 15;\n' +
        '\n' +
        '        if (hasAccount && age >= 18) {\n' +
        '            System.out.println("Access granted");\n' +
        '        } else {\n' +
        '            System.out.println("Access denied");\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Access denied',
      explanation: 'Combining conditions with && avoids a nested if — both hasAccount and age >= 18 must be true.',
    },
  ],

  commonMistakes: [
    'Putting a semicolon right after the if condition — `if (x > 0);` — which creates an empty statement and makes the block below always run.',
    'Writing an assignment (=) instead of a comparison (==) inside the condition.',
    'Ordering else if conditions incorrectly, so a broader condition catches cases meant for a more specific one further down.',
    'Nesting many levels of if/else instead of combining conditions with && and ||, making the logic hard to follow.',
  ],

  tips: [
    'Order else if conditions from most specific to least specific when ranges overlap.',
    'Prefer combining related conditions with && or || over deeply nested if statements.',
    'Always use curly braces, even for single-statement blocks — it prevents bugs when someone adds a second line later.',
  ],

  bestPractices: [
    'Return or continue early for edge cases at the top of a method instead of wrapping the entire method body in a big if block — it reduces nesting and improves readability.',
    'Extract a complex condition into a well-named boolean variable or method (e.g. `boolean isEligible = age >= 18 && hasAccount;`) so the if statement itself reads like a sentence.',
  ],

  performanceNotes:
    'if/else branching is essentially free at the CPU level for straightforward conditions. The only real ' +
    'performance consideration is ordering: if you\'re checking several unrelated, expensive conditions with ' +
    '||, put the cheapest or most likely one first so short-circuit evaluation skips the costlier checks more ' +
    'often.',

  interviewQuestions: [
    { question: 'What happens if multiple else if conditions in a chain would all technically be true?', answer: 'Only the first one Java encounters (checked top to bottom) runs. As soon as a true condition is found, its block executes and the rest of the chain — including any later conditions that would also be true — is skipped entirely.' },
    { question: 'What is a common bug caused by a stray semicolon after an if condition?', answer: 'Writing `if (x > 0);` creates an empty statement as the "body" of the if, so the following block (in braces) runs unconditionally regardless of the condition — a classic hard-to-spot bug.' },
    { question: 'Why is it good practice to always use curly braces, even for one-line if bodies?', answer: 'Without braces, only the very next single statement belongs to the if. If someone later adds a second line assuming it\'s still inside the if, it will actually always run, silently changing the program\'s behavior.' },
    { question: 'How would you rewrite a deeply nested if/else chain to be more readable?', answer: 'Combine related conditions using && and || into fewer, well-named checks, or use early returns to handle edge cases upfront and reduce the nesting depth of the "main" logic.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write an if/else statement that prints "Even" or "Odd" based on whether a number is divisible by 2.' },
    { difficulty: 'Medium', prompt: 'Write an else-if chain that classifies a temperature (int) as "Freezing" (<= 0), "Cold" (<= 15), "Mild" (<= 25), or "Hot" (> 25).' },
    { difficulty: 'Hard', prompt: 'Rewrite a deeply nested if/else example (three levels deep, checking age, membership, and balance) using combined && conditions and early returns, and explain why your version is easier to read.' },
  ],

  summary:
    'if, else if, and else let a program branch based on boolean conditions, checked in order from top to ' +
    'bottom. Combine conditions with && and || rather than nesting deeply, and always double-check == versus =.',
};
