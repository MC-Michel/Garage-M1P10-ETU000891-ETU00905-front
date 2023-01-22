import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRepairComponent } from './default-repair.component';

describe('DefaultRepairComponent', () => {
  let component: DefaultRepairComponent;
  let fixture: ComponentFixture<DefaultRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
