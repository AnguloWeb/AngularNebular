import { TestBed } from '@angular/core/testing';

import { ValidationAuthGuard } from './validation-auth.guard';

describe('ValidationAuthGuard', () => {
  let guard: ValidationAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidationAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
