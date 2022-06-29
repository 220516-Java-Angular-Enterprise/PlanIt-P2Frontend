import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


// Need to import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LandingpageComponent } from './common/landingpage/landingpage.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { DatePickerComponent } from './common/date-picker/date-picker.component';
import { MaterialExampleModule } from './material.module';
import { TripCreateComponent } from './trip/trip-create/trip-create.component';
import { TripDetailComponent } from './trip/trip-detail/trip-detail.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './user/auth/auth.component';
import { HptripsearchComponent } from './common/hptripsearch/hptripsearch.component';
import { HotelComponent } from './trip/hotel/hotel.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';

// 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    DatePickerComponent,
    TripCreateComponent,
    TripDetailComponent,
    TripListComponent,
    AuthComponent,
    HptripsearchComponent,
    HotelComponent,
    DashboardComponent;
  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
