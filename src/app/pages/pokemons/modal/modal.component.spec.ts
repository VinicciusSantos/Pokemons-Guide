import { Router } from '@angular/router';
import { PokemonsService } from './../../../services/pokemons.service';
import { ModalComponent } from './modal.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';
import { homeRoutes } from '../pokemons.routing';

const sut = async () => {
  await render(ModalComponent, {
    componentProperties: {},
    declarations: [],
    providers: [PokemonsService],
    imports: [HttpClientModule],
    routes: homeRoutes,
  });
};

describe('ModalComponent', () => {
  beforeEach(async () => {
    await sut();
    await screen.findByTestId('modal');
  });

  it('should create', async () => {
    const modal = await screen.findByTestId('modal');
    expect(modal).toBeTruthy();
  });

  it('should close on clickaway', async () => {
    const modal = await screen.findByTestId('modal');
    console.log(modal);
    const back = screen.getByTestId('back');
    fireEvent.click(back);
    setTimeout(() => {
      expect(screen.queryByTestId('modal')).toBeNull();
    }, 500);
  });

  it('should close on click close button', async () => {
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);
    setTimeout(() => {
      expect(screen.queryByTestId('modal')).toBeNull();
    }, 500);
  });
});
