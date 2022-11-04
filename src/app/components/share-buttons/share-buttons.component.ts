import { Component, Input } from '@angular/core';

export interface ShareButtonsProps {
  shareList: string[];
}

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: [],
})
export class ShareButtonsComponent {
  @Input() shareList: string[] = [
    'copy',
    'facebook',
    'email',
    'messenger',
    'linkedin',
    'pinterest',
    'reddit',
    'telegram',
    'twitter',
    'whatsapp',
  ];
}
