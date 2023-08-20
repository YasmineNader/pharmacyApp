import { TestBed } from '@angular/core/testing';

import { StokkeeperGuard } from './stokkeeper.guard';

describe('StokkeeperGuard', () => {
  let guard: StokkeeperGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StokkeeperGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
