import { Lesson } from '../../../../core/models/lesson.model';

export const COLLECTIONS_LESSON: Lesson = {
  slug: 'collections',
  title: 'Java Collections',
  seoDescription: 'An introduction to the Java Collections Framework: List, Set, and Map, with ArrayList and HashMap examples.',

  introduction:
    'The Java Collections Framework provides resizable, ready-made data structures — lists, sets, and maps — ' +
    'that solve the "fixed-size array" limitation covered in the Arrays lesson.',

  whyItMatters:
    'Almost every real program needs to store a group of items whose size isn\'t known ahead of time, look ' +
    'things up by key, or avoid duplicates. Collections cover all of these needs without you writing the ' +
    'underlying data structure yourself.',

  explanation: [
    'A List (most commonly ArrayList) is an ordered, resizable sequence of elements that allows duplicates — ' +
    'think of it as an array that can grow and shrink, with built-in methods to add, remove, and search.',
    'A Set (most commonly HashSet) stores unique elements with no guaranteed order — adding a duplicate value ' +
    'has no effect, since a set can\'t contain the same element twice.',
    'A Map (most commonly HashMap) stores key-value pairs, letting you look up a value quickly by its key ' +
    'instead of searching through a list. Keys are unique; adding a value with an existing key replaces the ' +
    'old value.',
    'All three are interfaces with multiple implementations offering different trade-offs — ArrayList is fast ' +
    'for indexed access, LinkedList is fast for inserting/removing at the ends, TreeMap keeps keys sorted, and ' +
    'so on. ArrayList and HashMap cover the vast majority of everyday use cases.',
    'For a custom class to work correctly as a HashSet element or a HashMap key, it needs properly overridden ' +
    'equals() and hashCode() methods. Without them, Java falls back to identity comparison (are they the exact ' +
    'same object?), which usually isn\'t what you want when checking whether two logically-equal objects are ' +
    '"the same" for the collection\'s purposes.',
  ],

  analogy:
    'A List is like a numbered coat rack — items go in order, and duplicates are fine (two blue coats can hang ' +
    'side by side). A Set is like a guest list at a private event — everyone on it is unique, and trying to add ' +
    'the same name twice just leaves the list unchanged. A Map is like a set of labeled filing cabinet drawers ' +
    '— you don\'t search drawer by drawer; you go directly to the drawer labeled with the key you\'re looking ' +
    'for.',

  syntax: {
    code: 'List<Type> list = new ArrayList<>();\nMap<KeyType, ValueType> map = new HashMap<>();',
    language: 'java',
  },

  examples: [
    {
      title: 'ArrayList Basics',
      code:
        'import java.util.ArrayList;\n' +
        'import java.util.List;\n' +
        '\n' +
        'public class ListDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        List<String> fruits = new ArrayList<>();\n' +
        '        fruits.add("Apple");\n' +
        '        fruits.add("Banana");\n' +
        '        fruits.remove("Apple");\n' +
        '\n' +
        '        System.out.println(fruits);\n' +
        '        System.out.println("Size: " + fruits.size());\n' +
        '    }\n' +
        '}',
      output: '[Banana]\nSize: 1',
      explanation: 'Unlike an array, an ArrayList grows and shrinks as you add() and remove() elements.',
      lineByLine: [
        '`List<String> fruits = new ArrayList<>();` — declares a List (interface) backed by an ArrayList (implementation).',
        '`fruits.add("Apple"); fruits.add("Banana");` — appends two elements, growing the list automatically.',
        '`fruits.remove("Apple");` — removes the first element equal to "Apple", shrinking the list to size 1.',
      ],
    },
    {
      title: 'HashMap Basics',
      code:
        'import java.util.HashMap;\n' +
        'import java.util.Map;\n' +
        '\n' +
        'public class MapDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        Map<String, Integer> ages = new HashMap<>();\n' +
        '        ages.put("Alex", 25);\n' +
        '        ages.put("Sam", 30);\n' +
        '\n' +
        '        System.out.println(ages.get("Alex"));\n' +
        '        System.out.println(ages.containsKey("Sam"));\n' +
        '    }\n' +
        '}',
      output: '25\ntrue',
      explanation: 'get() looks up a value by key in constant time on average, far faster than searching a list.',
    },
  ],

  commonMistakes: [
    'Using a raw type (`List list = new ArrayList();`) instead of a generic type (`List<String>`), losing compile-time type safety.',
    'Modifying a List while iterating over it with a for-each loop, which throws a ConcurrentModificationException.',
    'Expecting HashMap or HashSet to preserve insertion order — use LinkedHashMap/LinkedHashSet if order matters.',
    'Calling .get() on a HashMap for a missing key and being surprised it returns null instead of throwing an exception.',
  ],

  tips: [
    'Program against the interface type (List, Map, Set) on the left-hand side, and a specific implementation (ArrayList, HashMap) on the right — it keeps code flexible about which implementation is used.',
    'Use an Iterator explicitly (or removeIf()) instead of a for-each loop when you need to remove elements while iterating.',
    'Reach for LinkedHashMap when you need HashMap\'s speed but also need to remember insertion order.',
  ],

  bestPractices: [
    'Override both equals() and hashCode() together whenever a custom class will be stored in a HashSet or used as a HashMap key — overriding just one breaks the contract between them.',
    'Use getOrDefault() or computeIfAbsent() on Map instead of manually checking containsKey() followed by get(), for both cleaner and more efficient code.',
    'Choose the narrowest collection interface that fits your needs (Set if uniqueness matters, List if order and duplicates matter) rather than defaulting to List everywhere.',
  ],

  performanceNotes:
    'ArrayList offers constant-time indexed access but linear-time insertion/removal in the middle. LinkedList ' +
    'offers constant-time insertion/removal at the ends but linear-time indexed access. HashMap and HashSet ' +
    'offer average constant-time lookup, insertion, and removal, but with no ordering guarantee and some memory ' +
    'overhead per entry compared to a raw array.',

  interviewQuestions: [
    { question: 'What is the difference between List, Set, and Map?', answer: 'List is an ordered, resizable sequence allowing duplicates. Set stores only unique elements with no guaranteed order. Map stores key-value pairs with unique keys, allowing fast lookup by key.' },
    { question: 'Why does a custom class need equals() and hashCode() to work correctly in a HashSet or as a HashMap key?', answer: 'Without them, Java uses identity comparison (the default Object behavior), so two objects with identical logical content would be treated as different, breaking uniqueness checks and lookups.' },
    { question: 'What happens if you call get() on a HashMap with a key that doesn\'t exist?', answer: 'It returns null rather than throwing an exception — this is a common source of NullPointerExceptions if the caller doesn\'t check for null or use a method like getOrDefault().' },
    { question: 'Why does modifying a List while iterating over it with a for-each loop throw an exception?', answer: 'It throws a ConcurrentModificationException because the for-each loop uses an Iterator internally, and most collection implementations detect structural modification during iteration and fail fast rather than risk undefined behavior.' },
    { question: 'What is the difference between HashMap and LinkedHashMap?', answer: 'Both offer fast average-case lookup, but LinkedHashMap additionally preserves insertion order when iterating, while HashMap makes no ordering guarantee at all.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create an ArrayList of Strings, add five items, remove one, and print the final list and its size.' },
    { difficulty: 'Medium', prompt: 'Create a HashMap mapping product names to prices, then write code that prints "not found" for a missing product instead of null, using getOrDefault().' },
    { difficulty: 'Hard', prompt: 'Create a simple class Point with x and y fields, put two logically-equal Point objects into a HashSet without overriding equals()/hashCode(), observe both are kept, then add proper overrides and show the set correctly treats them as one.' },
  ],

  summary:
    'List, Set, and Map are the three core collection types: ordered and duplicate-friendly, unique-only, and ' +
    'key-value lookup, respectively. ArrayList and HashMap are the default go-to implementations for List and ' +
    'Map in most everyday code.',
};
