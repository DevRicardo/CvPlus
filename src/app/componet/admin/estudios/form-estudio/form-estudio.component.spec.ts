import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudioComponent } from './form-estudio.component';

describe('FormEstudioComponent', () => {
  let component: FormEstudioComponent;
  let fixture: ComponentFixture<FormEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
