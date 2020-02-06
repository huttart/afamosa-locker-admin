import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ConfirmPopupComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ConfirmPopupComponent
  ]
})
export class ConfirmPopupModule { }
