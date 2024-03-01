import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ClosedTaskGuard } from 'src/services/gurad';
import { TaskEditformComponent } from './task-editform/task-editform.component';
import { AuthGuard } from './authGuard';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'data', component: UserDataComponent },
  { path: 'table', component: TableDataComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [ClosedTaskGuard] },
  { path: 'taskedit/:id', component: TaskEditformComponent },
  { path: 'lazy/:id', loadChildren: () => import('./lazyModule').then(m => m.LazyModule), canActivate: [AuthGuard] },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
