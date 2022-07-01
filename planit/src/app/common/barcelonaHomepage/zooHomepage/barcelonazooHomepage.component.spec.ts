
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {BarcelonaZooHomePageComponent } from './barcelonazooHomepage.component';

describe('BarcelonaZooHomePageComponent', () => {
  let component:BarcelonaZooHomePageComponent;
  let fixture: ComponentFixture<BarcelonaZooHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaZooHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaZooHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});