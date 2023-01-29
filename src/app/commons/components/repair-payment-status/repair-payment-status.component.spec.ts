import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairPaymentStatusComponent } from './repair-payment-status.component';

describe('RepairPaymentStatusComponent', () => {
  let component: RepairPaymentStatusComponent;
  let fixture: ComponentFixture<RepairPaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairPaymentStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
