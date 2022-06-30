import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  constructor(private tripService: TripService, private currRouter: ActivatedRoute) { }

  id: string = '';

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

  ngOnInit(): void {
    this.currRouter.params.subscribe(p => {
        this.id = p['id'];
        this.tripService.getTripById(this.id).then(t => {
          this.trip = t;
        })
    })
  }
}