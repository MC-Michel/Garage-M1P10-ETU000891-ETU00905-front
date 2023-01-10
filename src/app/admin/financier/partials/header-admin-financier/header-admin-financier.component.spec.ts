import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminFinancierComponent } from './header-admin-financier.component';

describe('HeaderAdminFinancierComponent', () => {
  let component: HeaderAdminFinancierComponent;
  let fixture: ComponentFixture<HeaderAdminFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdminFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
