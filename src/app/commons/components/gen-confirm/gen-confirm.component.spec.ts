import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenConfirmComponent } from './gen-confirm.component';

describe('GenConfirmComponent', () => {
  let component: GenConfirmComponent;
  let fixture: ComponentFixture<GenConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
