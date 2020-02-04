import { Component, OnInit, ViewChild } from '@angular/core';
import { StaticsService } from 'src/app/services/statics.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {
  active_lockers;
  lockers_data;

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    private _StaticsService: StaticsService
  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;

    this.getActiveLockerData();
    this.getAllLockerData();

  }

  getActiveLockerData () {
    this._StaticsService.getActiveLockerData().then( (res:any)  =>  {
      console.log(res);
      this.active_lockers = res;
    });
  }

  getAllLockerData () {
    this._StaticsService.getAllLockerData().then( (res:any)  =>  {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.lockers_data = res;
    });
  }

}
