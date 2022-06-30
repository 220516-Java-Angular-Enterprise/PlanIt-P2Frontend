import { Component, Input, OnInit } from '@angular/core';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION} from '@angular/material/core';
import {enableProdMode} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from '../../../app/app.module';
import {environment} from '../../../environments/environment';
import {Activity} from '../../models/activity'
import { HotelService } from 'src/app/services/trip/hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

if (environment.production) {
  enableProdMode();
}

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);


@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}



