import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAtelierComponent } from './header-atelier.component';

describe('HeaderAtelierComponent', () => {
  let component: HeaderAtelierComponent;
  let fixture: ComponentFixture<HeaderAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
