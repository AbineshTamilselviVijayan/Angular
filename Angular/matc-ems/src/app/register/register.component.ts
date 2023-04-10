import { Component } from '@angular/core';
// import { Router } from '@angular/router';

export interface Employee{
  userName:string;
  userEmail:string;
  userPassword:string;
  userRetypePassword:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  employees:Employee[] = []

  employee:Employee = {
  userName:'',
  userEmail:'',
  userPassword:'',
  userRetypePassword:''
  }

  saveData(){
    console.log(this.employee);
    this.employees.push(this.employee);
    console.log(this.employees);
    localStorage.setItem("employees",JSON.stringify(this.employees));
    this.employee={
      userName:'',
      userEmail:'',
      userPassword:'',
      userRetypePassword:''
    }
  }
}
