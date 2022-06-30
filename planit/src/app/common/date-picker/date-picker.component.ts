import { Component, Input, OnInit } from '@angular/core';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION} from '@angular/material/core';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from '../../../app/app.module';
import {environment} from '../../../environments/environment';
import {Activity} from '../../models/activity'

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

  activity: Activity[] = [];
  input: string = "";


  ngOnInit(): void {
  }

  searchInput() {
 
}

searchBar(event:any) {
  this.input = event.target.value.toLowerCase();
  console.log(this.input);
}
}



