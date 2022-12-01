import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/sobre',
    loadChildren: () => import('./paginas/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'home/restaurantes',
    loadChildren: () => import('./paginas/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'home/PontosTuristicos',
    loadChildren: () => import('./paginas/pont-tur/pont-tur.module').then( m => m.PontTurPageModule)
  },
  {
    path: 'home/hoteis',
    loadChildren: () => import('./paginas/hoteis/hoteis.module').then( m => m.HoteisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
