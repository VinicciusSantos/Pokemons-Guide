import { Component, Input, OnInit } from '@angular/core';

export interface ProgressBarComponentProps {
  title: string;
  preenchido: number;
  total: number;
  backgroundImage?: string;
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() title: string = '';
  @Input() preenchido: number = 50;
  @Input() total: number = 100;
  @Input() backgroundImage?: string = '';

  completed: string = '0%';

  ngOnInit() {
    this.completed = Math.round((this.preenchido * 100) / this.total) + '%';
  }
}
