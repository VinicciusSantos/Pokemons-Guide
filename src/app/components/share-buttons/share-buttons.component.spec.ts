import { render, screen } from '@testing-library/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import {
  ShareButtonsComponent,
  ShareButtonsProps,
} from './share-buttons.component';

const default_test: ShareButtonsProps = {
  shareList: ['copy', 'facebook', 'email', 'telegram', 'twitter', 'whatsapp'],
};

const sut = async (customProps?: ShareButtonsProps) => {
  await render(ShareButtonsComponent, {
    componentProperties: customProps || default_test,
    imports: [ComponentsModule],
  });
};

describe('ProgressBarComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', async () => {
    const element = screen.getByTestId('share-buttons');
    expect(element).toBeTruthy();
  });

  it('should render the correct quant of components', async () => {
    const element = document.querySelector('.sb-group');
    expect(element?.childElementCount).toBe(default_test.shareList.length);
  });
});
