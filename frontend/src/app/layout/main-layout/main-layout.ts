import { Component, signal } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { SidebarNav } from '../../shared/components/sidebar-nav/sidebar-nav';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, SidebarNav],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  readonly sidebarOpen = signal(false);

  constructor(router: Router) {
    // Close the mobile drawer automatically whenever the user navigates.
    router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
      this.sidebarOpen.set(false);
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
