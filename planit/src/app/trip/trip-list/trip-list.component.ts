import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '@auth0/auth0-angular';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

    // need to add auth
  constructor(private tripService: TripService, private router: Router) { }

  trips: Trip[] = [];

  ngOnInit(): void {
    this.tripService.getAllTrips().then(t => {
      this.trips = t;
    });

//     this.auth.user$.subscribe(u => {
//       console.log(u);
//     });
//   }

//   goToTripId(id: string) {
//     this.router.navigateByUrl(`trips/${id}`)
//   }
}
}

