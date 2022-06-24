import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

}
