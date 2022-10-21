import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritosModule } from './pages/favoritos/favoritos.module';
import { LoginModule } from './pages/login/login.module';
import { AppZorroModule } from './app-zorro.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppZorroModule,
    LoginModule,
    FavoritosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
