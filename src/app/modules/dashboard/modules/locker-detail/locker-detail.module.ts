import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerDetailRoutingModule } from './locker-detail-routing.module';
import { LockerDetailComponent } from './locker-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipeModule } from '../../../../pipes/date-pipe/date-pipe.module';
@NgModule({
  declarations: [LockerDetailComponent],
  imports: [
    CommonModule,
    LockerDetailRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    DatePipeModule
  ]
})
export class LockerDetailModule { }
