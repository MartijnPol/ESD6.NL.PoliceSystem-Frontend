import { TestBed, inject } from '@angular/core/testing';

import { StolenCarService } from './stolen-car.service';

describe('StolenCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StolenCarService]
    });
  });

  it('should be created', inject([StolenCarService], (service: StolenCarService) => {
    expect(service).toBeTruthy();
  }));
});
