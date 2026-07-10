import { Component, computed, input, signal } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-java';

@Component({
  selector: 'app-code-block',
  imports: [],
  templateUrl: './code-block.html',
  styleUrl: './code-block.scss',
})
export class CodeBlock {
  readonly code = input.required<string>();
  readonly language = input<string>('java');
  readonly title = input<string>();
  readonly showLineNumbers = input(true);

  protected readonly copied = signal(false);

  protected readonly lines = computed(() => this.code().split('\n'));

  protected readonly highlightedHtml = computed(() => {
    const grammar = Prism.languages[this.language()] ?? Prism.languages['clike'];
    return Prism.highlight(this.code(), grammar, this.language());
  });

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.code());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 1500);
  }
}
