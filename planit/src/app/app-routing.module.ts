import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './common/homepage/homepage.component';
import { LandingpageComponent } from './common/landingpage/landingpage.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';


// Will need to add routes in here for pages
const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
