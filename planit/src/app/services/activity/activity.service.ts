import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs';
import { Plans } from '../../models/plans';
import {Trip} from '../../models/trip'
import { HttpParams } from '@angular/common/http';
import { Activity } from 'src/app/models/activity';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  options = {
    // method: 'GET',
    headers: {
      'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
      'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    }
  };
  
  activitydata() {
  fetch('https://trueway-places.p.rapidapi.com/FindPlacesNearby?location={{this.lat}}%2C{{this.lng}}&type={{this.type}}&radius=150&language=en', this.options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

    // activitydata(){
    //     let headers=new HttpHeaders({
    //       'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
    //       'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    //     });
    //     this.http
    //     .get<any>('https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=37.783366%2C-122.402325&type=cafe&radius=150&language=en',{
    //       headers:headers
    //     })
    //     .subscribe(data => {
    //       console.log(data);
    //     });
    //   }

    getActivityByLocation(): Observable<Activity[]>{
        // console.log(this.http.get<Activity[]>('https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=37.783366%2C-122.402325&type=cafe&radius=150&language=en', this.options));
        return this.http.get<Activity[]>('https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=37.783366%2C-122.402325&type=cafe&radius=150&language=en', this.options)
    }

}