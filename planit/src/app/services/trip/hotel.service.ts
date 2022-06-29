import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  private hotelURL = "http://planittestp2-env.eba-e3a9gv9f.us-east-2.elasticbeanstalk.com/planit/trips/";

  getHotel(): Observable<Hotel[]>
  {
    return this.http.get<Hotel[]>(this.hotelURL);
  }
}
