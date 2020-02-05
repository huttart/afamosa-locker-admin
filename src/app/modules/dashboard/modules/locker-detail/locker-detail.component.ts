import { Component, OnInit } from '@angular/core';
import { LockerService } from 'src/app/services/locker.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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

  myInit() {
    this._LockerService.getLogsByLockerID(this.lockerID).then( data => {
      console.log(data);
      this.logs = data;
    });
    this._LockerService.getLockerByID(this.lockerID).then( data => {
      this.locker = data;
      console.log(data);
    })
  }

}
