import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns = ['1', '2', '3', '4', '5', '6'];
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

    this._UserService.getUsers(start, end).then( (data:any) => {
      console.log(data);
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    })

  }

}
