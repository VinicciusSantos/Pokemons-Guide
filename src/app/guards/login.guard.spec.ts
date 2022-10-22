import { LoginGuard } from './login.guard';
import { AuthService } from '../services/auth.service';
import { TestBed } from '@angular/core/testing';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow if user is not authenticated', async () => {
    expect(guard.canActivate()).toBeTruthy();
  });

  it('should not allow if user is authenticated', async () => {
    authService.fazLogin({ usuario: 'admin', senha: 'admin' });
    expect(guard.canActivate()).toBeFalsy();
  });
});
