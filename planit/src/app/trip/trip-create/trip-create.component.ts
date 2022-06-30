import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent implements OnInit {

  constructor(private tripService: TripService, private router: Router) { }

  displayFormSubmitError: boolean = false;

  trip: Trip = {
      id: '',
      hotel: '',
      hotel_id: '',
      longitude: '',
      latitude: '',    
      status: '',
      dayPlan_id: '',
      plans: []
  }

  placeholders = {
   
  };

  ngOnInit(): void {
  }

  processForm(newTripForm: NgForm) {
    if (newTripForm.form.status === 'VALID') {
      this.tripService.createNewTrip(this.trip);
      this.router.navigateByUrl('/trip');
    } else {
      this.displayFormSubmitError = true;
    }
  }
}