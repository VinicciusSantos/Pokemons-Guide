import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private _title: Title) {}

  favIcon: any = document.getElementById('appIcon');
  changeTitle(newTitle: string, localPath?: string): void {
    this._title.setTitle(newTitle);
    if (localPath) this.favIcon.href = `../../assets/${localPath}`;
  }

  changeFaviconUrl(url: string) {
    this.favIcon.href = url;
  }
}
