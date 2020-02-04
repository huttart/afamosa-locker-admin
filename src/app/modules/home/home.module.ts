import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SiteBarModule } from 'src/app/share/site-bar/site-bar.module';
import { SellComponent } from './components/sell/sell.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogModule } from 'src/app/share/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from 'src/app/share/confirm-dialog/confirm-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HomeComponent, SellComponent, CheckoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SiteBarModule,
    MatRippleModule,
    MatDialogModule,
    ConfirmDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class HomeModule { }
