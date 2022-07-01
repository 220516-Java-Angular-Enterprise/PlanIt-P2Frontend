import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(b => {
      this.isLoggedIn = b;
    })
  }

  logIn(): void {
    this.auth.loginWithRedirect({
        appState: { target: '/homepage' }
      });
  }

  logOut(): void {
    this.auth.logout();  
  }

}
