import { ComponentFixture, TestBed } from '@angular/core/testing';

import {BarcelonaCafeHomePageComponent  } from './barcelonacafeHomepage.component';

describe('BarcelonaCafeHomepageComponent', () => {
  let component: BarcelonaCafeHomePageComponent ;
  let fixture: ComponentFixture<BarcelonaCafeHomePageComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarcelonaCafeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaCafeHomePageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});