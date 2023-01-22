import { TestBed } from '@angular/core/testing';

import { RepairHistoricService } from './repair-historic.service';

describe('RepairHistoricService', () => {
  let service: RepairHistoricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairHistoricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
