import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  today: Date = new Date();

  expenseDateRange = new FormGroup({
    start: new FormControl(new Date(year, month - 1, 13)),
    end: new FormControl(new Date(year, month, 20)),
  })

  constructor() {}

  ngOnInit(): void {}
}
