import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Is this Java tutorial really free?',
    answer: 'Yes. All lessons, examples, and exercises are free to access — no signup required to read tutorials.',
  },
  {
    question: 'Do I need any prior programming experience?',
    answer: 'No. The tutorial starts from installation and "Hello World" and assumes no prior coding knowledge.',
  },
  {
    question: 'What Java version should I use?',
    answer: 'We recommend the latest LTS release. Lessons on Java 8, 11, 17, and 21 highlight what changed in each.',
  },
  {
    question: 'Can I practice code without installing Java?',
    answer: 'An in-browser code playground is planned for a future update. For now, examples are best run locally with the JDK installed.',
  },
  {
    question: 'How is this different from the official Java docs?',
    answer: 'This tutorial is written for learners: step-by-step explanations, beginner-friendly language, and runnable examples with expected output.',
  },
];

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly faqs = FAQS;
}
