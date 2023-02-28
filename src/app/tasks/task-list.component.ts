import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Route } from '@angular/router';
import { NewTask } from './new-TaskDTO';
import { TaskItem } from './task-itemDTO';
import { TaskService } from './task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private taskService: TaskService //Instance of TaskService is shared by Angular itself
    ) { }
  
  // taskService = new TaskService();
  tasks = this.taskService.getAllTasks(this.route.snapshot.params['date']);
  newTask : NewTask = new NewTask();

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date']
    this.newTask = new NewTask(this.newTask.title,new Date(strDate));
  }

  
  add(taskNgForm : NgForm){
    // assigning a validation
    if(taskNgForm.touched == false)
      return;
    // if(taskNgForm.valid==false)
    //   return;
 
    this.taskService.addTask(this.newTask.date,this.newTask); //Adding a task through service method call
    taskNgForm.reset({date : this.newTask.date});
  }

  remove(existingTask : TaskItem){
    var userConfirmed = confirm(`Are you sure you want to delete? \n "${existingTask.title}"`);
    if(userConfirmed){
      this.taskService.removeTask(this.newTask.date,existingTask); 
    }
  }

  toggleIsDone(task: TaskItem){
    task.isDone = !task.isDone;
  }

}


