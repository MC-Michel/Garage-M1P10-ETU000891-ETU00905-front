import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricFilterComponent } from './historic-filter.component';

describe('HistoricFilterComponent', () => {
  let component: HistoricFilterComponent;
  let fixture: ComponentFixture<HistoricFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
