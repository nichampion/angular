import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Liste } from './components/liste/liste';
import { Detail } from './components/detail/detail';
import { Auteur } from './components/auteur/auteur';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    Liste,
    Detail,
    Auteur
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
