import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAtelierComponent } from './home-atelier.component';

describe('HomeAtelierComponent', () => {
  let component: HomeAtelierComponent;
  let fixture: ComponentFixture<HomeAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
