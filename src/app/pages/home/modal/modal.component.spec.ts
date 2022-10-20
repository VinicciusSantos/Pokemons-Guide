import { Router } from '@angular/router';
import { PokemonsService } from './../../../services/pokemons.service';
import { ModalComponent } from './modal.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';
import { homeRoutes } from '../home.routing';

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
    const modal = screen.getByTestId('modal');
    expect(modal).toBeTruthy();
  });

  it('should close on clickaway', async () => {
    const back = screen.getByTestId('back');
    fireEvent.click(back);
    await sleep(500);
    expect(screen.queryByTestId('modal')).toBeNull();
  });

  it('should close on click close button', async () => {
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);
    await sleep(500);
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
