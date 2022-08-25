import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
task!:any;
detail!:any
id!:any;
taskList!:[]
page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes: any = [5,10,15,20];

  constructor(private s: TaskService,
              private router: Router,
              private ac: ActivatedRoute 
    ) { }

  ngOnInit(): void {
    this.getGoods()
   
  }

  getGoods():void{
     this.s.getExpressTask().subscribe(
      (response)=>this.task=response ,
      error=>console.log(error),
      
      )
  }
  
  //delete one good
  deleteTask(id:any){
    try{
    return this.s.deleteTask(id).subscribe(
      ()=>this.getGoods()
    )
    }catch(error){
   alert(error)
    }
    return ;
  }


//pagination functions//
onTableDataChange(event:any){
  this.page = event;
  this.getGoods()
}

onTableSizeChange(event : any):void{
  this.tableSize = event.target.value;
  this.page = 1;
  this.getGoods();
}
}
