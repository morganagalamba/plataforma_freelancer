import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersFeedbackScreenComponent } from './freelancers-feedback-screen.component';

describe('FreelancersFeedbackScreenComponent', () => {
  let component: FreelancersFeedbackScreenComponent;
  let fixture: ComponentFixture<FreelancersFeedbackScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancersFeedbackScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersFeedbackScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
