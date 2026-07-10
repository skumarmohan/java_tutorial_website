import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBox } from '../../../../shared/components/search-box/search-box';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, SearchBox],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
