import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdminFinancierComponent } from './nav-admin-financier.component';

describe('NavAdminFinancierComponent', () => {
  let component: NavAdminFinancierComponent;
  let fixture: ComponentFixture<NavAdminFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAdminFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAdminFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
