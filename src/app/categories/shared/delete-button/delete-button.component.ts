import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ctg-delete-button',
  templateUrl: './delete-button.component.html'
})
export class DeleteButtonComponent {

  @Output() onClickEvent = new EventEmitter<any>();

  constructor() { }

  onClick(evt: any) {
    this.onClickEvent.emit(evt);
  }

}
