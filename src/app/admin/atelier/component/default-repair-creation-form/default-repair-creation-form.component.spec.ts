import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRepairCreationFormComponent } from './default-repair-creation-form.component';

describe('DefaultRepairCreationFormComponent', () => {
  let component: DefaultRepairCreationFormComponent;
  let fixture: ComponentFixture<DefaultRepairCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRepairCreationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRepairCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
