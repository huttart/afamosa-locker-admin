import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLockerRoutingModule } from './add-locker-routing.module';
import { AddLockerComponent } from './add-locker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AddLockerComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddLockerRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class AddLockerModule { }
