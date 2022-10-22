import { ActivatedRoute } from '@angular/router';
import { types } from 'src/app/models/types';
import {
  Component,
  OnInit,
  Input,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';

export interface DropdownProps {
  title: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Dropdown';
  @Input() isOpen: boolean = false;
  @Output() typeChange = new EventEmitter();
  type: string = '';
  subscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  pokemonTypes: any[] = types;
  changeDropdown(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen === false) this.typeChange.emit(this.type);
  }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((queryParams: any) => {
      this.type = queryParams['type'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
