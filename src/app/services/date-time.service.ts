import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  eng_short_month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  eng_long_month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor() { }


  getShortMonthByMonthNumber (month_num) {
    return this.eng_long_month[month_num];
  }
}
