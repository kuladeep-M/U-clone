import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat-component/chat-component.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
  {   path: 'login',   component: LoginComponent   },
  {path:'employees',component: EmployeeListComponent},
  {path:'place-order',component:PlaceOrderComponent},
  {   path: '',   component: CourseListComponent,pathMatch:'full'   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
