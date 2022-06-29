import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Trip } from '../../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  // backendHeader = new HttpHeaders().set('Access-Control-Allow-Origin', '*')

// may have to take off trip routing

  private tripURL = "http://planittestp2-env.eba-e3a9gv9f.us-east-2.elasticbeanstalk.com/planit/trips";


  getAllTrips(): Promise<Trip[]> {
    console.log(firstValueFrom(this.http.get<Trip[]>(this.tripURL)));
    return firstValueFrom(this.http.get<Trip[]>(this.tripURL));
  }

  getTripById(id: string): Promise<Trip> {
    return firstValueFrom(this.http.get<Trip>(this.tripURL + "/" + id));
  }

  createNewTrip(trip: Trip) {
    return firstValueFrom(this.http.post(this.tripURL, trip));
  }
}

