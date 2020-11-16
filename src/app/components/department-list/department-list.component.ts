import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentDetailsComponent } from 'src/app/components/department-details/department-details.component';
import { Observable } from "rxjs";
import { DepartmentService } from "src/app/services/department.service";
import { Department } from "src/app/common/department";
import { Task } from "src/app/common/task";
import { TaskService } from "src/app/services/task.service";



@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

 departments: Observable<Department[]>;

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.departments = this.departmentService.getDepartmentList();
  }

  deleteDepartment(deptid: number) {
    this.departmentService.deleteDepartment(deptid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  departmentDetails(deptid: number){
    this.router.navigate(['details', deptid]);
  }
}