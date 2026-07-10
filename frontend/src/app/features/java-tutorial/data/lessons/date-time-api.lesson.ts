import { Lesson } from '../../../../core/models/lesson.model';

export const DATE_TIME_API_LESSON: Lesson = {
  slug: 'date-time-api',
  title: 'Java Date and Time API',
  seoDescription: 'The modern java.time API in Java: LocalDate, LocalDateTime, and Duration, replacing the old Date and Calendar classes.',

  introduction:
    'Java 8 introduced a completely new date and time API in the java.time package, replacing the old, ' +
    'famously error-prone Date and Calendar classes.',

  whyItMatters:
    'Dates and times are everywhere in real applications — timestamps, deadlines, schedules — and the old API ' +
    'was mutable and confusing enough that it caused frequent bugs. The modern API is immutable and much ' +
    'harder to misuse.',

  explanation: [
    'LocalDate represents a date with no time or time zone (like a birthday). LocalTime represents a time with ' +
    'no date. LocalDateTime combines both. All three are immutable — every "modification" method actually ' +
    'returns a new object rather than changing the original.',
    'Duration represents an amount of time (hours, minutes, seconds) between two instants, while Period ' +
    'represents an amount of time in date-based units (years, months, days) — useful for calculating someone\'s ' +
    'age or the days remaining until a deadline.',
    'Because these classes are immutable, common bugs from the old API — like a method silently mutating a ' +
    'Date object another part of the program still held a reference to — simply can\'t happen with java.time.',
    'For anything involving a specific geographic time zone (scheduling a meeting across regions, storing a ' +
    'server timestamp that needs to display correctly worldwide), use ZonedDateTime or, more commonly for ' +
    'storage, Instant — a point in time on the UTC timeline, independent of any particular time zone.',
  ],

  analogy:
    'The old Date/Calendar classes were like a whiteboard anyone could walk up to and erase or rewrite at any ' +
    'time — you could never be fully sure the date you were looking at hadn\'t just been changed by another ' +
    'part of the program. java.time classes are more like a printed, dated photograph: LocalDate.of(2026, 7, ' +
    '10) is a fixed, permanent record of that exact date. If you want a different date, methods like plusDays() ' +
    'don\'t alter the photo — they hand you a brand new photograph instead, leaving the original untouched.',

  syntax: {
    code: 'LocalDate today = LocalDate.now();\nLocalDate future = today.plusDays(10);',
    language: 'java',
  },

  examples: [
    {
      title: 'Working with LocalDate',
      code:
        'import java.time.LocalDate;\n' +
        '\n' +
        'public class DateDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        LocalDate today = LocalDate.of(2026, 7, 10);\n' +
        '        LocalDate nextWeek = today.plusWeeks(1);\n' +
        '\n' +
        '        System.out.println("Today: " + today);\n' +
        '        System.out.println("Next week: " + nextWeek);\n' +
        '    }\n' +
        '}',
      output: 'Today: 2026-07-10\nNext week: 2026-07-17',
      explanation: 'plusWeeks() returns a brand new LocalDate — today itself is never modified.',
      lineByLine: [
        '`LocalDate today = LocalDate.of(2026, 7, 10);` — creates an immutable date object for July 10, 2026.',
        '`LocalDate nextWeek = today.plusWeeks(1);` — creates a new LocalDate one week later; today is unaffected.',
        'Printing both shows two distinct, correct dates.',
      ],
    },
    {
      title: 'Measuring a Duration',
      code:
        'import java.time.LocalTime;\n' +
        'import java.time.Duration;\n' +
        '\n' +
        'public class DurationDemo {\n' +
        '    public static void main(String[] args) {\n' +
        '        LocalTime start = LocalTime.of(9, 0);\n' +
        '        LocalTime end = LocalTime.of(17, 30);\n' +
        '\n' +
        '        Duration worked = Duration.between(start, end);\n' +
        '        System.out.println(worked.toHours() + " hours");\n' +
        '    }\n' +
        '}',
      output: '8 hours',
      explanation: 'Duration.between() computes the elapsed time between two LocalTime values.',
    },
  ],

  commonMistakes: [
    'Reaching for the old java.util.Date or Calendar classes out of habit in new code — prefer java.time for everything going forward.',
    'Expecting a method like plusDays() to mutate the original object — it returns a new instance, so the result must be captured (`date = date.plusDays(1);`).',
    'Mixing up Duration (time-based: hours/minutes/seconds) with Period (date-based: years/months/days).',
    'Ignoring time zones when they actually matter — use ZonedDateTime instead of LocalDateTime for anything that must account for a specific time zone.',
  ],

  tips: [
    'Use LocalDate for dates with no time component, LocalDateTime when you need both, and ZonedDateTime when time zone matters.',
    'Remember every java.time object is immutable — always use the return value of methods like plusDays(), minusHours(), etc.',
    'Use DateTimeFormatter to control how dates and times are displayed as text.',
  ],

  bestPractices: [
    'Store timestamps as Instant (or in UTC) in databases and APIs, and only convert to a specific time zone (ZonedDateTime) when displaying to a user.',
    'Prefer Period for human-facing date differences ("2 years, 3 months") and Duration for machine-facing time spans ("PT2H30M").',
    'Never parse or format dates with manual string manipulation — always use DateTimeFormatter, which correctly handles locale and edge cases.',
  ],

  performanceNotes:
    'java.time classes are immutable value types, which the JVM handles efficiently, and their operations ' +
    '(plusDays, between, and so on) are simple arithmetic — there\'s no meaningful performance concern for ' +
    'typical application use, even at moderately high volume.',

  interviewQuestions: [
    { question: 'Why did Java 8 introduce a new date/time API instead of fixing the old one?', answer: 'The old Date and Calendar classes were mutable, had confusing method behavior (like months being zero-indexed), and were widely considered error-prone. A new, immutable, more consistent API (java.time) was introduced instead of trying to patch the old design.' },
    { question: 'What is the difference between LocalDate, LocalDateTime, and ZonedDateTime?', answer: 'LocalDate holds a date with no time or time zone. LocalDateTime holds both a date and time, still with no time zone. ZonedDateTime holds a date, time, and an explicit time zone.' },
    { question: 'What is the difference between Duration and Period?', answer: 'Duration measures time-based amounts (hours, minutes, seconds), typically between two instants. Period measures date-based amounts (years, months, days), typically between two dates.' },
    { question: 'Why are java.time classes immutable, and what problem does that solve?', answer: 'Every "modification" method returns a new object instead of changing the original. This prevents a whole class of bugs where one part of a program unexpectedly mutates a date object another part still holds a reference to.' },
    { question: 'What is Instant, and when would you use it?', answer: 'Instant represents a single point on the UTC timeline, independent of any time zone. It\'s commonly used for storing timestamps (like "when was this record created") that should later be displayed in whatever time zone is appropriate for the viewer.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Create a LocalDate for your next birthday and print how it looks by default.' },
    { difficulty: 'Medium', prompt: 'Given two LocalDate values, calculate and print the number of days between them using Period or ChronoUnit.' },
    { difficulty: 'Hard', prompt: 'Create a LocalDateTime, convert it to a ZonedDateTime in two different time zones (e.g., "America/New_York" and "Asia/Tokyo"), and print both, explaining why the wall-clock time differs even though it\'s the same instant.' },
  ],

  summary:
    'The java.time package (LocalDate, LocalDateTime, Duration, Period) is the modern, immutable way to work ' +
    'with dates and times in Java, replacing the old mutable and error-prone Date and Calendar classes.',
};
