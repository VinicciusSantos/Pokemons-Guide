import { LoginComponent } from './pages/login/login.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pages/home/home.module').then(x => x.HomeModule),
  },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
