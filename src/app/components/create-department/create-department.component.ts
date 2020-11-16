import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from "rxjs";
import { DepartmentService } from "src/app/services/department.service";
import { Department } from "src/app/common/department";


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  department: Department= new Department();
  submitted = false;

  constructor(private departmentService: DepartmentService,
    private router: Router) { }

    ngOnInit() {
    }


    newDepartment(): void {
      this.submitted = false;
      this.department = new Department();
    }
  
    save() {
      this.departmentService
      .createDepartment(this.department).subscribe(data => {
        console.log(data)
        this.department = new Department();
        this.gotoList();
      }, 
      error => console.log(error));
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/departments']);
    }
  }
