import { Lesson } from '../../../core/models/lesson.model';
import { INTRODUCTION_LESSON } from './lessons/introduction.lesson';
import { HISTORY_LESSON } from './lessons/history.lesson';
import { FEATURES_LESSON } from './lessons/features.lesson';
import { INSTALLATION_LESSON } from './lessons/installation.lesson';
import { JDK_VS_JRE_VS_JVM_LESSON } from './lessons/jdk-vs-jre-vs-jvm.lesson';
import { HELLO_WORLD_LESSON } from './lessons/hello-world.lesson';
import { VARIABLES_LESSON } from './lessons/variables.lesson';
import { DATA_TYPES_LESSON } from './lessons/data-types.lesson';
import { OPERATORS_LESSON } from './lessons/operators.lesson';
import { INPUT_OUTPUT_LESSON } from './lessons/input-output.lesson';
import { TYPE_CASTING_LESSON } from './lessons/type-casting.lesson';
import { IF_ELSE_LESSON } from './lessons/if-else.lesson';
import { SWITCH_LESSON } from './lessons/switch.lesson';
import { LOOPS_LESSON } from './lessons/loops.lesson';
import { ARRAYS_LESSON } from './lessons/arrays.lesson';
import { METHODS_LESSON } from './lessons/methods.lesson';
import { CONSTRUCTORS_LESSON } from './lessons/constructors.lesson';
import { OOP_LESSON } from './lessons/oop.lesson';
import { INHERITANCE_LESSON } from './lessons/inheritance.lesson';
import { POLYMORPHISM_LESSON } from './lessons/polymorphism.lesson';
import { ABSTRACTION_LESSON } from './lessons/abstraction.lesson';
import { ENCAPSULATION_LESSON } from './lessons/encapsulation.lesson';
import { INTERFACES_LESSON } from './lessons/interfaces.lesson';
import { PACKAGES_LESSON } from './lessons/packages.lesson';
import { EXCEPTION_HANDLING_LESSON } from './lessons/exception-handling.lesson';
import { COLLECTIONS_LESSON } from './lessons/collections.lesson';
import { GENERICS_LESSON } from './lessons/generics.lesson';
import { MULTITHREADING_LESSON } from './lessons/multithreading.lesson';
import { FILE_HANDLING_LESSON } from './lessons/file-handling.lesson';
import { STREAMS_LESSON } from './lessons/streams.lesson';
import { LAMBDA_LESSON } from './lessons/lambda.lesson';
import { FUNCTIONAL_INTERFACE_LESSON } from './lessons/functional-interface.lesson';
import { DATE_TIME_API_LESSON } from './lessons/date-time-api.lesson';
import { JDBC_LESSON } from './lessons/jdbc.lesson';
import { JAVA8_FEATURES_LESSON } from './lessons/java8-features.lesson';
import { JAVA11_FEATURES_LESSON } from './lessons/java11-features.lesson';
import { JAVA17_FEATURES_LESSON } from './lessons/java17-features.lesson';
import { JAVA21_FEATURES_LESSON } from './lessons/java21-features.lesson';
import { BEST_PRACTICES_LESSON } from './lessons/best-practices.lesson';
import { INTERVIEW_QUESTIONS_LESSON } from './lessons/interview-questions.lesson';

// Registry of written lessons, keyed by slug. As each topic's content is
// written, import it here and add one entry — LessonPageComponent renders
// whatever comes out of getLesson(), so no new component is ever needed.
const LESSONS: Record<string, Lesson> = {
  [INTRODUCTION_LESSON.slug]: INTRODUCTION_LESSON,
  [HISTORY_LESSON.slug]: HISTORY_LESSON,
  [FEATURES_LESSON.slug]: FEATURES_LESSON,
  [INSTALLATION_LESSON.slug]: INSTALLATION_LESSON,
  [JDK_VS_JRE_VS_JVM_LESSON.slug]: JDK_VS_JRE_VS_JVM_LESSON,
  [HELLO_WORLD_LESSON.slug]: HELLO_WORLD_LESSON,
  [VARIABLES_LESSON.slug]: VARIABLES_LESSON,
  [DATA_TYPES_LESSON.slug]: DATA_TYPES_LESSON,
  [OPERATORS_LESSON.slug]: OPERATORS_LESSON,
  [INPUT_OUTPUT_LESSON.slug]: INPUT_OUTPUT_LESSON,
  [TYPE_CASTING_LESSON.slug]: TYPE_CASTING_LESSON,
  [IF_ELSE_LESSON.slug]: IF_ELSE_LESSON,
  [SWITCH_LESSON.slug]: SWITCH_LESSON,
  [LOOPS_LESSON.slug]: LOOPS_LESSON,
  [ARRAYS_LESSON.slug]: ARRAYS_LESSON,
  [METHODS_LESSON.slug]: METHODS_LESSON,
  [CONSTRUCTORS_LESSON.slug]: CONSTRUCTORS_LESSON,
  [OOP_LESSON.slug]: OOP_LESSON,
  [INHERITANCE_LESSON.slug]: INHERITANCE_LESSON,
  [POLYMORPHISM_LESSON.slug]: POLYMORPHISM_LESSON,
  [ABSTRACTION_LESSON.slug]: ABSTRACTION_LESSON,
  [ENCAPSULATION_LESSON.slug]: ENCAPSULATION_LESSON,
  [INTERFACES_LESSON.slug]: INTERFACES_LESSON,
  [PACKAGES_LESSON.slug]: PACKAGES_LESSON,
  [EXCEPTION_HANDLING_LESSON.slug]: EXCEPTION_HANDLING_LESSON,
  [COLLECTIONS_LESSON.slug]: COLLECTIONS_LESSON,
  [GENERICS_LESSON.slug]: GENERICS_LESSON,
  [MULTITHREADING_LESSON.slug]: MULTITHREADING_LESSON,
  [FILE_HANDLING_LESSON.slug]: FILE_HANDLING_LESSON,
  [STREAMS_LESSON.slug]: STREAMS_LESSON,
  [LAMBDA_LESSON.slug]: LAMBDA_LESSON,
  [FUNCTIONAL_INTERFACE_LESSON.slug]: FUNCTIONAL_INTERFACE_LESSON,
  [DATE_TIME_API_LESSON.slug]: DATE_TIME_API_LESSON,
  [JDBC_LESSON.slug]: JDBC_LESSON,
  [JAVA8_FEATURES_LESSON.slug]: JAVA8_FEATURES_LESSON,
  [JAVA11_FEATURES_LESSON.slug]: JAVA11_FEATURES_LESSON,
  [JAVA17_FEATURES_LESSON.slug]: JAVA17_FEATURES_LESSON,
  [JAVA21_FEATURES_LESSON.slug]: JAVA21_FEATURES_LESSON,
  [BEST_PRACTICES_LESSON.slug]: BEST_PRACTICES_LESSON,
  [INTERVIEW_QUESTIONS_LESSON.slug]: INTERVIEW_QUESTIONS_LESSON,
};

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS[slug];
}
