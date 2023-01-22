import { TestBed } from '@angular/core/testing';

import { DefaultRepairService } from './default-repair.service';

describe('DefaultRepairService', () => {
  let service: DefaultRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
