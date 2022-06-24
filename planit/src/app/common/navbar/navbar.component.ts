import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  user: any = {}

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
      this.user = u;
    })
  }
}
