import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from 'src/app/common/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  



  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }
  
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
 

}