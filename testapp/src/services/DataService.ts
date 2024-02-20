import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpecData } from './SpecData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private specDataUrl = 'assets/spec-data.json';

  constructor(private http: HttpClient) {}

  getSpecData(): Observable<SpecData> {
    debugger;
    return this.http.get<SpecData>(this.specDataUrl).pipe(
      catchError((error: any) => {
        debugger;
        console.error('Error fetching data:', error);
        return throwError('Error fetching data');
      })
    );
  }
}
