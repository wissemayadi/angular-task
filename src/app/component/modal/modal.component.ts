import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
task!:any; 
taskValue!:FormGroup;
taskObj: Task = new Task() ; 


  constructor(private s:UserService,
    private taskservice: TaskService,
    private formBuilder:FormBuilder) {


   }

  ngOnInit(): void {
    this.s.getAllUser().subscribe(
      (d)=>{
        this.task = d,
        console.log(d)
      }
    )

    this.taskValue=this.formBuilder.group({
      _id:[],
      company:[''],
      leave:[''],
      description:[''],
      serialNumber:[''],
      employee:[''],
      userId:[''],
    })
  }
  addTask(){
    this.taskObj.description = this.taskValue.value.description;
    this.taskObj.company = this.taskValue.value.company;
    this.taskObj.leave = this.taskValue.value.leave;
    this.taskObj.userId = this.taskValue.value.userId;
    this.taskObj.employee = this.taskValue.value.employee;
    this.taskObj.serialNumber = this.taskValue.value.serialNumber;

    this.taskservice.createTask(this.taskObj).subscribe({next: (v)=>{
      console.log(v)
    },
    error:(e)=>{
      alert("error")
    },
    complete:()=>{
      console.log('complete')
      alert("user added with success")
    

      this.taskValue.reset()

    }
  })
    }


}
