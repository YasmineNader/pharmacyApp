import { TestBed } from '@angular/core/testing';

import { MainFrameService } from './main-frame.service';

describe('MainFrameService', () => {
  let service: MainFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
