import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path : "" , redirectTo: 'login', pathMatch: 'full'},
  {path : "login", component :LoginComponent },
  {path : "register", component:RegisterComponent},
  {path : "dashboard", component:DashboardComponent},
  {path : "contact", component:ContactComponent},
  {path : "project", component:ProjectComponent},
  {path : "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
