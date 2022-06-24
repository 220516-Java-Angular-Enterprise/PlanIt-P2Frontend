import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Trip } from '../../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }


// may have to take off trip routing
  private tripURL = "http://planitproject2-env-1.eba-tguhtqck.us-east-2.elasticbeanstalk.com/planit/";

  getAllTrips(): Promise<Trip[]> {
    return firstValueFrom(this.http.get<Trip[]>(this.tripURL));
  }

  getTripById(id: string): Promise<Trip> {
    return firstValueFrom(this.http.get<Trip>(this.tripURL + "/" + id));
  }

  createNewTrip(trip: Trip) {
    return firstValueFrom(this.http.post(this.tripURL, trip));
  }
}

