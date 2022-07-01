import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcelonaCafeComponent } from './barcelonaCafe.component';

describe('BarcelonaCafeComponent', () => {
  let component: BarcelonaCafeComponent;
  let fixture: ComponentFixture<BarcelonaCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcelonaCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcelonaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});