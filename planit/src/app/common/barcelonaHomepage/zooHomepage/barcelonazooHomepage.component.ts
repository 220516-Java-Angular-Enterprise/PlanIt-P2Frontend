import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../../date-picker/date-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-barcelonazooHomepage',
  templateUrl: './barcelonazooHomepage.component.html',
  styleUrls: ['./barcelonazooHomepage.component.scss']
})
export class BarcelonaZooHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}