import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPortadaComponent } from './form-portada.component';

describe('FormPortadaComponent', () => {
  let component: FormPortadaComponent;
  let fixture: ComponentFixture<FormPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
