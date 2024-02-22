import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { DataService } from './DataService'; // Replace 'TaskService' with your actual service
import { Observable,map,catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClosedTaskGuard implements CanActivate {

  constructor(private router: ActivatedRoute, private router2: Router, private dataService: DataService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    const taskId = +route.params['id'];

    return this.dataService.getSpecData().pipe(
      map((data) => {
        const task = data.tasks.find((t: any) => t.id == taskId);
        debugger;
        if (!task?.completed) {
          alert('This task is closed. Navigation is restricted.');
          this.router2.navigate(['/']); 
          return false;
        }

        return true;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return of(false);
      })
    );
  }
}
