import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { groupJavaTopics } from '../../../../core/data/java-topics';

interface RoadmapStage {
  group: string;
  icon: string;
  topicCount: number;
  firstSlug: string;
}

const STAGE_ICONS: Record<string, string> = {
  'Getting Started': '🚀',
  Basics: '📦',
  'Control Flow': '🔀',
  'Object-Oriented Programming': '🧱',
  'Core APIs': '🗃️',
  'Modern Java': '⚡',
  'Wrap-Up': '🎓',
};

@Component({
  selector: 'app-roadmap',
  imports: [RouterLink],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.scss',
})
export class Roadmap {
  protected readonly stages: RoadmapStage[] = groupJavaTopics().map((group) => ({
    group: group.name,
    icon: STAGE_ICONS[group.name] ?? '📘',
    topicCount: group.topics.length,
    firstSlug: group.topics[0].slug,
  }));
}
