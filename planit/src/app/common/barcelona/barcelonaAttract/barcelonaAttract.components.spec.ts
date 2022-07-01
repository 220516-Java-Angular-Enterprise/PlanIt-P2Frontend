import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcelonaAttractComponent } from './barcelonaAttract.component';

describe('BarcelonaAttractComponent', () => {
  let component: BarcelonaAttractComponent;
  let fixture: ComponentFixture<BarcelonaAttractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaAttractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaAttractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});