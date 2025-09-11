import { TestBed } from '@angular/core/testing';

import { DeterminanteService } from './determinante.service';

describe('DeterminanteService', () => {
  let service: DeterminanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeterminanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
