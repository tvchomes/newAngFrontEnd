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
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  tid: number;
  task: Task;
  id: number;
  employee:Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.tid = this.route.snapshot.params['tid'];
    
    this.taskService.getTask(this.tid)
      .subscribe(data => {
        console.log(data)
        this.task= data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['tasks']);
  }
  
}