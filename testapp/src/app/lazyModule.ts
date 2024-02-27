
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyComponent } from './lazy/lazy.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      { path: 'child', component: ChildComponent }
      // Add other child routes as needed
    ]
  }
];

@NgModule({
  declarations: [
    LazyComponent,
    ChildComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
