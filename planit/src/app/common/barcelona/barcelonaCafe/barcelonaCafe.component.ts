import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Trip } from 'src/app/models/trip';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { TripService } from 'src/app/services/trip/trip.service';
import { HotelService } from 'src/app/services/trip/hotel.service';


@Component({
  selector: 'barcelonaCafe',
  templateUrl: './barcelonaCafe.component.html',
  styleUrls: ['./barcelonaCafe.component.css']
})
export class BarcelonaCafeComponent implements OnInit {

  constructor(private tripService: TripService, private activityService: ActivityService,private hotelService:HotelService, private router: Router, private auth: AuthService) { }

  trips: Trip[] = [];
  hotel: any = {};
  barcelonaHotel: any = {};
  barcelonaCafe: any = {};

  async ngOnInit() {
    //trying to put the hotel in the cards
    await this.hotelService.getHotelBarcelona().toPromise().then((data:any) =>{
      this.barcelonaHotel= data.suggestions;
      console.log(data);
    })

    // s URLs
    await this.activityService.getCafeByParis().toPromise().then((data:any) =>{
      this.barcelonaCafe = data.results;
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