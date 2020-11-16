import { Employee } from 'src/app/common/employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from "src/app/services/department.service";
import { Department } from "src/app/common/department";
import { Task } from "src/app/common/task";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
   tid: number;
   task: Task;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private taskService: TaskService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.task = new Task();

    this.tid = this.route.snapshot.params['tid'];
    this.id = this.route.snapshot.params['id'];
    
    this.taskService.getTask(this.tid)
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['task']);
    this.router.navigate(['employees']);
  }

  
}