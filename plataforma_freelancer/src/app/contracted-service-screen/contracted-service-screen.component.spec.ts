import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractedServiceScreenComponent } from './contracted-service-screen.component';

describe('ContractedServiceScreenComponent', () => {
  let component: ContractedServiceScreenComponent;
  let fixture: ComponentFixture<ContractedServiceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractedServiceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractedServiceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
