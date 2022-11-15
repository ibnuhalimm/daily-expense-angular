import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-prepend-icon',
  templateUrl: './input-prepend-icon.component.html',
})
export class InputPrependIconComponent {
  @Input() icon: string;
  @Input() value?: string;

  constructor() {
    this.icon = '';
  }
}
