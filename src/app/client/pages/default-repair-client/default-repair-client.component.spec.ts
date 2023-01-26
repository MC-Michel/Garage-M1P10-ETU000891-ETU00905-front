import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRepairClientComponent } from './default-repair-client.component';

describe('DefaultRepairClientComponent', () => {
  let component: DefaultRepairClientComponent;
  let fixture: ComponentFixture<DefaultRepairClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRepairClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRepairClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
