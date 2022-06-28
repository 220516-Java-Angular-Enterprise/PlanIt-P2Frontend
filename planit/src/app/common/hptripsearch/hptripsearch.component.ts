import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip/trip.service';


@Component({
  selector: 'hptripsearch',
  templateUrl: './hptripsearch.component.html',
  styleUrls: ['./hptripsearch.component.css']
})
export class HptripsearchComponent implements OnInit {

  constructor(private tripService: TripService, private router: Router, private auth: AuthService) { }

  trips: Trip[] = [];
  user: any = {}

  ngOnInit(): void {
    this.tripService.getAllTrips().then(t => {
      this.trips = t;
    });

    this.auth.user$.subscribe(u => {
      console.log(u);
    });
  }

  goToTripId(id: string) {
    this.router.navigateByUrl(`trips/${id}`)
  }

  activityData(){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '20996e2b6amshc0124e31bc6de18p1e05e5jsnd571f19596ce',
            'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
        },
        body: '{"query":"{ getPlaces(categories:[\"NATURE\"],lat:37,lng:-122,maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }"}'
    };
    
    fetch('https://travel-places.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }
}
