import { SettingsComponent } from './settings.component';
import { HttpClientModule } from '@angular/common/http';
import { render, screen, fireEvent } from '@testing-library/angular';

import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { AppZorroModule } from '../../../styles/app-zorro.module';

const sut = async () => {
  await render(SettingsComponent, {
    declarations: [ToggleThemeComponent],
    imports: [AppZorroModule, HttpClientModule],
  });
};

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', () => {
    const settings = screen.getByTestId('settings-container');
    expect(settings).toBeTruthy();
  });

  it('should render with modal closed', async () => {
    const modal = screen.queryByTestId('settings-dropdown');
    expect(modal).toBeFalsy();
  });
});
