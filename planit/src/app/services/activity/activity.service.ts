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

  locationByPlaceurl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby'
  locationByNameurl = 'https://trueway-places.p.rapidapi.com/FindPlaceByText'

  parisCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=48.86272%2C2.34375&type=cafe&radius=150&language=en';
  newYorkCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=40.75668%2C-73.98647&type=cafe&radius=150&language=en';
  londonCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=51.507538%2C-0.127804&type=cafe&radius=150&language=en';
  barcelonaCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=41.37785%2C2.17055&type=cafe&radius=150&language=en';
 

  options = {
    // method: 'GET',
    headers: {
      'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
      'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    },
    params: {
      'location': '37.783366, -122.402325',
      'type': 'cafe',
      'radius': '150',
      'language': 'en'
    }
  };

  nameOpt = {
    // method: 'GET',
    headers: {
      'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
      'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    },
    params: {
      'text': 'Children\'s Creativity Museum',
      'language': 'en'
    }
  };

    getActivityByLocal(): Observable<Activity[]>{
      return this.http.get<Activity[]>(this.locationByPlaceurl, this.options)
  }

  getActivitybyName(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.locationByNameurl, this.nameOpt)
  }

  // create more url functions for specific activites 
  getCafeByParis(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.parisCafeUrl, this.options)
}

}