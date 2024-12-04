import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employeeList : any[] = []
  constructor(private httpClient: HttpClient) { 
    this.getEmployees();
  }
getEmployees(){
  this.httpClient.get(environment.companyApiUrl+"/api/companies/3d490a70-94ce-4d15-9494-5248280c2ce3/employees").subscribe(x=>{
    this.employeeList = x as any[];
  })
}
  ngOnInit(): void {
  }



}
