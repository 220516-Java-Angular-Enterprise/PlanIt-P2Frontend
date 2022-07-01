import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../../date-picker/date-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-barcelonamuseumHomepage',
  templateUrl: './barcelonamuseumHomepage.component.html',
  styleUrls: ['./barcelonamuseumHomepage.component.scss']
})
export class BarcelonaMuseumHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}