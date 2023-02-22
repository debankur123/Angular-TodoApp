import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './tasks/tasks.Module';
import { CalenderComponent } from './calender/calender.component';
import { CalenderModule } from './calender/calender.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskService } from './tasks/task.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    CalenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
