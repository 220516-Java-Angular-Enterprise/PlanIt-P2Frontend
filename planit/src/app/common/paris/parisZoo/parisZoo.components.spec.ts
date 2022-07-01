import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisZooComponent } from './parisZoo.component';

describe('ParisZooComponent', () => {
  let component: ParisZooComponent;
  let fixture: ComponentFixture<ParisZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisZooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});