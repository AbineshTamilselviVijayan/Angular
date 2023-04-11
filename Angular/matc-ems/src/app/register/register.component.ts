import { Component } from '@angular/core';
// import { Router } from '@angular/router';

export interface Employee {
  userName: string;
  userEmail: string;
  userPassword: string;
  userRetypePassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  employees: Employee[] = [];

  employee: Employee = {
    userName: '',
    userEmail: '',
    userPassword: '',
    userRetypePassword: '',
  };

  saveData() {
    //Validating there is no empty fields in register form.
    if (
      this.employee.userEmail != '' &&
      this.employee.userName != '' &&
      this.employee.userPassword != '' &&
      this.employee.userRetypePassword != ''
    ) {
      this.employees.push(this.employee);
      console.log(this.employees);
      //Verifing the new password and retype password is matching or not.
      if (this.employee.userPassword == this.employee.userRetypePassword) {
        localStorage.setItem('employees', JSON.stringify(this.employees));
      } else {
        alert('Password mismatch');
      }
      //For clearing the two way binding fields in the regise=ter field.
      this.employee = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userRetypePassword: '',
      };
    } else {
      alert('Below fields should not be empty !');
    }
  }
}
