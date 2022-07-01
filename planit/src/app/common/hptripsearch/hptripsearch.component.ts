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
  barcelonaHotel: any = {};
  barcelonaCafe: any = {};
  barcelonaZoo: any = {};
  barcelonaMuseum: any = {};
  barcelonaAttract: any = {}

  async ngOnInit() {



       //trying to put the hotel in the cards
       await this.hotelService.getHotelParis().toPromise().then((data:any) =>{
        this.hotel= data.suggestions;
        console.log(data);
  })
  //Barcelona
  await this.hotelService.getHotelBarcelona().toPromise().then((data:any) =>{
    this.hotel= data.suggestions;
    console.log(data);
})

    // this.long = this.hotel[1].entities[0].longitude;
    // this.lat =this.hotel[1].entities[0].latitude;

    await this.activityService.getCafeByParis().toPromise().then((data:any) =>{
          this.activities = data.results;
          console.log(data);})
                            
          
          
          
                    //Barcelona
    await this.activityService.getCafeByBarcelona().toPromise().then((data:any) =>{
          this.activities = data.results;
          console.log(data);})

          //Zoo
   await this.activityService.getZooByBarcelona().toPromise().then((data:any) =>{
         this.activities = data.results;
        console.log(data);})

        //Museum
     await this.activityService.getMuseumByBarcelona().toPromise().then((data:any) =>{
         this.activities = data.results;
         console.log(data);})

         //Tourist Attraction
      await this.activityService.getTouristByBarcelona().toPromise().then((data:any) =>{
          this.activities = data.results;
          console.log(data);})

    // Paris URLs
    // await this.activityService.getCafeByParis().toPromise().then((data:any) =>{
    //   this.parisCafe = data.results;
    //   console.log(data);
    // })

    // await this.activityService.getZooByParis().toPromise().then((data:any) =>{
    //   this.parisZoo = data.results;
    //   console.log(data);
    // })

    // await this.activityService.getMuseumByParis().toPromise().then((data:any) =>{
    //   this.parisMuseum = data.results;
    //   console.log(data);
    // })

    // await this.activityService.getAttractByParis().toPromise().then((data:any) =>{
    //   this.parisAttract = data.results;
    //   console.log(data);
    // })

    await this.tripService.getAllTrips().then(t => {
      this.trips = t;
    });
     console.log(this.tripService.getTripByUser());
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

  parisZooCall() {
      this.activityService.getZooByParis().toPromise().then((data:any) =>{
      this.parisZoo = data.results;
    console.log(data);
    })
  }

  parisMuesumCall() {
      this.activityService.getMuseumByParis().toPromise().then((data:any) =>{
      this.parisMuseum = data.results;
      console.log(data);
    })
  }

  parisAttractCall() {
      this.activityService.getAttractByParis().toPromise().then((data:any) =>{
      this.parisAttract = data.results;
      console.log(data);
    })
  }

}
