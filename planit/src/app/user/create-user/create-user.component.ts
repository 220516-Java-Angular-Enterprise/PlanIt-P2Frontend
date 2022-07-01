import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { AutomatedNewUser } from 'src/app/models/automatednewuser';
import { NewUserRegistrationClass } from 'src/app/models/newuserRegistrationclass';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  myUser: User = new User;

  currentEmail: string = "";

  constructor(private userService: UserService, private currRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.currRouter.params.subscribe(p=>{
      this.currentEmail = p['email'];
    });
    console.log(this.currentEmail);
  }

  onAutomatedNewUser(data : AutomatedNewUser){}
  onSubmitNewUser(data: NewUserRegistrationClass):void{
    let newuserRegistration: NewUserRegistrationClass = {
      username:data.username,
      password:'P@ssw0rd',
      email:this.currentEmail
    };
    console.log(newuserRegistration);

    this.userService.postNewUser(newuserRegistration).subscribe((newUser)=>
    (console.log(newUser)));

    this.router.navigateByUrl('/quiz');

  }
}
