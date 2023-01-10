import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminAtelierComponent } from './header-admin-atelier.component';

describe('HeaderAdminAtelierComponent', () => {
  let component: HeaderAdminAtelierComponent;
  let fixture: ComponentFixture<HeaderAdminAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdminAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
