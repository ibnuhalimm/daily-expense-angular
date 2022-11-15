import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'primary-button-bg',
  templateUrl: './primary-button-bg.component.html',
})
export class PrimaryButtonBgComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
