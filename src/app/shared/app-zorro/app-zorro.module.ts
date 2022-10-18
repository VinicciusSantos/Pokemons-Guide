import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  exports: [
    NzDividerModule,
    NzDropDownModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppZorroModule {}
