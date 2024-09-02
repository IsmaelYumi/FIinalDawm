import { TestBed } from '@angular/core/testing';

import { ProviderproductsService } from './providerproducts.service';

describe('ProviderproductsService', () => {
  let service: ProviderproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
