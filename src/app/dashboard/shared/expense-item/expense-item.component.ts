import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DateHelper } from 'src/app/shared/helpers/date-helper';
import { NumberHelper } from 'src/app/shared/helpers/number-helper';

@Component({
  selector: 'dashboard-expense-item',
  templateUrl: './expense-item.component.html',
})
export class ExpenseItemComponent {
  @Input() expenseName: string = '';
  @Input() amount: number = 0;
  @Input() createdAt: Date | string | null = null;
  @Input() categoryName: string = '';

  constructor(
    private router: Router
  ) {}

  parseAmount(): string {
    return 'Rp ' + NumberHelper.currencyFormat(this.amount) + ',-';
  }

  parseDayOfCreatedAt(): string {
    return DateHelper.isDate(this.createdAt)
      ? moment.utc(this.createdAt).format('DD')
      : '';
  }

  parseMonthYearOfCreatedAt(): string {
    return DateHelper.isDate(this.createdAt)
      ? moment.utc(this.createdAt).format('MMM YYYY')
      : '';
  }

  goToEditExpense() {
    this.router.navigate(['/expenses/111/edit']);
  }
}
