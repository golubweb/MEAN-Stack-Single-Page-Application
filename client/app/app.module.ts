import 'rxjs/add/operator/map';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { TASKS_DIRECTIVES } from './components/tasks/tasks';
import { TIMER_DIRECTIVES } from './components/timer/timer';

import { SHARED_PROVIDERS, SHARED_PIPES } from './shared/shared';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerModule }      from './components/timer/timer.module';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TIMER_DIRECTIVES,
        TASKS_DIRECTIVES,
        SHARED_PIPES
    ],
    providers:    [ SHARED_PROVIDERS ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
