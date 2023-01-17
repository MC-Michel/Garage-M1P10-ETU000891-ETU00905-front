import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFinancierComponent } from './header-financier.component';

describe('HeaderFinancierComponent', () => {
  let component: HeaderFinancierComponent;
  let fixture: ComponentFixture<HeaderFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFinancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
