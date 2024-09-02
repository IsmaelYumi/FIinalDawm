import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./loguin/loguin.routes').then( m => m.routes)
  },
  {
    path:'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then( m => m.routes)

  },  {
    path: 'product-description',
    loadComponent: () => import('./product-description/product-description.page').then( m => m.ProductDescriptionPage)
  }

  

];
