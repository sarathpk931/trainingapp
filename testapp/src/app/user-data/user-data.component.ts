import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/DataService';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.less']
})
export class UserDataComponent implements OnInit {

  loading: boolean = true;
  error: string | null = null;
  userProfile: any;
  tasks: any[]= [];
  isAllTaskCompleted:boolean=true;

  constructor(private dataService: DataService,private router:Router) {}

  ngOnInit(): void {
    this.dataService.getSpecData().subscribe(
      (data) => {
        if(data.userProfile==null)
        {
          this.error="Error fetching data. Please try again later."
        }
        this.userProfile = data.userProfile;
        this.tasks = data.tasks;
        this.loading = false;
        this.isAllTaskCompleted=this.tasks.every(a=>a.completed);
        debugger;
      },
      (error) => {
        debugger;
        this.error = error;
        this.loading = false;
      }
    );
  }
  navigateToTaskDetail(taskId: number) {
    // Navigate to the task detail page using Angular Router
    this.router.navigate(['/tasks', taskId]);
  }
}
