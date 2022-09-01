import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryItemComponent } from './shared/category-item/category-item.component';


@NgModule({
  declarations: [
    ExpenseCreateComponent,
    ExpenseEditComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
