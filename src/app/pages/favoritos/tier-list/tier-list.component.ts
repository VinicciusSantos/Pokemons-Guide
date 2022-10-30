import { Component, OnInit, Input } from '@angular/core';
import { classe } from '../favoritos.component';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
  @Input() classes: classe[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.classes);
  }
}
