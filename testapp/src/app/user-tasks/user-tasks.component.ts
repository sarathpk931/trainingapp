import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.less']
})
export class UserTasksComponent {
  numberOfTasks: number = 5;
}
