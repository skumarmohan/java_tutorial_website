import { Component } from '@angular/core';
import { TopicCard } from '../../../../shared/components/topic-card/topic-card';
import { JAVA_TOPICS } from '../../../../core/data/java-topics';

const POPULAR_SLUGS = ['variables', 'oop', 'exception-handling', 'collections', 'streams', 'lambda'];

@Component({
  selector: 'app-popular-topics',
  imports: [TopicCard],
  templateUrl: './popular-topics.html',
  styleUrl: './popular-topics.scss',
})
export class PopularTopics {
  protected readonly topics = JAVA_TOPICS.filter((topic) => POPULAR_SLUGS.includes(topic.slug));
}
