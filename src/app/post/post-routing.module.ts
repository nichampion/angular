import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Liste } from './components/liste/liste';
import { Detail } from './components/detail/detail';
import { Auteur } from './components/auteur/auteur';

const routes: Routes = [
  { path: 'posts', component: Liste },
  { path: 'posts/:id', component: Detail },
  { path: 'author/:id', component: Auteur },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
