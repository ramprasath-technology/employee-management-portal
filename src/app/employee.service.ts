import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees() : Observable<Employee[]>{
    this.messageService.add('Employee Service: fetched employees');
    return of(EMPLOYEES);
  }

  getEmployeeById(id: number): Observable<Employee>{
    this.messageService.add('Employee Service: getting employee by id');
    return of(EMPLOYEES.find( employee => employee.id === id));
  }

}
