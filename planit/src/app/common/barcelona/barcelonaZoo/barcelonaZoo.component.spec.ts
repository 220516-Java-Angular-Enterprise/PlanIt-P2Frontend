import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcelonaZooComponent } from './barcelonaZoo.component';

describe('BarcelonaZooComponent', () => {
  let component: BarcelonaZooComponent;
  let fixture: ComponentFixture<BarcelonaZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaZooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});