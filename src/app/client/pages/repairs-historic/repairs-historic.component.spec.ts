import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsHistoricComponent } from './repairs-historic.component';

describe('RepairsHistoricComponent', () => {
  let component: RepairsHistoricComponent;
  let fixture: ComponentFixture<RepairsHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsHistoricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
