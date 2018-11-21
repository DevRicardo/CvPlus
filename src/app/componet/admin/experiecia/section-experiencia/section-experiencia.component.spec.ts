import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExperienciaComponent } from './section-experiencia.component';

describe('SectionExperienciaComponent', () => {
  let component: SectionExperienciaComponent;
  let fixture: ComponentFixture<SectionExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
