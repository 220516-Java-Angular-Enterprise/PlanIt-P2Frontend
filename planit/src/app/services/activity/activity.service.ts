// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { firstValueFrom } from 'rxjs';
// import { Observable } from 'rxjs';
// import { Plans } from '../../models/plans';
// import {Trip} from '../../models/trip'
// import { HttpParams } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class ActivityService {

//   constructor(private http: HttpClient) { }

//   header = new HttpHeaders().set("X-RapidAPI-Key", "20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce");

//   backendHeader = new HttpHeaders().set('Access-Control-Allow-Origin', '*')

//   rootURL: string = "travel-places.p.rapidapi.com/";

//   private planURL = "http://planitproject2-env.eba-tguhtqck.us-east-2.elasticbeanstalk.com/planit/";

// //   get trips using internal api
//   getAllTrips(): Promise<Trip[]> {
//     return firstValueFrom(this.http.get<Trip[]>(this.planURL));
//   }

//   getTripById(id: string): Promise<Trip> {
//     return firstValueFrom(this.http.get<Trip>(this.planURL + "/" + id));
//   }

//   createNewTrip(trip: Trip) {
//     return firstValueFrom(this.http.post(this.planURL, trip));
//   }


// //   Get activities from external api will somehow need to convert city name to lat/long

//   getActivitiesByPlace(): Observable<any>{
//     return this.http.get('travel-places.p.rapidapi.com/', {'headers': this.header})
//   }

// // Get activities by Category  
//   getActivitiesByCategory(): Observable<any>{
//     return this.http.get('travel-places.p.rapidapi.com/', {'headers': this.header})
//   }


//   activityData(){
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
//             'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
//         },
//         body: '{"query":"{ getPlaces(categories:[\"NATURE\"],lat:37,lng:-122,maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }"}'
//     };
    
//     fetch('https://travel-places.p.rapidapi.com/', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//   }

// }