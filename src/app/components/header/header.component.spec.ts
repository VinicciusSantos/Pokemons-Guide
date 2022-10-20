import { HttpClientModule } from '@angular/common/http';
import { render, screen } from '@testing-library/angular';

import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { AppZorroModule } from './../../shared/app-zorro/app-zorro.module';
import { HeaderComponent, HeaderProps, page } from './header.component';

const sut = async (customProps: HeaderProps) => {
  await render(HeaderComponent, {
    componentProperties: customProps,
    declarations: [ToggleThemeComponent],
    imports: [AppZorroModule, HttpClientModule],
  });
};

const defaultTest: page[] = [
  {
    title: 'Route 1',
    route: '/route1',
    icon: 'home',
  },
  {
    title: 'Route 2',
    route: '/route2',
    icon: 'star',
  },
];

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await sut({
      pages: defaultTest,
      image:
        'https://www.pontoisp.com.br/wp-content/uploads/2018/04/brisanet.jpg',
    });
  });

  it('should create', () => {
    const header = document.getElementsByTagName('header');
    expect(header).toBeTruthy();
  });

  it('should render a image logo', async () => {
    const image = screen.findByAltText('logo');
    expect(image).toBeTruthy();
  });

  it('should render a navbar with links', async () => {
    expect(screen.getAllByTestId('page').length).toBe(defaultTest.length);
  });
});
