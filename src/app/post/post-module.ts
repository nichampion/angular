import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Liste } from './components/liste/liste';
import { Detail } from './components/detail/detail';
import { Auteur } from './components/auteur/auteur';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Liste,
    Detail,
    Auteur
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostModule { }
