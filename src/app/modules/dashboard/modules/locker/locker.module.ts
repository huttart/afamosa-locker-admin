import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerRoutingModule } from './locker-routing.module';
import { LockerComponent } from './locker.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [LockerComponent],
  imports: [
    CommonModule,
    LockerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LockerModule { }
