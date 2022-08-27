import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-primary-button-bg',
  templateUrl: './primary-button-bg.component.html',
})
export class FormPrimaryButtonBgComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
