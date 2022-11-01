import { Component, Input, OnInit } from '@angular/core';

export interface BadgeComponentProps {
  key: string;
  value: string | any;
  background?: string;
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() key: string = '';
  @Input() value: string | any = '';
  @Input() background?: string;
}
