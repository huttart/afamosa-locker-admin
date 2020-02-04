import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteBarComponent } from './site-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SiteBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    SiteBarComponent
  ]
})
export class SiteBarModule { }
