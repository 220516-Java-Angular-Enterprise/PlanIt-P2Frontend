import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../../date-picker/date-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-parisZooHomepage',
  templateUrl: './parisZooHomepage.component.html',
  styleUrls: ['./parisZooHomepage.component.scss']
})
export class ParisZooHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

