import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Employee {
  name: string;
  mail: string;
  newPassword: string;
  retypeNewPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  mail = '';
  newPassword = '';
  retypeNewPassword = '';

  constructor(private router: Router) { }

  loginRoute(){
    this.router.navigate(['/login']);
  }

  employees: Employee[] = [];

  employee: Employee = {
    name: '',
    mail: '',
    newPassword: '',
    retypeNewPassword: '',
  };

  register(){
    console.log(this.employee);
    if(this.employee.newPassword==this.employee.retypeNewPassword){
      this.employees.push(this.employee);
      localStorage.setItem('emp',JSON.stringify(this.employees));
      alert("Data saved");
      this.employee = {
        name : '',
        mail : '',
        newPassword : '',
        retypeNewPassword : ''
      }
    }
    else{
      alert("Password mismatch");
    }
  }

}
