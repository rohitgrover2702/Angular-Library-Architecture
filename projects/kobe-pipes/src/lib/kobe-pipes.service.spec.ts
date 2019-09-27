import { TestBed } from '@angular/core/testing';

import { KobePipesService } from './kobe-pipes.service';

describe('KobePipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KobePipesService = TestBed.get(KobePipesService);
    expect(service).toBeTruthy();
  });
});
