import { Liste } from './components/liste/liste';
import { Detail } from './components/detail/detail';
import { Auteur } from './components/auteur/auteur';
import { Routes } from '@angular/router';

export const postRoutes: Routes = [
  { path: 'posts', component: Liste },
  { path: 'posts/:id', component: Detail },
  { path: 'author/:id', component: Auteur },
];