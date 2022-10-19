import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';
import { HeaderComponent } from './header.component';
import { render } from '@testing-library/angular';

const sut = async () => {
  await render(HeaderComponent, {
    componentProperties: {},
    declarations: [ToggleThemeComponent],
  });
};

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', () => {
    const header = document.getElementsByTagName('header');
    expect(header).toBeTruthy();
  });
});
