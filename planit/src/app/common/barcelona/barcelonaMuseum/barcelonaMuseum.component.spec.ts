import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcelonaMuseumComponent } from './barcelonaMuseum.component';

describe('BarcelonaCafeComponent', () => {
  let component: BarcelonaMuseumComponent;
  let fixture: ComponentFixture<BarcelonaMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaMuseumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});