import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsHistoricFinancierComponent } from './repairs-historic-financier.component';

describe('RepairsHistoricFinancierComponent', () => {
  let component: RepairsHistoricFinancierComponent;
  let fixture: ComponentFixture<RepairsHistoricFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsHistoricFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsHistoricFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
