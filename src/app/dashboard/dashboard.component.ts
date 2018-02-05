import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees : Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe( (employees) => {
        this.employees = employees;

      });
  }

  ngOnInit() {
    this.getEmployees();
  }

}
