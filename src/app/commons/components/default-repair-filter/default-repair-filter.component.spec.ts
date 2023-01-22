import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRepairFilterComponent } from './default-repair-filter.component';

describe('DefaultRepairFilterComponent', () => {
  let component: DefaultRepairFilterComponent;
  let fixture: ComponentFixture<DefaultRepairFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRepairFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRepairFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
