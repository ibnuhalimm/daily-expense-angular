import { Component, Input } from '@angular/core';

@Component({
  selector: 'ctg-category-item-radio',
  templateUrl: './category-item-radio.component.html',
})
export class CategoryItemRadioComponent {
  @Input() value: number;
  @Input() label: string;
  @Input() isChecked: boolean;

  constructor() {
    this.value = 0;
    this.label = '';
    this.isChecked = false;
  }
}
