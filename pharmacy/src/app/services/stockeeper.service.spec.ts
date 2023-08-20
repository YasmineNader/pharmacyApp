import { TestBed } from '@angular/core/testing';

import { StockeeperService } from './stockeeper.service';

describe('StockeeperService', () => {
  let service: StockeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
