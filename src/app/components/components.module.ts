import { CommonModule } from '@angular/common';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BadgeComponent } from './badge/badge.component';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  imports: [ShareButtonsModule, ShareIconsModule, CommonModule],
  declarations: [BadgeComponent, ProgressBarComponent, ShareButtonsComponent],
  exports: [
    BadgeComponent,
    ProgressBarComponent,
    ShareButtonsComponent,
    HeaderModule,
  ],
})
export class ComponentsModule {}
