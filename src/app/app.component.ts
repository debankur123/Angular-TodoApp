import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List'; 
  // We want to create some fields that are dynamic i.e which are not hardcoded.
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
    var userConfirmed = confirm(`Are you sure you want to delete? \n "${existingTask}"`);
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask); 
    }
  }

  markAsDone(task: Task){
    task.isDone = true;
  }

}

class Task{

  constructor(public title: string){

  }
  public isDone = false;
}
