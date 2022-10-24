import { SearchbarComponent } from './searchbar.component';
import { PokemonsService } from './../../../services/pokemons.service';
import { render, screen, fireEvent } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';
import { homeRoutes } from '../pokemons.routing';

const sut = async () => {
  await render(SearchbarComponent, {
    componentProperties: {},
    declarations: [],
    providers: [PokemonsService],
    imports: [HttpClientModule],
    routes: homeRoutes,
  });
};

describe('SeachBarComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', async () => {
    const modal = screen.getByTestId('searchbar');
    expect(modal).toBeTruthy();
  });

  it('should render a search icon', async () => {
    const icon = screen.getByTestId('search icon');
    expect(icon).toBeTruthy();
  });

  it('should render a input bar', async () => {
    const searchBar = screen.getByTestId('searchInput');
    expect(searchBar).toBeTruthy();
  });

  it('should not open dropdown by default', async () => {
    const dropdown = screen.queryByTestId('dropdown');
    expect(dropdown).not.toBeInTheDocument();
  });
});
