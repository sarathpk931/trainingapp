import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) {}

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
        debugger;
      },
      (error) => {
        debugger;
        this.error = error;
        this.loading = false;
      }
    );
  }
}
