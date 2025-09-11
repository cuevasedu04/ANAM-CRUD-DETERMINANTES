import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEditarDeterminanteComponent } from './registrar-editar-determinante.component';

describe('RegistrarEditarDeterminanteComponent', () => {
  let component: RegistrarEditarDeterminanteComponent;
  let fixture: ComponentFixture<RegistrarEditarDeterminanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarEditarDeterminanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEditarDeterminanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
