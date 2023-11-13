import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { DateTime, Duration } from 'luxon';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('picker') datepicker: MatDateRangePicker<Date> | undefined;

  expenseDateRange = new FormGroup({
    start: new FormControl(new Date(year, month - 1, 13)),
    end: new FormControl(new Date(year, month, 20)),
  })

  constructor() {}

  ngOnInit(): void {
  }

  openDatepicker(): void {
    this.datepicker?.open();
  }

  onDatepickerClosed(): void {
    const startDateValue: Date | null = this.expenseDateRange.controls.start.value;
    if (startDateValue && !this.expenseDateRange.controls.end.value) {
      const addADay = Duration.fromObject({
        day: 1
      });

      const endDateValue: Date = DateTime.fromJSDate(new Date(startDateValue)).plus(addADay).toJSDate();

      this.expenseDateRange.patchValue({
        end: endDateValue
      });

      this.expenseDateRange.updateValueAndValidity();
    }
  }
}
