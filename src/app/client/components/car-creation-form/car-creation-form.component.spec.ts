import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreationFormComponent } from './car-creation-form.component';

describe('CarCreationFormComponent', () => {
  let component: CarCreationFormComponent;
  let fixture: ComponentFixture<CarCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCreationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
