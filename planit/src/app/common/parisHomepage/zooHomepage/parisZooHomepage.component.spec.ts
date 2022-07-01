import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisZooHomepageComponent } from './parisZooHomepage.component';

describe('ParisZooHomepageComponent', () => {
  let component: ParisZooHomepageComponent;
  let fixture: ComponentFixture<ParisZooHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisZooHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisZooHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
