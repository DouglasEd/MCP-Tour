import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontTurPage } from './pont-tur.page';

const routes: Routes = [
  {
    path: '',
    component: PontTurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontTurPageRoutingModule {}
