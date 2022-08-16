import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Category from 'src/models/Category';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {
    pageTitle: string = 'Catat Pengeluaran';

    pathToHome: string = '/';

    categories: Category[] = [
        new Category(1, 'Arisan'),
        new Category(2, 'Pulsa dan Kuota'),
        new Category(3, 'Operasional Motor'),
        new Category(4, 'Fashion'),
        new Category(5, 'Kebutuhan Pangan'),
        new Category(6, 'Jajan dan Jalan-jalan'),
        new Category(7, 'Lain-lain')
    ];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }


    onSaveExpense() {
        this.router.navigate(['/']);
    }
}
