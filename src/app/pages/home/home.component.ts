import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pageTitle: string;
  public iconPlus: string;
  public textPengeluaran: string;
  public routeExpenseAdd: string;

  constructor() {
    this.pageTitle = 'Daily Expense';
    this.iconPlus = 'bi bi-plus';
    this.textPengeluaran = 'Pengeluaran';
    this.routeExpenseAdd = '/expense/add';
  }

  ngOnInit(): void {}
}
