import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
 // title='homepage';

  ngOnInit(){
    //locations search
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    
    fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

      //properties list
  const options2= {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };
      
      fetch('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        //photos
        const options3 = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          }
        };
        
        fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
 }

 
hoteldata(){
  let headers=new HttpHeaders({
    'x-rapidapi-host':'hotels4.p.rapidapi.com',
    'x-rapidapi-key':'35fe90a581mshf2ce47b7fd8bccep1a286bjsna1991b64ab70'
  });
  this.http
  .get<any>('https://hotels4.p.rapidapi.com/locations/v2/search',{
    headers:headers
  })
  .subscribe(data => {
    console.log(data);
  });
  
}

}
