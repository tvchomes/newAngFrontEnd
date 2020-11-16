import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from 'src/app/components/employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";
import { Employee } from "src/app/common/employee";
import { Country} from "src/app/common/country";
import { DepartmentService } from "src/app/services/department.service";
import { TaskService } from "src/app/services/task.service";
import  {Task} from "src/app/common/task";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tasks = this.taskService.getTaskList();
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

  taskDetails(tid: number){
    this.router.navigate(['details', tid]);
  }
}