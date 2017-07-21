import 'rxjs/add/operator/map';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { TASKS_DIRECTIVES } from './components/tasks/tasks';
import { TIMER_DIRECTIVES } from './components/timer/timer';

import AuthEditor                         from './components/authorized/auth-editor.guard';
import { SHARED_PROVIDERS, SHARED_PIPES } from './shared/shared';

import AppComponent          from './app.component';
import LoginComponent        from './components/login/login.component';
import PageNotFoundComponent from './components/error/page-not-found.component';

import AppRoutingModule from './app-routing.module';
import TimerModule      from './components/timer/timer.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        TimerModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        TASKS_DIRECTIVES,
        SHARED_PIPES
    ],
    providers:    [ SHARED_PROVIDERS, AuthEditor ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})
export default class AppModule { }
