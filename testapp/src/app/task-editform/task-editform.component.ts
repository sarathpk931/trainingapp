import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/services/DataService';
import { Task } from 'src/services/task';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
  NonNullableFormBuilder
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-editform',
  templateUrl: './task-editform.component.html',
  styleUrls: ['./task-editform.component.less'],
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule ]
})
export class TaskEditformComponent  {
 
    
  taskForm = new FormGroup({
    title: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    date: new FormControl("", [ Validators.required])

  });
 

 onSubmit(): void {
   

    if (this.taskForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.taskForm.value);
    }
  }

  protected resetForm(): void {
    this.taskForm.reset();
  }
}