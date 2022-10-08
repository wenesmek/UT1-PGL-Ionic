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
    path: 'juguetes-nia',
    loadChildren: () => import('./juguetes-nia/juguetes-nia.module').then( m => m.JuguetesNiaPageModule)
  },
  {
    path: 'juegues-nia-form/:id',
    loadChildren: () => import('./juegues-nia-form/juegues-nia-form.module').then( m => m.JueguesNiaFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
