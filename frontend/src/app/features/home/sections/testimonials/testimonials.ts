import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The step-by-step examples made OOP finally click for me. I went from zero to building my own projects in a month.",
    name: 'Priya Sharma',
    role: 'CS Student',
    avatar: '👩🏽‍💻',
  },
  {
    quote: "Clean explanations without the fluff. I use the syntax pages as a daily reference at work.",
    name: 'Daniel Osei',
    role: 'Junior Backend Developer',
    avatar: '👨🏿‍💻',
  },
  {
    quote: "Switched careers into software after going through this Java tutorial start to finish. Worth it.",
    name: 'Maria Gonzalez',
    role: 'Career Switcher',
    avatar: '👩🏻‍💻',
  },
  {
    quote: "The interview questions section alone got me through three technical rounds.",
    name: 'Arjun Mehta',
    role: 'Software Engineer',
    avatar: '🧑🏽‍💻',
  },
];

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}
