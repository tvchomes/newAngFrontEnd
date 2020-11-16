import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentListComponent } from 'src/app/components/department-list/department-list.component';
import { Observable } from "rxjs";
import { DepartmentService } from "src/app/services/department.service";
import { Department } from "src/app/common/department";


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  deptid: number;
  department: Department;

  constructor(private route: ActivatedRoute,private router: Router,
    private departmentService: DepartmentService) { }

  ngOnInit() {
    this.department = new Department();

    this.deptid = this.route.snapshot.params['deptid'];
    
    this.departmentService.getDepartment(this.deptid)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['departments']);
  }
}