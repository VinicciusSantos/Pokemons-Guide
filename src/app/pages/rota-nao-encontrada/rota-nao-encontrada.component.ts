import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rota-nao-encontrada',
  templateUrl: './rota-nao-encontrada.component.html',
  styleUrls: ['./rota-nao-encontrada.component.scss'],
})
export class RotaNaoEncontradaComponent implements OnInit {
  secondsUltilRedirect: number = 5;

  constructor(private _router: Router) {}

  deacreasesTime() {
    if (this.secondsUltilRedirect <= 0) {
      this._router.navigate(['']);
      return;
    }
    setTimeout(() => {
      this.secondsUltilRedirect--;
      this.deacreasesTime();
    }, 1000);
  }

  ngOnInit(): void {
    this.deacreasesTime();
    console.log(this.secondsUltilRedirect);
  }
}
