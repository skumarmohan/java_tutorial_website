import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JAVA_TOPICS } from '../../../core/data/java-topics';

@Component({
  selector: 'app-lesson-nav-buttons',
  imports: [RouterLink],
  templateUrl: './lesson-nav-buttons.html',
  styleUrl: './lesson-nav-buttons.scss',
})
export class LessonNavButtons {
  readonly slug = input.required<string>();

  private readonly currentIndex = computed(() => JAVA_TOPICS.findIndex((topic) => topic.slug === this.slug()));

  protected readonly previous = computed(() => {
    const index = this.currentIndex();
    return index > 0 ? JAVA_TOPICS[index - 1] : undefined;
  });

  protected readonly next = computed(() => {
    const index = this.currentIndex();
    return index >= 0 && index < JAVA_TOPICS.length - 1 ? JAVA_TOPICS[index + 1] : undefined;
  });
}
