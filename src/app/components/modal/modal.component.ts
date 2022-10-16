import { Pokemon } from './../../models/pokemon-id/pokemon';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { delay } from 'rxjs';

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
  changeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.isOpen = !this.isOpen;
      this.isOpenChange.emit(this.isOpen);
      this.isClosing = false;
    }, 500);
  }
}
