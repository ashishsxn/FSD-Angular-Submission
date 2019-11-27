import { TestBed } from '@angular/core/testing';

import { DataReaderService } from './data-reader.service';

describe('DataReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataReaderService = TestBed.get(DataReaderService);
    expect(service).toBeTruthy();
  });
});
