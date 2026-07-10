import { Lesson } from '../../../../core/models/lesson.model';

export const JAVA21_FEATURES_LESSON: Lesson = {
  slug: 'java21-features',
  title: 'Java 21 Features',
  seoDescription: 'Key Java 21 LTS features: virtual threads, pattern matching for switch, record patterns, and sequenced collections.',

  introduction:
    'Java 21 (2023) is the current LTS release as of this tutorial, and its headline feature — virtual threads ' +
    '— is arguably the biggest change to how Java handles concurrency since threads were introduced.',

  whyItMatters:
    'Virtual threads directly address a long-standing pain point in Java: writing simple, blocking-style code ' +
    'that scales to handle huge numbers of concurrent connections without the complexity of asynchronous ' +
    'programming.',

  explanation: [
    'Virtual threads (finalized in 21, after being previewed in 19 and 20) are lightweight threads managed by ' +
    'the JVM rather than mapped one-to-one onto OS threads. You can create hundreds of thousands of them ' +
    'without exhausting system resources, because most of the time a virtual thread is waiting (on I/O, for ' +
    'example), it isn\'t consuming an OS thread at all.',
    'This means you can write ordinary, easy-to-read blocking code — the style covered in the Multithreading ' +
    'lesson — and get much of the scalability benefit that used to require complex asynchronous or reactive ' +
    'programming.',
    'Pattern matching for switch (finalized in 21) extends the pattern matching from Java 17\'s instanceof to ' +
    'switch expressions, letting you match and destructure based on both type and structure directly in a case ' +
    'label.',
    'Record patterns let you destructure a record\'s components directly in a pattern match — combined with ' +
    'switch pattern matching, this enables concise, exhaustive handling of a sealed hierarchy of record types.',
    'Sequenced collections introduced common methods (getFirst(), getLast(), reversed()) across List, Set, and ' +
    'Map implementations that have a defined encounter order, unifying an inconsistency that existed since ' +
    'Java\'s earliest collection types.',
  ],

  analogy:
    'Traditional OS threads are like assigning one full-time, dedicated employee per customer call, even while ' +
    'that employee is just sitting on hold waiting for the customer to respond — expensive at scale. Virtual ' +
    'threads are like a call center where an employee (an OS thread) picks up whichever call currently needs ' +
    'active attention, and steps away to help someone else the moment a call goes on hold, coming back once ' +
    'there\'s actual work to do again — the same small pool of employees can effectively "staff" a vastly larger ' +
    'number of simultaneous calls.',

  examples: [
    {
      title: 'Creating a Virtual Thread',
      code:
        'public class VirtualThreadDemo {\n' +
        '    public static void main(String[] args) throws InterruptedException {\n' +
        '        Thread thread = Thread.ofVirtual().start(() -> {\n' +
        '            System.out.println("Running on: " + Thread.currentThread());\n' +
        '        });\n' +
        '\n' +
        '        thread.join();\n' +
        '    }\n' +
        '}',
      explanation: 'Thread.ofVirtual() creates a virtual thread instead of a traditional OS-backed one — the rest of the API (start, join) looks the same as regular threads.',
      lineByLine: [
        '`Thread.ofVirtual().start(() -> { ... });` — creates and immediately starts a virtual thread running the given lambda.',
        '`thread.join();` — blocks the main thread until the virtual thread finishes, exactly like joining a regular thread.',
      ],
    },
    {
      title: 'Pattern Matching for switch with a Record',
      code:
        'record Point(int x, int y) {}\n' +
        '\n' +
        'public class SwitchPatternDemo {\n' +
        '    static String describe(Object obj) {\n' +
        '        return switch (obj) {\n' +
        '            case Point(int x, int y) when x == y -> "On the diagonal";\n' +
        '            case Point p -> "Just a point";\n' +
        '            default -> "Not a point";\n' +
        '        };\n' +
        '    }\n' +
        '\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println(describe(new Point(2, 2)));\n' +
        '    }\n' +
        '}',
      output: 'On the diagonal',
      explanation: 'The record pattern destructures Point directly in the case label, and `when` adds an extra condition on the matched values.',
    },
  ],

  commonMistakes: [
    'Using virtual threads for CPU-bound work and expecting a speedup — their benefit is for I/O-bound, blocking workloads with high concurrency, not raw computation.',
    'Assuming virtual threads replace the need to think about thread-safety — shared mutable state still needs the same synchronization discussed in the Multithreading lesson.',
    'Pinning a virtual thread by holding a traditional `synchronized` block around blocking I/O, which can prevent it from yielding the underlying OS thread the way it\'s designed to.',
  ],

  tips: [
    'Reach for virtual threads when writing simple, blocking-style server code that needs to handle many concurrent connections.',
    'Prefer java.util.concurrent locks over `synchronized` in virtual-thread-heavy code to avoid the pinning issue mentioned above.',
    'Combine sealed classes (Java 17), record patterns, and switch pattern matching (both Java 21) for exhaustive, compiler-verified handling of closed type hierarchies.',
  ],

  bestPractices: [
    'Use virtual threads for I/O-bound server workloads (handling many concurrent requests), and keep using traditional platform threads or thread pools for CPU-bound, computation-heavy work.',
    'Favor exhaustive switch pattern matching over sequences of instanceof checks when working with a sealed hierarchy — the compiler can verify every case is handled.',
  ],

  performanceNotes:
    'Virtual threads dramatically reduce the memory and scheduling overhead of high-concurrency, I/O-bound ' +
    'workloads — an application that previously could support a few thousand concurrent blocking connections ' +
    'with platform threads can often support hundreds of thousands with virtual threads, since idle virtual ' +
    'threads don\'t consume a full OS thread\'s resources while waiting.',

  interviewQuestions: [
    { question: 'What is a virtual thread, and how does it differ from a traditional thread?', answer: 'A virtual thread is a lightweight thread managed by the JVM rather than mapped one-to-one onto an OS thread. Many virtual threads can share a small pool of OS threads, since an idle (blocked/waiting) virtual thread doesn\'t consume an OS thread the way a traditional thread does.' },
    { question: 'What kind of workload benefits most from virtual threads?', answer: 'I/O-bound, highly concurrent workloads — like a server handling many simultaneous blocking network requests — not CPU-bound computation, where virtual threads offer no inherent speedup.' },
    { question: 'What is "pinning" in the context of virtual threads?', answer: 'A situation where a virtual thread can\'t yield its underlying OS thread while blocked — commonly caused by holding a traditional synchronized block around blocking I/O — which reduces the scalability benefit virtual threads are meant to provide.' },
    { question: 'What are record patterns, and how do they extend pattern matching?', answer: 'They let you destructure a record\'s components directly within a pattern match (e.g., in a switch case), extracting individual fields like x and y from a Point in one step, rather than matching the type and then manually calling accessor methods.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create and start a virtual thread that prints a message, joining on it before the program exits.' },
    { difficulty: 'Medium', prompt: 'Write a switch expression using pattern matching over a sealed Shape hierarchy (Circle, Square records) that returns a description string for each type.' },
    { difficulty: 'Hard', prompt: 'Research the difference in scalability between starting 100,000 platform threads versus 100,000 virtual threads, and summarize your findings in a short paragraph explaining why the difference exists.' },
  ],

  summary:
    'Java 21\'s headline feature is virtual threads, making highly concurrent, simple blocking-style code ' +
    'practical at scale. Pattern matching for switch and record patterns extend Java 17\'s pattern matching ' +
    'further, and sequenced collections unify first/last/reverse access across collection types.',
};
