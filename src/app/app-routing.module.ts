import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
 { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
 // { path: date/:id', component: UpdateEmployeeComponent },'up
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
