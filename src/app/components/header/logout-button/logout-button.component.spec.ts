import { LogoutButtonComponent } from './logout-button.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { AppZorroModule } from '../../../styles/app-zorro.module';

const sut = async () => {
  await render(LogoutButtonComponent, {
    declarations: [],
    imports: [AppZorroModule],
  });
};

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should create', () => {
    const element = screen.getByTestId('logout-button');
    expect(element).toBeTruthy();
  });

  it('should logout when logout button pressed', async () => {
    const logoutButton = screen.getByTestId('logout-button');
    fireEvent.click(logoutButton);
    const token = localStorage.getItem('token');
    expect(token).toBeNull();
  });
});
