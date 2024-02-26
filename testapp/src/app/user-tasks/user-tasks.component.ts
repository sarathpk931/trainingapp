import { Component } from '@angular/core';
import { HttpService } from 'src/services/httpService';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.less']
})
export class UserTasksComponent {
  numberOfTasks: number = 5;
  constructor(private dataService: HttpService) {}
  getData()
  {
 


    this.dataService.getData().subscribe(data => {
      console.log('Fetched Data:', data);
})};

addData()
{
    const newData = { id: "4",name:"sarath"};
    this.dataService.postData(newData).subscribe(response => {
      console.log('Posted Data:', response);
    });
  }
  
}

