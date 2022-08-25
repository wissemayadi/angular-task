import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) {

   }

 //springboot service
  getTask(){
    return this.http.get("http://localhost:6868/api/v1/task/");
   }
 
//express js mongodb service
  getExpressTask(){
    return this.http.get<Task>("http://localhost:3000/api/allgoods").pipe(
   map(
    (res=>{
      return res
    })))
  }

  deleteTask(id:any){
    return this.http.delete("http://localhost:3000/api/deleteGood/"+id)
   }

  getTaskDetails(id:any){
    return this.http.get("http://localhost:3000/api/good/"+id)
   }

  createTask(data:any){
  return this.http.post("http://locahost:3000/api/goodByUser",+data)
   }
}
