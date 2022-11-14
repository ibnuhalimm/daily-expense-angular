import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ctg-category-item',
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {

  @Input() categoryName: string;
  @Output() onClickDeleteButtonEvent = new EventEmitter<any>();
  @Output() onClickEditButtonEvent = new EventEmitter<any>();

  constructor() {
    this.categoryName = '';
  }

  onClickDeleteButton(evt: any) {
    this.onClickDeleteButtonEvent.emit(evt);
  }

  onClickEditButton(evt: any) {
    this.onClickEditButtonEvent.emit(evt);
  }
}
