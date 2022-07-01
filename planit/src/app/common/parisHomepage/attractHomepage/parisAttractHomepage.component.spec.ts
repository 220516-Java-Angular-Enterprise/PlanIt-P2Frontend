import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisAttractHomepageComponent } from './parisAttractHomepage.component';

describe('ParisAttractHomepageComponent', () => {
  let component: ParisAttractHomepageComponent;
  let fixture: ComponentFixture<ParisAttractHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisAttractHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisAttractHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
