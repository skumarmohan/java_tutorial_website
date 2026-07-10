import { Component } from '@angular/core';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: '💼',
    title: 'In High Demand',
    description: 'Java powers enterprise backends, Android apps, and huge existing codebases — jobs aren\'t going away.',
  },
  {
    icon: '🌍',
    title: 'Write Once, Run Anywhere',
    description: 'The JVM makes Java code portable across operating systems without changes.',
  },
  {
    icon: '🏗️',
    title: 'Strong Foundations',
    description: 'Learning Java teaches OOP and type-safety fundamentals that transfer to any language.',
  },
  {
    icon: '📚',
    title: 'Massive Ecosystem',
    description: 'Spring, Hibernate, and decades of libraries mean there\'s a tool for almost everything.',
  },
];

@Component({
  selector: 'app-why-learn-java',
  imports: [],
  templateUrl: './why-learn-java.html',
  styleUrl: './why-learn-java.scss',
})
export class WhyLearnJava {
  protected readonly reasons = REASONS;
}
