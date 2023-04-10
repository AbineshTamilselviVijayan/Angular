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
      if (this.userMail == '' || this.userPassword == '') {
        alert('The fields should not be empty !');
        return;
      } else {
        if (this.userMail === this.localStorageData[i].userEmail) {
          if (this.userPassword === this.localStorageData[i].userPassword) {
            console.log('Login sucessfull');
            alert("Login successful");
            this.router.navigate(['/dashboard']);
            return;
          } else {
            alert('Invalid password');
            this.router.navigate(['/login']);
            return;
          }
        } else {
          alert('Invalid login credentials');
          this.router.navigate(['/login']);
          return
        }
      }
    }
  }
}
