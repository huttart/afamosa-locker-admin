import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator, MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns = ['7', '1', '2', '3', '4','8', '5','9','6'];
  users;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource;

  constructor(
    private _UserService: UserService
  ) { }

  ngOnInit() {
    var date = new Date();
    var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
    this.getUsers(start, end);
  }

  getUsers (start, end) {
    this._UserService.getUsers(start, end).then( (data:any) => {
      console.log(data);
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  onDateChange (type: string, event: MatDatepickerInputEvent<Date>) {
    var date = new Date(event.value);
    var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);

    this.getUsers(start, end);
  }

}
