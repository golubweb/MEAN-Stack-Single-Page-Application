import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import TimerComponent from './timer.component';
import TimerWidgetComponent from './timer-widget.component';

const TimerRoutesModule = [
    {
        path: 'timer',
        children: [
            { path: '',         component: TimerWidgetComponent },
            { path: 'task/:id', component: TimerWidgetComponent }
        ]
    }
];

@NgModule({
    imports:      [ CommonModule, RouterModule.forRoot(TimerRoutesModule) ],
    declarations: [ TimerComponent, TimerWidgetComponent ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ TimerComponent ]
})
export default class TimerModule { }
