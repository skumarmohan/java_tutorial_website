import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'tutorial-website-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<ThemeMode>(this.readInitialTheme());

  constructor() {
    effect(() => {
      const mode = this.theme();
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem(STORAGE_KEY, mode);
    });
  }

  toggle(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
  }

  private readInitialTheme(): ThemeMode {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
