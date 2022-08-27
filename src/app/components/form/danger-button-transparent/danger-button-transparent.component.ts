import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-danger-button-transparent',
  templateUrl: './danger-button-transparent.component.html',
})
export class FormDangerButtonTransparentComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
