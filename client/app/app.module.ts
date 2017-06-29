import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { TIMER_DIRECTIVES }   from './components/timer/timer';
import { TASKS_DIRECTIVES }   from './components/tasks/tasks';

import { SHARED_PROVIDERS, SHARED_PIPES } from './shared/shared';

import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule, RouterModule, FormsModule ],
    declarations: [
        AppComponent,
        TIMER_DIRECTIVES,
        TASKS_DIRECTIVES,
        SHARED_PIPES
    ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    providers:    [ SHARED_PROVIDERS ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
