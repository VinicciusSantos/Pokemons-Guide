import { Pokemon } from './../../models/pokemon-id/pokemon';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ModalProps {
  isOpen: boolean;
  pokemon: Pokemon;
}

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

  isClosing = false;
  async changeModal() {
    this.isClosing = true;
    await new Promise(f => setTimeout(f, 500));
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
    this.isClosing = false;
  }
}
