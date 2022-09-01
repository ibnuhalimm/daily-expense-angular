import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sh-primary-button-transparent',
  templateUrl: './primary-button-transparent.component.html',
})
export class PrimaryButtonTransparentComponent {
  @Input() text: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickEvent() {
    this.onClick.emit();
  }
}
