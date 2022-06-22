import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../date-picker/date-picker.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

