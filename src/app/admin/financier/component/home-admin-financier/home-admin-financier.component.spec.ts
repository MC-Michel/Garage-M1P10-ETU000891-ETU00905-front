import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminFinancierComponent } from './home-admin-financier.component';

describe('HomeAdminFinancierComponent', () => {
  let component: HomeAdminFinancierComponent;
  let fixture: ComponentFixture<HomeAdminFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
