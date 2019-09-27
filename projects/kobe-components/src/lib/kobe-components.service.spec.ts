import { TestBed } from '@angular/core/testing';

import { KobeComponentsService } from './kobe-components.service';

describe('KobeComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KobeComponentsService = TestBed.get(KobeComponentsService);
    expect(service).toBeTruthy();
  });
});
