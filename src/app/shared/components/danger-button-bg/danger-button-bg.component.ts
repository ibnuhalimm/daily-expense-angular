import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sh-danger-button-bg',
  templateUrl: './danger-button-bg.component.html',
})
export class DangerButtonBgComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
