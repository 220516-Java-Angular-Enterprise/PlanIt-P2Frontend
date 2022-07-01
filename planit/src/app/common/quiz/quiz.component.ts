import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { Activity } from 'src/app/models/activity';
import { TripService } from 'src/app/services/trip/trip.service';
import { Trip } from 'src/app/models/trip';
import { FormsModule } from '@angular/forms';
import { Answers } from 'src/app/models/answers';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

}


