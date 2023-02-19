import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListModule } from './task-list/task-list.module';
import { CalenderComponent } from './calender/calender.component';
import { CalenderModule } from './calender/calender.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
    CalenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
