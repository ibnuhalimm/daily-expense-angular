import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryItemComponent } from './shared/category-item/category-item.component';
import { CategoryItemRadioComponent } from './shared/category-item-radio/category-item-radio.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryItemComponent,
    CategoryItemRadioComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
