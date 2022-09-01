import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/app/shared/models/Category';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {
  valueDate: string;

  categories: Category[] = [
    {
      value: 1,
      label: 'Arisan',
    },
    {
      value: 2,
      label: 'Operasional Kendaraan',
    },
    {
      value: 3,
      label: 'Kebutuhan Pangan',
    },
    {
      value: 4,
      label: 'Fashion dan Jalan-jalan',
    },
    {
      value: 5,
      label: 'Gadget & Elektronik',
    },
  ];

  constructor(
    private router: Router
  ) {
    this.valueDate = '';
  }

  ngOnInit(): void {
  }

  onSaveExpense() {
    this.router.navigate(['/']);
  }

}
