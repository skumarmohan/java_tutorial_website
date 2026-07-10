import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
}

const SITE_NAME = 'JavaLearn';
const BASE_URL = 'https://www.example.com'; // TODO: replace with production domain

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  update(meta: SeoMetadata): void {
    const fullTitle = `${meta.title} | ${SITE_NAME}`;
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({ name: 'description', content: meta.description });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: meta.description });

    if (meta.canonicalPath) {
      this.setCanonicalUrl(`${BASE_URL}${meta.canonicalPath}`);
    }
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
