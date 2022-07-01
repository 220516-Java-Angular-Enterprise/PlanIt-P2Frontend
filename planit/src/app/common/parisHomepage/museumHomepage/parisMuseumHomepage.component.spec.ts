import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisMuseumHomepageComponent } from './parisMuseumHomepage.component';

describe('ParisMuseumHomepageComponent', () => {
  let component: ParisMuseumHomepageComponent;
  let fixture: ComponentFixture<ParisMuseumHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisMuseumHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisMuseumHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
