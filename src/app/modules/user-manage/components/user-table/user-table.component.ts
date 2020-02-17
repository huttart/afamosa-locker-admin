import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmPopupComponent } from 'src/app/share/confirm-popup/confirm-popup.component';
import { dialog } from 'electron';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource_user;
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];


  constructor(
    private _AdminService: AdminService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._AdminService.getUser().then((users: any) => {
      console.log(users);
      this.dataSource_user = new MatTableDataSource(users);
      this.dataSource_user.paginator = this.paginator;
    })
  }

  removeUserByID(user) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: { title: 'Remove user ' + user.username, detail: 'Remove ' + user.role + ' ' + user.f_name + ' ' + user.l_name }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._AdminService.removeUser(user.id).then( (res:any) => {
          if (res.status) {
            this._snackBar.open('Successfully', '', {});
            this.getUser();
          } else {
            this._snackBar.open(res.error, '', {
              panelClass: 'error'
            });
          }
        })
      }
    });
  }

}
