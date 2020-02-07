import { Component, OnInit, ViewChild } from '@angular/core';
import { StaticsService } from 'src/app/services/statics.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmPopupComponent } from 'src/app/share/confirm-popup/confirm-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LockerService } from 'src/app/services/locker.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {
  active_lockers;
  lockers_data;

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  dataSource;

  interval_sub;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(
    private _StaticsService: StaticsService,
    public dialog: MatDialog,
    private _LockerService: LockerService,
    private _snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;

    this.getActiveLockerData();
    this.getAllLockerData();

    this.interval_sub = setInterval(() => {
      this.getActiveLockerData();
      this.getAllLockerData();
    }, 5000);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.interval_sub) {
      clearInterval(this.interval_sub);
    }
  }

  getActiveLockerData() {
    this._StaticsService.getActiveLockerData().then((res: any) => {
      console.log(res);
      this.active_lockers = res;
    });
  }

  getAllLockerData() {
    this._StaticsService.getAllLockerData().then((res: any) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.lockers_data = res;
    });
  }

  removeLocker(locker) {
    console.log(locker);
    if (locker.active == 1) {
      this._snackBar.open('Can not remove the locker, being used.', '', {
        panelClass: 'error'
      });
      return;
    }
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: { title: 'Remove locker ' + locker.title, detail: '' }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this._LockerService.remove(locker.id).then(res => {
          console.log(res);
          this._snackBar.open('Successfully', '', {});
          this.getAllLockerData();
        });
      }
    });
  }

  disableLocker(locker) {
    console.log(locker);
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: { title: 'Disable locker ' + locker.title, detail: '' }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this._LockerService.disable(locker.id).then(res => {
          console.log(res);
          this._snackBar.open('Successfully', '', {});
          this.getAllLockerData();
        });
      }
    });
  }

  enableLocker(locker) {
    console.log(locker);
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: { title: 'Enable locker ' + locker.title, detail: '' }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this._LockerService.enable(locker.id).then(res => {
          console.log(res);
          this._snackBar.open('Successfully', '', {});
          this.getAllLockerData();
        });
      }
    });
  }

}
