import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

export const mainRoutes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pages/pokemons/pokemons.module').then(x => x.PokemonsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
