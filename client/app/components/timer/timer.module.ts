import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import TimerComponent from './timer.component';
import TimerWidgetComponent from './timer-widget.component';

import { TimerRoutingModule } from './timer-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TimerRoutingModule
    ],
    declarations: [ TimerComponent, TimerWidgetComponent ]
})
export class TimerModule { }
