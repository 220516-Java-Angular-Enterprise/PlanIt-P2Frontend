import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  private userURL = "http://planitproject2-env.eba-tguhtqck.us-east-2.elasticbeanstalk.com/planit/users";

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
}
