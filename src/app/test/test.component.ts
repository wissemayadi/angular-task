import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
list!:any;
  constructor(private s:TaskService) { }

  ngOnInit(): void {
    this.getTask()
  }
    getTask(){
     this.s.getTask().subscribe(
      (d)=>this.list=d
    )
    }
}
