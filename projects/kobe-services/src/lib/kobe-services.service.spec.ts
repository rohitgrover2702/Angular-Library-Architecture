import { TestBed } from '@angular/core/testing';

import { KobeServicesService } from './kobe-services.service';

describe('KobeServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KobeServicesService = TestBed.get(KobeServicesService);
    expect(service).toBeTruthy();
  });
});
