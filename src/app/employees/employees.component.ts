import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;


  constructor(private employeeService: EmployeeService) { 
  
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  onSelect(employee: Employee){
    this.selectedEmployee = employee;
  }

  ngOnInit() {
    this.getEmployees();
  }

}
