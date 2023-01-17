import { TestBed } from '@angular/core/testing';

import { RoleProviderService } from './role.provider.service';

describe('RoleProviderService', () => {
  let service: RoleProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
