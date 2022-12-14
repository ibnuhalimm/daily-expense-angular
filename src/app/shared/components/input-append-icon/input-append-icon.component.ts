import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-append-icon',
  templateUrl: './input-append-icon.component.html',
})
export class InputAppendIconComponent {
  @Input() appendedIcon: string;
  @Input() value?: string;

  constructor() {
    this.appendedIcon = '';
  }
}
