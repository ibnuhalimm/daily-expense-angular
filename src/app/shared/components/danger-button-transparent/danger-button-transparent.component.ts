import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sh-danger-button-transparent',
  templateUrl: './danger-button-transparent.component.html',
})
export class DangerButtonTransparentComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onClickEvent() {
    this.onClick.emit();
  }
}
