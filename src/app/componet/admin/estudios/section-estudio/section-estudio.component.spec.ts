import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEstudioComponent } from './section-estudio.component';

describe('SectionEstudioComponent', () => {
  let component: SectionEstudioComponent;
  let fixture: ComponentFixture<SectionEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
