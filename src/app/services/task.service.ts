import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from 'src/app/common/task'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = "http://localhost:8080/api/v1/tasks";

  constructor(private http: HttpClient) { }
  
  getTask(tid: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${tid}`);
  }

  createTask(task :Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, task);
  }

  updateTask(tid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseURL}/${tid}`, value);
  }

  deleteTask(tid: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${tid}`, { responseType: 'text' });
  }

  getTaskList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}