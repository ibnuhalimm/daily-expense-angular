import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ctg-edit-button',
  templateUrl: './edit-button.component.html'
})
export class EditButtonComponent {

  @Output() onClickEvent = new EventEmitter<any>();

  constructor() { }

  onClick(evt: any) {
    this.onClickEvent.emit(evt);
  }

}
