import { Lesson } from '../../../../core/models/lesson.model';

export const PACKAGES_LESSON: Lesson = {
  slug: 'packages',
  title: 'Java Packages',
  seoDescription: 'How Java packages organize related classes, avoid naming conflicts, and control visibility with import statements.',

  introduction:
    'A package is a namespace that groups related classes and interfaces together, similar to how folders ' +
    'organize files on a computer.',

  whyItMatters:
    'Once a project has more than a handful of classes, packages keep related code together and prevent naming ' +
    'collisions — two different libraries can both have a class named "Logger" as long as they\'re in different ' +
    'packages.',

  explanation: [
    'A package is declared as the very first line of a .java file: `package com.example.myapp;`. The class ' +
    'inside that file then belongs to that package, and its full name becomes com.example.myapp.ClassName.',
    'Java\'s standard library is itself organized into packages you\'ve already been using without necessarily ' +
    'noticing — java.lang (automatically available, includes String and System), java.util (includes Scanner ' +
    'and the Collections framework), and many others.',
    'To use a class from a different package, you either write its full name every time, or add an `import` ' +
    'statement at the top of the file so you can refer to it by its short name. `java.lang` classes are the ' +
    'one exception — they\'re imported automatically.',
    'By convention, package names are all lowercase and typically follow a reversed domain name, like ' +
    'com.company.project.module, to keep them globally distinct.',
    'Packages also interact with access control: a class member with no explicit access modifier (called ' +
    '"package-private" or "default" access) is visible to every class in the same package, but hidden from ' +
    'classes in other packages — a middle ground between private and public that\'s often overlooked by ' +
    'beginners.',
  ],

  analogy:
    'Packages are like folders in a filing cabinet at a company with multiple departments. The Sales ' +
    'department and the Engineering department can both have a document called "Report," and there\'s no ' +
    'conflict because they live in different folders (packages). To reference a document from another ' +
    'department\'s folder, you either write out the full path ("Engineering/Report") every time, or you keep a ' +
    'labeled shortcut on your desk (an import) so you can just say "Report" going forward.',

  syntax: {
    code: 'package com.example.myapp;\n\nimport java.util.Scanner;',
    language: 'java',
    description: 'A package declaration must be the first line in the file; import statements come after it.',
  },

  examples: [
    {
      title: 'Using an Imported Class',
      code:
        'import java.util.Scanner;\n' +
        '\n' +
        'public class PackageDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Scanner scanner = new Scanner(System.in);\n' +
        '        System.out.println("Scanner is from java.util");\n' +
        '    }\n' +
        '}',
      output: 'Scanner is from java.util',
      explanation: 'Without the import, you\'d have to write java.util.Scanner every time you referenced the class.',
      lineByLine: [
        '`import java.util.Scanner;` — makes the short name Scanner available throughout this file.',
        '`Scanner scanner = new Scanner(System.in);` — refers to it by the short name, rather than java.util.Scanner.',
      ],
    },
  ],

  commonMistakes: [
    'Putting the package declaration somewhere other than the very first line of the file (only comments may come before it).',
    'Forgetting that the folder structure on disk must match the package name — com.example.myapp means the file lives in com/example/myapp/.',
    'Importing an entire package with a wildcard (import java.util.*;) out of habit, which can make it unclear exactly which classes are actually used.',
    'Naming a custom class the same as a common java.lang class (like String or Object), causing confusing shadowing.',
  ],

  tips: [
    'Organize packages by feature or layer (com.example.shop.orders, com.example.shop.payments) rather than dumping everything into one package.',
    'Prefer specific imports over wildcard imports — most IDEs will add and manage them for you automatically.',
    'Remember java.lang classes like String, System, and Math never need an explicit import.',
  ],

  bestPractices: [
    'Group classes by feature/domain (orders, payments, users) rather than by technical layer alone (controllers, services) for most application sizes — it keeps related code changes localized to one package.',
    'Use package-private (no modifier) visibility deliberately for classes and methods that are implementation details of a package, not meant to be used from outside it.',
  ],

  performanceNotes:
    'Packages are purely an organizational and compile-time construct — they have no runtime performance cost. ' +
    'The number of packages or how deeply nested they are doesn\'t affect how fast compiled code runs.',

  interviewQuestions: [
    { question: 'What is a package in Java, and what problem does it solve?', answer: 'A package is a namespace grouping related classes and interfaces together. It solves naming collisions (two classes with the same simple name can coexist in different packages) and helps organize large codebases.' },
    { question: 'Where must the package declaration appear in a .java file?', answer: 'On the very first line of the file, before any class or interface declarations (only comments may precede it).' },
    { question: 'What is the relationship between a package name and the folder structure on disk?', answer: 'They must match — a class in package com.example.myapp must live in a file located at com/example/myapp/ relative to the source root.' },
    { question: 'What is package-private (default) access, and when is it useful?', answer: 'It\'s the access level applied when no modifier (public, private, protected) is specified, making a member visible only to other classes in the same package. It\'s useful for implementation details a package needs internally but doesn\'t want to expose outside it.' },
    { question: 'Why might wildcard imports (import java.util.*;) be discouraged?', answer: 'They make it less clear exactly which classes a file actually depends on, and can occasionally cause ambiguous references if two imported packages happen to define a class with the same name.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create a class in a package named com.example.demo, and write out its fully-qualified class name.' },
    { difficulty: 'Medium', prompt: 'Create two classes with the same simple name (e.g., Logger) in two different packages, and demonstrate both can be used in the same program by referring to at least one with its fully-qualified name.' },
    { difficulty: 'Hard', prompt: 'Create a class with a package-private (no modifier) method, and demonstrate from a class in a different package that the method cannot be called, then move the caller into the same package and show it now works.' },
  ],

  summary:
    'Packages group related classes into namespaces, prevent naming collisions, and mirror the project\'s ' +
    'folder structure on disk. Import statements let you refer to classes from other packages by their short ' +
    'name instead of writing the fully-qualified one every time.',
};
