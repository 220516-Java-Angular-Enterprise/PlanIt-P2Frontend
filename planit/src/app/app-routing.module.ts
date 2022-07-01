import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './common/homepage/homepage.component';
import { LandingpageComponent } from './common/landingpage/landingpage.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { HotelComponent } from './trip/hotel/hotel.component';
import { TripCreateComponent } from './trip/trip-create/trip-create.component';
import { TripDetailComponent } from './trip/trip-detail/trip-detail.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { QuizComponent } from './common/quiz/quiz.component';


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
  },
  {
    path: 'trips',
    component: TripListComponent
  },
  {
    path: 'trips/:id',
    component: TripDetailComponent
  },
  {
    path: 'create/trip',
    component: TripCreateComponent
  },
  {
    path: 'trip/hotel',
    component: HotelComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
