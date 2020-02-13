import { Component, OnInit } from '@angular/core';
import { StaticsService } from 'src/app/services/statics.service';
import { LockerService } from 'src/app/services/locker.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmPopupComponent } from 'src/app/share/confirm-popup/confirm-popup.component';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  timeout_at_least = 500;
  first_three_card;
  locker_size_options;

  range_total_users = 7;
  range_total_users_active_option;
  date_rang_options = [
    { text: 'Today', value: 0 },
    // { text: 'Yesterday', value: 2},
    { text: 'Last 7 days', value: 7 },
    { text: 'Last 14 days', value: 14 },
    { text: 'Last 30 days', value: 30 }
  ];
  total_users;


  range_users_by_locker_active_option;
  users_by_locker;

  user_by_lang;
  user_by_lang_active_option;

  auto_refresh;

  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
  ];
  options; 
  

  constructor(
    private _StaticsService: StaticsService,
    private _LockerService: LockerService,
    public dialog: MatDialog,
    private _UserService: UserService,
    private _snackBar: MatSnackBar,


  ) { }

  ngOnInit() {
    this.myInit();
    this.auto_refresh = setInterval(() => {
      this.myInit();
    }, 20000);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.auto_refresh) {
      clearInterval(this.auto_refresh);
    }
  }

  myInit() {
    this._LockerService.getLockerSizeOptions().then(res => {
      this.locker_size_options = res;
    });
    this.getStaticsForDashboardFirstThreeCard();
    this.getTotalUser(this.date_rang_options[0]);
    this.getUsersByLockerSize(this.date_rang_options[0]);
    this.getUsersByLang(this.date_rang_options[0]);
  }

  getStaticsForDashboardFirstThreeCard() {
    this._StaticsService.getStaticsForDashboardFirstThreeCard().then(res => {
      setTimeout(() => {
        this.first_three_card = res;
      }, this.timeout_at_least + (100 * Math.round(Math.random() * 3) + 1));
    });
  }

  getTotalUser(range) {
    this.total_users = null;
    this.range_total_users_active_option = range.text;
    this._StaticsService.getTotalUsers(range.value).then(res => {
      setTimeout(() => {
        this.total_users = res;
      }, this.timeout_at_least + (100 * Math.round(Math.random() * 3) + 1));
    });
  }

  getUsersByLockerSize(range) {
    this.users_by_locker = null;
    this.range_users_by_locker_active_option = null;
    this._StaticsService.getUsersByLockerSize(range.value).then(res => {
      var rand_timeout = this.timeout_at_least + (100 * Math.round(Math.random() * 3) + 1);
      setTimeout(() => {
        this.range_users_by_locker_active_option = range.text;
      }, rand_timeout - 200);

      setTimeout(() => {
        this.users_by_locker = res;
      }, rand_timeout);
    });
  }

  getUsersByLang (range) {
    this.user_by_lang = null;
    this.user_by_lang_active_option = null;
    this._StaticsService.getUsersByLang(range.value).then(res => {
      var rand_timeout = this.timeout_at_least + (100 * Math.round(Math.random() * 3) + 1);
      setTimeout(() => {
        this.user_by_lang_active_option = range.text;
      }, rand_timeout - 200);
      setTimeout(() => {
        this.user_by_lang = res;
      }, rand_timeout);
    });
  }

  checkoutAllUser () {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: { title: 'Checkout all users', detail: '' }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {

        console.log(this.first_three_card.active_user_arr);
        // this._LockerService.remove(locker.id).then(res => {
        //   console.log(res);
        //   this._snackBar.open('Successfully', '', {});
        //   this.getAllLockerData();
        // });
        this.first_three_card.active_user_arr.forEach(element => {
          this._UserService.checkout(element.rfid, element.locker_id);
        });

        this._snackBar.open('Successfully', '', {});

        setTimeout(() => {
          this.myInit();
          
        }, 1000);
      }
    });
  }


}
