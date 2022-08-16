import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../contracts/Category';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {
    pageTitle: string;
    pathToHome: string;
    textRupiah: string;
    iconCalendar: string;
    valueDate: string;

    categories: Category[] = [
        {
            value: 1,
            label: 'Arisan'
        },
        {
            value: 2,
            label: 'Operasional Kendaraan'
        },
        {
            value: 3,
            label: 'Kebutuhan Pangan'
        },
        {
            value: 4,
            label: 'Fashion dan Jalan-jalan'
        },
        {
            value: 5,
            label: 'Gadget & Elektronik'
        }
    ];

    constructor(private router: Router) {
        this.pageTitle = 'Catat Pengeluaran';
        this.pathToHome = '/';
        this.textRupiah = 'Rp';
        this.iconCalendar = 'bi bi-calendar2-week';

        this.valueDate = '';
    }

    ngOnInit(): void {
    }


    onSaveExpense() {
        this.router.navigate(['/']);
    }
}
