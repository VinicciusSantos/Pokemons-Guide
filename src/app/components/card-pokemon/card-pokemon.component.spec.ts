import { ModalComponent } from './../modal/modal.component';
import { CardPokemonComponent } from './card-pokemon.component';
import { render, fireEvent, screen } from '@testing-library/angular';
import { defaultTest } from 'src/app/models/pokemon-id/default-test';

const sut = async () => {
  await render(CardPokemonComponent, {
    componentProperties: { pokemon: defaultTest },
    declarations: [ModalComponent],
  });
};

describe('CardPokemonComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', () => {
    const element = screen.findAllByTestId('container-pokemon');
    expect(element).toBeTruthy();
  });

  it('should not render modal on create', async () => {
    expect(screen.queryAllByTestId('modal')).toHaveLength(0);
  });

  it('should set modal open on click', async () => {
    const element = screen.getByTestId('container-pokemon');
    fireEvent.click(element);
    const modal = screen.findByTestId('modal');
    expect(modal).toBeTruthy();
  });

  it('should render name', async () => {
    const element = screen.getAllByText(defaultTest.name);
    expect(element).toBeTruthy();
  });

  it('should render photo', async () => {
    const element = screen.getAllByAltText(defaultTest.name);
    expect(element).toBeTruthy();
  });

  it('should render pokemon types image', async () => {
    const elements = screen.getAllByTestId('pokemon-type-image');
    expect(elements.length).toBe(defaultTest.types.length);
  });
});
