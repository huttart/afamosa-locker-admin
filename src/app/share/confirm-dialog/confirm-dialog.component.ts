import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { TaskService } from 'src/app/services/task.service';
import { LockerService } from 'src/app/services/locker.service';
import { UserService } from 'src/app/services/user.service';
import { ElectronService } from 'src/app/services/electron.service';

@Component({
  selector: 'gp-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  RFID;
  timeout = 30;
  interval_sub;
  interval_sub2;
  is_can_confirm = false;
  is_can_checkout = false;
  locker_size;
  locker_size_options;
  user_locker_data;

  rf_reader;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private _TaskService: TaskService,
    private _LockerService: LockerService,
    private _snackBar: MatSnackBar,
    private _ElectronService: ElectronService,
    private _UserService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(this.interval_sub);
    // console.log(this.interval_sub2);

    _LockerService.getLockerSizeOptions().then(options => {
      this.locker_size_options = options;
    });

    this.interval_sub = setInterval(() => {
      this.timeout -= 1;
      console.log('interval_sub = ', this.timeout);
      if (this.timeout <= 0) {
        this.onNoClick();
      }
    }, 1000);

    _ElectronService.rfidReaderInit('');
    this.readDataFromRfidReader();


    // this.connectToRfidReader();

    // this.interval_sub2 = setInterval(() => {
    //   _TaskService.getTaskQueueByType(data.type, data.task_id).then((res:any) => {
    //     if (res.rfid) {
    //       console.log(res);
    //       this.RFID = res.rfid;
    //       clearInterval(this.interval_sub);
    //       clearInterval(this.interval_sub2);
    //       if (data.detail == 'checkout' || data.detail == 'change') {
    //         _UserService.getUserLockerData(this.RFID).then((data:any) => {
    //           console.log(data);
    //           this.user_locker_data = data;
    //           if (data) {
    //             this.is_can_checkout = true;

    //             if (data.active == 0) {
    //               this.is_can_checkout = false;
    //             }
    //           }
    //         })
    //       }
    //     }

    //     // if (res.rfid) {
    //     //   this.dialogRef.close(res.rfid);
    //     // }
    //   })
    // }, 500);

  }

  connectToRfidReader() {
    this._ElectronService.serialPort.list().then(ports => {
      ports.forEach(port => {
        if (port.manufacturer == "FTDI") {
          // this.rf_reader = this._ElectronService.rfidReaderInit(port.path);
          // console.log(this.rf_reader);
        }
      });

      this.readDataFromRfidReader();

    });
  }

  readDataFromRfidReader() {
    this.interval_sub2 = setInterval(() => {
      var rfid_data = this._ElectronService.rfid_data;
      if (rfid_data) {
        this.RFID = rfid_data;
        this._ElectronService.rfid_data = null;
        clearInterval(this.interval_sub2);
        clearInterval(this.interval_sub);
        if (this.data.detail == 'checkout' || this.data.detail == 'change') {
          this._UserService.getUserLockerData(this.RFID).then((data: any) => {
            this.user_locker_data = data;
            if (data) {
              this.is_can_checkout = true;
  
              if (data.active == 0) {
                this.is_can_checkout = false;
              }
            }
          })
        }
      }
      
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.interval_sub) {
      clearInterval(this.interval_sub);
    }
    if (this.interval_sub2) {
      clearInterval(this.interval_sub2);
    }

    if (this.rf_reader) {
      this.rf_reader.lib.rf_exit(this.rf_reader.icdev);
    }
  }

  onNoClick(): void {
    this.dialogRef.close({
      status: false
    });
  }

  onYesClick(): void {
    if (!this.locker_size) {
      this._snackBar.open('Please select a locker size.', '', {
        panelClass: 'error'
      });
      return;
    }
    console.log('Yes');

    this.dialogRef.close({
      rfid: this.RFID,
      locker_size: this.locker_size,
      status: true
    });
  }

  onCheckoutClick() {
    this._UserService.checkout(this.RFID, this.user_locker_data.locker_id).then((res: any) => {
      if (res.status) {
        console.log(res);
        this._snackBar.open(res.message, '', {});
      } else {
        this._snackBar.open('An error occurred while checking out.', '', {
          panelClass: 'error'
        });
      }
    }).catch(error => {
      this._snackBar.open('An error occurred while checking out.', '', {
        panelClass: 'error'
      });
    });

    this.dialogRef.close({
      status: true
    });

  }

  onChangeClick() {
    this._LockerService.changeLocker(this.RFID, this.user_locker_data.locker_id).then((res: any) => {
      if (res.status) {
        console.log(res);

        this._snackBar.open(res.message, '', {});
      } else {
        this._snackBar.open('An error occurred while changing locker.', '', {
          panelClass: 'error'
        });
      }
    }).catch(error => {
      this._snackBar.open('An error occurred while changing locker.', '', {
        panelClass: 'error'
      });
    });

    this.dialogRef.close({
      status: true
    });


  }


  ngOnInit() {
  }
}
