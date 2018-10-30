import { TestBed } from '@angular/core/testing';

import { PortadaService } from './portada.service';

describe('PortadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortadaService = TestBed.get(PortadaService);
    expect(service).toBeTruthy();
  });
});
