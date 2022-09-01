import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sh-toolbar-primary-button',
  templateUrl: './toolbar-primary-button.component.html',
})
export class ToolbarPrimaryButtonComponent {
  @Input() text: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.text = '';
  }

  onClickEvent() {
    this.onClick.emit();
  }
}
