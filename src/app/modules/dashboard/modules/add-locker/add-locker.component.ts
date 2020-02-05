import { Component, OnInit } from '@angular/core';
import { LockerService } from 'src/app/services/locker.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-locker',
  templateUrl: './add-locker.component.html',
  styleUrls: ['./add-locker.component.scss']
})
export class AddLockerComponent implements OnInit {
  title;
  zones;

  selected_zone = {
    locker_size:0,
    id:0
  };
  constructor(
    private _LockerService: LockerService,
    private _snackBar: MatSnackBar,
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
      this._LockerService.add(this.selected_zone.id, this.title).then( res => {
        this._snackBar.open('Successfully', '', {});
      });
    }
  }



}
