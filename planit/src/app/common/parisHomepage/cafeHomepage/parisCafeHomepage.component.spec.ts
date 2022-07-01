import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisCafeHomepageComponent } from './parisCafeHomepage.component';

describe('ParisCafeHomepageComponent', () => {
  let component: ParisCafeHomepageComponent;
  let fixture: ComponentFixture<ParisCafeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisCafeHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisCafeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
