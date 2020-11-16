import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from 'src/app/components/employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";
import { Employee } from "src/app/common/employee";
import { Country} from "src/app/common/country";
import { DepartmentService } from "src/app/services/department.service";
import { TaskService } from "src/app/services/task.service";
import {Task} from 'src/app/common/task';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  task: Observable<Task[]>;

  constructor(private employeeService: EmployeeService, private taskService: TaskService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
    this.task = this.taskService.getTaskList();
  }
  deleteTask(tid: number) {
    this.taskService.deleteTask(tid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }


  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
  taskDetails(tid: number){
    this.router.navigate(['details', tid]);
  }
}