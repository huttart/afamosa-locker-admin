import { Component, OnInit } from '@angular/core';
import { LockerService } from 'src/app/services/locker.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material';
@Component({
  selector: 'app-locker-detail',
  templateUrl: './locker-detail.component.html',
  styleUrls: ['./locker-detail.component.scss']
})
export class LockerDetailComponent implements OnInit {
  navigationSubscription;
  lockerID;
  logs;
  locker;
  constructor(
    private _LockerService: LockerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.lockerID = this.route.snapshot.paramMap.get('lockerID');
        this.myInit();
      } 
    });
  }

  ngOnInit() {
  
  }

  onDateChange (type: string, event: MatDatepickerInputEvent<Date>) {
    var date = new Date(event.value);
    var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
    console.log(start);
    console.log(end);
    this.getLogs(start,end);

  }

  myInit() {
    var date = new Date();
    var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
    this.getLogs(start,end);
    this._LockerService.getLockerByID(this.lockerID).then( data => {
      this.locker = data;
      console.log(data);
    })
  }

  getLogs (start,end) {
    this._LockerService.getLogsByLockerID(this.lockerID, start, end).then( data => {
      console.log(data);
      this.logs = data;
    });
  }


}
