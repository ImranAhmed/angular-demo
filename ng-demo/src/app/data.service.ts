import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users`);
  }
}
