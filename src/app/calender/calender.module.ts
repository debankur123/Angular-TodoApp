import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule
  ],
  exports:[
    CalenderComponent
  ]
})
export class CalenderModule { }
