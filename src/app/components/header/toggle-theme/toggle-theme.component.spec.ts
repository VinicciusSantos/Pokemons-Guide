import { ToggleThemeComponent } from './toggle-theme.component';
import { render, fireEvent, screen } from '@testing-library/angular';

const sut = async () => {
  await render(ToggleThemeComponent, {
    componentProperties: {},
    declarations: [],
  });
};

describe('ToggleThemeComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', () => {
    const element = screen.getByTestId('toggle-theme');
    expect(element).toBeTruthy();
  });

  it('should render with light-mode', async () => {
    const root = document.getElementsByTagName('body');
    expect(root[0]).toHaveClass('light-mode');
  });

  it('should change theme on click', async () => {
    const root = document.getElementsByTagName('body');
    const element = await screen.findByRole('button');
    fireEvent.click(element);
    expect(root[0]).toHaveClass('dark-mode');
  });

  it('should record theme in localStorage', async () => {
    const element = await screen.findByRole('button');
    fireEvent.click(element);
    setTimeout(() => {
      expect(localStorage.getItem('user-theme')).toEqual('dark-mode');
    }, 50);
  });
});
