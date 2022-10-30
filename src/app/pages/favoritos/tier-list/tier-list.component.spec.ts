import { TierListComponent } from './tier-list.component';
import { render, screen, fireEvent } from '@testing-library/angular';

const sut = async () => {
  await render(TierListComponent, {
    componentProperties: {},
    declarations: [],
  });
};

describe('TierListComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', async () => {
    const tierList = await screen.findByTestId('tier-list');
    expect(tierList).toBeTruthy();
  });

  it('should render a correct quantity of tiers', async () => {
    const tiers = screen.getAllByTestId('tier');
    expect(tiers).toHaveLength(7);
  });
});
