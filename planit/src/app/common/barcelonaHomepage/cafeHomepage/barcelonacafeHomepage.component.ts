import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../../date-picker/date-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-barcelonaCafeHomepage',
  templateUrl: './barcelonaCafeHomepage.component.html',
  styleUrls: ['./barcelonaCafeHomepage.component.scss']
})
export class BarcelonaCafeHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}