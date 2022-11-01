import { DragDropModule } from '@angular/cdk/drag-drop';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritosModule } from './pages/favoritos/favoritos.module';
import { LoginModule } from './pages/login/login.module';
import { RotaNaoEncontradaComponent } from './pages/rota-nao-encontrada/rota-nao-encontrada.component';
import { AppZorroModule } from './styles/app-zorro.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, RotaNaoEncontradaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppZorroModule,
    LoginModule,
    FavoritosModule,
    NgbModule,
    FormsModule,
    DragDropModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
