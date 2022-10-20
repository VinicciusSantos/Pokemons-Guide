import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ModalComponent } from './modal/modal.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: ':name', component: ModalComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
