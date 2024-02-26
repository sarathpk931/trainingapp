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

  constructor(private route: ActivatedRoute ,
    private router2:Router, private dataService: DataService) {}

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

  navigateToTaskDetail(taskId: number) {
    // Navigate to the task detail page using Angular Router
    this.router2.navigate(['/taskedit', taskId]);
  }
}