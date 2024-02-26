import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ClosedTaskGuard } from 'src/services/gurad';
import { TaskEditformComponent } from './task-editform/task-editform.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'data', component: UserDataComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [ClosedTaskGuard] },
  { path: 'taskedit/:id', component: TaskEditformComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
