import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationAtelierComponent } from './reparation-atelier.component';

describe('ReparationAtelierComponent', () => {
  let component: ReparationAtelierComponent;
  let fixture: ComponentFixture<ReparationAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
