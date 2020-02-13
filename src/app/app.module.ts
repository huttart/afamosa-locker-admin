import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DATE_LOCALE } from '@angular/material';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    GoogleChartsModule.forRoot(),
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule

  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
