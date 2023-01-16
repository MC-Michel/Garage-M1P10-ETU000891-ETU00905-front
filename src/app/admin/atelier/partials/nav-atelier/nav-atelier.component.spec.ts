import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAtelierComponent } from './nav-atelier.component';

describe('NavAtelierComponent', () => {
  let component: NavAtelierComponent;
  let fixture: ComponentFixture<NavAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
