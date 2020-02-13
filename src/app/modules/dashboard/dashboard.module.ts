import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './components/main/main.component';
import { SiteBarModule } from 'src/app/share/site-bar/site-bar.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { GoogleChartsModule } from 'angular-google-charts';

import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmPopupModule } from 'src/app/share/confirm-popup/confirm-popup.module';
import { ConfirmPopupComponent } from 'src/app/share/confirm-popup/confirm-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [DashboardComponent, MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SiteBarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    GoogleChartsModule,
    ConfirmPopupModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ConfirmPopupComponent
  ]
})
export class DashboardModule { }
