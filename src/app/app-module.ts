import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Lib } from 'lib';
import { Dashboard } from './components/dashboard/dashboard';
import { Header } from './components/header/header';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './post/post-module';

@NgModule({
    declarations: [App],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Lib,
        HttpClientModule,
        PostModule,
        Dashboard,
        Header
    ],
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection()
    ],
    bootstrap: [App]
})
export class AppModule { }
