import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCreationComponent } from './expenses-creation.component';

describe('ExpensesCreationComponent', () => {
  let component: ExpensesCreationComponent;
  let fixture: ComponentFixture<ExpensesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
