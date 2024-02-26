// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://d424b7ff90304433b3562e05f6fb86ee.api.mockbin.io/';  // Replace with your mock server URL

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`).pipe(
      catchError(this.handleError)
    );
  }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/data`, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }
}
