/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChartUpdateService } from './chart-update.service';

describe('Service: ChartUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartUpdateService]
    });
  });

  it('should ...', inject([ChartUpdateService], (service: ChartUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
