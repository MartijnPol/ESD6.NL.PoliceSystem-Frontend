import { TestBed, inject } from '@angular/core/testing';

import { StolenVehicleService } from './stolen-vehicle.service';

describe('StolenVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StolenVehicleService]
    });
  });

  it('should be created', inject([StolenVehicleService], (service: StolenVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
