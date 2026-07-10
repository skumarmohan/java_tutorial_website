import { Lesson } from '../../../../core/models/lesson.model';

export const STREAMS_LESSON: Lesson = {
  slug: 'streams',
  title: 'Java Streams',
  seoDescription: 'The Java Streams API for functional-style processing of collections: filter, map, and collect explained.',

  introduction:
    'The Streams API, introduced in Java 8, lets you process collections in a functional, declarative style — ' +
    'describing what transformation you want rather than manually writing loops to achieve it.',

  whyItMatters:
    'Filtering, transforming, and summarizing collections is one of the most common things real programs do. ' +
    'Streams make that code shorter, more readable, and easier to chain into a pipeline than the equivalent ' +
    'hand-written loops.',

  explanation: [
    'You get a stream from a collection by calling .stream() on it. A stream doesn\'t store data itself — it\'s ' +
    'a pipeline that describes operations to apply to the data as it flows through.',
    'Intermediate operations like filter() (keep elements matching a condition) and map() (transform each ' +
    'element) return a new stream, so they can be chained together. None of them actually run until a terminal ' +
    'operation is called.',
    'Terminal operations like collect(), forEach(), and count() trigger the pipeline to actually execute and ' +
    'produce a result. Streams are lazy: nothing happens until a terminal operation asks for a result.',
    'Streams rely heavily on the lambda expressions and functional interfaces covered in the previous two ' +
    'lessons — filter() takes a Predicate, map() takes a Function, and so on.',
    'Streams can also run in parallel with parallelStream() instead of stream(), splitting the work across ' +
    'multiple CPU cores automatically. It\'s tempting, but only actually helps for large datasets with real ' +
    'per-element computation — for small collections, the overhead of coordinating threads usually outweighs ' +
    'any benefit.',
  ],

  analogy:
    'A stream pipeline is like a factory assembly line. Raw materials (the collection) enter one end. Each ' +
    'station along the line (an intermediate operation like filter() or map()) does one specific job — removing ' +
    'defective parts, reshaping a component — and passes its output to the next station. Nothing actually moves ' +
    'down the line, though, until the final packaging station (a terminal operation) starts pulling items ' +
    'through the whole process.',

  syntax: {
    code: 'collection.stream()\n    .filter(condition)\n    .map(transformation)\n    .collect(Collectors.toList());',
    language: 'java',
  },

  examples: [
    {
      title: 'Filter and Map',
      code:
        'import java.util.List;\n' +
        'import java.util.stream.Collectors;\n' +
        '\n' +
        'public class StreamDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);\n' +
        '\n' +
        '        List<Integer> result = numbers.stream()\n' +
        '            .filter(n -> n % 2 == 0)\n' +
        '            .map(n -> n * n)\n' +
        '            .collect(Collectors.toList());\n' +
        '\n' +
        '        System.out.println(result);\n' +
        '    }\n' +
        '}',
      output: '[4, 16, 36]',
      explanation: 'filter() keeps only even numbers, map() squares each one, and collect() gathers the results into a List.',
      lineByLine: [
        '`numbers.stream()` — starts a pipeline over the numbers list.',
        '`.filter(n -> n % 2 == 0)` — keeps only 2, 4, 6, discarding the odd numbers.',
        '`.map(n -> n * n)` — transforms each remaining number into its square: 4, 16, 36.',
        '`.collect(Collectors.toList())` — the terminal operation; triggers the pipeline and gathers results into a List.',
      ],
    },
    {
      title: 'Counting and Summarizing',
      code:
        'import java.util.List;\n' +
        '\n' +
        'public class StreamSummaryDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        List<String> names = List.of("Alex", "Sam", "Jordan", "Kai");\n' +
        '\n' +
        '        long longNames = names.stream()\n' +
        '            .filter(name -> name.length() > 3)\n' +
        '            .count();\n' +
        '\n' +
        '        System.out.println(longNames);\n' +
        '    }\n' +
        '}',
      output: '3',
      explanation: 'count() is a terminal operation that triggers the pipeline and returns how many elements matched.',
    },
  ],

  commonMistakes: [
    'Trying to reuse a stream after a terminal operation has run — a stream can only be consumed once.',
    'Forgetting that intermediate operations (filter, map) do nothing on their own until a terminal operation (collect, count, forEach) is called.',
    'Using streams for a trivial single-pass loop where a plain for-each would be just as clear and slightly faster.',
    'Overusing streams for deeply nested, hard-to-read pipelines instead of breaking the logic into named steps.',
  ],

  tips: [
    'Chain filter() before map() when possible — filtering first means fewer elements need transforming.',
    'Use method references (like String::toUpperCase) instead of a lambda when a lambda would just call one existing method.',
    'If a stream pipeline is getting hard to read, it\'s fine to fall back to a regular loop — streams are a tool, not a mandate.',
  ],

  bestPractices: [
    'Avoid side effects inside stream lambdas (like modifying an outer variable) — express the transformation purely through the pipeline\'s operations instead.',
    'Only reach for parallelStream() after profiling shows a genuine bottleneck on a large dataset — for most collections, the sequential stream() is simpler and just as fast.',
    'Give intermediate variables meaningful names when a pipeline gets long, or split it into named helper methods, rather than one giant chained expression.',
  ],

  performanceNotes:
    'For small to medium collections, a well-written loop and an equivalent stream pipeline perform ' +
    'similarly — streams add a small amount of overhead from lambda invocation and boxing (for primitive ' +
    'streams like IntStream, this is avoided). The real performance lever is parallelStream(), which only pays ' +
    'off for large datasets with enough per-element work to justify the cost of splitting and coordinating ' +
    'across threads.',

  interviewQuestions: [
    { question: 'What is the difference between an intermediate and a terminal stream operation?', answer: 'Intermediate operations (filter, map, sorted) return a new stream and are lazy — they don\'t execute until a terminal operation is invoked. Terminal operations (collect, forEach, count) trigger the pipeline to actually run and produce a result.' },
    { question: 'Can a stream be reused after a terminal operation has been called on it?', answer: 'No — a stream can only be consumed once. Calling another operation on an already-consumed stream throws an IllegalStateException.' },
    { question: 'Why are streams described as "lazy"?', answer: 'Because intermediate operations just build up a description of the pipeline without doing any work — actual processing only happens once a terminal operation pulls elements through the whole chain.' },
    { question: 'When would you use parallelStream() instead of stream()?', answer: 'Only for large collections with meaningful per-element computation, where splitting the work across multiple CPU cores outweighs the overhead of coordinating threads — for small collections or trivial operations, sequential stream() is usually faster.' },
    { question: 'What functional interfaces do filter() and map() rely on?', answer: 'filter() takes a Predicate<T> (returns a boolean), and map() takes a Function<T, R> (transforms a T into an R).' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Given a List<Integer>, use a stream to filter out numbers less than 10 and print the result.' },
    { difficulty: 'Medium', prompt: 'Given a List<String> of words, use a stream to convert them all to uppercase and join them into a single comma-separated String using Collectors.joining(", ").' },
    { difficulty: 'Hard', prompt: 'Given a List<String> names, use streams to group them by their first letter into a Map<Character, List<String>> using Collectors.groupingBy(), and print the resulting map.' },
  ],

  summary:
    'Streams let you process collections declaratively: chain intermediate operations like filter() and map(), ' +
    'then trigger the pipeline with a terminal operation like collect() or count(). They build directly on ' +
    'lambdas and functional interfaces from the previous two lessons.',
};
