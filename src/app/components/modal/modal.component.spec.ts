import { defaultTest } from './../../models/pokemon-id/default-test';
import { ModalComponent, ModalProps } from './modal.component';
import { render, screen, fireEvent } from '@testing-library/angular';

const sut = async (customProps?: ModalProps) => {
  await render(ModalComponent, {
    componentProperties: customProps,
    declarations: [],
  });
};

describe('ModalComponent', () => {
  it('should create', async () => {
    await sut();
    const modal = screen.getByTestId('modal');
    expect(modal).toBeTruthy();
  });

  describe('with closed modal', () => {
    beforeEach(async () => {
      await sut({
        isOpen: false,
        pokemon: defaultTest,
      });
    });

    it('should not render because isVisible is false', async () => {
      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('modal-closed');
    });
  });

  describe('with open modal', () => {
    beforeEach(async () => {
      await sut({
        isOpen: true,
        pokemon: defaultTest,
      });
    });

    it('should not render because isVisible is true', async () => {
      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('modal-open');
    });

    it('should close on clickaway', async () => {
      const modal = screen.getByTestId('modal');
      const back = screen.getByTestId('back');
      fireEvent.click(back);
      await new Promise(f => setTimeout(f, 500));
      expect(modal).toHaveClass('modal-closed');
    });
  });
});
