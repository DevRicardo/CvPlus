import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabilidadComponent } from './form-habilidad.component';

describe('FormHabilidadComponent', () => {
  let component: FormHabilidadComponent;
  let fixture: ComponentFixture<FormHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
