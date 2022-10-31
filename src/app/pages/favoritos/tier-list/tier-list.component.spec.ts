import { FavoriteService } from './../../../services/favorite.service';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
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

const defaultLocalStorage: any = {
  s: [7, 2],
  a: [90, 88],
  b: [6],
  c: [4, 26],
  d: [12, 3],
  e: [9],
  f: [],
  none: [1, 8, 11, 13, 14, 15, 10, 30],
};

const sut = async () => {
  await render(TierListComponent, {
    componentProperties: {
      classes: defaultTest,
    },
    declarations: [],
    imports: [DragDropModule, HttpClientModule],
    providers: [FavoriteService],
  });
};

describe('TierListComponent', () => {
  beforeEach(async () => {
    await sut();
    localStorage.setItem('favoritos', JSON.stringify(defaultLocalStorage));
  });

  it('should create', async () => {
    const tierList = await screen.findByTestId('cont-component');
    expect(tierList).toBeTruthy();
  });

  it('should render a correct quantity of tiers', async () => {
    const tiers = screen.getAllByTestId('tier');
    expect(tiers).toHaveLength(defaultTest.length);
  });

  let index = 0;
  it.each(Object.keys(defaultLocalStorage).slice(0, -1))(
    'should render pokemons in tier %p',
    async (tier: any) => {
      const tiers = screen.getAllByTestId('tier');
      expect(tiers[index].childElementCount).toBeGreaterThan(0);
      index++;
    }
  );
});
