import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError,map, of  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpecData } from './SpecData';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private specDataUrl = 'assets/spec-data.json';

  constructor(private http: HttpClient) {}

  getSpecData(): Observable<SpecData> {
   
    return this.http.get<SpecData>(this.specDataUrl).pipe(
      catchError((error: any) => {
    
        console.error('Error fetching data:', error);
        return throwError('Error fetching data');
      })
    );
  }
  getSpecDataById(taskId: number): Observable<any> {
    return this.http.get<SpecData>(this.specDataUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching data:', error);
        return throwError('Error fetching data');
      }),
      map((data: any) => {
        const task = data.tasks.find((t: any) => t.id === taskId);
        debugger;
        if (task) {
          return task;
        } else {
          return throwError('Task not found');
        }
      })
    );
    
  }
// Simulate fetching task data from a server
getTaskById(id: number): Observable<Task> {
  // Replace this with actual data fetching logic
  const mockTask: Task = {
    id: id,
    title: 'Sample Task',
    completed: false,
    date: new Date()
  };
  return of(mockTask);
}

// Simulate updating task data on a server
updateTask(task: Task): Observable<void> {
  // Replace this with actual data updating logic
  console.log('Updating task:', task);
  return of();
}
 
}
