import { Component, input } from '@angular/core';
import { DiagramStep } from '../../../core/models/lesson.model';

@Component({
  selector: 'app-diagram-box',
  imports: [],
  templateUrl: './diagram-box.html',
  styleUrl: './diagram-box.scss',
})
export class DiagramBox {
  readonly caption = input<string>();
  readonly steps = input.required<DiagramStep[]>();
}
