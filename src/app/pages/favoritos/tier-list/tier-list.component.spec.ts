import { TierListComponent } from './tier-list.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { classe } from '../favoritos.component';

const defaultTest: classe[] = [
  { name: 's', color: '#FF7F7F' },
  { name: 'a', color: '#FFBF7F' },
  { name: 'b', color: '#FFFF7F' },
  { name: 'c', color: '#7FFF7F' },
  { name: 'd', color: '#7FBFFF' },
  { name: 'e', color: '#7F7FFF' },
  { name: 'f', color: '#FF7FFF' },
];

const sut = async () => {
  await render(TierListComponent, {
    componentProperties: {
      classes: defaultTest,
    },
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
    expect(tiers).toHaveLength(defaultTest.length);
  });
});
