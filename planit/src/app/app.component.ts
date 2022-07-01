import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { UserService } from './services/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planit';

  constructor(private auth: AuthService, private userservice: UserService, private router: Router,){}

  isLoggedIn: boolean = false;
  email?: string='';
  user: User = {
    id:'',
    username: '',
    password:''
  };

  async ngOnInit(){
    this.auth.isAuthenticated$.subscribe((data:boolean) =>
    {
      this.isLoggedIn = data;
      if(this.isLoggedIn){
        this.auth.user$.subscribe(u=>{
          this.email = u?.email;

          this.userservice.getUsersByEmail(this.email).toPromise().then((data:any)=>{
            this.user = data;
            console.log(this.user);
          if(this.user == null){
            this.goToCreateAccount(this.email);
          }else{
            this.router.navigateByUrl('/quiz');
          }
          })
        })
      }
    })
  }
  goToCreateAccount(email?: string){
    this.router.navigateByUrl(`create-account/${email}`)
  }

  hasRoute(route: string): boolean{
      return this.router.url ==route;
  }

}
