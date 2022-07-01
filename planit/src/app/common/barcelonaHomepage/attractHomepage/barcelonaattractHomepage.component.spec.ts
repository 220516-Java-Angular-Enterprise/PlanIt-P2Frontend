import { ComponentFixture, TestBed } from '@angular/core/testing';

import {BarcelonaAttractHomePageComponent } from './barcelonaattractHomepage.component';

describe('BarcelonaAttractHomePageComponent', () => {
  let component: BarcelonaAttractHomePageComponent;
  let fixture: ComponentFixture<BarcelonaAttractHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaAttractHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaAttractHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});