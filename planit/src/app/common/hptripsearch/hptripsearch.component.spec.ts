import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HptripsearchComponent } from './hptripsearch.component';

describe('HptripsearchComponent', () => {
  let component: HptripsearchComponent;
  let fixture: ComponentFixture<HptripsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HptripsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HptripsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});