import { Component, OnInit, NgModule, Input } from '@angular/core';

import { DatePickerComponent } from '../../date-picker/date-picker.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-parisCafeHomepage',
  templateUrl: './parisCafeHomepage.component.html',
  styleUrls: ['./parisCafeHomepage.component.scss']
})
export class ParisCafeHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

