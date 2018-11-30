import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEstudiosComponent } from './detalle-estudios.component';

describe('DetalleEstudiosComponent', () => {
  let component: DetalleEstudiosComponent;
  let fixture: ComponentFixture<DetalleEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
