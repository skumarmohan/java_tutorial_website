import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { HeroSection } from './sections/hero-section/hero-section';
import { PopularTopics } from './sections/popular-topics/popular-topics';
import { Roadmap } from './sections/roadmap/roadmap';
import { LatestTutorials } from './sections/latest-tutorials/latest-tutorials';
import { WhyLearnJava } from './sections/why-learn-java/why-learn-java';
import { Testimonials } from './sections/testimonials/testimonials';
import { Faq } from './sections/faq/faq';

@Component({
  selector: 'app-home',
  imports: [HeroSection, PopularTopics, Roadmap, LatestTutorials, WhyLearnJava, Testimonials, Faq],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Learn Java for Free',
      description:
        'A free, structured Java tutorial platform for beginners to advanced developers — examples, syntax, and step-by-step lessons.',
      canonicalPath: '/',
    });
  }
}
