import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';

import { Component, OnInit, HostBinding }   from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'pomodoro-timer',
  template: '<h1>Kurac bre!!!!</h1>'
})
export default class TimerComponent implements OnInit {
    timerID: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.paramMap.switchMap((params: ParamMap) => {
            console.log(params.get('id'));

            this.timerID = params.get('id');
        });
    }

    gotoHeroes() {
        let timer_ID = this.timerID;

        this.router.navigate(['/task', { id: timer_ID, foo: 'foo' }]);
    }
}
