import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadComponent: () => import('./loguin/loguin.page').then( m => m.LoguinPage)
  },

];
