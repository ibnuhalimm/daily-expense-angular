import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-danger-button-bg',
  templateUrl: './danger-button-bg.component.html',
})
export class FormDangerButtonBgComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
