import { defaultTest } from 'src/app/models/defaultTest';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { render, screen } from '@testing-library/angular';
import { TierCardComponent, TierCardProps } from './tier-card.component';

const sut = async (customProps?: TierCardProps) => {
  await render(TierCardComponent, {
    componentProperties: customProps || {
      pokemon: defaultTest,
    },
    imports: [DragDropModule],
  });
};

describe('TierListComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', async () => {
    const element = screen.getByTestId('card-pokemon-tier');
    expect(element).toBeTruthy();
  });

  it('should have a title', async () => {
    const element = screen.getByTitle(defaultTest.name);
    expect(element).toBeTruthy();
  });

  it('should be a draggable element', async () => {
    const element = screen.getByTestId('card-pokemon-tier');
    expect(element).toHaveAttribute('cdkDrag');
  });
});
