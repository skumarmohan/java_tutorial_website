import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SeoService } from '../../../../core/services/seo.service';
import { getLesson } from '../../data/lesson-repository';
import { Breadcrumb, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb';
import { DiagramBox } from '../../../../shared/components/diagram-box/diagram-box';
import { LessonNavButtons } from '../../../../shared/components/lesson-nav-buttons/lesson-nav-buttons';
import { CodeBlock } from '../../../../shared/components/code-block/code-block';

@Component({
  selector: 'app-lesson-page',
  imports: [Breadcrumb, DiagramBox, LessonNavButtons, RouterLink, CodeBlock],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.scss',
})
export class LessonPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  // paramMap is an Observable because Angular reuses this component instance
  // when navigating between sibling /java/:slug routes (e.g. via Previous/Next)
  // — reading route.snapshot once would leave the page stuck on the first lesson.
  protected readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('slug') ?? '',
  });

  protected readonly lesson = computed(() => getLesson(this.slug()));

  protected readonly breadcrumbItems = computed<BreadcrumbItem[]>(() => [
    { label: 'Home', link: ['/'] },
    { label: 'Java Tutorial', link: ['/java'] },
    { label: this.lesson()?.title ?? this.slug() },
  ]);

  constructor() {
    effect(() => {
      const lesson = this.lesson();
      if (lesson) {
        this.seo.update({
          title: lesson.title,
          description: lesson.seoDescription,
          canonicalPath: `/java/${lesson.slug}`,
        });
      }
    });
  }
}
