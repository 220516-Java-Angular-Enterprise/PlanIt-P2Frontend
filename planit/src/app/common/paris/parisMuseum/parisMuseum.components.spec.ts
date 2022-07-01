import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisMuseumComponent } from './parisMuseum.component';

describe('HptripsearchComponent', () => {
  let component: ParisMuseumComponent;
  let fixture: ComponentFixture<ParisMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisMuseumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});