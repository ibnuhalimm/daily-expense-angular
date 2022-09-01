import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sh-danger-button-transparent',
  templateUrl: './danger-button-transparent.component.html',
})
export class DangerButtonTransparentComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
