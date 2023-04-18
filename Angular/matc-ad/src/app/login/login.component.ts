import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Employee {
  name: string;
  mail: string;
  newPassword: string;
  retypeNewPassword: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  localStorageData = JSON.parse(localStorage.getItem('emp') || '[]') as Employee[];

  defaultUsername = 'admin';
  defaultPassword = 'admin';

  username = '';
  password = '';

  constructor(private router: Router) {}

  registerRoute() {
    this.router.navigate(['/register']);
  }

  // check(){
  //   if(this.username == this.defaultUsername){
  //     if(this.defaultPassword == this.password){
  //       this.username = '';
  //       this.password = '';
  //       alert("Login sucessful");
  //     }
  //     else{
  //       this.password = '';
  //       alert("Password incorrect");
  //     }
  //   }
  //   else{
  //     alert("Invalid username");
  //   }
  // }

  check() {
    for (let i = 0; i < this.localStorageData.length; i++) {
      if (this.username == '' || this.password == '') {
        alert('The fields should not be empty !');
        return;
      } else {
        if (this.username === this.localStorageData[i].mail) {
          if (this.password === this.localStorageData[i].newPassword) {
            console.log('Login sucessfull');
            alert('Login successful');
            this.router.navigate(['/home']);
            return;
          } else {
            alert('Invalid password');
            this.password = '';
            return;
          }
        } else {
          alert('Invalid login credentials');
          this.username = '';
          this.password = '';
          return;
        }
      }
    }
  }
}
