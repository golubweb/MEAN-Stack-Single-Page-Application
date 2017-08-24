import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule }                    from '@angular/platform-browser';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SHARED_PROVIDERS, SHARED_PIPES } from './shared/shared';

import AppComponent          from './app.component';

import AppRoutingModule from './app-routing.module';
import PagesModule      from './components/pages/pages.module';
import PostsModule      from './components/blog/posts.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        PagesModule,
        PostsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        SHARED_PIPES
    ],
    providers:    [ SHARED_PROVIDERS ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})
export default class AppModule { }
