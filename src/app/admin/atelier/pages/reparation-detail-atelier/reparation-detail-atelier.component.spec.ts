import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationDetailAtelierComponent } from './reparation-detail-atelier.component';

describe('ReparationDetailAtelierComponent', () => {
  let component: ReparationDetailAtelierComponent;
  let fixture: ComponentFixture<ReparationDetailAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationDetailAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationDetailAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
