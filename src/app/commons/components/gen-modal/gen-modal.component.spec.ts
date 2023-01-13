import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenModalComponent } from './gen-modal.component';

describe('GenModalComponent', () => {
  let component: GenModalComponent;
  let fixture: ComponentFixture<GenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
