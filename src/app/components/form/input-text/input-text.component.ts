import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent {
  @Input() value?: string;
  @Input() type?: string;

  constructor() {
    this.type = 'text';
  }
}
