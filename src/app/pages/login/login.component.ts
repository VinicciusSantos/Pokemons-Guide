import { TitleService } from 'src/app/services/title.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.changeTitle('Login', 'favicon.ico');
    this.loginForm = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    });
  }

  onSubmit() {
    let isLogged = this.authService.fazLogin(this.loginForm.value);
    if (isLogged) {
      this.router.navigate(['/']);
    }
  }
}
