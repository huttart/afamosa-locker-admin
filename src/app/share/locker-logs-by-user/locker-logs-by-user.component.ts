import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LockerService } from 'src/app/services/locker.service';
@Component({
  selector: 'app-locker-logs-by-user',
  templateUrl: './locker-logs-by-user.component.html',
  styleUrls: ['./locker-logs-by-user.component.scss']
})
export class LockerLogsByUserComponent implements OnInit {
  logs_data;
  constructor(
    public dialogRef: MatDialogRef<LockerLogsByUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _LockerService: LockerService
    ) { }

  ngOnInit() {
    console.log(this.data);
    this._LockerService.getLogsByUserIDAndLockerID(this.data.data.locker_id, this.data.data.user_id).then( (logs:any) => {
      console.log(logs);
      this.logs_data = logs;
    })
  }

  close () {
    this.dialogRef.close();
  }

}
