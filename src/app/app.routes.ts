import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { startGuard } from './guards/start.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [startGuard],
    pathMatch: 'full',
    component: AuthComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'films',
    // canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/films-catalog/films-catalog.component').then(m => m.FilmsCatalogComponent)
  },
];
