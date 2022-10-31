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
  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.changeTitle('Login', 'favicon.ico');
  }

  onSubmit(form: any) {
    let isLogged = this.authService.fazLogin(form.form.value);
    if (isLogged) {
      this.router.navigate(['/']);
    }
  }
}
