import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFinancierComponent } from './nav-financier.component';

describe('NavFinancierComponent', () => {
  let component: NavFinancierComponent;
  let fixture: ComponentFixture<NavFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
