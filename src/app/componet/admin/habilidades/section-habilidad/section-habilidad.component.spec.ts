import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHabilidadComponent } from './section-habilidad.component';

describe('SectionHabilidadComponent', () => {
  let component: SectionHabilidadComponent;
  let fixture: ComponentFixture<SectionHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
