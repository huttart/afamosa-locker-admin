import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GoogleChartsModule } from 'angular-google-charts';
import { DatePipeModule } from 'src/app/pipes/date-pipe/date-pipe.module';
import { UserTableComponent } from './components/user-table/user-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UserComponent, UserTableComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    GoogleChartsModule,
    DatePipeModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class UserModule { }
