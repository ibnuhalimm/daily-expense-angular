import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryItemComponent } from './shared/category-item/category-item.component';
import { DeleteButtonComponent } from './shared/delete-button/delete-button.component';
import { EditButtonComponent } from './shared/edit-button/edit-button.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryItemComponent,
    DeleteButtonComponent,
    EditButtonComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
