import { TestBed } from '@angular/core/testing';

import { ValidationLoginGuard } from './validation-login.guard';

describe('ValidationLoginGuard', () => {
  let guard: ValidationLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidationLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
