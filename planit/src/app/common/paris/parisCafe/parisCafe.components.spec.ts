import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisCafeComponent } from './parisCafe.component';

describe('ParisCafeComponent', () => {
  let component: ParisCafeComponent;
  let fixture: ComponentFixture<ParisCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});