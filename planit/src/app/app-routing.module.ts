import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './common/landingpage/landingpage.component';


// Will need to add routes in here for pages
const routes: Routes = [
  {
    // set landing to backslash and from there depending on where you go will call other paths in 
    path: '',
    component: LandingpageComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
