import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


// Need to import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LandingpageComponent } from './common/landingpage/landingpage.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { SignupexitComponent } from './common/signupexit/signupexit.component';


// 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    LoginComponent,
    SignupComponent,
    SignupexitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
