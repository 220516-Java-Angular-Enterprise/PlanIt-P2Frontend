import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisAttractComponent } from './parisAttract.component';

describe('ParisAttractComponent', () => {
  let component: ParisAttractComponent;
  let fixture: ComponentFixture<ParisAttractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisAttractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisAttractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});