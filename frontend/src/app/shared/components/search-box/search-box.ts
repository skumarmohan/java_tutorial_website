import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';
import { JavaTopic } from '../../../core/models/java-topic.model';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.html',
  styleUrl: './search-box.scss',
})
export class SearchBox {
  /** 'sm' fits the sticky header; 'lg' is the homepage hero variant. */
  readonly size = input<'sm' | 'lg'>('sm');
  readonly placeholder = input('Search tutorials...');

  private readonly search = inject(SearchService);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly query = signal('');
  protected readonly results = signal<JavaTopic[]>([]);
  protected readonly isOpen = signal(false);

  onInput(value: string): void {
    this.query.set(value);
    this.results.set(this.search.search(value));
    this.isOpen.set(value.trim().length > 0);
  }

  select(topic: JavaTopic): void {
    this.router.navigate(['/java', topic.slug]);
    this.reset();
  }

  onSubmit(): void {
    const [first] = this.results();
    if (first) {
      this.select(first);
    }
  }

  private reset(): void {
    this.query.set('');
    this.results.set([]);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }
}
