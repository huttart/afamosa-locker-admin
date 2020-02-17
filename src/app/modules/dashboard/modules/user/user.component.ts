import { Component, OnInit } from '@angular/core';
import { StaticsService } from 'src/app/services/statics.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  active_users;
  user_report_data;
  user_report_active_filter;
  user_report_filter_options;
  today;
  api_url = environment.api_url;
  columnNames = ['Day', 'Users',{ type: 'string', role: 'tooltip' }, 'Checked out', 'Checked out by Admin'];
  options = {
    title: 'Number of users by day',
    // width: 900,
    height: 500,
    // hAxis: {
    //   format: 'd-MM-yyyy',
    //   // gridlines: {count: 5}
    // },
    // vAxis: {
    //   gridlines: {color: 'none'},
    // }
    seriesType: 'bars',
  };

  checkout_by_size;
  sell_by_size;

  constructor(
    private _StaticsService: StaticsService,
    private _DateTimeService: DateTimeService,
    private router: Router
  ) {
    this.today = new Date();
    var current_month = this.today.getMonth() + 1;
    this.user_report_filter_options = [];

    console.log(this.today);
    console.log(this.today.getMonth());

    for (let index = 0; index < current_month; index++) {
      this.user_report_filter_options.push({
        text: _DateTimeService.getShortMonthByMonthNumber(index),
        value: index + 1
      });
      console.log(this.user_report_filter_options);
      if (index == current_month - 1) {
        this.user_report_active_filter = this.user_report_filter_options[index];
      }
    }

  }

  ngOnInit() {
    this.getActiveUserData();
    this.getUserReport(this.user_report_active_filter);
    this.getSaleReportToday();
    this.getCheckoutReportToday();
  }

  getActiveUserData() {
    this._StaticsService.getActiveUserData().then(res => {
      this.active_users = res;
    });
  }

  getUserReport(option) {
    this.user_report_active_filter = option;
    var selected_month = this.today.getFullYear() + '-' + option.value + '-01';

    this._StaticsService.getUserReport(selected_month).then((res: any) => {
      var report_data = [];
      res.forEach(element => {
        console.log(element);
        var data_date = new Date(element[0]);
        var new_date = data_date.toDateString();
        console.log(new_date);
        report_data.push([new_date, element[1], data_date.toDateString() + ': ' + element[1] + ' users', element[2], element[3]]);
      });
      this.user_report_data = report_data;
    });

  }

  export() {
    var selected_month = this.today.getFullYear() + '-' + this.user_report_active_filter.value + '-01';
    console.log(selected_month);

    window.open(this.api_url + 'statics/exportUserByDay?date_range=' + selected_month, "_blank");
  }

  getSaleReportToday() {
    this.sell_by_size = null;
    this._StaticsService.getUsersByLockerSize(0).then(res => {
      this.sell_by_size = res;
    });
  }

  getCheckoutReportToday() {
    this.checkout_by_size = null;
    this._StaticsService.getUsersCheckedOutByLockerSize(0).then(res => {
      this.checkout_by_size = res;
    });
    
  }

}
