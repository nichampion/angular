import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Liste } from './post/components/liste/liste';
import { Detail } from './post/components/detail/detail';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'posts', component: Liste },
  { path: 'posts/:id', component: Detail },
];

// TODO ajouetr la route dans le module post

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
