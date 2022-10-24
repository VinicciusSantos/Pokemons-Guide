import { CryptoService } from './crypto.service';
import { TestBed } from '@angular/core/testing';

const defaultTest = {
  payload: 'test123',
  key: 'translatepassword',
};

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encode token using JWT', async () => {
    const encodedToken = service.signToken(
      defaultTest.payload,
      defaultTest.key
    );
    expect(encodedToken).not.toBeNull();
  });

  it('should decode JWT token', async () => {
    const encodedToken = service.signToken(
      defaultTest.payload,
      defaultTest.key
    );
    const decodedToken = service.decodeToken(encodedToken);
    console.log(decodedToken);
    expect(decodedToken).toBe(defaultTest.payload);
  });
});
