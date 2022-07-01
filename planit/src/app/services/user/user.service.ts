import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { firstValueFrom, Observable } from 'rxjs';
import { AutomatedNewUser } from 'src/app/models/automatednewuser';
import { NewUserRegistrationClass } from 'src/app/models/newuserRegistrationclass';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }





  private userURL = " http://planitproject2-env.eba-tguhtqck.us-east-2.elasticbeanstalk.com/planit/users";


  // backendHeader = new HttpHeaders().set('Access-Control-Allow-Origin', '*')

 

  getAllUsers(): Promise<User[]> {
    return firstValueFrom(this.http.get<User[]>(this.userURL));
  }

  getUserById(id: string): Promise<User> {
    return firstValueFrom(this.http.get<User>(this.userURL + "/" + id));
  }

  // need to see how auth talks to db
  createNewUser(user: User) {
    return firstValueFrom(this.http.post(this.userURL, user));
  }

  getUsersByEmail(email?: string): Observable<User>{
    return this.http.get<User>(this.userURL + '/get-by-email/' + email)
  }

  postNewAutomatedUser(newUserToRegister: AutomatedNewUser){
    return this.http.post<any>(this.userURL, newUserToRegister);
  }

  postNewUser(newUserToRegister: NewUserRegistrationClass):Observable<NewUserRegistrationClass>{
    console.log(newUserToRegister);
    return this.http.post<any>(this.userURL,newUserToRegister);
  }
}
