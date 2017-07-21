import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';

import { Component, OnInit, HostBinding }   from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'pomodoro-timer',
    templateUrl: '/templates/timer.component.html'
})
export default class TimerComponent implements {};

/*
this.route.paramMap.switchMap((params: ParamMap) => {
    this.timerID = params.get('id');
});
*/
