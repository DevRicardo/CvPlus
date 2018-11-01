import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHabilidadComponent } from './item-habilidad.component';

describe('ItemHabilidadComponent', () => {
  let component: ItemHabilidadComponent;
  let fixture: ComponentFixture<ItemHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
