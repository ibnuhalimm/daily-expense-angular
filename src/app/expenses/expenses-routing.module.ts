import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';

const routes: Routes = [
  {
    path: 'expenses',
    children: [
      {
        path: 'create',
        component: ExpenseCreateComponent
      },
      {
        path: ':expenseId/edit',
        component: ExpenseEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
