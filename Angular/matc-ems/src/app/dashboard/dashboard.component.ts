import { Component } from '@angular/core';

export interface Employee{
  userName:string;
  userEmail:string;
  userPassword:string;
  userRetypePassword:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
