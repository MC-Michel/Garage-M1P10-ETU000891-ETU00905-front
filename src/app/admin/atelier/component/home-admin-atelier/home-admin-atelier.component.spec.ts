import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminAtelierComponent } from './home-admin-atelier.component';

describe('HomeAdminAtelierComponent', () => {
  let component: HomeAdminAtelierComponent;
  let fixture: ComponentFixture<HomeAdminAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
