/// <reference types="@angular/localize" />

import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { Lib } from 'lib';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

bootstrapApplication(App, {
    providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
]
})
  .catch(err => console.error(err));
