import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from './user-data/user-data.component';
import { DataService } from 'src/services/DataService';
import { HighlightCompletedDirective } from 'src/directives/highlight.directive';
import { PendingItemsPipe } from 'src/pipes/pending.pipe';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CofirmDialogueComponent } from './cofirm-dialogue/cofirm-dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { TableDataComponent } from './table-data/table-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    UserTasksComponent,
    UserDataComponent,
    HighlightCompletedDirective,
    PendingItemsPipe,
    TaskDetailsComponent,
    CofirmDialogueComponent,
    TableDataComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AgGridModule
   
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
