import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule }                    from '@angular/platform-browser';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TASKS_DIRECTIVES } from './components/tasks/tasks';

import { SHARED_PROVIDERS, SHARED_PIPES } from './shared/shared';

import AppComponent          from './app.component';
import LoginComponent        from './components/login/login.component';
import PageNotFoundComponent from './components/error/page-not-found.component';

import AppRoutingModule from './app-routing.module';
//import MeniusModule     from './components/layout/menius/menius.module';
import TimerModule      from './components/timer/timer.module';
import PagesModule      from './components/pages/pages.module';
import PostsModule      from './components/blog/posts.module';
//import LayoutModule     from './components/layout/layout.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        //MeniusModule,
        TimerModule,
        PagesModule,
        PostsModule,
        //LayoutModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        SHARED_PIPES,
        TASKS_DIRECTIVES
    ],
    providers:    [ SHARED_PROVIDERS ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})
export default class AppModule { }
