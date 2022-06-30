import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

   options = {
    headers: {
      'X-RapidAPI-Key': '35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    },

  };

hotelsearchurl='https://hotels4.p.rapidapi.com/locations/v2/search'

parisUrl='https://hotels4.p.rapidapi.com/locations/v2/search?query=paris&locale=en_US&currency=USD'

newYorkUrl='https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD'

londonUrl='https://hotels4.p.rapidapi.com/locations/v2/search?query=london&locale=en_US&currency=USD'

barcelonaUrl='https://hotels4.p.rapidapi.com/locations/v2/search?query=barcelona&locale=en_US&currency=USD'


  getHotelParis(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.parisUrl,this.options)
  }

  // Get hotels using different Urls
  }

