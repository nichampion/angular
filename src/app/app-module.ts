import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Lib } from 'lib';
import { Dashboard } from './components/dashboard/dashboard';
import { Header } from './components/header/header';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lib,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
