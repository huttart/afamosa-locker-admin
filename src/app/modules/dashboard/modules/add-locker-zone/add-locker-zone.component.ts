import { Component, OnInit } from '@angular/core';
import { LockerService } from 'src/app/services/locker.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-locker-zone',
  templateUrl: './add-locker-zone.component.html',
  styleUrls: ['./add-locker-zone.component.scss']
})
export class AddLockerZoneComponent implements OnInit {
  title;
  size;
  constructor(
    private _LockerService: LockerService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save () {
    if (this.title && this.size ) {
      this._LockerService.addZone(this.title, this.size).then( res => {
        this._snackBar.open('Successfully', '', {});
        this.router.navigate(['/','dashboard','locker']);
      });
    }
  }

}
