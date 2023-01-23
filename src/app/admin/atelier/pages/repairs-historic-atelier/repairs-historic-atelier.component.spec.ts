import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsHistoricAtelierComponent } from './repairs-historic-atelier.component';

describe('RepairsHistoricAtelierComponent', () => {
  let component: RepairsHistoricAtelierComponent;
  let fixture: ComponentFixture<RepairsHistoricAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsHistoricAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsHistoricAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
