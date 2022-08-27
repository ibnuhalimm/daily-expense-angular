import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  pageTitle: string;
  showAddForm: boolean;

  textNumber: string;

  constructor() {
    this.pageTitle = 'Kategori';
    this.showAddForm = false;

    this.textNumber = 'number';
  }

  ngOnInit(): void {}

  addNewCategoryHandler() {
    this.showAddForm = true;
  }

  cancelNewCategoryHandler() {
    this.showAddForm = false;
  }

  saveNewCategoryHandler() {
    this.showAddForm = false;
  }
}
