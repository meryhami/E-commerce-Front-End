import { TestBed, inject } from '@angular/core/testing';

import { ShoppincartService } from './shoppincart.service';

describe('ShoppincartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppincartService]
    });
  });

  it('should be created', inject([ShoppincartService], (service: ShoppincartService) => {
    expect(service).toBeTruthy();
  }));
});
