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
    params:{
      'query': 'new york',
      'locale': 'en_US',
      'currency': 'USD'
    }
  };

hotelsearchurl='https://hotels4.p.rapidapi.com/locations/v2/search'



 //locations  
 hoteldata(){ fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD', this.options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));}


  getHotel(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.hotelsearchurl,this.options)
  }
 // {
   // return this.http.get<Hotel[]>(this.hotelURL);
 // }








//properties list 
  options2= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};
propertiesdata(){
fetch('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD', this.options2)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));}

  getHotelProperties(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD',this.options2)
  }
  //photos
   options3 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
hotelphotosdata(){ fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', this.options3)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

}

  getHotelPhotos():Observable<Hotel[]>{return this.http.get<Hotel[]>('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040',this.options3)
}
    
  }

