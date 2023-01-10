import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdminAtelierComponent } from './nav-admin-atelier.component';

describe('NavAdminAtelierComponent', () => {
  let component: NavAdminAtelierComponent;
  let fixture: ComponentFixture<NavAdminAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAdminAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAdminAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
