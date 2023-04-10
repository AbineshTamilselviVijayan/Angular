import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Employee {
  userName: string;
  userEmail: string;
  userPassword: string;
  userRetypePassword: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  localStorageData = JSON.parse(localStorage.getItem('employees') || '[]') as Employee[];

  hardMail = 'admin@gmail.com';
  hardPassword = 'admin';

  userMail = '';
  userPassword = '';

  employee: Employee = {
    userName: '',
    userEmail: '',
    userPassword: '',
    userRetypePassword: '',
  };

  constructor(private router: Router) {}

  login() {
    for (let i = 0; i < this.localStorageData.length; i++) {
      if (this.userMail === this.localStorageData[i].userEmail && this.userPassword === this.userPassword) {
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
