import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerComponent } from './timer.component';
import { TimerWidgetComponent } from './timer-widget.component';

const timerRoutes: any[] = [
    { path: 'task',    component: TimerComponent, children: [
        { path: ':id', component: TimerWidgetComponent }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(
            timerRoutes,
            { enableTracing: true }
        )
    ],
    exports: [ RouterModule ]
})
export class TimerRoutingModule { }
