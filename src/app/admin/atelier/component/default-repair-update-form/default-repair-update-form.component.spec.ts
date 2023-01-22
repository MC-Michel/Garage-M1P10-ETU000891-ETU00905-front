import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRepairUpdateFormComponent } from './default-repair-update-form.component';

describe('DefaultRepairUpdateFormComponent', () => {
  let component: DefaultRepairUpdateFormComponent;
  let fixture: ComponentFixture<DefaultRepairUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRepairUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRepairUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
