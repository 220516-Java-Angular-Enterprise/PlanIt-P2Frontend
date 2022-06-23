import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Trip } from '../../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  private tripURL = "http://localhost:8080/planit/";

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

