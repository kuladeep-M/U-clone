import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat-component/chat-component.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {   path: 'login',   component: LoginComponent   },
  {   path: '',   component: CourseListComponent,pathMatch:'full'   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
