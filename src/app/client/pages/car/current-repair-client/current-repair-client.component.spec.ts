import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRepairClientComponent } from './current-repair-client.component';

describe('CurrentRepairClientComponent', () => {
  let component: CurrentRepairClientComponent;
  let fixture: ComponentFixture<CurrentRepairClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRepairClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRepairClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
