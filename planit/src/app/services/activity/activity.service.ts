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
}