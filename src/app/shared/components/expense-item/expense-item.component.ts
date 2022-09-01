import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sh-expense-item',
  templateUrl: './expense-item.component.html',
})
export class ExpenseItemComponent {
  constructor(private router: Router) {}

  goToEditExpense() {
    this.router.navigate(['/expenses/111/edit']);
  }
}
