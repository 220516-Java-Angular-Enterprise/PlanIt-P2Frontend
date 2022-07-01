import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router, private userService: UserService) { }

  isLoggedIn: boolean = false;
  user: User = {
    id: '',
    username: '',
    password: '',
    trip: []
  };
  email?: string = '';

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(b => {
      this.isLoggedIn = b;
    })
  }

  logIn(): void {
    this.auth.loginWithRedirect({
        appState: { target: '/quiz' }
      });
      this.userService
  }

  logOut(): void {
    this.auth.logout();
  }
}