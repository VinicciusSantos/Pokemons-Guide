import { BadgeComponent, BadgeComponentProps } from './badge.component';
import { render, screen, fireEvent } from '@testing-library/angular';

const defaultTest: BadgeComponentProps = {
  key: 'teste',
  value: 'descricao',
};

const sut = async (customProps?: BadgeComponentProps) => {
  await render(BadgeComponent, {
    componentProperties: customProps || defaultTest,
  });
};

describe('ProgressBarComponent', () => {
  it('should create', async () => {
    await sut();
    const element = screen.getByTestId('badge-component');
    expect(element).toBeTruthy();
  });

  it('should render with person key', async () => {
    await sut();
    const key = screen.queryByText(defaultTest.key);
    expect(key).not.toBeNull();
  });

  it('should render with person value', async () => {
    await sut();
    const value = screen.queryByText(defaultTest.value);
    expect(value).not.toBeNull();
  });

  it('should not render background if it was not received', async () => {
    await sut();
    const background = screen.queryByTestId('background');
    expect(background).toBeNull();
  });

  it('should render background', async () => {
    await sut({
      key: 'teste',
      value: 'descricao',
      background: 'randomUrl',
    });
    const background = screen.queryByTestId('background');
    expect(background).not.toBeNull();
  });
});
