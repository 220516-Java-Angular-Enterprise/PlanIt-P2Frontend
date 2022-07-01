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
  parisZooUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=48.86272%2C2.34375&type=zoo&radius=150&language=en'
  parisMuseumUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=48.86272%2C2.34375&type=museum&radius=150&language=en';
  parisAttractUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=48.86272%2C2.34375&type=tourist_attraction&radius=150&language=en';
  
  
  newYorkCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=40.75668%2C-73.98647&type=cafe&radius=150&language=en';
  londonCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=51.507538%2C-0.127804&type=cafe&radius=150&language=en';

  //BarcelonaURLS
  barcelonaCafeUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=41.37785%2C2.17055&type=cafe&radius=150&language=en';
  barcelonaZooUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=41.37785%2C2.17055&type=zoo&radius=150&language=en';
  barcelonaMuseumUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=41.37785%2C2.17055&type=musuem&radius=150&language=en';
  barcelonaAttractUrl = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=41.37785%2C2.17055&type=tourist_attraction&radius=150&language=en';

  options = {
    headers: {
      'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
      'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
    },
  };

  // create more url functions for specific activites
  // paris activities 
  getCafeByParis(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.parisCafeUrl, this.options)
}
getZooByParis(): Observable<Activity[]>{
  return this.http.get<Activity[]>(this.parisZooUrl, this.options)
}

getMuseumByParis(): Observable<Activity[]>{
  return this.http.get<Activity[]>(this.parisMuseumUrl, this.options)
}

getAttractByParis(): Observable<Activity[]>{
  return this.http.get<Activity[]>(this.parisAttractUrl, this.options)
}


// Barcelona Specific Activity
  getCafeByBarcelona():Observable<Activity[]>{
    return this.http.get<Activity[]>(this.barcelonaCafeUrl,this.options)
  }
  getZooByBarcelona():Observable<Activity[]>{
    return this.http.get<Activity[]>(this.barcelonaZooUrl,this.options)
  }
  getMuseumByBarcelona():Observable<Activity[]>{
    return this.http.get<Activity[]>(this.barcelonaMuseumUrl,this.options)
  }
  getTouristByBarcelona():Observable<Activity[]>{
    return this.http.get<Activity[]>(this.barcelonaAttractUrl,this.options)
  }

}