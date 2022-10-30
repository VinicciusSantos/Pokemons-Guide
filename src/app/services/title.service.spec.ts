import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;

  beforeAll(() => {
    let favicon = document.createElement('a');
    favicon.setAttribute('id', 'appIcon');
    document.body.appendChild(favicon);
  });

  beforeEach(() => {
    const titleStub = () => ({ setTitle: (arg: any) => ({}) });
    TestBed.configureTestingModule({
      providers: [TitleService, { provide: Title, useFactory: titleStub }],
    });
    service = TestBed.inject(TitleService);
  });

  it('should load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should capitalize texts', async () => {
    const response = service.capitalizeTitle('tEste de caPitAlize');
    expect(response).toBe('Teste De Capitalize');
  });

  it('should change favicon with URL', async () => {
    const res = service.changeFaviconUrl(
      'https://i.pinimg.com/474x/59/50/b4/5950b4d9b80e08a8efe51c80cf28845d.jpg'
    );
    expect(res).toEqual(0);
  });

  it('should change favicon with a preset image if URL is null', async () => {
    const res = service.changeFaviconUrl(null);
    expect(res).toEqual(1);
  });

  it('should change favicon and title', async () => {
    expect(service.changeTitle('teste', 'pokeball.png')).toEqual(0);
  });

  it('should just change title', async () => {
    expect(service.changeTitle('teste')).toEqual(1);
  });
});
