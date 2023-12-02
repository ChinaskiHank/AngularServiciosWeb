import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPlatoComponent } from './eliminar-plato.component';

describe('EliminarPlatoComponent', () => {
  let component: EliminarPlatoComponent;
  let fixture: ComponentFixture<EliminarPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarPlatoComponent]
    });
    fixture = TestBed.createComponent(EliminarPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
