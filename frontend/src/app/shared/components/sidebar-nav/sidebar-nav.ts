import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { groupJavaTopics } from '../../../core/data/java-topics';

function extractSlug(url: string): string | null {
  const match = url.match(/^\/java\/([^/?#]+)/);
  return match ? match[1] : null;
}

@Component({
  selector: 'app-sidebar-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-nav.html',
  styleUrl: './sidebar-nav.scss',
})
export class SidebarNav {
  private readonly router = inject(Router);

  protected readonly groups = groupJavaTopics();

  protected readonly activeSlug = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => extractSlug(event.urlAfterRedirects)),
    ),
    { initialValue: extractSlug(this.router.url) },
  );

  protected readonly expandedGroups = signal<Set<string>>(this.initialExpandedGroups());

  constructor() {
    // Whenever navigation lands on a topic, make sure its group is expanded
    // — without collapsing groups the user already opened manually.
    effect(() => {
      const slug = this.activeSlug();
      const activeGroup = this.groups.find((group) => group.topics.some((topic) => topic.slug === slug));
      if (activeGroup && !this.expandedGroups().has(activeGroup.name)) {
        this.expandedGroups.update((set) => new Set(set).add(activeGroup.name));
      }
    });
  }

  toggleGroup(name: string): void {
    this.expandedGroups.update((set) => {
      const next = new Set(set);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  isExpanded(name: string): boolean {
    return this.expandedGroups().has(name);
  }

  private initialExpandedGroups(): Set<string> {
    const slug = extractSlug(this.router.url);
    const activeGroup = this.groups.find((group) => group.topics.some((topic) => topic.slug === slug));
    const fallback = this.groups.length > 0 ? [this.groups[0].name] : [];
    return new Set(activeGroup ? [activeGroup.name] : fallback);
  }
}
