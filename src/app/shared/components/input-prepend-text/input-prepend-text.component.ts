import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-input-prepend-text',
  templateUrl: './input-prepend-text.component.html',
})
export class InputPrependTextComponent {
  @Input() prependText: string;
  @Input() value?: string;

  constructor() {
    this.prependText = '';
  }
}
