import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcelonaMuseumHomePageComponent } from './barcelonamuseumHomepage.component';

describe('BarcelonaMuseumHomePageComponent ', () => {
  let component: BarcelonaMuseumHomePageComponent;
  let fixture: ComponentFixture< BarcelonaMuseumHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaMuseumHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( BarcelonaMuseumHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});