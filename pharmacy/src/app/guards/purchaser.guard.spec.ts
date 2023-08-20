import { TestBed } from '@angular/core/testing';

import { PurchaserGuard } from './purchaser.guard';

describe('PurchaserGuard', () => {
  let guard: PurchaserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PurchaserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
