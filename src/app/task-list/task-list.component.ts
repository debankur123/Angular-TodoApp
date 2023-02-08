import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks : Task[] =  [
    new Task('Visit medical store'),
    new Task('Go to Shop'),
    new Task('Visit Office'),
    new Task('Go to Gym'),
    new Task('Going for Tutions')
  ]
  add(newTask : string){
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask : Task){
    var userConfirmed = confirm(`Are you sure you want to delete? \n "${existingTask.title}"`);
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask); 
    }
  }

  toggleIsDone(task: Task){
    task.isDone = !task.isDone;
  }

}

class Task{

  constructor(public title: string){

  }
  toggleIsDone(){
    this.isDone = !this.isDone;
  }


  public isDone = false;
}
