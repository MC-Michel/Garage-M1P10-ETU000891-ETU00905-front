import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUpdateFormComponent } from './car-update-form.component';

describe('CarUpdateFormComponent', () => {
  let component: CarUpdateFormComponent;
  let fixture: ComponentFixture<CarUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
