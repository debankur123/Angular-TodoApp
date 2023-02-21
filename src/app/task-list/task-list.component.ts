import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Route } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  date = new Date();
  newTaskTitle : string ="";
  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }

  tasks : Task[] =  [
    new Task('Visit medical store'),
    new Task('Go to Shop'),
    new Task('Visit Office'),
    new Task('Go to Gym'),
    new Task('Going for Tutions')
  ]
  add(taskNgForm : NgForm){
    // assigning a validation
    if(taskNgForm.touched == false)
      return;
    if(taskNgForm.valid==false)
      return;

    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date : this.date});
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
