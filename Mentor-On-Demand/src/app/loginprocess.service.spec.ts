import { TestBed } from '@angular/core/testing';

import { LoginprocessService } from './loginprocess.service';

describe('LoginprocessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginprocessService = TestBed.get(LoginprocessService);
    expect(service).toBeTruthy();
  });
});
