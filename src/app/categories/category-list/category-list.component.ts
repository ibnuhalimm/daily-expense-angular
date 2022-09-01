import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public pageTitle: string = 'Kategori';
  public showAddForm: boolean = false;

  public textNumber: string = 'number';

  constructor() { }

  ngOnInit(): void {
  }


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
