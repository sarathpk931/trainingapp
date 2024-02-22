import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/services/DataService';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.less']
})
export class TaskDetailsComponent implements OnInit {
  task:any;

  constructor(private route: ActivatedRoute , private dataService: DataService) {}

  ngOnInit(): void {
    var taskId = this.route?.snapshot?.paramMap?.get('id');
    this.dataService.getSpecData().subscribe(
      (data) => {
        debugger;
        this.task=data.tasks.find((t: any) => t.id == taskId);
       
        debugger;
      },
      (error) => {
        debugger;
       
      }
    );
    debugger;
  }
}