import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import TimerComponent from './timer.component';
import TimerWidgetComponent from './timer-widget.component';

import { TimerRoutingModule } from './timer-routing.module';

@NgModule({
    imports:      [
        BrowserModule,
        CommonModule,
        TimerRoutingModule
    ],
    declarations: [ TimerComponent, TimerWidgetComponent ]
})
export class TimerModule { }
