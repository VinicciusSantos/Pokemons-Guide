import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import { RouterTestingModule } from '@angular/router/testing';
import { mainRoutes } from '../app-routing.module';

const userTest: User = {
  usuario: 'admin',
  senha: 'admin',
};

describe('AuthGuard', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(mainRoutes)],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', async () => {
    expect(service.fazLogin(userTest)).toBeTruthy();
    expect(localStorage.getItem('token')).not.toBeNull();
    localStorage.removeItem('token');
  });

  it('should not login with wrong credentials', async () => {
    const wrongUser: User = {
      usuario: 'dagkjsgh',
      senha: 'hfdshfds',
    };
    expect(service.fazLogin(wrongUser)).toBeFalsy();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should logout', async () => {
    service.fazLogin(userTest);
    service.fazLogout();
    expect(localStorage.getItem('token')).toBeNull();
  });
});
