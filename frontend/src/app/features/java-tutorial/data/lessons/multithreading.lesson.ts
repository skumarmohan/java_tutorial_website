import { Lesson } from '../../../../core/models/lesson.model';

export const MULTITHREADING_LESSON: Lesson = {
  slug: 'multithreading',
  title: 'Java Multithreading',
  seoDescription: 'An introduction to threads in Java: creating threads, the Runnable interface, and basic thread safety.',

  introduction:
    'A thread is an independent path of execution within a program. Multithreading lets a Java program do ' +
    'multiple things seemingly at once — like downloading a file while keeping a user interface responsive.',

  whyItMatters:
    'Modern hardware has multiple CPU cores, and many real-world tasks (network calls, file I/O) spend most of ' +
    'their time waiting rather than computing. Threads let a program make use of that idle time and available ' +
    'cores instead of doing everything strictly one step at a time.',

  explanation: [
    'Every Java program already runs on at least one thread — the "main" thread. You create additional threads ' +
    'either by extending the Thread class and overriding its run() method, or (the more common, flexible ' +
    'approach) by implementing the Runnable interface and passing it to a new Thread.',
    'Calling a thread\'s `start()` method schedules it to run concurrently — calling `run()` directly instead ' +
    'would just execute it like a normal method call on the current thread, defeating the purpose.',
    'When multiple threads read and write shared data at the same time, you can get a "race condition" — an ' +
    'unpredictable result depending on the exact timing of each thread. The `synchronized` keyword ensures only ' +
    'one thread can execute a block of code (or method) at a time, preventing that kind of corruption.',
    'Modern Java code often reaches for higher-level tools like ExecutorService (for managing a pool of ' +
    'reusable threads) rather than creating raw Thread objects directly — worth knowing exists as you go ' +
    'further, even though this lesson focuses on the fundamentals.',
    'A race condition on something as simple as `count++` happens because that single line is actually three ' +
    'separate steps at the machine level: read count, add one, write it back. If two threads interleave those ' +
    'steps, one thread\'s update can be silently lost — exactly the kind of bug `synchronized` prevents by only ' +
    'letting one thread execute all three steps at a time.',
  ],

  analogy:
    'Threads are like multiple cashiers working in the same store. Each cashier (thread) can serve a different ' +
    'customer independently and simultaneously, speeding up the store overall. But if two cashiers try to grab ' +
    'the same item from a single shared shelf (shared mutable data) at the exact same moment without any ' +
    'coordination, they can bump into each other and something can go wrong. A "synchronized" till is like ' +
    'requiring cashiers to take turns accessing one specific shared drawer, one at a time, so nothing gets lost ' +
    'or double-counted.',

  syntax: {
    code: 'Thread t = new Thread(() -> {\n    // code to run on a new thread\n});\nt.start();',
    language: 'java',
  },

  examples: [
    {
      title: 'Creating a Thread with Runnable',
      code:
        'public class ThreadDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Runnable task = () -> {\n' +
        '            System.out.println("Running on: " + Thread.currentThread().getName());\n' +
        '        };\n' +
        '\n' +
        '        Thread thread = new Thread(task);\n' +
        '        thread.start();\n' +
        '    }\n' +
        '}',
      output: 'Running on: Thread-0',
      explanation: 'The lambda is the Runnable\'s run() body; start() runs it on a new thread rather than the main thread.',
      lineByLine: [
        '`Runnable task = () -> { ... };` — defines the code that should run on a separate thread, as a Runnable.',
        '`Thread thread = new Thread(task);` — wraps the Runnable in a new Thread object; nothing runs yet.',
        '`thread.start();` — actually schedules the thread to run concurrently. Calling task.run() directly instead would run it on the current thread, not a new one.',
      ],
    },
    {
      title: 'Using synchronized to Protect Shared State',
      code:
        'public class Counter {\n' +
        '    private int count = 0;\n' +
        '\n' +
        '    public synchronized void increment() {\n' +
        '        count++;\n' +
        '    }\n' +
        '\n' +
        '    public int getCount() {\n' +
        '        return count;\n' +
        '    }\n' +
        '}',
      explanation: 'synchronized ensures only one thread can execute increment() at a time, preventing lost updates when multiple threads call it concurrently.',
    },
  ],

  commonMistakes: [
    'Calling run() directly instead of start(), which executes the code synchronously instead of on a new thread.',
    'Sharing mutable state between threads without synchronization, causing race conditions that are hard to reproduce and debug.',
    'Creating a new Thread for every small task instead of reusing a thread pool (ExecutorService), which wastes resources under load.',
    'Assuming thread execution order is predictable — the OS scheduler decides the actual interleaving, which can vary between runs.',
  ],

  tips: [
    'Prefer Runnable (often as a lambda) over extending Thread — it keeps your class free to extend something else if needed.',
    'Keep synchronized blocks as small as possible — locking too much code hurts concurrency without adding safety.',
    'For anything beyond a couple of simple threads, look into java.util.concurrent (ExecutorService, CompletableFuture) rather than managing raw Thread objects by hand.',
  ],

  bestPractices: [
    'Minimize shared mutable state between threads wherever possible — immutable objects can be freely shared across threads with no synchronization needed at all.',
    'Prefer higher-level java.util.concurrent utilities (ExecutorService, ConcurrentHashMap, AtomicInteger) over hand-rolled synchronized blocks whenever they fit the problem.',
    'Always give threads clear names (via the Thread constructor) in real applications — it makes debugging and log analysis dramatically easier.',
  ],

  performanceNotes:
    'Creating an OS-backed thread has real overhead (memory for its stack, kernel scheduling cost), so creating ' +
    'thousands of raw Thread objects for short-lived tasks doesn\'t scale well — this is exactly the problem a ' +
    'reusable ExecutorService thread pool solves, and why Java 21\'s virtual threads (covered in the Java 21 ' +
    'Features lesson) were introduced as a lighter-weight alternative for highly concurrent, I/O-bound workloads.',

  interviewQuestions: [
    { question: 'What is the difference between calling run() and start() on a Thread?', answer: 'start() schedules the thread to run concurrently on a new thread of execution. Calling run() directly just executes it like an ordinary method call on the current thread, with no concurrency at all.' },
    { question: 'What is a race condition?', answer: 'An unpredictable outcome caused by multiple threads accessing and modifying shared mutable state without coordination, where the result depends on the exact, non-deterministic timing of each thread\'s operations.' },
    { question: 'What does the synchronized keyword do?', answer: 'It ensures only one thread can execute a given synchronized method or block at a time (on the same lock/object), preventing race conditions on the shared state it protects.' },
    { question: 'Why is `count++` not thread-safe even though it looks like one operation?', answer: 'It\'s actually three separate steps (read, increment, write) at the machine level. If two threads interleave those steps without synchronization, one thread\'s update can be overwritten and lost.' },
    { question: 'Why would you use an ExecutorService instead of creating Thread objects directly?', answer: 'Creating a new OS thread per task has real overhead and doesn\'t scale well under load. An ExecutorService manages a reusable pool of threads, reducing that overhead and giving more control over concurrency limits.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create and start two threads, each printing its own name and a short message.' },
    { difficulty: 'Medium', prompt: 'Write a Counter class with an unsynchronized increment() method, run many threads incrementing it concurrently, and observe the final count is often less than expected due to a race condition.' },
    { difficulty: 'Hard', prompt: 'Fix your Counter class from the previous exercise by adding synchronized, rerun the same concurrent test, and confirm the final count is now always correct. Explain in writing why the synchronized version behaves differently.' },
  ],

  summary:
    'Threads let a Java program run code concurrently. Implement Runnable and call start() to run work on a ' +
    'new thread, and use synchronized to protect shared, mutable state from race conditions when multiple ' +
    'threads access it.',
};
