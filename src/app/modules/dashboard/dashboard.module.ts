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
    GoogleChartsModule
  ]
})
export class DashboardModule { }
