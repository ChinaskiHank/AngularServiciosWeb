import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPlatoComponent } from './insertar-plato.component';

describe('InsertarPlatoComponent', () => {
  let component: InsertarPlatoComponent;
  let fixture: ComponentFixture<InsertarPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarPlatoComponent]
    });
    fixture = TestBed.createComponent(InsertarPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
