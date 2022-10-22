import { AuthService } from './../services/auth.service';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not allow if user is not authenticated', async () => {
    expect(guard.canActivate()).toBeFalsy();
  });

  it('should allow if user is authenticated', async () => {
    authService.fazLogin({ usuario: 'admin', senha: 'admin' });
    expect(guard.canActivate()).toBeTruthy();
  });
});
