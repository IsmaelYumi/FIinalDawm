import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'Loguin',
    loadComponent: () => import('./loguin/loguin.page').then( m => m.LoguinPage)
  },


];
