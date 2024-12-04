import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat-component/chat-component.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponent } from './footer/footer.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PlaceOrderComponent } from './place-order/place-order.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    HeaderComponentComponent,
    FooterComponent,
    CourseListComponent,
    EmployeeListComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
