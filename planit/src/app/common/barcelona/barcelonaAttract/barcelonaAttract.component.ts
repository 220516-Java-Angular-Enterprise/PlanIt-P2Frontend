import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Trip } from 'src/app/models/trip';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { TripService } from 'src/app/services/trip/trip.service';
import { HotelService } from 'src/app/services/trip/hotel.service';


@Component({
  selector: 'barcelonaAttract',
  templateUrl: './barcelonaAttract.component.html',
  styleUrls: ['./barcelonaAttract.component.css']
})
export class BarcelonaAttractComponent implements OnInit {

  constructor(private tripService: TripService, private activityService: ActivityService,private hotelService:HotelService, private router: Router, private auth: AuthService) { }

  trips: Trip[] = [];
  barcelonaHotel: any = {};
  barcelonaAttract: any = {};

  async ngOnInit() {
    //trying to put the hotel in the cards
    await this.hotelService.getHotelBarcelona().toPromise().then((data:any) =>{
      this.barcelonaHotel= data.suggestions;
      console.log(data);
    })

    // Paris URLs
    await this.activityService.getTouristByBarcelona().toPromise().then((data:any) =>{
      this.barcelonaAttract = data.results;
      console.log(data);
    })

    await this.tripService.getAllTrips().then(t => {
      this.trips = t;
    });
  }

  goToTripId(id: string) {
    this.router.navigateByUrl(`trips/${id}`)
  }

}