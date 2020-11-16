import { TestBed } from '@angular/core/testing';

import { Farm2MarketformService } from './farm2-marketform.service';

describe('Farm2MarketformService', () => {
  let service: Farm2MarketformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Farm2MarketformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
