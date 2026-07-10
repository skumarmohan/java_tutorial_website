import { JavaTopic } from '../models/java-topic.model';

// Single source of truth for the full Java tutorial catalog: 39 topics,
// used by SearchService, SidebarNav (Module 4), and the homepage sections
// below so no topic list is ever hand-duplicated across components.
export const JAVA_TOPICS: JavaTopic[] = [
  { label: 'Introduction', slug: 'introduction', group: 'Getting Started', icon: '👋', description: 'What Java is and why it exists.' },
  { label: 'Java History', slug: 'history', group: 'Getting Started', icon: '📜', description: 'From Oak to Java 21.' },
  { label: 'Features', slug: 'features', group: 'Getting Started', icon: '✨', description: 'What makes Java popular.' },
  { label: 'Installation', slug: 'installation', group: 'Getting Started', icon: '⬇️', description: 'Set up the JDK on your machine.' },
  { label: 'JDK vs JRE vs JVM', slug: 'jdk-vs-jre-vs-jvm', group: 'Getting Started', icon: '⚙️', description: 'The three letters, explained.' },
  { label: 'Hello World', slug: 'hello-world', group: 'Getting Started', icon: '🚀', description: 'Your first Java program.' },

  { label: 'Variables', slug: 'variables', group: 'Basics', icon: '📦', description: 'Storing data in Java.' },
  { label: 'Data Types', slug: 'data-types', group: 'Basics', icon: '🔢', description: 'Primitive and reference types.' },
  { label: 'Operators', slug: 'operators', group: 'Basics', icon: '➕', description: 'Arithmetic, logical, and more.' },
  { label: 'Input Output', slug: 'input-output', group: 'Basics', icon: '⌨️', description: 'Reading input, printing output.' },
  { label: 'Type Casting', slug: 'type-casting', group: 'Basics', icon: '🔁', description: 'Converting between types.' },

  { label: 'If Else', slug: 'if-else', group: 'Control Flow', icon: '🔀', description: 'Conditional branching.' },
  { label: 'Switch', slug: 'switch', group: 'Control Flow', icon: '🎛️', description: 'Multi-way branching.' },
  { label: 'Loops', slug: 'loops', group: 'Control Flow', icon: '🔄', description: 'for, while, and do-while.' },
  { label: 'Arrays', slug: 'arrays', group: 'Control Flow', icon: '🗂️', description: 'Fixed-size collections of data.' },
  { label: 'Methods', slug: 'methods', group: 'Control Flow', icon: '🧩', description: 'Reusable blocks of logic.' },
  { label: 'Constructors', slug: 'constructors', group: 'Control Flow', icon: '🏗️', description: 'Initializing new objects.' },

  { label: 'OOP', slug: 'oop', group: 'Object-Oriented Programming', icon: '🧱', description: 'Object-oriented programming in Java.' },
  { label: 'Inheritance', slug: 'inheritance', group: 'Object-Oriented Programming', icon: '👪', description: 'Reusing behavior across classes.' },
  { label: 'Polymorphism', slug: 'polymorphism', group: 'Object-Oriented Programming', icon: '🎭', description: 'One interface, many forms.' },
  { label: 'Abstraction', slug: 'abstraction', group: 'Object-Oriented Programming', icon: '🫥', description: 'Hiding implementation detail.' },
  { label: 'Encapsulation', slug: 'encapsulation', group: 'Object-Oriented Programming', icon: '🔒', description: 'Protecting internal state.' },
  { label: 'Interfaces', slug: 'interfaces', group: 'Object-Oriented Programming', icon: '🔌', description: 'Defining contracts for classes.' },
  { label: 'Packages', slug: 'packages', group: 'Object-Oriented Programming', icon: '📁', description: 'Organizing related classes.' },

  { label: 'Exception Handling', slug: 'exception-handling', group: 'Core APIs', icon: '🛑', description: 'Handling errors gracefully.' },
  { label: 'Collections', slug: 'collections', group: 'Core APIs', icon: '🗃️', description: 'Lists, sets, maps, and more.' },
  { label: 'Generics', slug: 'generics', group: 'Core APIs', icon: '🧬', description: 'Type-safe reusable code.' },
  { label: 'Multithreading', slug: 'multithreading', group: 'Core APIs', icon: '🧵', description: 'Running code concurrently.' },
  { label: 'File Handling', slug: 'file-handling', group: 'Core APIs', icon: '📄', description: 'Reading and writing files.' },
  { label: 'Streams', slug: 'streams', group: 'Core APIs', icon: '🌊', description: 'Functional-style data processing.' },
  { label: 'Lambda', slug: 'lambda', group: 'Core APIs', icon: 'λ', description: 'Anonymous functions in Java.' },
  { label: 'Functional Interface', slug: 'functional-interface', group: 'Core APIs', icon: '🎯', description: 'Single-method interfaces.' },
  { label: 'Date Time API', slug: 'date-time-api', group: 'Core APIs', icon: '📅', description: 'Modern date and time handling.' },
  { label: 'JDBC', slug: 'jdbc', group: 'Core APIs', icon: '🗄️', description: 'Connecting Java to databases.' },

  { label: 'Java 8 Features', slug: 'java8-features', group: 'Modern Java', icon: '8️⃣', description: 'Lambdas, streams, and Optional.' },
  { label: 'Java 11 Features', slug: 'java11-features', group: 'Modern Java', icon: '🔟', description: 'var, HTTP Client, and more.' },
  { label: 'Java 17 Features', slug: 'java17-features', group: 'Modern Java', icon: '🆕', description: 'Sealed classes, records, pattern matching.' },
  { label: 'Java 21 Features', slug: 'java21-features', group: 'Modern Java', icon: '⚡', description: 'Virtual threads and beyond.' },

  { label: 'Best Practices', slug: 'best-practices', group: 'Wrap-Up', icon: '✅', description: 'Writing clean, idiomatic Java.' },
  { label: 'Interview Questions', slug: 'interview-questions', group: 'Wrap-Up', icon: '💼', description: 'Common Java interview prep.' },
];

export interface JavaTopicGroup {
  name: string;
  topics: JavaTopic[];
}

// Groups topics by JavaTopic.group, preserving JAVA_TOPICS order. Shared by
// SidebarNav (Module 4) and the homepage Roadmap so grouping logic lives in
// exactly one place.
export function groupJavaTopics(topics: JavaTopic[] = JAVA_TOPICS): JavaTopicGroup[] {
  const groups: JavaTopicGroup[] = [];
  const indexByName = new Map<string, number>();

  for (const topic of topics) {
    let index = indexByName.get(topic.group);
    if (index === undefined) {
      index = groups.length;
      indexByName.set(topic.group, index);
      groups.push({ name: topic.group, topics: [] });
    }
    groups[index].topics.push(topic);
  }

  return groups;
}
