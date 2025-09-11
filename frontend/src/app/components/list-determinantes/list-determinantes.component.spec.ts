import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeterminantesComponent } from './list-determinantes.component';

describe('ListDeterminantesComponent', () => {
  let component: ListDeterminantesComponent;
  let fixture: ComponentFixture<ListDeterminantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeterminantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeterminantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
