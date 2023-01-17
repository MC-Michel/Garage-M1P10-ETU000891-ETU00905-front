import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierComponent } from './financier.component';

describe('FinancierComponent', () => {
  let component: FinancierComponent;
  let fixture: ComponentFixture<FinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
