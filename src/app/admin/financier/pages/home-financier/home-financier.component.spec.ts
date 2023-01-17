import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinancierComponent } from './home-financier.component';

describe('HomeFinancierComponent', () => {
  let component: HomeFinancierComponent;
  let fixture: ComponentFixture<HomeFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
