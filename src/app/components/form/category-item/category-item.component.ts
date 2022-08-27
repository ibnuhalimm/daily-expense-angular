import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-category-item',
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  @Input() value: number;
  @Input() label: string;
  @Input() isChecked: boolean;

  constructor() {
    this.value = 0;
    this.label = '';
    this.isChecked = false;
  }
}
