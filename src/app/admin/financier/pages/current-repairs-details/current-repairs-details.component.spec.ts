import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRepairsDetailsComponent } from './current-repairs-details.component';

describe('CurrentRepairsDetailsComponent', () => {
  let component: CurrentRepairsDetailsComponent;
  let fixture: ComponentFixture<CurrentRepairsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRepairsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRepairsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
