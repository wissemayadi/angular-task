import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
detail!:any;
id!:any;

  constructor(private s: TaskService ,
              private ac: ActivatedRoute      
    ) { }

  ngOnInit(): void {
    this.getOneTask(this.ac.snapshot.params['id']);

  }

 

  getOneTask(id: string): void {
    this.s.getTaskDetails(id)
      .subscribe(
        data => {
          this.detail = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
