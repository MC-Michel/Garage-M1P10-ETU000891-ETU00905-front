import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRepairPopupComponent } from './default-repair-popup.component';

describe('DefaultRepairPopupComponent', () => {
  let component: DefaultRepairPopupComponent;
  let fixture: ComponentFixture<DefaultRepairPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRepairPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRepairPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
