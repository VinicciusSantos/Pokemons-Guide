import { DropdownComponent, DropdownProps } from './dropdown.component';
import { render, fireEvent, screen } from '@testing-library/angular';

const defaultTest: DropdownProps = {
  title: 'dropdown',
  isOpen: false,
};

const sut = async () => {
  await render(DropdownComponent, {
    componentProperties: defaultTest,
    declarations: [],
  });
};

describe('DropdownComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', () => {
    const element = screen.getAllByTestId('dropdown-button');
    expect(element).toBeTruthy();
  });

  it('should render with custom name', async () => {
    const element = screen.getAllByText(defaultTest.title);
    expect(element).toHaveLength(1);
  });

  it('should render with an icon', async () => {
    const icon = screen.getAllByTestId('arrow-icon');
    expect(icon).toHaveLength(1);
  });

  it('should initialy be closed', async () => {
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('closed-dropdown');
  });

  it('should open on click', async () => {
    const button = screen.getByText(defaultTest.title);
    fireEvent.click(button);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('open-dropdown');
  });

  it('should close on click', async () => {
    const button = screen.getByText(defaultTest.title);
    fireEvent.click(button);
    fireEvent.click(button);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('closed-dropdown');
  });

  // it('should close on clickaway', async () => {
  //   const button = screen.getByText(defaultTest.title);
  //   fireEvent.click(button);
  //   const background = screen.getByTestId('background');
  //   fireEvent.click(background);
  //   const content = screen.getByTestId('content');
  //   expect(content).toHaveClass('closed-dropdown');
  // });
});
