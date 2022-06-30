import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Trip } from 'src/app/models/trip';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { TripService } from 'src/app/services/trip/trip.service';
import { Activity } from 'src/app/models/activity';
import { HotelService } from 'src/app/services/trip/hotel.service';
import { DatePickerComponent } from '../date-picker/date-picker.component';
// import { HotelComponent } from 'src/app/trip/hotel/hotel.component';


@Component({
  selector: 'hptripsearch',
  templateUrl: './hptripsearch.component.html',
  styleUrls: ['./hptripsearch.component.css']
})
export class HptripsearchComponent implements OnInit {

  constructor(private tripService: TripService, private activityService: ActivityService,private hotelService:HotelService, private router: Router, private auth: AuthService) { }

  trips: Trip[] = [];
  activities: any = {};
  hotel: any = {};
  parisHotel: any = {};
  parisCafe: any = {};
  parisZoo: any = {};
  parisMuseum: any = {};
  parisAttract: any = {}

  async ngOnInit() {
    //trying to put the hotel in the cards
    await this.hotelService.getHotelParis().toPromise().then((data:any) =>{
      this.parisHotel= data.suggestions;
      console.log(data);
    })

    // Paris URLs
    await this.activityService.getCafeByParis().toPromise().then((data:any) =>{
      this.parisCafe = data.results;
      console.log(data);
    })

    await this.activityService.getZooByParis().toPromise().then((data:any) =>{
      this.parisZoo = data.results;
      console.log(data);
    })

    await this.activityService.getMuseumByParis().toPromise().then((data:any) =>{
      this.parisMuseum = data.results;
      console.log(data);
    })

    await this.activityService.getAttractByParis().toPromise().then((data:any) =>{
      this.parisAttract = data.results;
      console.log(data);
    })

    await this.tripService.getAllTrips().then(t => {
      this.trips = t;
    });
  }

  goToTripId(id: string) {
    this.router.navigateByUrl(`trips/${id}`)
  }

  parisCafeCall() {
    this.activityService.getCafeByParis().toPromise().then((data:any) =>{
      this.parisCafe = data.results;
      console.log(data);
    })
  }

}
