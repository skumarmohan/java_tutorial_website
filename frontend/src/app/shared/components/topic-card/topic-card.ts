import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JavaTopic } from '../../../core/models/java-topic.model';

@Component({
  selector: 'app-topic-card',
  imports: [RouterLink],
  templateUrl: './topic-card.html',
  styleUrl: './topic-card.scss',
})
export class TopicCard {
  readonly topic = input.required<JavaTopic>();
}
