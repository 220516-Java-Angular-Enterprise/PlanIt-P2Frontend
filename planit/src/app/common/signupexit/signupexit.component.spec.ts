import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupexitComponent } from './signupexit.component';

describe('SignupexitComponent', () => {
  let component: SignupexitComponent;
  let fixture: ComponentFixture<SignupexitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupexitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
