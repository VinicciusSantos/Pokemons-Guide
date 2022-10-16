import { Pokemon } from './../../models/pokemon-id/pokemon';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() pokemon!: Pokemon;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  changeModal() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
