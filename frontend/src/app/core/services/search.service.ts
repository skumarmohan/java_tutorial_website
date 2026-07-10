import { Injectable } from '@angular/core';
import { JAVA_TOPICS } from '../data/java-topics';
import { JavaTopic } from '../models/java-topic.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  search(query: string, limit = 6): JavaTopic[] {
    const term = query.trim().toLowerCase();
    if (!term) {
      return [];
    }
    return JAVA_TOPICS.filter(
      (topic) =>
        topic.label.toLowerCase().includes(term) || topic.description.toLowerCase().includes(term),
    ).slice(0, limit);
  }
}
