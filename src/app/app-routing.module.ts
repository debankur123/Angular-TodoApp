import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { TaskListComponent } from './task-list/task-list.component';
const routes: Routes = [
  {component: CalenderComponent, path: ''},
  {component: TaskListComponent, path:'tasks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
