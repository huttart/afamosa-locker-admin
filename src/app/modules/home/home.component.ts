import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/share/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
import { StaticsService } from 'src/app/services/statics.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _TaskService: TaskService,
    private _UserService: UserService,
    private _snackBar: MatSnackBar,
    private _StaticsService: StaticsService,

  ) { }

  ngOnInit() {
  }

  sellOnclick() {
    this._StaticsService.getStaticsForDashboardFirstThreeCard().then((data: any) => {
      if (data.active_users_right_now >= data.total_lockers) {
        this._snackBar.open('No available locker.', '', {
          panelClass: 'error'
        });
        return;
      } else {
        this._TaskService.newTaskQueueByType(0).then((res: any) => {
          if (res.status) {
            console.log(res);
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
              data: { title: 'Selling Confirmation', detail: 'sell', task_id: res.data.task_id, type: 0 },
              panelClass: 'logs'
            });

            dialogRef.afterClosed().subscribe((dialog_data: any) => {
              console.log(dialog_data);
              if (!dialog_data.status) {
                this._TaskService.removeTaskQueueByID(0, res.data.task_id);
                return;
              }

              var rfid = dialog_data;

              this._UserService.register(dialog_data.rfid, dialog_data.locker_size, dialog_data.isHigh).then((res: any) => {
                console.log(res);
                if (res.status) {
                  this._snackBar.open(res.message, '', {
                  });
                } else {
                  console.log(res.error);
                  this._snackBar.open(res.error, '', {
                    panelClass: 'error'
                  });
                }
              }).catch(err => {
                this._snackBar.open('An error occurred while registering', '', {
                  panelClass: 'error'
                });
              });

            })
          }
        })
      }
    })


  }

  changeOnClick() {
    this._TaskService.newTaskQueueByType(0).then((res: any) => {
      if (res.status) {
        console.log(res);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: { title: 'Change Locker', detail: 'change', task_id: res.data.task_id, type: 0 },
          panelClass: 'logs'
        });
      }
    });
  }

  checkoutOnClick() {
    this._TaskService.newTaskQueueByType(0).then((res: any) => {
      if (res.status) {
        console.log(res);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: { title: 'Checkout Confirmation', detail: 'checkout', task_id: res.data.task_id, type: 0 },
          panelClass: 'logs'

        });

        dialogRef.afterClosed().subscribe((dialog_data: any) => {
          if (!dialog_data.status) {
            this._TaskService.removeTaskQueueByID(0, res.data.task_id);
            return;
          }
        });
      }
    });
  }

}
