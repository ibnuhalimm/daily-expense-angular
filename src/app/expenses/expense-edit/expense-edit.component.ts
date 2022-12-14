import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/app/shared/models/Category';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  valueDate: string;

  showDeleteConfirm: boolean;

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

    this.showDeleteConfirm = false;
  }

  ngOnInit(): void {
  }

  onSaveExpense() {
    this.router.navigate(['/']);
  }

  onDeleteExpense() {
    this.showDeleteConfirm = true;
  }

  onCancelDelete() {
    this.showDeleteConfirm = false;
  }

}
