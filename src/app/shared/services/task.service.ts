import { Injectable } from '@angular/core';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:Task[]=[];
  constructor() { }
  addTask(task:Task){
    this.tasks.push(task);
  }
  getTasks(){
    return this.tasks;
  }
  getTask(index:number){
    return this.tasks[index];
  }
  deleteTask(index:number){
    this.tasks.splice(index,1);
  }
  updateTask(index:number,task:Task){
    this.tasks[index]=task;
  }
  /*searchTask(search:string){
    return this.tasks.filter(task=>task.titre.toLowerCase().includes(search.toLowerCase()));
  }
  */
  searchTask(search:string){
    return this.tasks.filter(task=>task.titre.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase()));
  }
}
