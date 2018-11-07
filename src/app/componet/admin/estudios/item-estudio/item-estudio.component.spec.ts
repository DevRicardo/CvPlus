import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEstudioComponent } from './item-estudio.component';

describe('ItemEstudioComponent', () => {
  let component: ItemEstudioComponent;
  let fixture: ComponentFixture<ItemEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
