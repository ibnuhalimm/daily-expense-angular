import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent {
  @Input() value?: string;
  @Input() type?: string;

  constructor() {
    this.type = 'text';
  }
}
