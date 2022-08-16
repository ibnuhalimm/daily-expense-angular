import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    pageTitle: string = 'Daily Expense';

    iconPlus: string = 'bi bi-plus';
    textPengeluaran: string = 'Pengeluaran';

    routeExpenseAdd: string = '/expense/add';

    constructor() { }

    ngOnInit(): void {
    }

}
