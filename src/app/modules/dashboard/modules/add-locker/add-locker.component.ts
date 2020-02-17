import { Component, OnInit } from '@angular/core';
import { LockerService } from 'src/app/services/locker.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-locker',
  templateUrl: './add-locker.component.html',
  styleUrls: ['./add-locker.component.scss']
})
export class AddLockerComponent implements OnInit {
  title;
  zones;
  locker_ids;
  locker_box;
  isHigh;

  selected_zone = {
    locker_size:0,
    id:0
  };
  constructor(
    private _LockerService: LockerService,
    private _snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit() {
    this._LockerService.getLockerZones().then(data => {
      this.zones = data;
    });
  }

  save () {
    if (this.title && this.selected_zone.id ) {
      console.log(this.title);
      console.log(this.selected_zone);
      console.log(this.isHigh);
      this._LockerService.add(this.selected_zone.id, this.title, this.locker_ids, this.locker_box,this.isHigh).then( res => {
        this._snackBar.open('Successfully', '', {}); 
        this.router.navigate(['/','dashboard','locker']);

      });
    }
  }



}
