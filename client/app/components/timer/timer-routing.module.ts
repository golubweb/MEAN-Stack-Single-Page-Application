import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerComponent } from './timer.component';
import { TimerWidgetComponent } from './timer-widget.component';

const timerRoutes = [
    {
        path: 'timer',
        component: TimerComponent,
        children: [
            { path: 'widget/:id', component: TimerWidgetComponent }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(timerRoutes)],
    exports: [ RouterModule ]
})
export class TimerRoutingModule { }
