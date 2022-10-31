import { TestBed } from '@angular/core/testing';
import { RendererFactory2 } from '@angular/core';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    const rendererFactory2Stub = () => ({
      createRenderer: (arg: any, arg1: any) => ({}),
    });
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: RendererFactory2, useFactory: rendererFactory2Stub },
      ],
    });
    service = TestBed.inject(ThemeService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
