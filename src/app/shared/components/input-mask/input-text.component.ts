import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-mask',
  templateUrl: './input-text.component.html',
})
export class InputMaskComponent {
  @Input() value?: string;
  @Input() mask?: string;

  constructor() {
    //
  }
}
