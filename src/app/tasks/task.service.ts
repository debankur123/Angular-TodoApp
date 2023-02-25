import { Injectable } from '@angular/core';
import { NewTask } from './new-TaskDTO';
import { TaskItem } from './task-itemDTO';


// Sevice provider scope
// @Injectable({
//   providedIn: 'root'
// })
export class TaskService {

  constructor() { }
  private tasks : TaskItem[] =  [
    new TaskItem('Visit medical store'),
    new TaskItem('Go to Shop'),
    new TaskItem('Visit Office'),
    new TaskItem('Go to Gym'),
    new TaskItem('Going for Tutions')
  ]

  getAllTasks() : ReadonlyArray<TaskItem>{
    return this.tasks;
  }

  addTask(newTask: NewTask){
    this.tasks = this.tasks.concat(new TaskItem(newTask.title));
  }

  removeTask(existingTask : TaskItem){
    this.tasks = this.tasks.filter(task => task != existingTask);
  }
}
