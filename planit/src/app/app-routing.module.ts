import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './common/homepage/homepage.component';
import { LandingpageComponent } from './common/landingpage/landingpage.component';
import { LoginComponent } from './common/login/login.component';
import { ParisAttractHomepageComponent } from './common/parisHomepage/attractHomepage/parisAttractHomepage.component';
import { ParisCafeHomepageComponent } from './common/parisHomepage/cafeHomepage/parisCafeHomepage.component';
import { ParisMuseumHomepageComponent } from './common/parisHomepage/museumHomepage/parisMuseumHomepage.component';
import { ParisZooHomepageComponent } from './common/parisHomepage/zooHomepage/parisZooHomepage.component';
import { SignupComponent } from './common/signup/signup.component';
import { HotelComponent } from './trip/hotel/hotel.component';
import { TripCreateComponent } from './trip/trip-create/trip-create.component';
import { TripDetailComponent } from './trip/trip-detail/trip-detail.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';


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
    path: 'pariscafe',
    component: ParisCafeHomepageComponent
  },
  {
    path: 'pariszoo',
    component: ParisZooHomepageComponent
  },
  {
    path: 'parisattract',
    component: ParisAttractHomepageComponent
  },
  {
    path: 'parismuseum',
    component: ParisMuseumHomepageComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
