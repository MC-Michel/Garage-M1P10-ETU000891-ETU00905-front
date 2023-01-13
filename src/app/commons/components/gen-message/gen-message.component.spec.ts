import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMessageComponent } from './gen-message.component';

describe('GenMessageComponent', () => {
  let component: GenMessageComponent;
  let fixture: ComponentFixture<GenMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
