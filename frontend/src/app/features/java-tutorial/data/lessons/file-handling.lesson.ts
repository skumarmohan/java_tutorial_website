import { Lesson } from '../../../../core/models/lesson.model';

export const FILE_HANDLING_LESSON: Lesson = {
  slug: 'file-handling',
  title: 'Java File Handling',
  seoDescription: 'Reading and writing files in Java using the java.nio.file API, with try-with-resources for safe cleanup.',

  introduction:
    'File handling covers reading data from files into your program and writing data back out to disk — ' +
    'essential for anything that needs to persist information between runs.',

  whyItMatters:
    'Programs that don\'t use a database still often need to read configuration, log activity, or process data ' +
    'files. File I/O is the fundamental building block underneath all of that.',

  explanation: [
    'Modern Java code generally uses the java.nio.file package (Path and Files) rather than the older ' +
    'java.io.File class — it\'s more consistent and offers convenient one-line methods for common tasks like ' +
    'reading an entire file as a String or a list of lines.',
    'Reading and writing files can fail for reasons outside your control — the file might not exist, or you ' +
    'might lack permission — so file operations typically throw IOException, a checked exception you must ' +
    'catch or declare, as covered in the Exception Handling lesson.',
    'When working with lower-level streams (like FileInputStream), always use try-with-resources so the file ' +
    'is automatically closed when the block finishes, even if an exception occurs partway through.',
    'try-with-resources works with any class implementing AutoCloseable (which includes nearly every I/O class ' +
    'in Java). You declare the resource inside the parentheses right after `try`, and Java guarantees its ' +
    'close() method is called automatically when the block ends — whether it finished normally or an exception ' +
    'was thrown.',
  ],

  analogy:
    'Working with a file is like borrowing a library book. You check it out (open the file), read or write in ' +
    'it (process its contents), and you must return it when you\'re done (close it) — otherwise it stays ' +
    '"checked out" and unavailable to others (a leaked file handle). try-with-resources is like an automatic ' +
    'return system: no matter what happens while you have the book — even if you drop it (an exception is ' +
    'thrown) — it\'s guaranteed to be returned to the library at the end.',

  syntax: {
    code: 'Path path = Path.of("data.txt");\nString content = Files.readString(path);',
    language: 'java',
  },

  examples: [
    {
      title: 'Writing and Reading a File',
      code:
        'import java.nio.file.Files;\n' +
        'import java.nio.file.Path;\n' +
        'import java.io.IOException;\n' +
        '\n' +
        'public class FileDemo {\n' +
        '    public static void main(String[] args) throws IOException {\n' +
        '        Path path = Path.of("greeting.txt");\n' +
        '\n' +
        '        Files.writeString(path, "Hello, file!");\n' +
        '        String content = Files.readString(path);\n' +
        '\n' +
        '        System.out.println(content);\n' +
        '    }\n' +
        '}',
      output: 'Hello, file!',
      explanation: 'Files.writeString() and Files.readString() handle opening, writing/reading, and closing the file in one call each.',
      lineByLine: [
        '`Path path = Path.of("greeting.txt");` — represents a file location without touching the disk yet.',
        '`Files.writeString(path, "Hello, file!");` — opens the file, writes the text, and closes it, all in one call.',
        '`Files.readString(path);` — opens the file, reads its entire contents as a String, and closes it.',
      ],
    },
    {
      title: 'try-with-resources',
      code:
        'import java.io.BufferedReader;\n' +
        'import java.io.FileReader;\n' +
        'import java.io.IOException;\n' +
        '\n' +
        'public class ReaderDemo {\n' +
        '    public static void main(String[] args) throws IOException {\n' +
        '        try (BufferedReader reader = new BufferedReader(new FileReader("greeting.txt"))) {\n' +
        '            System.out.println(reader.readLine());\n' +
        '        }\n' +
        '    }\n' +
        '}',
      output: 'Hello, file!',
      explanation: 'The reader is declared inside the try(...) parentheses, so Java closes it automatically when the block exits — even if an exception is thrown.',
    },
  ],

  commonMistakes: [
    'Forgetting to close a file stream, leaking a file handle — always prefer try-with-resources over manual close() calls.',
    'Using a relative path and being surprised it\'s resolved relative to wherever the program was launched from, not the source file\'s location.',
    'Not handling IOException at all, forgetting that most file operations are checked exceptions.',
    'Reading a very large file entirely into memory with readString() when line-by-line or streaming processing would be more appropriate.',
  ],

  tips: [
    'Use Files.readString() / Files.writeString() for simple, whole-file text operations — reach for streams only when files are large or need line-by-line processing.',
    'Always use try-with-resources for anything that implements AutoCloseable.',
    'Wrap file paths with Path.of() rather than raw Strings — it\'s the modern, OS-independent way to represent a path.',
  ],

  bestPractices: [
    'Prefer the java.nio.file API (Path, Files) over the older java.io.File for new code — it\'s more consistent and has better error reporting.',
    'For large files, use Files.lines() (returning a Stream<String>) or a BufferedReader instead of reading the whole file into memory at once.',
    'Catch IOException at a level where you can meaningfully respond to it (retry, show an error) rather than immediately at the point it\'s thrown.',
  ],

  performanceNotes:
    'Files.readString() and similar whole-file methods load the entire file into memory, which is fine for ' +
    'small configuration or text files but can exhaust memory on very large files. For large files, ' +
    'Files.lines() streams the content line by line without holding the whole file in memory at once.',

  interviewQuestions: [
    { question: 'What is the difference between java.io.File and java.nio.file.Path?', answer: 'File is the older API for representing file system paths. Path (from java.nio.file) is the modern replacement, offering more consistent behavior and pairing with the Files utility class for convenient one-line read/write operations.' },
    { question: 'Why do most file operations in Java throw a checked exception?', answer: 'Because file operations can fail for reasons outside the program\'s control — missing files, permission issues, disk errors — so Java forces callers to explicitly handle or declare that possibility via IOException.' },
    { question: 'What is try-with-resources, and what problem does it solve?', answer: 'A try block that declares one or more AutoCloseable resources in its parentheses, guaranteeing they\'re automatically closed when the block ends, whether normally or via an exception — preventing leaked file handles or connections.' },
    { question: 'When would you choose Files.lines() over Files.readString()?', answer: 'When working with a large file where loading the entire content into memory at once would be wasteful or impossible — Files.lines() streams line by line instead.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write a program that writes three lines of text to a file, then reads and prints them back.' },
    { difficulty: 'Medium', prompt: 'Write a program that reads a file line by line using Files.lines() and prints only the lines containing a specific word.' },
    { difficulty: 'Hard', prompt: 'Write a program using try-with-resources with two resources declared at once (e.g., a reader and a writer), and explain the order in which they\'re closed when the block ends.' },
  ],

  summary:
    'The java.nio.file package (Path and Files) is the modern way to read and write files in Java, with ' +
    'convenient one-line methods for whole-file operations. Always handle IOException and use ' +
    'try-with-resources to guarantee resources are closed.',
};
