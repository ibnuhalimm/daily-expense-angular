import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eps-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() value: number;
  @Input() label: string;
  @Input() isChecked: boolean;

  constructor() {
    this.value = 0;
    this.label = '';
    this.isChecked = false;
  }

  ngOnInit(): void {
  }

}
