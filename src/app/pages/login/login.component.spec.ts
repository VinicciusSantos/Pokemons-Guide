import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UntypedFormBuilder, FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { fireEvent, screen } from '@testing-library/dom';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    const titleServiceStub = () => ({
      changeTitle: (string: any, string1: any) => ({}),
    });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const authServiceStub = () => ({ fazLogin: (value: any) => ({}) });
    const untypedFormBuilderStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: TitleService, useFactory: titleServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: UntypedFormBuilder, useFactory: untypedFormBuilderStub },
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form on click button', async () => {
    const button = screen.getByTestId('submit-button');
    fireEvent.click(button);
    expect(button).toBeTruthy();
  });
});
