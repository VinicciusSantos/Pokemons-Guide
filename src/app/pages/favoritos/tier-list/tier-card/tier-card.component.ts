import { Pokemon } from 'src/app/models/pokemon';
import { Component, Input } from '@angular/core';

export interface TierCardProps {
  pokemon: Pokemon;
}

@Component({
  selector: 'app-tier-card',
  templateUrl: './tier-card.component.html',
  styleUrls: ['./tier-card.component.scss'],
})
export class TierCardComponent {
  @Input() pokemon!: Pokemon;
}
