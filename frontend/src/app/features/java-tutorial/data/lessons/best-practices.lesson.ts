import { Lesson } from '../../../../core/models/lesson.model';

export const BEST_PRACTICES_LESSON: Lesson = {
  slug: 'best-practices',
  title: 'Java Best Practices',
  seoDescription: 'A practical checklist of Java coding best practices covering naming, error handling, immutability, and code organization.',

  introduction:
    'Writing Java that compiles and runs is one thing — writing Java that\'s easy for you (and everyone else) ' +
    'to read, maintain, and extend six months from now is another. This lesson collects practical habits worth ' +
    'building early.',

  whyItMatters:
    'Code is read far more often than it\'s written. Good habits compound: a codebase full of clear names, ' +
    'small methods, and sensible error handling stays manageable as it grows; a codebase without them turns ' +
    'into something everyone is afraid to touch.',

  explanation: [
    'Naming matters more than it seems. Use PascalCase for classes, camelCase for methods and variables, and ' +
    'ALL_CAPS for constants — but more importantly, choose names that describe intent (isEligible, ' +
    'calculateTotalPrice) rather than vague ones (flag, data, temp).',
    'Favor immutability where practical: mark fields final when they shouldn\'t change after construction, and ' +
    'prefer returning new objects over mutating shared state. Immutable objects are inherently thread-safe and ' +
    'far easier to reason about.',
    'Keep methods small and focused on one task. A method whose name needs "and" to describe it (like ' +
    'validateAndSaveUser) is usually a sign it should be split into two.',
    'Handle exceptions deliberately: catch the most specific type that applies, never leave a catch block ' +
    'empty, and use try-with-resources for anything that needs closing. Prefer composition over inheritance ' +
    'unless a genuine "is-a" relationship exists between the classes.',
    'Write tests as you go, not as an afterthought. Tests document expected behavior and catch regressions ' +
    'long before a bug reaches production.',
    'These practices trace back to a handful of well-known design principles worth knowing by name: SOLID ' +
    '(five principles for maintainable object-oriented design), DRY ("Don\'t Repeat Yourself"), and KISS ' +
    '("Keep It Simple"). You don\'t need to memorize formal definitions — the practical habits in this lesson ' +
    'are those principles applied concretely to everyday Java code.',
  ],

  analogy:
    'Writing clean code is like tidying a shared kitchen. Anyone can cook a meal (make code that runs), but ' +
    'leaving clearly labeled containers (good naming), cleaning as you go (small, focused methods), and putting ' +
    'things back where others expect to find them (consistent structure) is what makes the kitchen usable for ' +
    'the next person — including yourself, coming back to it six months later having forgotten exactly how you ' +
    'left it.',

  examples: [
    {
      title: 'Before and After: Naming and Structure',
      code:
        '// Avoid:\n' +
        'public boolean check(int x) {\n' +
        '    return x >= 18;\n' +
        '}\n' +
        '\n' +
        '// Prefer:\n' +
        'public boolean isAdult(int age) {\n' +
        '    return age >= 18;\n' +
        '}',
      explanation: 'The second version reads clearly at the call site — isAdult(age) — without needing to check the implementation to understand what it does.',
    },
  ],

  commonMistakes: [
    'Using vague variable and method names that require reading the implementation to understand their purpose.',
    'Catching Exception broadly "just to be safe," which hides bugs that should have surfaced during development.',
    'Building large classes that do too many unrelated things, instead of splitting responsibilities across smaller, focused classes.',
    'Repeating the same logic in multiple places instead of extracting a shared method — small duplication compounds into large maintenance costs.',
    'Skipping tests for "simple" code, which is often exactly the code that breaks silently when something nearby changes.',
  ],

  tips: [
    'If you can\'t describe what a method does in one short sentence without "and," it\'s probably doing too much.',
    'Prefer StringBuilder over repeated String concatenation inside loops — Strings are immutable, so += in a loop creates a new object every iteration.',
    'Run a static analysis tool or linter (like SpotBugs, Checkstyle, or your IDE\'s built-in inspections) regularly — it catches many of these issues automatically.',
  ],

  bestPractices: [
    'Apply the "Single Responsibility Principle" at both the method and class level — each should have one clear reason to change.',
    'Prefer explicit, descriptive code over clever one-liners — code is read far more often than it\'s written, and clarity should usually win over brevity.',
    'Review your own code as if you were seeing it for the first time before considering it finished — most naming and structure problems are obvious on a second read.',
  ],

  performanceNotes:
    'Most of these practices are about maintainability, not raw performance — and that\'s intentional. ' +
    'Premature optimization at the expense of readability is itself a well-known anti-pattern; profile and ' +
    'optimize the specific code that\'s actually shown to be a bottleneck, rather than sacrificing clarity ' +
    'everywhere on the assumption that it might matter.',

  interviewQuestions: [
    { question: 'What is the Single Responsibility Principle, and why does it matter?', answer: 'It states that a class or method should have exactly one reason to change — one clear responsibility. It matters because classes that do too many unrelated things become harder to understand, test, and modify safely.' },
    { question: 'Why is catching Exception broadly considered a bad practice?', answer: 'It catches every kind of exception indiscriminately, including ones that weren\'t anticipated, which can silently hide real bugs instead of letting them surface during development.' },
    { question: 'What does "favor composition over inheritance" mean, and when would you apply it?', answer: 'It means preferring to build behavior by having a class contain another object ("has-a") rather than extending it ("is-a"), when the relationship between the classes isn\'t a clean, unambiguous hierarchy — it keeps designs more flexible.' },
    { question: 'Why should tests be written alongside code rather than after the fact?', answer: 'Tests document expected behavior and catch regressions early, before a bug reaches production. Writing them alongside the code also tends to produce more testable, better-designed code from the start.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Take a method you\'ve written earlier in this tutorial and rename its variables to be more descriptive.' },
    { difficulty: 'Medium', prompt: 'Find a method that does two distinct things (e.g., validates input and saves it) and split it into two focused methods.' },
    { difficulty: 'Hard', prompt: 'Take a class with several public mutable fields and refactor it to use encapsulation, immutability where appropriate, and clearly named methods, explaining each change you make.' },
  ],

  summary:
    'Good Java habits — clear naming, small focused methods, deliberate exception handling, immutability where ' +
    'practical, and consistent testing — are what keep a codebase maintainable as it grows well beyond a single ' +
    'tutorial example.',
};
