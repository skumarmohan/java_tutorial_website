import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { SearchBox } from '../search-box/search-box';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ThemeToggle, SearchBox],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly menuToggle = output<void>();
}
