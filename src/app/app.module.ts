import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

import { Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component'


const firebaseConfig = {
  apiKey: "AIzaSyDRDYeYzQWaMGeRTBa6ldmlefmBHXPRcLo",
  authDomain: "farm2market-4beaa.firebaseapp.com",
  databaseURL: "https://farm2market-4beaa.firebaseio.com",
  projectId: "farm2market-4beaa",
  storageBucket: "farm2market-4beaa.appspot.com",
  messagingSenderId: "1094811389464",
  appId: "1:1094811389464:web:cec50176dcfdcd97be7d6d",
  measurementId: "G-YZ9KL5THW1"
};



const routes: Routes = [
  {path: 'details/:id', component: EmployeeDetailsComponent },
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path:'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
{ path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    CreateTaskComponent,
    TaskListComponent,
    TaskDetailsComponent,

   
  ],
  imports: [
    AngularFireModule.initializeApp( firebaseConfig, 'angular-auth-firebase'),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireFunctionsModule,
    FormsModule
  
  ],
  providers: [ProductService, {provide:REGION, useValue:'us-cental1'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
