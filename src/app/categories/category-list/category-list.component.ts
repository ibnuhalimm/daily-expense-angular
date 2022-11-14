import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public showAddForm: boolean = false;
  public showEditForm: boolean = false;
  public showDeleteConfirm: boolean = false;

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

  editCategoryHandler() {
    this.showEditForm = true;
  }

  cancelEditCategoryHandler() {
    this.showEditForm = false;
  }

  saveEditCategoryHandler() {
    this.showEditForm = false;
  }

  onClickDeleteButton() {
    this.showDeleteConfirm = true;
  }

  onClickEditButton() {
    this.showEditForm = true;
  }

  onCancelDelete() {
    this.showDeleteConfirm = false;
  }

  onSaveExpense() {
    this.showDeleteConfirm = false;
  }
}
