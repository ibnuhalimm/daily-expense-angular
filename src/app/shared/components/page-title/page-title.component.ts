import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  @Input() text = 'Daily Expense';
}