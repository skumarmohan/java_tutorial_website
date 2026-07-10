import { Component } from '@angular/core';
import { TopicCard } from '../../../../shared/components/topic-card/topic-card';
import { JAVA_TOPICS } from '../../../../core/data/java-topics';

const LATEST_SLUGS = ['java21-features', 'java17-features', 'java11-features', 'java8-features'];

@Component({
  selector: 'app-latest-tutorials',
  imports: [TopicCard],
  templateUrl: './latest-tutorials.html',
  styleUrl: './latest-tutorials.scss',
})
export class LatestTutorials {
  protected readonly topics = JAVA_TOPICS.filter((topic) => LATEST_SLUGS.includes(topic.slug));
}
