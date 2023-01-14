import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDatatableComponent } from './gen-datatable.component';

describe('GenDatatableComponent', () => {
  let component: GenDatatableComponent;
  let fixture: ComponentFixture<GenDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
