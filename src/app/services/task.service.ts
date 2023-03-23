import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = [];
  private completedTask: string[] = [];

  constructor() { 
    this.tasks.push("Tarea 1");
    this.tasks.push("Tarea 2");
  }

  public getTasks():string[]{
    return this.tasks;
  }

  public getCompletedTasks():string[]{
    return this.completedTask;
  }

  public completeTask(pos:number){
    this.completedTask.push(this.tasks[pos]);
    this.tasks.splice(pos, 1);
  }

  public newTask(task:string){
    this.tasks.push(task);
  }
}
