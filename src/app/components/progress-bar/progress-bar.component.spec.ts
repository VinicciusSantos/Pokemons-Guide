import {
  ProgressBarComponent,
  ProgressBarComponentProps,
} from './progress-bar.component';
import { render, screen, fireEvent } from '@testing-library/angular';

const defaultTest: ProgressBarComponentProps = {
  title: 'teste',
  preenchido: 50,
  total: 100,
};

const sut = async (customProps?: ProgressBarComponentProps) => {
  await render(ProgressBarComponent, {
    componentProperties: customProps || defaultTest,
    declarations: [],
  });
};

describe('ProgressBarComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', async () => {
    const element = await screen.findByTestId('progress-bar');
    expect(element).toBeTruthy();
  });

  it('should render with a custom title', async () => {
    const title = screen.getAllByText(defaultTest.title);
    expect(title).toHaveLength(1);
  });

  it('should show filled points', async () => {
    const points = screen.getByText(defaultTest.preenchido);
    expect(points).toBe(`${defaultTest.preenchido} pts`);
  });
});
