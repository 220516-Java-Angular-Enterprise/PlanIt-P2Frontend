import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../../date-picker/date-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-parisMuseumHomepage',
  templateUrl: './parisMuseumHomepage.component.html',
  styleUrls: ['./parisMuseumHomepage.component.scss']
})
export class ParisMuseumHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

