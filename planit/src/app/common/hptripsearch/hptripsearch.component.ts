import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Trip } from 'src/app/models/trip';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { TripService } from 'src/app/services/trip/trip.service';
import { Activity } from 'src/app/models/activity';
// import { HotelComponent } from 'src/app/trip/hotel/hotel.component';


@Component({
  selector: 'hptripsearch',
  templateUrl: './hptripsearch.component.html',
  styleUrls: ['./hptripsearch.component.css']
})
export class HptripsearchComponent implements OnInit {

  constructor(private tripService: TripService, private activityService: ActivityService, private router: Router, private auth: AuthService) { }

  trips: Trip[] = [];
  user: any = {};
  activities: any = {};
  activity: Activity[] = [];
  hotel: any = {};

  async ngOnInit() {

    await this.activityService.getActivityByLocal().toPromise().then((data:any) =>{
          this.activities = data.results;
          console.log(data);
    })

    this.tripService.getAllTrips().then(t => {
      this.trips = t;
    });

    // this.auth.user$.subscribe(u => {
    //   console.log(u);
    // });

  }

  goToTripId(id: string) {
    this.router.navigateByUrl(`trips/${id}`)
  }

}
