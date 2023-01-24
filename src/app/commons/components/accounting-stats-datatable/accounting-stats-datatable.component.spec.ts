import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingStatsDatatableComponent } from './accounting-stats-datatable.component';

describe('AccountingStatsDatatableComponent', () => {
  let component: AccountingStatsDatatableComponent;
  let fixture: ComponentFixture<AccountingStatsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingStatsDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingStatsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
