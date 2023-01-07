import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './framework/main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './_services/_guards/authentication-guard.service';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    canActivate: [AuthenticationGuard],
    children: [
        { path: '', component: DashboardComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
